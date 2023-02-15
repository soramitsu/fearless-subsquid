import type {Result, Option} from './support'

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export interface EventRecord {
    phase: Phase
    event: Event
    topics: Uint8Array[]
}

export type Phase = Phase_ApplyExtrinsic | Phase_Finalization | Phase_Initialization

export interface Phase_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Phase_Finalization {
    __kind: 'Finalization'
}

export interface Phase_Initialization {
    __kind: 'Initialization'
}

export type Event = Event_System | Event_Scheduler | Event_Indices | Event_Balances | Event_Staking | Event_Offences | Event_Session | Event_Grandpa | Event_ImOnline | Event_Democracy | Event_Council | Event_TechnicalCommittee | Event_ElectionsPhragmen | Event_TechnicalMembership | Event_Treasury | Event_Slots | Event_Registrar | Event_Claims | Event_Vesting | Event_Utility | Event_Sudo | Event_Identity | Event_Proxy | Event_Multisig

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerEvent
}

export interface Event_Indices {
    __kind: 'Indices'
    value: IndicesEvent
}

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_Staking {
    __kind: 'Staking'
    value: StakingEvent
}

export interface Event_Offences {
    __kind: 'Offences'
    value: OffencesEvent
}

export interface Event_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Event_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaEvent
}

export interface Event_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineEvent
}

export interface Event_Democracy {
    __kind: 'Democracy'
    value: DemocracyEvent
}

export interface Event_Council {
    __kind: 'Council'
    value: CouncilEvent
}

export interface Event_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeEvent
}

export interface Event_ElectionsPhragmen {
    __kind: 'ElectionsPhragmen'
    value: ElectionsPhragmenEvent
}

export interface Event_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipEvent
}

export interface Event_Treasury {
    __kind: 'Treasury'
    value: TreasuryEvent
}

export interface Event_Slots {
    __kind: 'Slots'
    value: SlotsEvent
}

export interface Event_Registrar {
    __kind: 'Registrar'
    value: RegistrarEvent
}

export interface Event_Claims {
    __kind: 'Claims'
    value: ClaimsEvent
}

export interface Event_Vesting {
    __kind: 'Vesting'
    value: VestingEvent
}

export interface Event_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Event_Sudo {
    __kind: 'Sudo'
    value: SudoEvent
}

export interface Event_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export interface Event_Proxy {
    __kind: 'Proxy'
    value: ProxyEvent
}

export interface Event_Multisig {
    __kind: 'Multisig'
    value: MultisigEvent
}

export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount

/**
 *  An extrinsic completed successfully.
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    value: DispatchInfo
}

/**
 *  An extrinsic failed.
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    value: [DispatchError, DispatchInfo]
}

/**
 *  `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 *  A new account was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    value: Uint8Array
}

/**
 *  An account was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    value: Uint8Array
}

export type SchedulerEvent = SchedulerEvent_Scheduled | SchedulerEvent_Canceled | SchedulerEvent_Dispatched

export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    value: [number, number]
}

export interface SchedulerEvent_Canceled {
    __kind: 'Canceled'
    value: [number, number]
}

export interface SchedulerEvent_Dispatched {
    __kind: 'Dispatched'
    value: [[number, number], (Uint8Array | undefined), DispatchResult]
}

export type IndicesEvent = IndicesEvent_IndexAssigned | IndicesEvent_IndexFreed | IndicesEvent_IndexFrozen

/**
 *  A account index was assigned.
 */
export interface IndicesEvent_IndexAssigned {
    __kind: 'IndexAssigned'
    value: [Uint8Array, number]
}

/**
 *  A account index has been freed up (unassigned).
 */
export interface IndicesEvent_IndexFreed {
    __kind: 'IndexFreed'
    value: number
}

/**
 *  A account index has been frozen to its current account ID.
 */
export interface IndicesEvent_IndexFrozen {
    __kind: 'IndexFrozen'
    value: [number, Uint8Array]
}

export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Deposit | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated

