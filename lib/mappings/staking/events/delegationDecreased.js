"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDelegationDecreased = void 0;
const errors_1 = require("../../../common/errors");
const tools_1 = require("../../../common/tools");
const model_1 = require("../../../model");
const events_1 = require("../../../types/generated/events");
const entities_1 = require("../../util/entities");
function getEventData(ctx) {
    const event = new events_1.ParachainStakingDelegationDecreasedEvent(ctx);
    if (event.isV1001) {
        const [account, candidate, amount] = event.asV1001;
        return {
            account,
            amount,
            candidate,
        };
    }
    else if (event.isV1300) {
        const { delegator: account, amount: amount, candidate } = event.asV1300;
        return {
            account,
            amount,
            candidate,
        };
    }
    throw new errors_1.UnknownVersionError(event.constructor.name);
}
async function handleDelegationDecreased(ctx) {
    const data = getEventData(ctx);
    const accountId = (0, tools_1.encodeId)(data.account);
    const round = await ctx.store.get(model_1.Round, { where: {}, order: { index: 'DESC' } });
    const staker = await (0, entities_1.getOrCreateStaker)(ctx, accountId);
    if (!staker) {
        await (0, entities_1.createStaker)(ctx, {
            stashId: accountId,
            activeBond: 0n,
            role: 'delegator'
        });
    }
    const delegator = await ctx.store.get(model_1.Delegator, { where: { id: accountId } });
    await ctx.store.insert(new model_1.HistoryElement({
        id: ctx.event.id,
        blockNumber: ctx.block.height,
        timestamp: new Date(ctx.block.timestamp),
        type: 1,
        round: round,
        amount: data.amount,
        staker: staker,
        delegator: delegator
    }));
    if (round && staker) {
        const collatorRound = await ctx.store.get(model_1.RoundCollator, { where: { id: `${round?.index}-${staker?.stashId}` } });
        if (collatorRound) {
            collatorRound.totalBond = collatorRound.totalBond - data.amount;
            collatorRound.round = round;
            await ctx.store.save(collatorRound);
        }
    }
}
exports.handleDelegationDecreased = handleDelegationDecreased;
//# sourceMappingURL=delegationDecreased.js.map