import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v13 from '../v13'
import * as v25 from '../v25'
import * as v1001002 from '../v1001002'

export const proposalCount =  {
    /**
     *  Number of proposals that have been made.
     */
    v0: new StorageType('Treasury.ProposalCount', 'Default', [], v0.ProposalIndex) as ProposalCountV0,
}

/**
 *  Number of proposals that have been made.
 */
export interface ProposalCountV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ProposalIndex
    get(block: Block): Promise<(v0.ProposalIndex | undefined)>
}

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v0: new StorageType('Treasury.Proposals', 'Optional', [v0.ProposalIndex], v0.TreasuryProposal) as ProposalsV0,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.ProposalIndex): Promise<(v0.TreasuryProposal | undefined)>
    getMany(block: Block, keys: v0.ProposalIndex[]): Promise<(v0.TreasuryProposal | undefined)[]>
    getKeys(block: Block): Promise<v0.ProposalIndex[]>
    getKeys(block: Block, key: v0.ProposalIndex): Promise<v0.ProposalIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ProposalIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ProposalIndex): AsyncIterable<v0.ProposalIndex[]>
    getPairs(block: Block): Promise<[k: v0.ProposalIndex, v: (v0.TreasuryProposal | undefined)][]>
    getPairs(block: Block, key: v0.ProposalIndex): Promise<[k: v0.ProposalIndex, v: (v0.TreasuryProposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ProposalIndex, v: (v0.TreasuryProposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ProposalIndex): AsyncIterable<[k: v0.ProposalIndex, v: (v0.TreasuryProposal | undefined)][]>
}

export const approvals =  {
    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    v0: new StorageType('Treasury.Approvals', 'Default', [], sts.array(() => v0.ProposalIndex)) as ApprovalsV0,
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface ApprovalsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ProposalIndex[]
    get(block: Block): Promise<(v0.ProposalIndex[] | undefined)>
}

export const tips =  {
    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    v0: new StorageType('Treasury.Tips', 'Optional', [v0.Hash], v0.OpenTip) as TipsV0,
    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    v13: new StorageType('Treasury.Tips', 'Optional', [v13.Hash], v13.OpenTip) as TipsV13,
}

/**
 *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.Hash): Promise<(v0.OpenTip | undefined)>
    getMany(block: Block, keys: v0.Hash[]): Promise<(v0.OpenTip | undefined)[]>
    getKeys(block: Block): Promise<v0.Hash[]>
    getKeys(block: Block, key: v0.Hash): Promise<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<v0.Hash[]>
    getPairs(block: Block): Promise<[k: v0.Hash, v: (v0.OpenTip | undefined)][]>
    getPairs(block: Block, key: v0.Hash): Promise<[k: v0.Hash, v: (v0.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.Hash, v: (v0.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<[k: v0.Hash, v: (v0.OpenTip | undefined)][]>
}

/**
 *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v13.Hash): Promise<(v13.OpenTip | undefined)>
    getMany(block: Block, keys: v13.Hash[]): Promise<(v13.OpenTip | undefined)[]>
    getKeys(block: Block): Promise<v13.Hash[]>
    getKeys(block: Block, key: v13.Hash): Promise<v13.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v13.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v13.Hash): AsyncIterable<v13.Hash[]>
    getPairs(block: Block): Promise<[k: v13.Hash, v: (v13.OpenTip | undefined)][]>
    getPairs(block: Block, key: v13.Hash): Promise<[k: v13.Hash, v: (v13.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v13.Hash, v: (v13.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v13.Hash): AsyncIterable<[k: v13.Hash, v: (v13.OpenTip | undefined)][]>
}

export const reasons =  {
    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    v0: new StorageType('Treasury.Reasons', 'Optional', [v0.Hash], sts.bytes()) as ReasonsV0,
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface ReasonsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.Hash): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v0.Hash[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v0.Hash[]>
    getKeys(block: Block, key: v0.Hash): Promise<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<v0.Hash[]>
    getPairs(block: Block): Promise<[k: v0.Hash, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v0.Hash): Promise<[k: v0.Hash, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.Hash, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<[k: v0.Hash, v: (Bytes | undefined)][]>
}

export const bountyCount =  {
    /**
     *  Number of bounty proposals that have been made.
     */
    v25: new StorageType('Treasury.BountyCount', 'Default', [], v25.BountyIndex) as BountyCountV25,
}

