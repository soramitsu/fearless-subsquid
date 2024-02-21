import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1040 from '../v1040'
import * as v1042 from '../v1042'
import * as v9111 from '../v9111'
import * as v1000000 from '../v1000000'

export const founder =  {
    /**
     *  The first member.
     */
    v1040: new StorageType('Society.Founder', 'Optional', [], v1040.AccountId) as FounderV1040,
}

/**
 *  The first member.
 */
export interface FounderV1040  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1040.AccountId | undefined)>
}

export const candidates =  {
    /**
     *  The current set of candidates; bidders that are attempting to become members.
     */
    v1040: new StorageType('Society.Candidates', 'Default', [], sts.array(() => v1040.Bid)) as CandidatesV1040,
    /**
     *  The current set of candidates; bidders that are attempting to become members.
     */
    v9111: new StorageType('Society.Candidates', 'Default', [], sts.array(() => v9111.Bid)) as CandidatesV9111,
    v1000000: new StorageType('Society.Candidates', 'Optional', [v1000000.AccountId32], v1000000.Candidacy) as CandidatesV1000000,
}

/**
 *  The current set of candidates; bidders that are attempting to become members.
 */
export interface CandidatesV1040  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1040.Bid[]
    get(block: Block): Promise<(v1040.Bid[] | undefined)>
}

/**
 *  The current set of candidates; bidders that are attempting to become members.
 */
export interface CandidatesV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9111.Bid[]
    get(block: Block): Promise<(v9111.Bid[] | undefined)>
}

export interface CandidatesV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000000.AccountId32): Promise<(v1000000.Candidacy | undefined)>
    getMany(block: Block, keys: v1000000.AccountId32[]): Promise<(v1000000.Candidacy | undefined)[]>
    getKeys(block: Block): Promise<v1000000.AccountId32[]>
    getKeys(block: Block, key: v1000000.AccountId32): Promise<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<v1000000.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1000000.AccountId32, v: (v1000000.Candidacy | undefined)][]>
    getPairs(block: Block, key: v1000000.AccountId32): Promise<[k: v1000000.AccountId32, v: (v1000000.Candidacy | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000000.AccountId32, v: (v1000000.Candidacy | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<[k: v1000000.AccountId32, v: (v1000000.Candidacy | undefined)][]>
}

export const suspendedCandidates =  {
    /**
     *  The set of suspended candidates.
     */
    v1040: new StorageType('Society.SuspendedCandidates', 'Optional', [v1040.AccountId], sts.tuple(() => [v1040.BalanceOf, v1040.BidKind])) as SuspendedCandidatesV1040,
    /**
     *  The set of suspended candidates.
     */
    v9111: new StorageType('Society.SuspendedCandidates', 'Optional', [v9111.AccountId32], sts.tuple(() => [sts.bigint(), v9111.BidKind])) as SuspendedCandidatesV9111,
}

/**
 *  The set of suspended candidates.
 */
export interface SuspendedCandidatesV1040  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1040.AccountId): Promise<([v1040.BalanceOf, v1040.BidKind] | undefined)>
    getMany(block: Block, keys: v1040.AccountId[]): Promise<([v1040.BalanceOf, v1040.BidKind] | undefined)[]>
}

/**
 *  The set of suspended candidates.
 */
export interface SuspendedCandidatesV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9111.AccountId32): Promise<([bigint, v9111.BidKind] | undefined)>
    getMany(block: Block, keys: v9111.AccountId32[]): Promise<([bigint, v9111.BidKind] | undefined)[]>
    getKeys(block: Block): Promise<v9111.AccountId32[]>
    getKeys(block: Block, key: v9111.AccountId32): Promise<v9111.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9111.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9111.AccountId32): AsyncIterable<v9111.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9111.AccountId32, v: ([bigint, v9111.BidKind] | undefined)][]>
    getPairs(block: Block, key: v9111.AccountId32): Promise<[k: v9111.AccountId32, v: ([bigint, v9111.BidKind] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9111.AccountId32, v: ([bigint, v9111.BidKind] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9111.AccountId32): AsyncIterable<[k: v9111.AccountId32, v: ([bigint, v9111.BidKind] | undefined)][]>
}

export const pot =  {
    /**
     *  Amount of our account balance that is specifically for the next round's bid(s).
     */
    v1040: new StorageType('Society.Pot', 'Default', [], v1040.BalanceOf) as PotV1040,
}

/**
 *  Amount of our account balance that is specifically for the next round's bid(s).
 */
export interface PotV1040  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1040.BalanceOf
    get(block: Block): Promise<(v1040.BalanceOf | undefined)>
}

