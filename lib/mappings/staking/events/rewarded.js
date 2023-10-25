"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveReward = exports.handleRewarded = void 0;
const assert_1 = __importDefault(require("assert"));
const errors_1 = require("../../../common/errors");
const tools_1 = require("../../../common/tools");
const model_1 = require("../../../model");
const events_1 = require("../../../types/generated/events");
const actions_1 = require("../../util/actions");
const consts_1 = require("../../util/consts");
const entities_1 = require("../../util/entities");
function getEventData(ctx) {
    const event = new events_1.ParachainStakingRewardedEvent(ctx);
    if (event.isV49) {
        const [account, amount] = event.asV49;
        return {
            account,
            amount,
        };
    }
    else if (event.isV1300) {
        const { account, rewards: amount } = event.asV1300;
        return {
            account,
            amount,
        };
    }
    else {
        throw new errors_1.UnknownVersionError(event.constructor.name);
    }
}
async function handleRewarded(ctx) {
    const data = getEventData(ctx);
    await saveReward(ctx, {
        id: ctx.event.id,
        blockNumber: ctx.block.height,
        timestamp: new Date(ctx.block.timestamp),
        extrinsicHash: ctx.event.extrinsic?.hash,
        accountId: (0, tools_1.encodeId)(data.account),
        amount: data.amount,
    });
}
exports.handleRewarded = handleRewarded;
async function saveReward(ctx, data) {
    const staker = await (0, entities_1.getOrCreateStaker)(ctx, data.accountId);
    if (staker != null && staker?.role === 'delegator') {
        const round = await ctx.store.get(model_1.Round, { where: {}, order: { index: 'DESC' } });
        (0, assert_1.default)(round != null);
        const rewRound = await ctx.store.get(model_1.Round, { where: { index: round.index - 2 } });
        (0, assert_1.default)(rewRound != null);
        const delegator = await ctx.store.get(model_1.Delegator, { where: { id: data.accountId } });
        const delStaker = await ctx.store.get(model_1.Staker, { where: { id: data.accountId } });
        await ctx.store.insert(new model_1.Reward({
            ...(0, actions_1.getMeta)(data),
            account: staker.stash,
            amount: data.amount,
            round: Math.min((round?.index || 0) - consts_1.RewardPaymentDelay, 0),
            staker: delStaker,
        }));
        await ctx.store.insert(new model_1.HistoryElement({
            id: data.id,
            blockNumber: ctx.block.height,
            timestamp: new Date(ctx.block.timestamp),
            type: 2,
            round: rewRound,
            amount: data.amount,
            staker: delStaker,
            delegator: delegator,
        }));
    }
    if (staker != null && staker?.role === 'collator') {
        staker.totalReward += data.amount;
        await ctx.store.save(staker);
        const round = await ctx.store.get(model_1.Round, { where: {}, order: { index: 'DESC' } });
        (0, assert_1.default)(round != null);
        const collatorRound = await ctx.store.get(model_1.RoundCollator, {
            where: { id: `${round.index - 2}-${staker.stashId}` },
        });
        const collator = await ctx.store.get(model_1.Collator, { where: { id: staker.stashId } });
        if (collatorRound != null) {
            if (collatorRound.ownBond && collatorRound.totalBond != null && collatorRound.totalBond > 0) {
                const colStakeShare = collatorRound.ownBond / collatorRound.totalBond;
                const amountDue = Number(data.amount) / (0.2 + 0.5 * Number(colStakeShare));
                const colRew = 0.2 * amountDue + 0.5 * amountDue * Number(colStakeShare);
                const colAnnualRew = colRew * Number(1460);
                collatorRound.apr = colAnnualRew / Number(collatorRound.ownBond);
                collatorRound.round = round;
                await ctx.store.save(collatorRound);
                const collatorLastRound = await ctx.store.get(model_1.RoundCollator, {
                    where: { id: `${round.index - 6}-${staker.stashId}` },
                });
                if (collatorLastRound) {
                    const lastApr = collatorLastRound.apr || 0;
                    if (lastApr > 0) {
                        const Apr = staker.apr24h || 0;
                        const avgApr = Apr * 4;
                        if (avgApr > 0) {
                            staker.apr24h = (avgApr - lastApr + collatorRound.apr) / 4;
                        }
                        else {
                            const collatorLastRound3 = await ctx.store.get(model_1.RoundCollator, {
                                where: { id: `${round.index - 5}-${staker.stashId}` },
                            });
                            const collatorLastRound3Apr = collatorLastRound3?.apr || 0;
                            const collatorLastRound2 = await ctx.store.get(model_1.RoundCollator, {
                                where: { id: `${round.index - 4}-${staker.stashId}` },
                            });
                            const collatorLastRound2Apr = collatorLastRound2?.apr || 0;
                            const collatorLastRound1 = await ctx.store.get(model_1.RoundCollator, {
                                where: { id: `${round.index - 3}-${staker.stashId}` },
                            });
                            const collatorLastRound1Apr = collatorLastRound1?.apr || 0;
                            const eqapr = (collatorLastRound3Apr +
                                collatorLastRound2Apr +
                                collatorLastRound1Apr +
                                collatorRound.apr) /
                                4;
                            staker.apr24h =
                                (collatorLastRound3Apr +
                                    collatorLastRound2Apr +
                                    collatorLastRound1Apr +
                                    collatorRound.apr) /
                                    4;
                            await ctx.store.save(staker);
                            if (collator) {
                                collator.apr24h =
                                    (collatorLastRound3Apr +
                                        collatorLastRound2Apr +
                                        collatorLastRound1Apr +
                                        collatorRound.apr) /
                                        4;
                                await ctx.store.save(collator);
                            }
                        }
                    }
                    else {
                        staker.apr24h = collatorRound.apr / 4;
                        await ctx.store.save(staker);
                        if (collator) {
                            collator.apr24h = collatorRound.apr / 4;
                            await ctx.store.save(collator);
                        }
                    }
                }
                else {
                    staker.apr24h = collatorRound.apr / 4;
                    await ctx.store.save(staker);
                    if (collator) {
                        collator.apr24h = collatorRound.apr / 4;
                        await ctx.store.save(collator);
                    }
                }
            }
            await ctx.store.insert(new model_1.Reward({
                ...(0, actions_1.getMeta)(data),
                account: staker.stash,
                amount: data.amount,
                round: Math.min((round?.index || 0) - consts_1.RewardPaymentDelay, 0),
                staker,
            }));
            if (collator) {
                await ctx.store.insert(new model_1.HistoryElement({
                    id: data.id,
                    blockNumber: ctx.block.height,
                    timestamp: new Date(ctx.block.timestamp),
                    type: 2,
                    round: round,
                    amount: data.amount,
                    staker: staker,
                    collator: collator,
                }));
            }
            else {
                await ctx.store.insert(new model_1.HistoryElement({
                    id: data.id,
                    blockNumber: ctx.block.height,
                    timestamp: new Date(ctx.block.timestamp),
                    type: 2,
                    round: round,
                    amount: data.amount,
                    staker: staker,
                }));
            }
        }
        else {
            const delegator = await ctx.store.get(model_1.Delegator, { where: { id: data.accountId } });
            await ctx.store.insert(new model_1.Reward({
                ...(0, actions_1.getMeta)(data),
                account: staker.stash,
                amount: data.amount,
                round: Math.min((round?.index || 0) - consts_1.RewardPaymentDelay, 0),
                staker,
            }));
            await ctx.store.insert(new model_1.HistoryElement({
                id: data.id,
                blockNumber: ctx.block.height,
                timestamp: new Date(ctx.block.timestamp),
                type: 2,
                round: round,
                amount: data.amount,
                staker: staker,
                delegator: delegator,
            }));
        }
    }
}
exports.saveReward = saveReward;
//# sourceMappingURL=rewarded.js.map