/**
 *  Number of bounty proposals that have been made.
 */
export interface BountyCountV25  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v25.BountyIndex
    get(block: Block): Promise<(v25.BountyIndex | undefined)>
}

export const bounties =  {
    /**
     *  Bounties that have been made.
     */
    v25: new StorageType('Treasury.Bounties', 'Optional', [v25.BountyIndex], v25.Bounty) as BountiesV25,
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV25  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v25.BountyIndex): Promise<(v25.Bounty | undefined)>
    getMany(block: Block, keys: v25.BountyIndex[]): Promise<(v25.Bounty | undefined)[]>
    getKeys(block: Block): Promise<v25.BountyIndex[]>
    getKeys(block: Block, key: v25.BountyIndex): Promise<v25.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v25.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v25.BountyIndex): AsyncIterable<v25.BountyIndex[]>
    getPairs(block: Block): Promise<[k: v25.BountyIndex, v: (v25.Bounty | undefined)][]>
    getPairs(block: Block, key: v25.BountyIndex): Promise<[k: v25.BountyIndex, v: (v25.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v25.BountyIndex, v: (v25.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v25.BountyIndex): AsyncIterable<[k: v25.BountyIndex, v: (v25.Bounty | undefined)][]>
}

export const bountyDescriptions =  {
    /**
     *  The description of each bounty.
     */
    v25: new StorageType('Treasury.BountyDescriptions', 'Optional', [v25.BountyIndex], sts.bytes()) as BountyDescriptionsV25,
}

/**
 *  The description of each bounty.
 */
export interface BountyDescriptionsV25  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v25.BountyIndex): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v25.BountyIndex[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v25.BountyIndex[]>
    getKeys(block: Block, key: v25.BountyIndex): Promise<v25.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v25.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v25.BountyIndex): AsyncIterable<v25.BountyIndex[]>
    getPairs(block: Block): Promise<[k: v25.BountyIndex, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v25.BountyIndex): Promise<[k: v25.BountyIndex, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v25.BountyIndex, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v25.BountyIndex): AsyncIterable<[k: v25.BountyIndex, v: (Bytes | undefined)][]>
}

export const bountyApprovals =  {
    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    v25: new StorageType('Treasury.BountyApprovals', 'Default', [], sts.array(() => v25.BountyIndex)) as BountyApprovalsV25,
}

/**
 *  Bounty indices that have been approved but not yet funded.
 */
export interface BountyApprovalsV25  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v25.BountyIndex[]
    get(block: Block): Promise<(v25.BountyIndex[] | undefined)>
}

export const inactive =  {
    /**
     *  The amount which has been reported as inactive to Currency.
     */
    v9340: new StorageType('Treasury.Inactive', 'Default', [], sts.bigint()) as InactiveV9340,
}

/**
 *  The amount which has been reported as inactive to Currency.
 */
export interface InactiveV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const deactivated =  {
    /**
     *  The amount which has been reported as inactive to Currency.
     */
    v9370: new StorageType('Treasury.Deactivated', 'Default', [], sts.bigint()) as DeactivatedV9370,
}

/**
 *  The amount which has been reported as inactive to Currency.
 */
export interface DeactivatedV9370  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const spendCount =  {
    /**
     *  The count of spends that have been made.
     */
    v1001002: new StorageType('Treasury.SpendCount', 'Default', [], sts.number()) as SpendCountV1001002,
}

/**
 *  The count of spends that have been made.
 */
export interface SpendCountV1001002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const spends =  {
    /**
     *  Spends that have been approved and being processed.
     */
    v1001002: new StorageType('Treasury.Spends', 'Optional', [sts.number()], v1001002.SpendStatus) as SpendsV1001002,
}

/**
 *  Spends that have been approved and being processed.
 */
export interface SpendsV1001002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1001002.SpendStatus | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1001002.SpendStatus | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1001002.SpendStatus | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1001002.SpendStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1001002.SpendStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1001002.SpendStatus | undefined)][]>
}
