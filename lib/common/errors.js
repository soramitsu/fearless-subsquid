"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnknownVersionError = void 0;
class UnknownVersionError extends Error {
    constructor(name) {
        super(`There is no relevant version for ${name}`);
    }
}
exports.UnknownVersionError = UnknownVersionError;
//# sourceMappingURL=errors.js.map