/**
 *  An account was created with some free balance.
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    value: [Uint8Array, bigint]
}

/**
 *  An account was removed whose balance was non-zero but below ExistentialDeposit,
 *  resulting in an outright loss.
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    value: [Uint8Array, bigint]
}

/**
 *  Transfer succeeded (from, to, value).
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A balance was set by root (who, free, reserved).
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    value: [Uint8Array, bigint, bigint]
}

/**
 *  Some amount was deposited (e.g. for transaction fees).
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    value: [Uint8Array, bigint]
}

/**
 *  Some balance was reserved (moved from free to reserved).
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    value: [Uint8Array, bigint]
}

/**
 *  Some balance was unreserved (moved from reserved to free).
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    value: [Uint8Array, bigint]
}

/**
 *  Some balance was moved from the reserve of the first account to the second account.
 *  Final argument indicates the destination balance type.
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    value: [Uint8Array, Uint8Array, bigint, BalanceStatus]
}

export type StakingEvent = StakingEvent_EraPayout | StakingEvent_Reward | StakingEvent_Slash | StakingEvent_OldSlashingReportDiscarded | StakingEvent_StakingElection | StakingEvent_SolutionStored | StakingEvent_Bonded | StakingEvent_Unbonded | StakingEvent_Withdrawn

/**
 *  The era payout has been set; the first balance is the validator-payout; the second is
 *  the remainder from the maximum amount of reward.
 */
export interface StakingEvent_EraPayout {
    __kind: 'EraPayout'
    value: [number, bigint, bigint]
}

/**
 *  The staker has been rewarded by this amount. `AccountId` is the stash account.
 */
export interface StakingEvent_Reward {
    __kind: 'Reward'
    value: [Uint8Array, bigint]
}

/**
 *  One validator (and its nominators) has been slashed by the given amount.
 */
export interface StakingEvent_Slash {
    __kind: 'Slash'
    value: [Uint8Array, bigint]
}

/**
 *  An old slashing report from a prior era was discarded because it could
 *  not be processed.
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    value: number
}

/**
 *  A new set of stakers was elected with the given computation method.
 */
export interface StakingEvent_StakingElection {
    __kind: 'StakingElection'
    value: ElectionCompute
}

/**
 *  A new solution for the upcoming election has been stored.
 */
export interface StakingEvent_SolutionStored {
    __kind: 'SolutionStored'
    value: ElectionCompute
}

/**
 *  An account has bonded this amount.
 * 
 *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 *  it will not be emitted for staking rewards when they are added to stake.
 */
export interface StakingEvent_Bonded {
    __kind: 'Bonded'
    value: [Uint8Array, bigint]
}

/**
 *  An account has unbonded this amount.
 */
export interface StakingEvent_Unbonded {
    __kind: 'Unbonded'
    value: [Uint8Array, bigint]
}

/**
 *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 *  from the unlocking queue.
 */
export interface StakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [Uint8Array, bigint]
}

export type OffencesEvent = OffencesEvent_Offence

/**
 *  There is an offence reported of the given `kind` happened at the `session_index` and
 *  (kind-specific) time slot. This event is not deposited for duplicate slashes. last
 *  element indicates of the offence was applied (true) or queued (false).
 */
export interface OffencesEvent_Offence {
    __kind: 'Offence'
    value: [Uint8Array, Uint8Array, boolean]
}

export type SessionEvent = SessionEvent_NewSession

/**
 *  New session has happened. Note that the argument is the session index, not the block
 *  number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    value: number
}

export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 *  New authority set has been applied.
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    value: [Uint8Array, bigint][]
}

/**
 *  Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
    __kind: 'Paused'
}

/**
 *  Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
    __kind: 'Resumed'
}

export type ImOnlineEvent = ImOnlineEvent_HeartbeatReceived | ImOnlineEvent_AllGood | ImOnlineEvent_SomeOffline

/**
 *  A new heartbeat was received from `AuthorityId`
 */
export interface ImOnlineEvent_HeartbeatReceived {
    __kind: 'HeartbeatReceived'
    value: Uint8Array
}

/**
 *  At the end of the session, no offence was committed.
 */
export interface ImOnlineEvent_AllGood {
    __kind: 'AllGood'
}

/**
 *  At the end of the session, at least one validator was found to be offline.
 */
export interface ImOnlineEvent_SomeOffline {
    __kind: 'SomeOffline'
    value: [Uint8Array, FullIdentification][]
}

export type DemocracyEvent = DemocracyEvent_Proposed | DemocracyEvent_Tabled | DemocracyEvent_ExternalTabled | DemocracyEvent_Started | DemocracyEvent_Passed | DemocracyEvent_NotPassed | DemocracyEvent_Cancelled | DemocracyEvent_Executed | DemocracyEvent_Delegated | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed | DemocracyEvent_PreimageNoted | DemocracyEvent_PreimageUsed | DemocracyEvent_PreimageInvalid | DemocracyEvent_PreimageMissing | DemocracyEvent_PreimageReaped | DemocracyEvent_Unlocked

