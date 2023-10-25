"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParachainStakingRewardedEvent = exports.ParachainStakingNominatorLeftCollatorEvent = exports.ParachainStakingNominatorLeftEvent = exports.ParachainStakingNominationIncreasedEvent = exports.ParachainStakingNominationDecreasedEvent = exports.ParachainStakingNominationEvent = exports.ParachainStakingNewRoundEvent = exports.ParachainStakingJoinedCollatorCandidatesEvent = exports.ParachainStakingDelegatorLeftCandidateEvent = exports.ParachainStakingDelegatorLeftEvent = exports.ParachainStakingDelegationRevokedEvent = exports.ParachainStakingDelegationIncreasedEvent = exports.ParachainStakingDelegationDecreasedEvent = exports.ParachainStakingDelegationEvent = exports.ParachainStakingCollatorLeftEvent = exports.ParachainStakingCollatorBondedMoreEvent = exports.ParachainStakingCollatorBondedLessEvent = exports.ParachainStakingCandidateLeftEvent = exports.ParachainStakingCandidateBondedMoreEvent = exports.ParachainStakingCandidateBondedLessEvent = exports.BalancesTransferEvent = void 0;
const assert_1 = __importDefault(require("assert"));
class BalancesTransferEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'Balances.Transfer');
        this._chain = ctx._chain;
        this.event = event;
    }
    /**
     *  Transfer succeeded. \[from, to, value\]
     */
    get isV49() {
        return this._chain.getEventHash('Balances.Transfer') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841';
    }
    /**
     *  Transfer succeeded. \[from, to, value\]
     */
    get asV49() {
        (0, assert_1.default)(this.isV49);
        return this._chain.decodeEvent(this.event);
    }
    /**
     * Transfer succeeded.
     */
    get isV1201() {
        return this._chain.getEventHash('Balances.Transfer') === '23222c59f2992c12387568241620899d2d399ab9027595daca8255637f62ece3';
    }
    /**
     * Transfer succeeded.
     */
    get asV1201() {
        (0, assert_1.default)(this.isV1201);
        return this._chain.decodeEvent(this.event);
    }
}
exports.BalancesTransferEvent = BalancesTransferEvent;
class ParachainStakingCandidateBondedLessEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.CandidateBondedLess');
        this._chain = ctx._chain;
        this.event = event;
    }
    /**
     * Candidate, Amount, New Bond
     */
    get isV1001() {
        return this._chain.getEventHash('ParachainStaking.CandidateBondedLess') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc';
    }
    /**
     * Candidate, Amount, New Bond
     */
    get asV1001() {
        (0, assert_1.default)(this.isV1001);
        return this._chain.decodeEvent(this.event);
    }
    /**
     * Сandidate has decreased a self bond.
     */
    get isV1300() {
        return this._chain.getEventHash('ParachainStaking.CandidateBondedLess') === '03199d60c293c383f981694ba4310b187ed4a6b79fcc52e6fbccc691153b8f28';
    }
    /**
     * Сandidate has decreased a self bond.
     */
    get asV1300() {
        (0, assert_1.default)(this.isV1300);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingCandidateBondedLessEvent = ParachainStakingCandidateBondedLessEvent;
class ParachainStakingCandidateBondedMoreEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.CandidateBondedMore');
        this._chain = ctx._chain;
        this.event = event;
    }
    /**
     * Candidate, Amount, New Bond Total
     */
    get isV1001() {
        return this._chain.getEventHash('ParachainStaking.CandidateBondedMore') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc';
    }
    /**
     * Candidate, Amount, New Bond Total
     */
    get asV1001() {
        (0, assert_1.default)(this.isV1001);
        return this._chain.decodeEvent(this.event);
    }
    /**
     * Сandidate has increased a self bond.
     */
    get isV1300() {
        return this._chain.getEventHash('ParachainStaking.CandidateBondedMore') === 'd6e6bcd7c6de9403e85285e3685e6774d7d1d129d84c7cfe9a4806c5ff5a4e54';
    }
    /**
     * Сandidate has increased a self bond.
     */
    get asV1300() {
        (0, assert_1.default)(this.isV1300);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingCandidateBondedMoreEvent = ParachainStakingCandidateBondedMoreEvent;
class ParachainStakingCandidateLeftEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.CandidateLeft');
        this._chain = ctx._chain;
        this.event = event;
    }
    /**
     * Ex-Candidate, Amount Unlocked, New Total Amt Locked
     */
    get isV1001() {
        return this._chain.getEventHash('ParachainStaking.CandidateLeft') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc';
    }
    /**
     * Ex-Candidate, Amount Unlocked, New Total Amt Locked
     */
    get asV1001() {
        (0, assert_1.default)(this.isV1001);
        return this._chain.decodeEvent(this.event);
    }
    /**
     * Candidate has left the set of candidates.
     */
    get isV1300() {
        return this._chain.getEventHash('ParachainStaking.CandidateLeft') === '39a5d795682d6a8426e0ee9f0ed61cb5d0d803a9c4303d42f2db829df56877b2';
    }
    /**
     * Candidate has left the set of candidates.
     */
    get asV1300() {
        (0, assert_1.default)(this.isV1300);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingCandidateLeftEvent = ParachainStakingCandidateLeftEvent;
class ParachainStakingCollatorBondedLessEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.CollatorBondedLess');
        this._chain = ctx._chain;
        this.event = event;
    }
    /**
     *  Collator Account, Old Bond, New Bond
     */
    get isV49() {
        return this._chain.getEventHash('ParachainStaking.CollatorBondedLess') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc';
    }
    /**
     *  Collator Account, Old Bond, New Bond
     */
    get asV49() {
        (0, assert_1.default)(this.isV49);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingCollatorBondedLessEvent = ParachainStakingCollatorBondedLessEvent;
class ParachainStakingCollatorBondedMoreEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.CollatorBondedMore');
        this._chain = ctx._chain;
        this.event = event;
    }
    /**
     *  Collator Account, Old Bond, New Bond
     */
    get isV49() {
        return this._chain.getEventHash('ParachainStaking.CollatorBondedMore') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc';
    }
    /**
     *  Collator Account, Old Bond, New Bond
     */
    get asV49() {
        (0, assert_1.default)(this.isV49);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingCollatorBondedMoreEvent = ParachainStakingCollatorBondedMoreEvent;
class ParachainStakingCollatorLeftEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.CollatorLeft');
        this._chain = ctx._chain;
        this.event = event;
    }
    /**
     *  Account, Amount Unlocked, New Total Amt Locked
     */
    get isV49() {
        return this._chain.getEventHash('ParachainStaking.CollatorLeft') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc';
    }
    /**
     *  Account, Amount Unlocked, New Total Amt Locked
     */
    get asV49() {
        (0, assert_1.default)(this.isV49);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingCollatorLeftEvent = ParachainStakingCollatorLeftEvent;
class ParachainStakingDelegationEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.Delegation');
        this._chain = ctx._chain;
        this.event = event;
    }
    /**
     * Delegator, Amount Locked, Candidate, Delegator Position with New Total Counted if in Top
     */
    get isV1001() {
        return this._chain.getEventHash('ParachainStaking.Delegation') === '9e88e3dd4dec21ca4744b0264c96a88bfef8fa4f3a42c495ba697dcf51165507';
    }
    /**
     * Delegator, Amount Locked, Candidate, Delegator Position with New Total Counted if in Top
     */
    get asV1001() {
        (0, assert_1.default)(this.isV1001);
        return this._chain.decodeEvent(this.event);
    }
    /**
     * New delegation (increase of the existing one).
     */
    get isV1300() {
        return this._chain.getEventHash('ParachainStaking.Delegation') === 'a85b3e0f4dad63b1b710d554a6b0a8aa64b90a755bcae7ea3f4b677b36e5df82';
    }
    /**
     * New delegation (increase of the existing one).
     */
    get asV1300() {
        (0, assert_1.default)(this.isV1300);
        return this._chain.decodeEvent(this.event);
    }
    /**
     * New delegation (increase of the existing one).
     */
    get isV1901() {
        return this._chain.getEventHash('ParachainStaking.Delegation') === 'b79250d65573f20264ea546d6964696800161f34e3e18c9e5f5cc68ab741883d';
    }
    /**
     * New delegation (increase of the existing one).
     */
    get asV1901() {
        (0, assert_1.default)(this.isV1901);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingDelegationEvent = ParachainStakingDelegationEvent;
class ParachainStakingDelegationDecreasedEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.DelegationDecreased');
        this._chain = ctx._chain;
        this.event = event;
    }
    get isV1001() {
        return this._chain.getEventHash('ParachainStaking.DelegationDecreased') === 'cb87cf94019b8ebc544a6a9a05c01f439fe3dea8cbed08c97f1a1e60dd6ad4f3';
    }
    get asV1001() {
        (0, assert_1.default)(this.isV1001);
        return this._chain.decodeEvent(this.event);
    }
    get isV1300() {
        return this._chain.getEventHash('ParachainStaking.DelegationDecreased') === '8ae2ca952b0b00ca6619c82b53d155a37de0be62eb9e8c32f4dad72b695e010b';
    }
    get asV1300() {
        (0, assert_1.default)(this.isV1300);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingDelegationDecreasedEvent = ParachainStakingDelegationDecreasedEvent;
class ParachainStakingDelegationIncreasedEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.DelegationIncreased');
        this._chain = ctx._chain;
        this.event = event;
    }
    get isV1001() {
        return this._chain.getEventHash('ParachainStaking.DelegationIncreased') === 'cb87cf94019b8ebc544a6a9a05c01f439fe3dea8cbed08c97f1a1e60dd6ad4f3';
    }
    get asV1001() {
        (0, assert_1.default)(this.isV1001);
        return this._chain.decodeEvent(this.event);
    }
    get isV1300() {
        return this._chain.getEventHash('ParachainStaking.DelegationIncreased') === '8ae2ca952b0b00ca6619c82b53d155a37de0be62eb9e8c32f4dad72b695e010b';
    }
    get asV1300() {
        (0, assert_1.default)(this.isV1300);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingDelegationIncreasedEvent = ParachainStakingDelegationIncreasedEvent;
class ParachainStakingDelegationRevokedEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.DelegationRevoked');
        this._chain = ctx._chain;
        this.event = event;
    }
    /**
     * Delegator, Candidate, Amount Unstaked
     */
    get isV1001() {
        return this._chain.getEventHash('ParachainStaking.DelegationRevoked') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841';
    }
    /**
     * Delegator, Candidate, Amount Unstaked
     */
    get asV1001() {
        (0, assert_1.default)(this.isV1001);
        return this._chain.decodeEvent(this.event);
    }
    /**
     * Delegation revoked.
     */
    get isV1300() {
        return this._chain.getEventHash('ParachainStaking.DelegationRevoked') === '013eacc8d6813b22ecdad778ecfffcc25ea1f31117d857d64978c177696e8697';
    }
    /**
     * Delegation revoked.
     */
    get asV1300() {
        (0, assert_1.default)(this.isV1300);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingDelegationRevokedEvent = ParachainStakingDelegationRevokedEvent;
class ParachainStakingDelegatorLeftEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.DelegatorLeft');
        this._chain = ctx._chain;
        this.event = event;
    }
    /**
     * Delegator, Amount Unstaked
     */
    get isV1001() {
        return this._chain.getEventHash('ParachainStaking.DelegatorLeft') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f';
    }
    /**
     * Delegator, Amount Unstaked
     */
    get asV1001() {
        (0, assert_1.default)(this.isV1001);
        return this._chain.decodeEvent(this.event);
    }
    /**
     * Delegator has left the set of delegators.
     */
    get isV1300() {
        return this._chain.getEventHash('ParachainStaking.DelegatorLeft') === '77f204dee4c5a51e392aac1d070198e23c536d0b97569fee0484578613cd8777';
    }
    /**
     * Delegator has left the set of delegators.
     */
    get asV1300() {
        (0, assert_1.default)(this.isV1300);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingDelegatorLeftEvent = ParachainStakingDelegatorLeftEvent;
class ParachainStakingDelegatorLeftCandidateEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.DelegatorLeftCandidate');
        this._chain = ctx._chain;
        this.event = event;
    }
    /**
     * Delegator, Candidate, Amount Unstaked, New Total Amt Staked for Candidate
     */
    get isV1001() {
        return this._chain.getEventHash('ParachainStaking.DelegatorLeftCandidate') === 'c5569fad693da6ab49df69c2cc3a1767b0c18bfc1f206847e0946659f6cd24ef';
    }
    /**
     * Delegator, Candidate, Amount Unstaked, New Total Amt Staked for Candidate
     */
    get asV1001() {
        (0, assert_1.default)(this.isV1001);
        return this._chain.decodeEvent(this.event);
    }
    /**
     * Delegation from candidate state has been remove.
     */
    get isV1300() {
        return this._chain.getEventHash('ParachainStaking.DelegatorLeftCandidate') === 'f72ae455b6ae66e6fabad54fadb0ae26f7136099a377372b74890536d4007422';
    }
    /**
     * Delegation from candidate state has been remove.
     */
    get asV1300() {
        (0, assert_1.default)(this.isV1300);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingDelegatorLeftCandidateEvent = ParachainStakingDelegatorLeftCandidateEvent;
class ParachainStakingJoinedCollatorCandidatesEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.JoinedCollatorCandidates');
        this._chain = ctx._chain;
        this.event = event;
    }
    /**
     *  Account, Amount Locked, New Total Amt Locked
     */
    get isV49() {
        return this._chain.getEventHash('ParachainStaking.JoinedCollatorCandidates') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc';
    }
    /**
     *  Account, Amount Locked, New Total Amt Locked
     */
    get asV49() {
        (0, assert_1.default)(this.isV49);
        return this._chain.decodeEvent(this.event);
    }
    /**
     * Account joined the set of collator candidates.
     */
    get isV1300() {
        return this._chain.getEventHash('ParachainStaking.JoinedCollatorCandidates') === '227a8d2310a3cd3b98057acb86b906dcde376e61a13f5a50db8589a31b218c17';
    }
    /**
     * Account joined the set of collator candidates.
     */
    get asV1300() {
        (0, assert_1.default)(this.isV1300);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingJoinedCollatorCandidatesEvent = ParachainStakingJoinedCollatorCandidatesEvent;
class ParachainStakingNewRoundEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.NewRound');
        this._chain = ctx._chain;
        this.event = event;
    }
    /**
     *  Starting Block, Round, Number of Collators Selected, Total Balance
     */
    get isV49() {
        return this._chain.getEventHash('ParachainStaking.NewRound') === '40ffda4d99fbb38b23cc20386a7f622d64120f24ccc70b9f85ce7612cd87c3b7';
    }
    /**
     *  Starting Block, Round, Number of Collators Selected, Total Balance
     */
    get asV49() {
        (0, assert_1.default)(this.isV49);
        return this._chain.decodeEvent(this.event);
    }
    /**
     * Started new round.
     */
    get isV1300() {
        return this._chain.getEventHash('ParachainStaking.NewRound') === '36b479d535ff0b4066a6ca7641a4dba5e090be428fc6b6e9fe8fec13d953fcfb';
    }
    /**
     * Started new round.
     */
    get asV1300() {
        (0, assert_1.default)(this.isV1300);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingNewRoundEvent = ParachainStakingNewRoundEvent;
class ParachainStakingNominationEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.Nomination');
        this._chain = ctx._chain;
        this.event = event;
    }
    /**
     *  Nominator, Amount Locked, Collator, New Total Amt backing Collator
     */
    get isV49() {
        return this._chain.getEventHash('ParachainStaking.Nomination') === 'f83c084062244bcc7149405c98c7c4e2a16809a87e76da05297caea15bec2db3';
    }
    /**
     *  Nominator, Amount Locked, Collator, New Total Amt backing Collator
     */
    get asV49() {
        (0, assert_1.default)(this.isV49);
        return this._chain.decodeEvent(this.event);
    }
    /**
     *  Nominator, Amount Locked, Collator, Nominator Position with New Total Backing if in Top
     */
    get isV53() {
        return this._chain.getEventHash('ParachainStaking.Nomination') === '6b1ea86c75c5868b590dc10b5fb591ae19af540ceb6b063e8c19ff6f924cad7a';
    }
    /**
     *  Nominator, Amount Locked, Collator, Nominator Position with New Total Backing if in Top
     */
    get asV53() {
        (0, assert_1.default)(this.isV53);
        return this._chain.decodeEvent(this.event);
    }
    /**
     *  Nominator, Amount Locked, Collator, Nominator Position with New Total Backing if in Top
     */
    get isV155() {
        return this._chain.getEventHash('ParachainStaking.Nomination') === 'b20b7a0c9860b9c403f33608bd1e5665b56580246c923ac0e54358b89c7d757f';
    }
    /**
     *  Nominator, Amount Locked, Collator, Nominator Position with New Total Backing if in Top
     */
    get asV155() {
        (0, assert_1.default)(this.isV155);
        return this._chain.decodeEvent(this.event);
    }
    /**
     * Nominator, Amount Locked, Collator, Nominator Position with New Total Counted if in Top
     */
    get isV900() {
        return this._chain.getEventHash('ParachainStaking.Nomination') === '9e88e3dd4dec21ca4744b0264c96a88bfef8fa4f3a42c495ba697dcf51165507';
    }
    /**
     * Nominator, Amount Locked, Collator, Nominator Position with New Total Counted if in Top
     */
    get asV900() {
        (0, assert_1.default)(this.isV900);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingNominationEvent = ParachainStakingNominationEvent;
class ParachainStakingNominationDecreasedEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.NominationDecreased');
        this._chain = ctx._chain;
        this.event = event;
    }
    get isV49() {
        return this._chain.getEventHash('ParachainStaking.NominationDecreased') === 'c5569fad693da6ab49df69c2cc3a1767b0c18bfc1f206847e0946659f6cd24ef';
    }
    get asV49() {
        (0, assert_1.default)(this.isV49);
        return this._chain.decodeEvent(this.event);
    }
    get isV53() {
        return this._chain.getEventHash('ParachainStaking.NominationDecreased') === '0802fb52e763fad9c1e2d7470ade03f120ed84392caab7558db05d830982247c';
    }
    get asV53() {
        (0, assert_1.default)(this.isV53);
        return this._chain.decodeEvent(this.event);
    }
    get isV501() {
        return this._chain.getEventHash('ParachainStaking.NominationDecreased') === 'cb87cf94019b8ebc544a6a9a05c01f439fe3dea8cbed08c97f1a1e60dd6ad4f3';
    }
    get asV501() {
        (0, assert_1.default)(this.isV501);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingNominationDecreasedEvent = ParachainStakingNominationDecreasedEvent;
class ParachainStakingNominationIncreasedEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.NominationIncreased');
        this._chain = ctx._chain;
        this.event = event;
    }
    get isV49() {
        return this._chain.getEventHash('ParachainStaking.NominationIncreased') === 'c5569fad693da6ab49df69c2cc3a1767b0c18bfc1f206847e0946659f6cd24ef';
    }
    get asV49() {
        (0, assert_1.default)(this.isV49);
        return this._chain.decodeEvent(this.event);
    }
    get isV53() {
        return this._chain.getEventHash('ParachainStaking.NominationIncreased') === '0802fb52e763fad9c1e2d7470ade03f120ed84392caab7558db05d830982247c';
    }
    get asV53() {
        (0, assert_1.default)(this.isV53);
        return this._chain.decodeEvent(this.event);
    }
    get isV501() {
        return this._chain.getEventHash('ParachainStaking.NominationIncreased') === 'cb87cf94019b8ebc544a6a9a05c01f439fe3dea8cbed08c97f1a1e60dd6ad4f3';
    }
    get asV501() {
        (0, assert_1.default)(this.isV501);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingNominationIncreasedEvent = ParachainStakingNominationIncreasedEvent;
class ParachainStakingNominatorLeftEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.NominatorLeft');
        this._chain = ctx._chain;
        this.event = event;
    }
    /**
     *  Nominator, Amount Unstaked
     */
    get isV49() {
        return this._chain.getEventHash('ParachainStaking.NominatorLeft') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f';
    }
    /**
     *  Nominator, Amount Unstaked
     */
    get asV49() {
        (0, assert_1.default)(this.isV49);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingNominatorLeftEvent = ParachainStakingNominatorLeftEvent;
class ParachainStakingNominatorLeftCollatorEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.NominatorLeftCollator');
        this._chain = ctx._chain;
        this.event = event;
    }
    /**
     *  Nominator, Collator, Amount Unstaked, New Total Amt Staked for Collator
     */
    get isV49() {
        return this._chain.getEventHash('ParachainStaking.NominatorLeftCollator') === 'c5569fad693da6ab49df69c2cc3a1767b0c18bfc1f206847e0946659f6cd24ef';
    }
    /**
     *  Nominator, Collator, Amount Unstaked, New Total Amt Staked for Collator
     */
    get asV49() {
        (0, assert_1.default)(this.isV49);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingNominatorLeftCollatorEvent = ParachainStakingNominatorLeftCollatorEvent;
class ParachainStakingRewardedEvent {
    constructor(ctx, event) {
        event = event || ctx.event;
        (0, assert_1.default)(event.name === 'ParachainStaking.Rewarded');
        this._chain = ctx._chain;
        this.event = event;
    }
    /**
     *  Paid the account (nominator or collator) the balance as liquid rewards
     */
    get isV49() {
        return this._chain.getEventHash('ParachainStaking.Rewarded') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f';
    }
    /**
     *  Paid the account (nominator or collator) the balance as liquid rewards
     */
    get asV49() {
        (0, assert_1.default)(this.isV49);
        return this._chain.decodeEvent(this.event);
    }
    /**
     * Paid the account (delegator or collator) the balance as liquid rewards.
     */
    get isV1300() {
        return this._chain.getEventHash('ParachainStaking.Rewarded') === '44a7364018ebad92746e4ca7c7c23d24d5da43cda2e63a90c665b522994ef1e2';
    }
    /**
     * Paid the account (delegator or collator) the balance as liquid rewards.
     */
    get asV1300() {
        (0, assert_1.default)(this.isV1300);
        return this._chain.decodeEvent(this.event);
    }
}
exports.ParachainStakingRewardedEvent = ParachainStakingRewardedEvent;
//# sourceMappingURL=events.js.map