export const head =  {
    /**
     *  The most primary from the most recently approved members.
     */
    v1040: new StorageType('Society.Head', 'Optional', [], v1040.AccountId) as HeadV1040,
}

/**
 *  The most primary from the most recently approved members.
 */
export interface HeadV1040  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1040.AccountId | undefined)>
}

export const members =  {
    /**
     *  The current set of members, ordered.
     */
    v1040: new StorageType('Society.Members', 'Default', [], sts.array(() => v1040.AccountId)) as MembersV1040,
    /**
     *  The current members and their rank. Doesn't include `SuspendedMembers`.
     */
    v1000000: new StorageType('Society.Members', 'Optional', [v1000000.AccountId32], v1000000.Type_665) as MembersV1000000,
}

/**
 *  The current set of members, ordered.
 */
export interface MembersV1040  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1040.AccountId[]
    get(block: Block): Promise<(v1040.AccountId[] | undefined)>
}

/**
 *  The current members and their rank. Doesn't include `SuspendedMembers`.
 */
export interface MembersV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000000.AccountId32): Promise<(v1000000.Type_665 | undefined)>
    getMany(block: Block, keys: v1000000.AccountId32[]): Promise<(v1000000.Type_665 | undefined)[]>
    getKeys(block: Block): Promise<v1000000.AccountId32[]>
    getKeys(block: Block, key: v1000000.AccountId32): Promise<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<v1000000.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1000000.AccountId32, v: (v1000000.Type_665 | undefined)][]>
    getPairs(block: Block, key: v1000000.AccountId32): Promise<[k: v1000000.AccountId32, v: (v1000000.Type_665 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000000.AccountId32, v: (v1000000.Type_665 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<[k: v1000000.AccountId32, v: (v1000000.Type_665 | undefined)][]>
}

export const suspendedMembers =  {
    /**
     *  The set of suspended members.
     */
    v1040: new StorageType('Society.SuspendedMembers', 'Optional', [v1040.AccountId], sts.unit()) as SuspendedMembersV1040,
    /**
     *  The set of suspended members.
     */
    v1042: new StorageType('Society.SuspendedMembers', 'Default', [v1042.AccountId], sts.boolean()) as SuspendedMembersV1042,
    /**
     *  The set of suspended members, with their old membership record.
     */
    v1000000: new StorageType('Society.SuspendedMembers', 'Optional', [v1000000.AccountId32], v1000000.Type_665) as SuspendedMembersV1000000,
}

/**
 *  The set of suspended members.
 */
export interface SuspendedMembersV1040  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1040.AccountId): Promise<(null | undefined)>
    getMany(block: Block, keys: v1040.AccountId[]): Promise<(null | undefined)[]>
}

/**
 *  The set of suspended members.
 */
export interface SuspendedMembersV1042  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v1042.AccountId): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v1042.AccountId[]): Promise<(boolean | undefined)[]>
}

/**
 *  The set of suspended members, with their old membership record.
 */
