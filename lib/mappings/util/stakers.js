"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNominatorsData = exports.getCollatorsData = void 0;
const storage_1 = __importDefault(require("../../storage"));
// eslint-disable-next-line sonarjs/cognitive-complexity
async function getCollatorsData(ctx, accounts) {
    const candidateInfo = await storage_1.default.parachainStaking.getCandidateInfo(ctx, accounts);
    if (candidateInfo) {
        const bottomDelegations = await storage_1.default.parachainStaking.getBottomDelegations(ctx, accounts);
        const topDelegations = await storage_1.default.parachainStaking.getTopDelegations(ctx, accounts);
        return candidateInfo.map((d, i) => {
            if (!d)
                return undefined;
            const nominators = topDelegations?.[i]?.delegations
                ? topDelegations?.[i]?.delegations.concat(bottomDelegations?.[i]?.delegations || []) || []
                : [];
            return {
                id: d.id,
                bond: d.bond,
                nominators,
            };
        });
    }
    const candidateState = await storage_1.default.parachainStaking.getCandidateState(ctx, accounts);
    if (candidateState) {
        return candidateState.map((d) => {
            if (!d)
                return undefined;
            const nominators = d.topDelegations.concat(d.bottomDelegations);
            return {
                id: d.id,
                bond: d.bond,
                nominators,
            };
        });
    }
    const collatorState = await storage_1.default.parachainStaking.old.getCollatorState(ctx, accounts);
    if (collatorState) {
        return collatorState.map((d) => {
            if (!d)
                return undefined;
            const nominators = d.topNominators.concat(d.bottomNominators);
            return {
                id: d.id,
                bond: d.bond,
                nominators,
            };
        });
    }
    return undefined;
}
exports.getCollatorsData = getCollatorsData;
async function getNominatorsData(ctx, accounts) {
    const delegatorState = await storage_1.default.parachainStaking.getDelegatorState(ctx, accounts);
    if (!delegatorState) {
        const delegatorState = await storage_1.default.parachainStaking.old.getNominatorState(ctx, accounts);
        if (!delegatorState) {
            const delegatorState = await storage_1.default.parachainStaking.old.getNominatorState(ctx, accounts);
        }
    }
    return delegatorState;
}
exports.getNominatorsData = getNominatorsData;
//# sourceMappingURL=stakers.js.map