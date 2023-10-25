"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParachainStakingTopDelegationsStorage = exports.ParachainStakingSelectedCandidatesStorage = exports.ParachainStakingNominatorState2Storage = exports.ParachainStakingNominatorStateStorage = exports.ParachainStakingDelegatorStateStorage = exports.ParachainStakingCollatorState2Storage = exports.ParachainStakingCandidateStateStorage = exports.ParachainStakingCandidateInfoStorage = exports.ParachainStakingBottomDelegationsStorage = void 0;
const assert_1 = __importDefault(require("assert"));
const support_1 = require("./support");
class ParachainStakingBottomDelegationsStorage extends support_1.StorageBase {
    getPrefix() {
        return 'ParachainStaking';
    }
    getName() {
        return 'BottomDelegations';
    }
    /**
     *  Bottom delegations for collator candidate
     */
    get isV1201() {
        return this.getTypeHash() === 'e681b7cbb9992622456e4ee66d20daa7968a64b6a52ef599f5992850855cc3ee';
    }
    /**
     *  Bottom delegations for collator candidate
     */
    get asV1201() {
        (0, assert_1.default)(this.isV1201);
        return this;
    }
}
exports.ParachainStakingBottomDelegationsStorage = ParachainStakingBottomDelegationsStorage;
class ParachainStakingCandidateInfoStorage extends support_1.StorageBase {
    getPrefix() {
        return 'ParachainStaking';
    }
    getName() {
        return 'CandidateInfo';
    }
    /**
     *  Get collator candidate info associated with an account if account is candidate else None
     */
    get isV1201() {
        return this.getTypeHash() === '248231639cd86f1a3ffea0da2b9ed3fc64e1b7784d3759f68d733ac1ef08db19';
    }
    /**
     *  Get collator candidate info associated with an account if account is candidate else None
     */
    get asV1201() {
        (0, assert_1.default)(this.isV1201);
        return this;
    }
}
exports.ParachainStakingCandidateInfoStorage = ParachainStakingCandidateInfoStorage;
class ParachainStakingCandidateStateStorage extends support_1.StorageBase {
    getPrefix() {
        return 'ParachainStaking';
    }
    getName() {
        return 'CandidateState';
    }
    /**
     *  Get collator candidate state associated with an account if account is a candidate else None
     */
    get isV1001() {
        return this.getTypeHash() === '84ab01b9f5d971571bb4cd8288174dc552c917250ba2c5256263959a40438f09';
    }
    /**
     *  Get collator candidate state associated with an account if account is a candidate else None
     */
    get asV1001() {
        (0, assert_1.default)(this.isV1001);
        return this;
    }
}
exports.ParachainStakingCandidateStateStorage = ParachainStakingCandidateStateStorage;
class ParachainStakingCollatorState2Storage extends support_1.StorageBase {
    getPrefix() {
        return 'ParachainStaking';
    }
    getName() {
        return 'CollatorState2';
    }
    /**
     *  Get collator state associated with an account if account is collating else None
     */
    get isV53() {
        return this.getTypeHash() === 'a4d9c3541b410bd0ebf9e6919cad26ad7aa3481dd09c1495650af46ea30787a9';
    }
    /**
     *  Get collator state associated with an account if account is collating else None
     */
    get asV53() {
        (0, assert_1.default)(this.isV53);
        return this;
    }
}
exports.ParachainStakingCollatorState2Storage = ParachainStakingCollatorState2Storage;
class ParachainStakingDelegatorStateStorage extends support_1.StorageBase {
    getPrefix() {
        return 'ParachainStaking';
    }
    getName() {
        return 'DelegatorState';
    }
    /**
     *  Get delegator state associated with an account if account is delegating else None
     */
    get isV1001() {
        return this.getTypeHash() === '03dfb3b8e1ca16deb35d7040cc81f72b135e75c4caeea578cfc2294e1f1f41ad';
    }
    /**
     *  Get delegator state associated with an account if account is delegating else None
     */
    get asV1001() {
        (0, assert_1.default)(this.isV1001);
        return this;
    }
    /**
     *  Get delegator state associated with an account if account is delegating else None
     */
    get isV1502() {
        return this.getTypeHash() === '637263cfee3190d24faafd4e41f925a782ec1a9b5d80de08bd6ae287d0f0a10a';
    }
    /**
     *  Get delegator state associated with an account if account is delegating else None
     */
    get asV1502() {
        (0, assert_1.default)(this.isV1502);
        return this;
    }
}
exports.ParachainStakingDelegatorStateStorage = ParachainStakingDelegatorStateStorage;
class ParachainStakingNominatorStateStorage extends support_1.StorageBase {
    getPrefix() {
        return 'ParachainStaking';
    }
    getName() {
        return 'NominatorState';
    }
    /**
     *  Get nominator state associated with an account if account is nominating else None
     */
    get isV49() {
        return this.getTypeHash() === 'f801fe87581f7dbb6db044ddd5a7adbe0d0ea1596ad42a8ccd22aa28f6be3e8f';
    }
    /**
     *  Get nominator state associated with an account if account is nominating else None
     */
    get asV49() {
        (0, assert_1.default)(this.isV49);
        return this;
    }
}
exports.ParachainStakingNominatorStateStorage = ParachainStakingNominatorStateStorage;
class ParachainStakingNominatorState2Storage extends support_1.StorageBase {
    getPrefix() {
        return 'ParachainStaking';
    }
    getName() {
        return 'NominatorState2';
    }
    /**
     *  Get nominator state associated with an account if account is nominating else None
     */
    get isV200() {
        return this.getTypeHash() === 'adc9b2765bcd5aa9c2ac9f93cd108b87d508a8d5494c318bf18ee6f4b599b8ed';
    }
    /**
     *  Get nominator state associated with an account if account is nominating else None
     */
    get asV200() {
        (0, assert_1.default)(this.isV200);
        return this;
    }
    /**
     *  DEPRECATED in favor of DelegatorState
     *  Get nominator state associated with an account if account is nominating else None
     */
    get isV1001() {
        return this.getTypeHash() === 'c33bf4fdf125c8070ffd27253f9a811a9a2b244a0af652bf531999872325e904';
    }
    /**
     *  DEPRECATED in favor of DelegatorState
     *  Get nominator state associated with an account if account is nominating else None
     */
    get asV1001() {
        (0, assert_1.default)(this.isV1001);
        return this;
    }
}
exports.ParachainStakingNominatorState2Storage = ParachainStakingNominatorState2Storage;
class ParachainStakingSelectedCandidatesStorage extends support_1.StorageBase {
    getPrefix() {
        return 'ParachainStaking';
    }
    getName() {
        return 'SelectedCandidates';
    }
    /**
     *  The collator candidates selected for the current round
     */
    get isV49() {
        return this.getTypeHash() === 'd14508def9da76532021b53d553e9048fd079e2e735d2393e6d531e6d1fd29ca';
    }
    /**
     *  The collator candidates selected for the current round
     */
    get asV49() {
        (0, assert_1.default)(this.isV49);
        return this;
    }
}
exports.ParachainStakingSelectedCandidatesStorage = ParachainStakingSelectedCandidatesStorage;
class ParachainStakingTopDelegationsStorage extends support_1.StorageBase {
    getPrefix() {
        return 'ParachainStaking';
    }
    getName() {
        return 'TopDelegations';
    }
    /**
     *  Top delegations for collator candidate
     */
    get isV1201() {
        return this.getTypeHash() === 'e681b7cbb9992622456e4ee66d20daa7968a64b6a52ef599f5992850855cc3ee';
    }
    /**
     *  Top delegations for collator candidate
     */
    get asV1201() {
        (0, assert_1.default)(this.isV1201);
        return this;
    }
}
exports.ParachainStakingTopDelegationsStorage = ParachainStakingTopDelegationsStorage;
//# sourceMappingURL=storage.js.map