export interface SuspendedMembersV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000000.AccountId32): Promise<(v1000000.Type_665 | undefined)>
    getMany(block: Block, keys: v1000000.AccountId32[]): Promise<(v1000000.Type_665 | undefined)[]>
    getKeys(block: Block): Promise<v1000000.AccountId32[]>
    getKeys(block: Block, key: v1000000.AccountId32): Promise<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<v1000000.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1000000.AccountId32, v: (v1000000.Type_665 | undefined)][]>
    getPairs(block: Block, key: v1000000.AccountId32): Promise<[k: v1000000.AccountId32, v: (v1000000.Type_665 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000000.AccountId32, v: (v1000000.Type_665 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<[k: v1000000.AccountId32, v: (v1000000.Type_665 | undefined)][]>
}

export const bids =  {
    /**
     *  The current bids, stored ordered by the value of the bid.
     */
    v1040: new StorageType('Society.Bids', 'Default', [], sts.array(() => v1040.Bid)) as BidsV1040,
    /**
     *  The current bids, stored ordered by the value of the bid.
     */
    v9111: new StorageType('Society.Bids', 'Default', [], sts.array(() => v9111.Bid)) as BidsV9111,
}

/**
 *  The current bids, stored ordered by the value of the bid.
 */
export interface BidsV1040  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1040.Bid[]
    get(block: Block): Promise<(v1040.Bid[] | undefined)>
}

/**
 *  The current bids, stored ordered by the value of the bid.
 */
export interface BidsV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9111.Bid[]
    get(block: Block): Promise<(v9111.Bid[] | undefined)>
}

export const vouching =  {
    /**
     *  Members currently vouching or banned from vouching again
     */
    v1040: new StorageType('Society.Vouching', 'Optional', [v1040.AccountId], v1040.VouchingStatus) as VouchingV1040,
}

/**
 *  Members currently vouching or banned from vouching again
 */
export interface VouchingV1040  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1040.AccountId): Promise<(v1040.VouchingStatus | undefined)>
    getMany(block: Block, keys: v1040.AccountId[]): Promise<(v1040.VouchingStatus | undefined)[]>
}

export const payouts =  {
    /**
     *  Pending payouts; ordered by block number, with the amount that should be paid out.
     */
    v1040: new StorageType('Society.Payouts', 'Default', [v1040.AccountId], sts.array(() => sts.tuple(() => [v1040.BlockNumber, v1040.BalanceOf]))) as PayoutsV1040,
    /**
     *  Information regarding rank-0 payouts, past and future.
     */
    v1000000: new StorageType('Society.Payouts', 'Default', [v1000000.AccountId32], v1000000.PayoutRecord) as PayoutsV1000000,
}

/**
 *  Pending payouts; ordered by block number, with the amount that should be paid out.
 */
export interface PayoutsV1040  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1040.BlockNumber, v1040.BalanceOf][]
    get(block: Block, key: v1040.AccountId): Promise<([v1040.BlockNumber, v1040.BalanceOf][] | undefined)>
    getMany(block: Block, keys: v1040.AccountId[]): Promise<([v1040.BlockNumber, v1040.BalanceOf][] | undefined)[]>
}

/**
 *  Information regarding rank-0 payouts, past and future.
 */
