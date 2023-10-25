"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleNewRound = void 0;
const errors_1 = require("../../../common/errors");
const events_1 = require("../../../types/generated/events");
const model_1 = require("../../../model");
const storage_1 = __importDefault(require("../../../storage"));
const stakers_1 = require("../../util/stakers");
const entities_1 = require("../../util/entities");
const consts_1 = require("../../util/consts");
const actions_1 = require("../../util/actions");
function getEventData(ctx) {
    const event = new events_1.ParachainStakingNewRoundEvent(ctx);
    if (event.isV49) {
        const [startingBlock, round, selectedCollatorsNumber, totalBalance] = event.asV49;
        return { startingBlock, round, selectedCollatorsNumber, totalBalance };
    }
    else if (event.isV1300) {
        return event.asV1300;
    }
    throw new errors_1.UnknownVersionError(event.constructor.name);
}
// eslint-disable-next-line sonarjs/cognitive-complexity
async function handleNewRound(ctx) {
    const roundData = getEventData(ctx);
    const round = new model_1.Round({
        id: roundData.round.toString(),
        index: roundData.round,
        timestamp: new Date(ctx.block.timestamp),
        startedAt: ctx.block.height,
        collatorsCount: roundData.selectedCollatorsNumber,
        total: roundData.totalBalance,
    });
    await ctx.store.insert(round);
    const collatorIds = await storage_1.default.parachainStaking.getSelectedCandidates(ctx);
    if (!collatorIds)
        return;
    const prevCtx = (0, actions_1.createPrevStorageContext)(ctx);
    const collatorsData = await (0, stakers_1.getCollatorsData)(prevCtx, collatorIds);
    if (!collatorsData)
        return;
    const collators = new Map();
    const collatorStakers = new Map((await (0, entities_1.getOrCreateStakers)(ctx, collatorIds)).map((s) => [s.id, s]));
    const nominatorIds = new Array();
    const delegationsData = new Array();
    for (const collatorData of collatorsData) {
        if (!collatorData || collators.has(collatorData.id))
            continue;
        ctx.log.info("collatorsData");
        let totalBond = collatorData.bond;
        for (const nomination of collatorData.nominators) {
            ctx.log.info("collatorData.nominators");
            totalBond += nomination.amount;
            nominatorIds.push(nomination.id);
            delegationsData.push({ vote: nomination.amount, nominatorId: nomination.id, collatorId: collatorData.id });
        }
        const new_collator = await (0, entities_1.getOrCreateStaker)(ctx, collatorData.id);
        if (new_collator) {
            collators.set(collatorData.id, new model_1.RoundCollator({
                id: `${round.index}-${collatorData.id}`,
                round,
                staker: new_collator,
                ownBond: collatorData.bond,
                totalBond: totalBond,
                rewardAmount: consts_1.DefaultCollatorCommission,
                //nominatorsCount: collatorData.nominators.length,
            }));
        }
    }
    await ctx.store.save([...collators.values()]);
    const nominators = new Map();
    const nominatorStakers = new Map((await (0, entities_1.getOrCreateStakers)(ctx, nominatorIds)).map((s) => [s.id, s]));
    for (const nominatorId of nominatorIds) {
        const staker = nominatorStakers.get(nominatorId);
        ctx.log.info('staker');
        if (staker) {
            nominators.set(nominatorId, new model_1.RoundNominator({
                id: `${round.index}-${nominatorId}`,
                round,
                staker,
                bond: staker.activeBond,
                collatorsCount: 0
            }));
        }
    }
    await ctx.store.save([...nominators.values()]);
    const delegations = new Map();
    for (let i = 0; i < delegationsData.length; i++) {
        const collator = collators.get(delegationsData[i].collatorId);
        const nominator = nominators.get(delegationsData[i].nominatorId);
        if (collator != null && nominator != null) {
            delegations.set(`${round.index}-${collator.staker.id}-${nominator.staker.id}`, new model_1.RoundNomination({
                id: `${round.index}-${collator.staker.id}-${nominator.staker.id}`,
                round,
                collator,
                nominator,
                amount: delegationsData[i].vote,
            }));
        }
    }
    await ctx.store.save([...delegations.values()]);
}
exports.handleNewRound = handleNewRound;
//# sourceMappingURL=newRound.js.map