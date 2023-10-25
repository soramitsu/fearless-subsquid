"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNominatorState = void 0;
const tools_1 = require("../../../common/tools");
const storage_1 = require("../../../types/generated/storage");
async function getStorageData(ctx, accounts) {
    const storage = new storage_1.ParachainStakingNominatorStateStorage(ctx);
    if (storage.isV49) {
        return await storage.asV49.getMany(accounts);
    }
    else {
        const storage = new storage_1.ParachainStakingNominatorState2Storage(ctx);
        if (storage.isV200) {
            return await storage.asV200.getMany(accounts);
        }
        else {
            return undefined;
        }
    }
}
async function queryStorageFunction(ctx, accounts) {
    if (accounts.length === 0)
        return [];
    const u8 = accounts.map((a) => (0, tools_1.decodeId)(a));
    const data = await getStorageData(ctx, u8);
    if (!data)
        return undefined;
    return data.map((d, i) => d != null
        ? {
            id: accounts[i],
            bond: d.total,
            nominations: d.nominations.map((nomination) => ({
                id: (0, tools_1.encodeId)(nomination.owner),
                amount: nomination.amount,
            })),
        }
        : undefined);
}
async function getNominatorState(ctx, accountOrAccounts) {
    if (Array.isArray(accountOrAccounts)) {
        return await queryStorageFunction(ctx, accountOrAccounts);
    }
    else {
        return (await queryStorageFunction(ctx, [accountOrAccounts]))?.[0];
    }
}
exports.getNominatorState = getNominatorState;
//# sourceMappingURL=nominatorState.js.map