export interface PayoutsV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1000000.PayoutRecord
    get(block: Block, key: v1000000.AccountId32): Promise<(v1000000.PayoutRecord | undefined)>
    getMany(block: Block, keys: v1000000.AccountId32[]): Promise<(v1000000.PayoutRecord | undefined)[]>
    getKeys(block: Block): Promise<v1000000.AccountId32[]>
    getKeys(block: Block, key: v1000000.AccountId32): Promise<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<v1000000.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1000000.AccountId32, v: (v1000000.PayoutRecord | undefined)][]>
    getPairs(block: Block, key: v1000000.AccountId32): Promise<[k: v1000000.AccountId32, v: (v1000000.PayoutRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000000.AccountId32, v: (v1000000.PayoutRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<[k: v1000000.AccountId32, v: (v1000000.PayoutRecord | undefined)][]>
}

export const strikes =  {
    /**
     *  The ongoing number of losing votes cast by the member.
     */
    v1040: new StorageType('Society.Strikes', 'Default', [v1040.AccountId], v1040.StrikeCount) as StrikesV1040,
}

/**
 *  The ongoing number of losing votes cast by the member.
 */
export interface StrikesV1040  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1040.StrikeCount
    get(block: Block, key: v1040.AccountId): Promise<(v1040.StrikeCount | undefined)>
    getMany(block: Block, keys: v1040.AccountId[]): Promise<(v1040.StrikeCount | undefined)[]>
}

export const votes =  {
    /**
     *  Double map from Candidate -> Voter -> (Maybe) Vote.
     */
    v1040: new StorageType('Society.Votes', 'Optional', [v1040.AccountId, v1040.AccountId], v1040.SocietyVote) as VotesV1040,
    /**
     *  Double map from Candidate -> Voter -> (Maybe) Vote.
     */
    v1000000: new StorageType('Society.Votes', 'Optional', [v1000000.AccountId32, v1000000.AccountId32], v1000000.Vote) as VotesV1000000,
}

/**
 *  Double map from Candidate -> Voter -> (Maybe) Vote.
 */
export interface VotesV1040  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1040.AccountId, key2: v1040.AccountId): Promise<(v1040.SocietyVote | undefined)>
    getMany(block: Block, keys: [v1040.AccountId, v1040.AccountId][]): Promise<(v1040.SocietyVote | undefined)[]>
    getKeys(block: Block): Promise<[v1040.AccountId, v1040.AccountId][]>
    getKeys(block: Block, key1: v1040.AccountId): Promise<[v1040.AccountId, v1040.AccountId][]>
    getKeys(block: Block, key1: v1040.AccountId, key2: v1040.AccountId): Promise<[v1040.AccountId, v1040.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1040.AccountId, v1040.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1040.AccountId): AsyncIterable<[v1040.AccountId, v1040.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1040.AccountId, key2: v1040.AccountId): AsyncIterable<[v1040.AccountId, v1040.AccountId][]>
    getPairs(block: Block): Promise<[k: [v1040.AccountId, v1040.AccountId], v: (v1040.SocietyVote | undefined)][]>
    getPairs(block: Block, key1: v1040.AccountId): Promise<[k: [v1040.AccountId, v1040.AccountId], v: (v1040.SocietyVote | undefined)][]>
    getPairs(block: Block, key1: v1040.AccountId, key2: v1040.AccountId): Promise<[k: [v1040.AccountId, v1040.AccountId], v: (v1040.SocietyVote | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1040.AccountId, v1040.AccountId], v: (v1040.SocietyVote | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1040.AccountId): AsyncIterable<[k: [v1040.AccountId, v1040.AccountId], v: (v1040.SocietyVote | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1040.AccountId, key2: v1040.AccountId): AsyncIterable<[k: [v1040.AccountId, v1040.AccountId], v: (v1040.SocietyVote | undefined)][]>
}

/**
 *  Double map from Candidate -> Voter -> (Maybe) Vote.
 */
export interface VotesV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1000000.AccountId32, key2: v1000000.AccountId32): Promise<(v1000000.Vote | undefined)>
    getMany(block: Block, keys: [v1000000.AccountId32, v1000000.AccountId32][]): Promise<(v1000000.Vote | undefined)[]>
    getKeys(block: Block): Promise<[v1000000.AccountId32, v1000000.AccountId32][]>
    getKeys(block: Block, key1: v1000000.AccountId32): Promise<[v1000000.AccountId32, v1000000.AccountId32][]>
    getKeys(block: Block, key1: v1000000.AccountId32, key2: v1000000.AccountId32): Promise<[v1000000.AccountId32, v1000000.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1000000.AccountId32, v1000000.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1000000.AccountId32): AsyncIterable<[v1000000.AccountId32, v1000000.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1000000.AccountId32, key2: v1000000.AccountId32): AsyncIterable<[v1000000.AccountId32, v1000000.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v1000000.AccountId32, v1000000.AccountId32], v: (v1000000.Vote | undefined)][]>
    getPairs(block: Block, key1: v1000000.AccountId32): Promise<[k: [v1000000.AccountId32, v1000000.AccountId32], v: (v1000000.Vote | undefined)][]>
    getPairs(block: Block, key1: v1000000.AccountId32, key2: v1000000.AccountId32): Promise<[k: [v1000000.AccountId32, v1000000.AccountId32], v: (v1000000.Vote | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1000000.AccountId32, v1000000.AccountId32], v: (v1000000.Vote | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1000000.AccountId32): AsyncIterable<[k: [v1000000.AccountId32, v1000000.AccountId32], v: (v1000000.Vote | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1000000.AccountId32, key2: v1000000.AccountId32): AsyncIterable<[k: [v1000000.AccountId32, v1000000.AccountId32], v: (v1000000.Vote | undefined)][]>
}

export const defender =  {
    /**
     *  The defending member currently being challenged.
     */
    v1040: new StorageType('Society.Defender', 'Optional', [], v1040.AccountId) as DefenderV1040,
}

/**
 *  The defending member currently being challenged.
 */
export interface DefenderV1040  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1040.AccountId | undefined)>
}

