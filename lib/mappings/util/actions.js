"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPrevStorageContext = exports.getMeta = void 0;
function getMeta(data) {
    const { id, extrinsicHash, timestamp, blockNumber } = data;
    return {
        id,
        extrinsicHash,
        timestamp,
        blockNumber,
    };
}
exports.getMeta = getMeta;
function createPrevStorageContext(ctx) {
    return {
        _chain: ctx._chain,
        block: {
            ...ctx.block,
            hash: ctx.block.parentHash,
            height: ctx.block.height,
        },
    };
}
exports.createPrevStorageContext = createPrevStorageContext;
//# sourceMappingURL=actions.js.map