/**
 *  A motion has been proposed by a public account.
 */
export interface DemocracyEvent_Proposed {
    __kind: 'Proposed'
    value: [number, bigint]
}

/**
 *  A public proposal has been tabled for referendum vote.
 */
export interface DemocracyEvent_Tabled {
    __kind: 'Tabled'
    value: [number, bigint, Uint8Array[]]
}

/**
 *  An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
    __kind: 'ExternalTabled'
}

/**
 *  A referendum has begun.
 */
export interface DemocracyEvent_Started {
    __kind: 'Started'
    value: [number, VoteThreshold]
}

/**
 *  A proposal has been approved by referendum.
 */
export interface DemocracyEvent_Passed {
    __kind: 'Passed'
    value: number
}

/**
 *  A proposal has been rejected by referendum.
 */
export interface DemocracyEvent_NotPassed {
    __kind: 'NotPassed'
    value: number
}

/**
 *  A referendum has been cancelled.
 */
export interface DemocracyEvent_Cancelled {
    __kind: 'Cancelled'
    value: number
}

/**
 *  A proposal has been enacted.
 */
export interface DemocracyEvent_Executed {
    __kind: 'Executed'
    value: [number, boolean]
}

/**
 *  An account has delegated their vote to another account.
 */
export interface DemocracyEvent_Delegated {
    __kind: 'Delegated'
    value: [Uint8Array, Uint8Array]
}

/**
 *  An account has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
    __kind: 'Undelegated'
    value: Uint8Array
}

/**
 *  An external proposal has been vetoed.
 */
export interface DemocracyEvent_Vetoed {
    __kind: 'Vetoed'
    value: [Uint8Array, Uint8Array, number]
}

/**
 *  A proposal's preimage was noted, and the deposit taken.
 */