export const defenderVotes =  {
    /**
     *  Votes for the defender.
     */
    v1040: new StorageType('Society.DefenderVotes', 'Optional', [v1040.AccountId], v1040.SocietyVote) as DefenderVotesV1040,
    /**
     *  Votes for the defender, keyed by challenge round.
     */
    v1000000: new StorageType('Society.DefenderVotes', 'Optional', [sts.number(), v1000000.AccountId32], v1000000.Vote) as DefenderVotesV1000000,
}

/**
 *  Votes for the defender.
 */
export interface DefenderVotesV1040  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1040.AccountId): Promise<(v1040.SocietyVote | undefined)>
    getMany(block: Block, keys: v1040.AccountId[]): Promise<(v1040.SocietyVote | undefined)[]>
    getKeys(block: Block): Promise<v1040.AccountId[]>
    getKeys(block: Block, key: v1040.AccountId): Promise<v1040.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1040.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1040.AccountId): AsyncIterable<v1040.AccountId[]>
    getPairs(block: Block): Promise<[k: v1040.AccountId, v: (v1040.SocietyVote | undefined)][]>
    getPairs(block: Block, key: v1040.AccountId): Promise<[k: v1040.AccountId, v: (v1040.SocietyVote | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1040.AccountId, v: (v1040.SocietyVote | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1040.AccountId): AsyncIterable<[k: v1040.AccountId, v: (v1040.SocietyVote | undefined)][]>
}

/**
 *  Votes for the defender, keyed by challenge round.
 */
export interface DefenderVotesV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v1000000.AccountId32): Promise<(v1000000.Vote | undefined)>
    getMany(block: Block, keys: [number, v1000000.AccountId32][]): Promise<(v1000000.Vote | undefined)[]>
    getKeys(block: Block): Promise<[number, v1000000.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v1000000.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v1000000.AccountId32): Promise<[number, v1000000.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v1000000.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v1000000.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v1000000.AccountId32): AsyncIterable<[number, v1000000.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v1000000.AccountId32], v: (v1000000.Vote | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v1000000.AccountId32], v: (v1000000.Vote | undefined)][]>
    getPairs(block: Block, key1: number, key2: v1000000.AccountId32): Promise<[k: [number, v1000000.AccountId32], v: (v1000000.Vote | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v1000000.AccountId32], v: (v1000000.Vote | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v1000000.AccountId32], v: (v1000000.Vote | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v1000000.AccountId32): AsyncIterable<[k: [number, v1000000.AccountId32], v: (v1000000.Vote | undefined)][]>
}

export const maxMembers =  {
    /**
     *  The max number of members for the society at one time.
     */
    v1040: new StorageType('Society.MaxMembers', 'Default', [], sts.number()) as MaxMembersV1040,
}

/**
 *  The max number of members for the society at one time.
 */
export interface MaxMembersV1040  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const rules =  {
    /**
     *  A hash of the rules of this society concerning membership. Can only be set once and
     *  only by the founder.
     */
    v1042: new StorageType('Society.Rules', 'Optional', [], v1042.Hash) as RulesV1042,
}

/**
 *  A hash of the rules of this society concerning membership. Can only be set once and
 *  only by the founder.
 */
export interface RulesV1042  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1042.Hash | undefined)>
}

export const parameters =  {
    /**
     *  The max number of members for the society at one time.
     */
    v1000000: new StorageType('Society.Parameters', 'Optional', [], v1000000.GroupParams) as ParametersV1000000,
}

/**
 *  The max number of members for the society at one time.
 */
