"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCandidateState = void 0;
const errors_1 = require("../../common/errors");
const tools_1 = require("../../common/tools");
const storage_1 = require("../../types/generated/storage");
async function getStorageData(ctx, accounts) {
    const storage = new storage_1.ParachainStakingCandidateStateStorage(ctx);
    if (!storage.isExists)
        return undefined;
    if (storage.isV1001) {
        return await storage.asV1001.getMany(accounts);
    }
    else {
        throw new errors_1.UnknownVersionError(storage.constructor.name);
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
            bond: d.bond,
            topDelegations: d.topDelegations.map((delegation) => ({
                id: (0, tools_1.encodeId)(delegation.owner),
                amount: delegation.amount,
            })),
            bottomDelegations: d.bottomDelegations.map((delegation) => ({
                id: (0, tools_1.encodeId)(delegation.owner),
                amount: delegation.amount,
            })),
        }
        : undefined);
}
async function getCandidateState(ctx, accountOrAccounts) {
    if (Array.isArray(accountOrAccounts)) {
        return await queryStorageFunction(ctx, accountOrAccounts);
    }
    else {
        return (await queryStorageFunction(ctx, [accountOrAccounts]))?.[0];
    }
}
exports.getCandidateState = getCandidateState;
//# sourceMappingURL=candidateState.js.map