export interface DemocracyEvent_PreimageNoted {
    __kind: 'PreimageNoted'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A proposal preimage was removed and used (the deposit was returned).
 */
export interface DemocracyEvent_PreimageUsed {
    __kind: 'PreimageUsed'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A proposal could not be executed because its preimage was invalid.
 */
export interface DemocracyEvent_PreimageInvalid {
    __kind: 'PreimageInvalid'
    value: [Uint8Array, number]
}

/**
 *  A proposal could not be executed because its preimage was missing.
 */
export interface DemocracyEvent_PreimageMissing {
    __kind: 'PreimageMissing'
    value: [Uint8Array, number]
}

/**
 *  A registered preimage was removed and the deposit collected by the reaper (last item).
 */
export interface DemocracyEvent_PreimageReaped {
    __kind: 'PreimageReaped'
    value: [Uint8Array, Uint8Array, bigint, Uint8Array]
}

/**
 *  An account has been unlocked successfully.
 */
export interface DemocracyEvent_Unlocked {
    __kind: 'Unlocked'
    value: Uint8Array
}

export type CouncilEvent = CouncilEvent_Proposed | CouncilEvent_Voted | CouncilEvent_Approved | CouncilEvent_Disapproved | CouncilEvent_Executed | CouncilEvent_MemberExecuted | CouncilEvent_Closed

/**
 *  A motion (given hash) has been proposed (by given account) with a threshold (given
 *  `MemberCount`).
 */
export interface CouncilEvent_Proposed {
    __kind: 'Proposed'
    value: [Uint8Array, number, Uint8Array, number]
}

/**
 *  A motion (given hash) has been voted on by given account, leaving
 *  a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface CouncilEvent_Voted {
    __kind: 'Voted'
    value: [Uint8Array, Uint8Array, boolean, number, number]
}

/**
 *  A motion was approved by the required threshold.
 */
export interface CouncilEvent_Approved {
    __kind: 'Approved'
    value: Uint8Array
}

/**
 *  A motion was not approved by the required threshold.
 */
export interface CouncilEvent_Disapproved {
    __kind: 'Disapproved'
    value: Uint8Array
}

/**
 *  A motion was executed; `bool` is true if returned without error.
 */
export interface CouncilEvent_Executed {
    __kind: 'Executed'
    value: [Uint8Array, DispatchResult]
}

/**
 *  A single member did some action; `bool` is true if returned without error.
 */
export interface CouncilEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [Uint8Array, DispatchResult]
}

/**
 *  A proposal was closed after its duration was up.
 */
export interface CouncilEvent_Closed {
    __kind: 'Closed'
    value: [Uint8Array, number, number]
}

export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted | TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Closed

/**
 *  A motion (given hash) has been proposed (by given account) with a threshold (given
 *  `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Proposed {
    __kind: 'Proposed'
    value: [Uint8Array, number, Uint8Array, number]
}

/**
 *  A motion (given hash) has been voted on by given account, leaving
 *  a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Voted {
    __kind: 'Voted'
    value: [Uint8Array, Uint8Array, boolean, number, number]
}

/**
 *  A motion was approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Approved {
    __kind: 'Approved'
    value: Uint8Array
}

/**
 *  A motion was not approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Disapproved {
    __kind: 'Disapproved'
    value: Uint8Array
}

/**
 *  A motion was executed; `bool` is true if returned without error.
 */
export interface TechnicalCommitteeEvent_Executed {
    __kind: 'Executed'
    value: [Uint8Array, DispatchResult]
}

/**
 *  A single member did some action; `bool` is true if returned without error.
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [Uint8Array, DispatchResult]
}

/**
 *  A proposal was closed after its duration was up.
 */
export interface TechnicalCommitteeEvent_Closed {
    __kind: 'Closed'
    value: [Uint8Array, number, number]
}

export type ElectionsPhragmenEvent = ElectionsPhragmenEvent_NewTerm | ElectionsPhragmenEvent_EmptyTerm | ElectionsPhragmenEvent_MemberKicked | ElectionsPhragmenEvent_MemberRenounced | ElectionsPhragmenEvent_VoterReported

/**
 *  A new term with new members. This indicates that enough candidates existed to run the
 *  election, not that enough have has been elected. The inner value must be examined for
 *  this purpose. A `NewTerm([])` indicates that some candidates got their bond slashed and
 *  none were elected, whilst `EmptyTerm` means that no candidates existed to begin with.
 */
export interface ElectionsPhragmenEvent_NewTerm {
    __kind: 'NewTerm'
    value: [Uint8Array, bigint][]
}

/**
 *  No (or not enough) candidates existed for this round. This is different from
 *  `NewTerm([])`. See the description of `NewTerm`.
 */
export interface ElectionsPhragmenEvent_EmptyTerm {
    __kind: 'EmptyTerm'
}

/**
 *  A member has been removed. This should always be followed by either `NewTerm` ot
 *  `EmptyTerm`.
 */
export interface ElectionsPhragmenEvent_MemberKicked {
    __kind: 'MemberKicked'
    value: Uint8Array
}

/**
 *  A member has renounced their candidacy.
 */
export interface ElectionsPhragmenEvent_MemberRenounced {
    __kind: 'MemberRenounced'
    value: Uint8Array
}

/**
 *  A voter (first element) was reported (byt the second element) with the the report being
 *  successful or not (third element).
 */
export interface ElectionsPhragmenEvent_VoterReported {
    __kind: 'VoterReported'
    value: [Uint8Array, Uint8Array, boolean]
}

export type TechnicalMembershipEvent = TechnicalMembershipEvent_MemberAdded | TechnicalMembershipEvent_MemberRemoved | TechnicalMembershipEvent_MembersSwapped | TechnicalMembershipEvent_MembersReset | TechnicalMembershipEvent_KeyChanged | TechnicalMembershipEvent_Dummy

/**
 *  The given member was added; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberAdded {
    __kind: 'MemberAdded'
}

/**
 *  The given member was removed; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberRemoved {
    __kind: 'MemberRemoved'
}

/**
 *  Two members were swapped; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MembersSwapped {
    __kind: 'MembersSwapped'
}

/**
 *  The membership was reset; see the transaction for who the new set is.
 */
export interface TechnicalMembershipEvent_MembersReset {
    __kind: 'MembersReset'
}

/**
 *  One of the members' keys changed.
 */
export interface TechnicalMembershipEvent_KeyChanged {
    __kind: 'KeyChanged'
}

/**
 *  Phantom member, never used.
 */
export interface TechnicalMembershipEvent_Dummy {
    __kind: 'Dummy'
}

export type TreasuryEvent = TreasuryEvent_Proposed | TreasuryEvent_Spending | TreasuryEvent_Awarded | TreasuryEvent_Rejected | TreasuryEvent_Burnt | TreasuryEvent_Rollover | TreasuryEvent_Deposit | TreasuryEvent_NewTip | TreasuryEvent_TipClosing | TreasuryEvent_TipClosed | TreasuryEvent_TipRetracted

/**
 *  New proposal.
 */
export interface TreasuryEvent_Proposed {
    __kind: 'Proposed'
    value: number
}

/**
 *  We have ended a spend period and will now allocate funds.
 */
export interface TreasuryEvent_Spending {
    __kind: 'Spending'
    value: bigint
}

/**
 *  Some funds have been allocated.
 */
export interface TreasuryEvent_Awarded {
    __kind: 'Awarded'
    value: [number, bigint, Uint8Array]
}

/**
 *  A proposal was rejected; funds were slashed.
 */
export interface TreasuryEvent_Rejected {
    __kind: 'Rejected'
    value: [number, bigint]
}

/**
 *  Some of our funds have been burnt.
 */
export interface TreasuryEvent_Burnt {
    __kind: 'Burnt'
    value: bigint
}

/**
 *  Spending has finished; this is the amount that rolls over until next spend.
 */
export interface TreasuryEvent_Rollover {
    __kind: 'Rollover'
    value: bigint
}

/**
 *  Some funds have been deposited.
 */
export interface TreasuryEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

/**
 *  A new tip suggestion has been opened.
 */
export interface TreasuryEvent_NewTip {
    __kind: 'NewTip'
    value: Uint8Array
}

/**
 *  A tip suggestion has reached threshold and is closing.
 */
export interface TreasuryEvent_TipClosing {
    __kind: 'TipClosing'
    value: Uint8Array
}

/**
 *  A tip suggestion has been closed.
 */
export interface TreasuryEvent_TipClosed {
    __kind: 'TipClosed'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A tip suggestion has been retracted.
 */
export interface TreasuryEvent_TipRetracted {
    __kind: 'TipRetracted'
    value: Uint8Array
}

export type SlotsEvent = SlotsEvent_NewLeasePeriod | SlotsEvent_AuctionStarted | SlotsEvent_AuctionClosed | SlotsEvent_WonDeploy | SlotsEvent_WonRenewal | SlotsEvent_Reserved | SlotsEvent_Unreserved

/**
 *  A new lease period is beginning.
 */
export interface SlotsEvent_NewLeasePeriod {
    __kind: 'NewLeasePeriod'
    value: number
}

/**
 *  An auction started. Provides its index and the block number where it will begin to
 *  close and the first lease period of the quadruplet that is auctioned.
 */
export interface SlotsEvent_AuctionStarted {
    __kind: 'AuctionStarted'
    value: [number, number, number]
}

/**
 *  An auction ended. All funds become unreserved.
 */
export interface SlotsEvent_AuctionClosed {
    __kind: 'AuctionClosed'
    value: number
}

/**
 *  Someone won the right to deploy a parachain. Balance amount is deducted for deposit.
 */
export interface SlotsEvent_WonDeploy {
    __kind: 'WonDeploy'
    value: [NewBidder, SlotRange, number, bigint]
}

/**
 *  An existing parachain won the right to continue.
 *  First balance is the extra amount reseved. Second is the total amount reserved.
 */
export interface SlotsEvent_WonRenewal {
    __kind: 'WonRenewal'
    value: [number, SlotRange, bigint, bigint]
}

/**
 *  Funds were reserved for a winning bid. First balance is the extra amount reserved.
 *  Second is the total.
 */
export interface SlotsEvent_Reserved {
    __kind: 'Reserved'
    value: [Uint8Array, bigint, bigint]
}

/**
 *  Funds were unreserved since bidder is no longer active.
 */
export interface SlotsEvent_Unreserved {
    __kind: 'Unreserved'
    value: [Uint8Array, bigint]
}

export type RegistrarEvent = RegistrarEvent_ParathreadRegistered | RegistrarEvent_ParathreadDeregistered

/**
 *  A parathread was registered; its new ID is supplied.
 */
export interface RegistrarEvent_ParathreadRegistered {
    __kind: 'ParathreadRegistered'
    value: number
}

/**
 *  The parathread of the supplied ID was de-registered.
 */
export interface RegistrarEvent_ParathreadDeregistered {
    __kind: 'ParathreadDeregistered'
    value: number
}

export type ClaimsEvent = ClaimsEvent_Claimed

/**
 *  Someone claimed some DOTs.
 */
export interface ClaimsEvent_Claimed {
    __kind: 'Claimed'
    value: [Uint8Array, Uint8Array, bigint]
}

export type VestingEvent = VestingEvent_VestingUpdated | VestingEvent_VestingCompleted

/**
 *  The amount vested has been updated. This could indicate more funds are available. The
 *  balance given is the amount which is left unvested (and thus locked).
 */
export interface VestingEvent_VestingUpdated {
    __kind: 'VestingUpdated'
    value: [Uint8Array, bigint]
}

/**
 *  An account (given) has become fully vested. No further vesting can happen.
 */
export interface VestingEvent_VestingCompleted {
    __kind: 'VestingCompleted'
    value: Uint8Array
}

export type UtilityEvent = UtilityEvent_BatchInterrupted | UtilityEvent_BatchCompleted | UtilityEvent_Uncallable

/**
 *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 *  well as the error.
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    value: [number, DispatchError]
}

/**
 *  Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 *  A call with a `false` IsCallable filter was attempted.
 */
export interface UtilityEvent_Uncallable {
    __kind: 'Uncallable'
    value: number
}

export type SudoEvent = SudoEvent_Sudid | SudoEvent_KeyChanged | SudoEvent_SudoAsDone

/**
 *  A sudo just took place.
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    value: DispatchResult
}

/**
 *  The sudoer just switched identity; the old key is supplied.
 */
export interface SudoEvent_KeyChanged {
    __kind: 'KeyChanged'
    value: Uint8Array
}

/**
 *  A sudo just took place.
 */
export interface SudoEvent_SudoAsDone {
    __kind: 'SudoAsDone'
    value: boolean
}

export type IdentityEvent = IdentityEvent_IdentitySet | IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_JudgementGiven | IdentityEvent_RegistrarAdded

/**
 *  A name was set or reset (which will remove all judgements).
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    value: Uint8Array
}

/**
 *  A name was cleared, and the given balance returned.
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    value: [Uint8Array, bigint]
}

/**
 *  A name was removed and the given balance slashed.
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    value: [Uint8Array, bigint]
}

/**
 *  A judgement was asked from a registrar.
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    value: [Uint8Array, number]
}

/**
 *  A judgement request was retracted.
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    value: [Uint8Array, number]
}

/**
 *  A judgement was given by a registrar.
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    value: [Uint8Array, number]
}

/**
 *  A registrar was added.
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    value: number
}

export type ProxyEvent = ProxyEvent_ProxyExecuted | ProxyEvent_AnonymousCreated

/**
 *  A proxy was executed correctly, with the given result.
 */
export interface ProxyEvent_ProxyExecuted {
    __kind: 'ProxyExecuted'
    value: DispatchResult
}

/**
 *  Anonymous account (first parameter) has been created by new proxy (second) with given
 *  disambiguation index and proxy type.
 */
export interface ProxyEvent_AnonymousCreated {
    __kind: 'AnonymousCreated'
    value: [Uint8Array, Uint8Array, ProxyType, number]
}

export type MultisigEvent = MultisigEvent_NewMultisig | MultisigEvent_MultisigApproval | MultisigEvent_MultisigExecuted | MultisigEvent_MultisigCancelled | MultisigEvent_Uncallable

/**
 *  A new multisig operation has begun. First param is the account that is approving,
 *  second is the multisig account, third is hash of the call.
 */
export interface MultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    value: [Uint8Array, Uint8Array, Uint8Array]
}

/**
 *  A multisig operation has been approved by someone. First param is the account that is
 *  approving, third is the multisig account, fourth is hash of the call.
 */
export interface MultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    value: [Uint8Array, Timepoint, Uint8Array, Uint8Array]
}