export interface ParametersV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1000000.GroupParams | undefined)>
}

export const memberCount =  {
    /**
     *  The number of items in `Members` currently. (Doesn't include `SuspendedMembers`.)
     */
    v1000000: new StorageType('Society.MemberCount', 'Default', [], sts.number()) as MemberCountV1000000,
}

/**
 *  The number of items in `Members` currently. (Doesn't include `SuspendedMembers`.)
 */
export interface MemberCountV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const memberByIndex =  {
    /**
     *  The current items in `Members` keyed by their unique index. Keys are densely populated
     *  `0..MemberCount` (does not include `MemberCount`).
     */
    v1000000: new StorageType('Society.MemberByIndex', 'Optional', [sts.number()], v1000000.AccountId32) as MemberByIndexV1000000,
}

/**
 *  The current items in `Members` keyed by their unique index. Keys are densely populated
 *  `0..MemberCount` (does not include `MemberCount`).
 */
export interface MemberByIndexV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1000000.AccountId32 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1000000.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1000000.AccountId32 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1000000.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1000000.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1000000.AccountId32 | undefined)][]>
}

export const roundCount =  {
    /**
     *  The number of rounds which have passed.
     */
    v1000000: new StorageType('Society.RoundCount', 'Default', [], sts.number()) as RoundCountV1000000,
}

/**
 *  The number of rounds which have passed.
 */
export interface RoundCountV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const skeptic =  {
    /**
     *  The current skeptic.
     */
    v1000000: new StorageType('Society.Skeptic', 'Optional', [], v1000000.AccountId32) as SkepticV1000000,
}

/**
 *  The current skeptic.
 */
export interface SkepticV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1000000.AccountId32 | undefined)>
}

export const voteClearCursor =  {
    /**
     *  Clear-cursor for Vote, map from Candidate -> (Maybe) Cursor.
     */
    v1000000: new StorageType('Society.VoteClearCursor', 'Optional', [v1000000.AccountId32], sts.bytes()) as VoteClearCursorV1000000,
}

/**
 *  Clear-cursor for Vote, map from Candidate -> (Maybe) Cursor.
 */
export interface VoteClearCursorV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000000.AccountId32): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v1000000.AccountId32[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v1000000.AccountId32[]>
    getKeys(block: Block, key: v1000000.AccountId32): Promise<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<v1000000.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1000000.AccountId32, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v1000000.AccountId32): Promise<[k: v1000000.AccountId32, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000000.AccountId32, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<[k: v1000000.AccountId32, v: (Bytes | undefined)][]>
}

export const nextHead =  {
    /**
     *  At the end of the claim period, this contains the most recently approved members (along with
     *  their bid and round ID) who is from the most recent round with the lowest bid. They will
     *  become the new `Head`.
     */
    v1000000: new StorageType('Society.NextHead', 'Optional', [], v1000000.IntakeRecord) as NextHeadV1000000,
}

/**
 *  At the end of the claim period, this contains the most recently approved members (along with
 *  their bid and round ID) who is from the most recent round with the lowest bid. They will
 *  become the new `Head`.
 */
export interface NextHeadV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1000000.IntakeRecord | undefined)>
}

export const challengeRoundCount =  {
    /**
     *  The number of challenge rounds there have been. Used to identify stale DefenderVotes.
     */
    v1000000: new StorageType('Society.ChallengeRoundCount', 'Default', [], sts.number()) as ChallengeRoundCountV1000000,
}

/**
 *  The number of challenge rounds there have been. Used to identify stale DefenderVotes.
 */
export interface ChallengeRoundCountV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const defending =  {
    /**
     *  The defending member currently being challenged, along with a running tally of votes.
     */
    v1000000: new StorageType('Society.Defending', 'Optional', [], sts.tuple(() => [v1000000.AccountId32, v1000000.AccountId32, v1000000.Type_675])) as DefendingV1000000,
}

/**
 *  The defending member currently being challenged, along with a running tally of votes.
 */
export interface DefendingV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v1000000.AccountId32, v1000000.AccountId32, v1000000.Type_675] | undefined)>
}
