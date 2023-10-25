"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOriginAccountId = exports.encodeId = exports.decodeId = exports.saturatingSumBigInt = void 0;
const address_1 = require("@ethersproject/address");
const substrate_processor_1 = require("@subsquid/substrate-processor");
function saturatingSumBigInt(a, b, { max, min } = { max: null, min: 0n }) {
    const sum = BigInt(a) + BigInt(b);
    if (sum < min) {
        return min;
    }
    else if (max && sum > max) {
        return max;
    }
    else {
        return sum;
    }
}
exports.saturatingSumBigInt = saturatingSumBigInt;
function decodeId(id) {
    return Buffer.from(id.slice(2), 'hex');
}
exports.decodeId = decodeId;
function encodeId(id) {
    return (0, address_1.getAddress)((0, substrate_processor_1.toHex)(id));
}
exports.encodeId = encodeId;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getOriginAccountId(origin) {
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (origin.__kind) {
        case 'system':
            // eslint-disable-next-line sonarjs/no-nested-switch, sonarjs/no-small-switch
            switch (origin.value.__kind) {
                case 'Signed':
                    return encodeId((0, substrate_processor_1.decodeHex)(origin.value.value));
                default:
                    throw new Error(`Unknown origin type ${origin.__kind}.${origin.value.__kind}`);
            }
        default:
            throw new Error(`Unknown origin type ${origin.__kind}`);
    }
}
exports.getOriginAccountId = getOriginAccountId;
//# sourceMappingURL=tools.js.map