/**
 *  A multisig operation has been executed. First param is the account that is
 *  approving, third is the multisig account, fourth is hash of the call to be executed.
 */
export interface MultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    value: [Uint8Array, Timepoint, Uint8Array, Uint8Array, DispatchResult]
}

/**
 *  A multisig operation has been cancelled. First param is the account that is
 *  cancelling, third is the multisig account, fourth is hash of the call.
 */
export interface MultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    value: [Uint8Array, Timepoint, Uint8Array, Uint8Array]
}

/**
 *  A call with a `false` IsCallable filter was attempted.
 */
export interface MultisigEvent_Uncallable {
    __kind: 'Uncallable'
    value: number
}

export interface DispatchInfo {
    weight: bigint
    class: DispatchClass
    paysFee: Pays
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_Token | DispatchError_Arithmetic

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: DispatchErrorModule
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export type DispatchResult = DispatchResult_Ok | DispatchResult_Err

export interface DispatchResult_Ok {
    __kind: 'Ok'
}

export interface DispatchResult_Err {
    __kind: 'Err'
    value: DispatchError
}

export type ElectionCompute = ElectionCompute_OnChain | ElectionCompute_Signed | ElectionCompute_Unsigned

export interface ElectionCompute_OnChain {
    __kind: 'OnChain'
}

export interface ElectionCompute_Signed {
    __kind: 'Signed'
}

export interface ElectionCompute_Unsigned {
    __kind: 'Unsigned'
}

export interface FullIdentification {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

export type VoteThreshold = VoteThreshold_SuperMajorityApprove | VoteThreshold_SuperMajorityAgainst | VoteThreshold_SimpleMajority

export interface VoteThreshold_SuperMajorityApprove {
    __kind: 'SuperMajorityApprove'
}

export interface VoteThreshold_SuperMajorityAgainst {
    __kind: 'SuperMajorityAgainst'
}

export interface VoteThreshold_SimpleMajority {
    __kind: 'SimpleMajority'
}

export interface NewBidder {
    who: Uint8Array
    sub: number
}

export type SlotRange = SlotRange_ZeroZero | SlotRange_ZeroOne | SlotRange_ZeroTwo | SlotRange_ZeroThree | SlotRange_OneOne | SlotRange_OneTwo | SlotRange_OneThree | SlotRange_TwoTwo | SlotRange_TwoThree | SlotRange_ThreeThree

export interface SlotRange_ZeroZero {
    __kind: 'ZeroZero'
}

export interface SlotRange_ZeroOne {
    __kind: 'ZeroOne'
}

export interface SlotRange_ZeroTwo {
    __kind: 'ZeroTwo'
}

export interface SlotRange_ZeroThree {
    __kind: 'ZeroThree'
}

export interface SlotRange_OneOne {
    __kind: 'OneOne'
}

export interface SlotRange_OneTwo {
    __kind: 'OneTwo'
}

export interface SlotRange_OneThree {
    __kind: 'OneThree'
}

export interface SlotRange_TwoTwo {
    __kind: 'TwoTwo'
}

export interface SlotRange_TwoThree {
    __kind: 'TwoThree'
}

export interface SlotRange_ThreeThree {
    __kind: 'ThreeThree'
}

export type ProxyType = ProxyType_Any | ProxyType_NonTransfer | ProxyType_Governance | ProxyType_Staking | ProxyType_UnusedSudoBalances | ProxyType_IdentityJudgement | ProxyType_CancelProxy | ProxyType_Auction

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_Staking {
    __kind: 'Staking'
}

export interface ProxyType_UnusedSudoBalances {
    __kind: 'UnusedSudoBalances'
}

export interface ProxyType_IdentityJudgement {
    __kind: 'IdentityJudgement'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_Auction {
    __kind: 'Auction'
}

export interface Timepoint {
    height: number
    index: number
}

export type DispatchClass = DispatchClass_Normal | DispatchClass_Operational | DispatchClass_Mandatory

export interface DispatchClass_Normal {
    __kind: 'Normal'
}

export interface DispatchClass_Operational {
    __kind: 'Operational'
}

export interface DispatchClass_Mandatory {
    __kind: 'Mandatory'
}

export type Pays = Pays_Yes | Pays_No

export interface Pays_Yes {
    __kind: 'Yes'
}

export interface Pays_No {
    __kind: 'No'
}

export interface DispatchErrorModule {
    index: number
    error: number
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Underflow | TokenError_Overflow

export interface TokenError_NoFunds {
    __kind: 'NoFunds'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
}

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_Underflow {
    __kind: 'Underflow'
}

export interface TokenError_Overflow {
    __kind: 'Overflow'
}

export type ArithmeticError = ArithmeticError_Underflow | ArithmeticError_Overflow | ArithmeticError_DivisionByZero

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export interface IndividualExposure {
    who: Uint8Array
    value: bigint
}
