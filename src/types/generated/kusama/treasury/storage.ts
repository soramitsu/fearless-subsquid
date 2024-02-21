import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1038 from '../v1038'
import * as v2013 from '../v2013'
import * as v2025 from '../v2025'
import * as v1001000 from '../v1001000'

export const proposalCount =  {
    /**
     *  Number of proposals that have been made.
     */
    v1020: new StorageType('Treasury.ProposalCount', 'Default', [], v1020.ProposalIndex) as ProposalCountV1020,
}

/**
 *  Number of proposals that have been made.
 */
export interface ProposalCountV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.ProposalIndex
    get(block: Block): Promise<(v1020.ProposalIndex | undefined)>
}

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v1020: new StorageType('Treasury.Proposals', 'Optional', [v1020.ProposalIndex], v1020.TreasuryProposal) as ProposalsV1020,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.ProposalIndex): Promise<(v1020.TreasuryProposal | undefined)>
    getMany(block: Block, keys: v1020.ProposalIndex[]): Promise<(v1020.TreasuryProposal | undefined)[]>
}

export const approvals =  {
    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    v1020: new StorageType('Treasury.Approvals', 'Default', [], sts.array(() => v1020.ProposalIndex)) as ApprovalsV1020,
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface ApprovalsV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.ProposalIndex[]
    get(block: Block): Promise<(v1020.ProposalIndex[] | undefined)>
}

export const tips =  {
    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    v1038: new StorageType('Treasury.Tips', 'Optional', [v1038.Hash], v1038.OpenTip) as TipsV1038,
    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    v2013: new StorageType('Treasury.Tips', 'Optional', [v2013.Hash], v2013.OpenTip) as TipsV2013,
}

/**
 *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsV1038  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1038.Hash): Promise<(v1038.OpenTip | undefined)>
    getMany(block: Block, keys: v1038.Hash[]): Promise<(v1038.OpenTip | undefined)[]>
    getKeys(block: Block): Promise<v1038.Hash[]>
    getKeys(block: Block, key: v1038.Hash): Promise<v1038.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1038.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v1038.Hash): AsyncIterable<v1038.Hash[]>
    getPairs(block: Block): Promise<[k: v1038.Hash, v: (v1038.OpenTip | undefined)][]>
    getPairs(block: Block, key: v1038.Hash): Promise<[k: v1038.Hash, v: (v1038.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1038.Hash, v: (v1038.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1038.Hash): AsyncIterable<[k: v1038.Hash, v: (v1038.OpenTip | undefined)][]>
}

/**
 *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsV2013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2013.Hash): Promise<(v2013.OpenTip | undefined)>
    getMany(block: Block, keys: v2013.Hash[]): Promise<(v2013.OpenTip | undefined)[]>
    getKeys(block: Block): Promise<v2013.Hash[]>
    getKeys(block: Block, key: v2013.Hash): Promise<v2013.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2013.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v2013.Hash): AsyncIterable<v2013.Hash[]>
    getPairs(block: Block): Promise<[k: v2013.Hash, v: (v2013.OpenTip | undefined)][]>
    getPairs(block: Block, key: v2013.Hash): Promise<[k: v2013.Hash, v: (v2013.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2013.Hash, v: (v2013.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2013.Hash): AsyncIterable<[k: v2013.Hash, v: (v2013.OpenTip | undefined)][]>
}

export const reasons =  {
    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    v1038: new StorageType('Treasury.Reasons', 'Optional', [v1038.Hash], sts.bytes()) as ReasonsV1038,
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface ReasonsV1038  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1038.Hash): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v1038.Hash[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v1038.Hash[]>
    getKeys(block: Block, key: v1038.Hash): Promise<v1038.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1038.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v1038.Hash): AsyncIterable<v1038.Hash[]>
    getPairs(block: Block): Promise<[k: v1038.Hash, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v1038.Hash): Promise<[k: v1038.Hash, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1038.Hash, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1038.Hash): AsyncIterable<[k: v1038.Hash, v: (Bytes | undefined)][]>
}

export const bountyCount =  {
    /**
     *  Number of bounty proposals that have been made.
     */
    v2025: new StorageType('Treasury.BountyCount', 'Default', [], v2025.BountyIndex) as BountyCountV2025,
}

/**
 *  Number of bounty proposals that have been made.
 */
export interface BountyCountV2025  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2025.BountyIndex
    get(block: Block): Promise<(v2025.BountyIndex | undefined)>
}

export const bounties =  {
    /**
     *  Bounties that have been made.
     */
    v2025: new StorageType('Treasury.Bounties', 'Optional', [v2025.BountyIndex], v2025.Bounty) as BountiesV2025,
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV2025  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2025.BountyIndex): Promise<(v2025.Bounty | undefined)>
    getMany(block: Block, keys: v2025.BountyIndex[]): Promise<(v2025.Bounty | undefined)[]>
    getKeys(block: Block): Promise<v2025.BountyIndex[]>
    getKeys(block: Block, key: v2025.BountyIndex): Promise<v2025.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2025.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v2025.BountyIndex): AsyncIterable<v2025.BountyIndex[]>
    getPairs(block: Block): Promise<[k: v2025.BountyIndex, v: (v2025.Bounty | undefined)][]>
    getPairs(block: Block, key: v2025.BountyIndex): Promise<[k: v2025.BountyIndex, v: (v2025.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2025.BountyIndex, v: (v2025.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2025.BountyIndex): AsyncIterable<[k: v2025.BountyIndex, v: (v2025.Bounty | undefined)][]>
}

export const bountyDescriptions =  {
    /**
     *  The description of each bounty.
     */
    v2025: new StorageType('Treasury.BountyDescriptions', 'Optional', [v2025.BountyIndex], sts.bytes()) as BountyDescriptionsV2025,
}

/**
 *  The description of each bounty.
 */
export interface BountyDescriptionsV2025  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2025.BountyIndex): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v2025.BountyIndex[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v2025.BountyIndex[]>
    getKeys(block: Block, key: v2025.BountyIndex): Promise<v2025.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2025.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v2025.BountyIndex): AsyncIterable<v2025.BountyIndex[]>
    getPairs(block: Block): Promise<[k: v2025.BountyIndex, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v2025.BountyIndex): Promise<[k: v2025.BountyIndex, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2025.BountyIndex, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2025.BountyIndex): AsyncIterable<[k: v2025.BountyIndex, v: (Bytes | undefined)][]>
}

export const bountyApprovals =  {
    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    v2025: new StorageType('Treasury.BountyApprovals', 'Default', [], sts.array(() => v2025.BountyIndex)) as BountyApprovalsV2025,
}

/**
 *  Bounty indices that have been approved but not yet funded.
 */
export interface BountyApprovalsV2025  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2025.BountyIndex[]
    get(block: Block): Promise<(v2025.BountyIndex[] | undefined)>
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
    v1001000: new StorageType('Treasury.SpendCount', 'Default', [], sts.number()) as SpendCountV1001000,
}

/**
 *  The count of spends that have been made.
 */
export interface SpendCountV1001000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const spends =  {
    /**
     *  Spends that have been approved and being processed.
     */
    v1001000: new StorageType('Treasury.Spends', 'Optional', [sts.number()], v1001000.SpendStatus) as SpendsV1001000,
}

/**
 *  Spends that have been approved and being processed.
 */
export interface SpendsV1001000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1001000.SpendStatus | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1001000.SpendStatus | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1001000.SpendStatus | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1001000.SpendStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1001000.SpendStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1001000.SpendStatus | undefined)][]>
}
