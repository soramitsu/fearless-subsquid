"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelectedCandidates = void 0;
const errors_1 = require("../../common/errors");
const tools_1 = require("../../common/tools");
const storage_1 = require("../../types/generated/storage");
async function getStorageData(ctx) {
    const storage = new storage_1.ParachainStakingSelectedCandidatesStorage(ctx);
    if (!storage.isExists)
        return undefined;
    if (storage.isV49) {
        return await storage.asV49.get();
    }
    else {
        throw new errors_1.UnknownVersionError(storage.constructor.name);
    }
}
async function getSelectedCandidates(ctx) {
    const data = await getStorageData(ctx);
    if (!data)
        return undefined;
    return data.map((id) => (0, tools_1.encodeId)(id));
}
exports.getSelectedCandidates = getSelectedCandidates;
//# sourceMappingURL=selectedCandidates.js.map