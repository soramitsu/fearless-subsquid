"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStaker = exports.getOrCreateStakers = exports.getOrCreateStaker = exports.getOrCreateAccounts = exports.getOrCreateAccount = void 0;
const model_1 = require("../../model");
const actions_1 = require("./actions");
const typeorm_1 = require("typeorm");
const stakers_1 = require("./stakers");
const consts_1 = require("./consts");
const typeorm_2 = require("typeorm");
async function getOrCreateAccount(ctx, id) {
    let account = await ctx.store.get(model_1.Account, id);
    if (!account) {
        account = new model_1.Account({
            id,
            lastUpdateBlock: ctx.block.height - 1,
        });
        await ctx.store.insert(account);
    }
    return account;
}
exports.getOrCreateAccount = getOrCreateAccount;
async function getOrCreateAccounts(ctx, ids) {
    const query = await ctx.store.findBy(model_1.Account, { id: (0, typeorm_2.ArrayContains)(ids) });
    const accountsMap = new Map();
    for (const q of query)
        accountsMap.set(q.id, q);
    const newAccounts = new Set();
    for (const id of ids) {
        if (accountsMap.has(id))
            continue;
        const account = new model_1.Account({
            id,
            lastUpdateBlock: ctx.block.height - 1,
        });
        newAccounts.add(account);
    }
    if (newAccounts.size > 0)
        await ctx.store.save([...newAccounts]);
    return [...accountsMap.values(), ...newAccounts];
}
exports.getOrCreateAccounts = getOrCreateAccounts;
async function getOrCreateStaker(ctx, id) {
    let staker = await ctx.store.get(model_1.Staker, {
        where: { stashId: id },
        relations: { stash: true },
    });
    if (!staker) {
        const prevCtx = (0, actions_1.createPrevStorageContext)(ctx);
        const collatorData = (await (0, stakers_1.getCollatorsData)(prevCtx, [id]))?.[0];
        if (collatorData != null) {
            staker = await createStaker(ctx, {
                stashId: id,
                activeBond: collatorData.bond,
                role: 'collator',
            });
        }
        const nominatorData = (await (0, stakers_1.getNominatorsData)(prevCtx, [id]));
        const data = nominatorData?.[0];
        if (data != null) {
            staker = await createStaker(ctx, {
                stashId: id,
                activeBond: data.bond,
                role: 'delegator',
            });
        }
        if (collatorData == null && nominatorData == null) {
            return undefined;
        }
    }
    return staker;
}
exports.getOrCreateStaker = getOrCreateStaker;
// eslint-disable-next-line sonarjs/cognitive-complexity
async function getOrCreateStakers(ctx, ids) {
    const query = await ctx.store.find(model_1.Staker, {
        where: { stashId: (0, typeorm_1.In)(ids) },
        relations: { stash: true },
    });
    const stakersMap = new Map();
    for (const q of query)
        stakersMap.set(q.stashId, q);
    const missingIds = ids.filter((id) => !stakersMap.has(id));
    // const newStakers: Set<Staker> = new Set()
    if (missingIds.length === 0)
        return [...stakersMap.values()];
    const prevCtx = (0, actions_1.createPrevStorageContext)(ctx);
    const collatorsData = await (0, stakers_1.getCollatorsData)(prevCtx, missingIds);
    // if (!collatorsData && !nominatorsData) return [...stakersMap.values()]
    const newStakers = new Map();
    if (collatorsData) {
        for (const collatorData of collatorsData) {
            if (!collatorData)
                continue;
            const stashId = collatorData.id;
            const staker = await createStaker(ctx, {
                stashId,
                activeBond: collatorData.bond,
                commission: consts_1.DefaultCollatorCommission,
                role: 'collator',
            });
            newStakers.set(stashId, staker);
        }
    }
    const notCollatorIds = missingIds.filter((id, i) => collatorsData?.[i] == null);
    const nominatorsData = await (0, stakers_1.getNominatorsData)(prevCtx, notCollatorIds);
    if (nominatorsData) {
        for (const nominatorData of nominatorsData) {
            if (!nominatorData)
                continue;
            const stashId = nominatorData.id;
            const staker = await createStaker(ctx, {
                stashId,
                activeBond: nominatorData.bond,
                role: 'delegator',
            });
            newStakers.set(stashId, staker);
        }
    }
    return [...stakersMap.values(), ...newStakers.values()];
}
exports.getOrCreateStakers = getOrCreateStakers;
async function createStaker(ctx, data) {
    const stash = await getOrCreateAccount(ctx, data.stashId);
    const staker = new model_1.Staker({
        id: data.stashId,
        stash,
        role: data.role,
        activeBond: data.activeBond || 0n,
        totalReward: 0n,
        commission: data.commission || consts_1.DefaultCollatorCommission,
    });
    await ctx.store.save(staker);
    if (data.role === 'collator') {
        const collator = new model_1.Collator({ id: data.stashId });
        await ctx.store.save(collator);
    }
    if (data.role === 'delegator') {
        const delegator = new model_1.Delegator({ id: data.stashId });
        await ctx.store.save(delegator);
    }
    return staker;
}
exports.createStaker = createStaker;
//# sourceMappingURL=entities.js.map