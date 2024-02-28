import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v28 from '../v28'
import * as v9110 from '../v9110'

export const bountyCount =  {
    /**
     *  Number of bounty proposals that have been made.
     */
    v28: new StorageType('Treasury.BountyCount', 'Default', [], v28.BountyIndex) as BountyCountV28,
}

/**
 *  Number of bounty proposals that have been made.
 */
export interface BountyCountV28  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v28.BountyIndex
    get(block: Block): Promise<(v28.BountyIndex | undefined)>
}

export const bounties =  {
    /**
     *  Bounties that have been made.
     */
    v28: new StorageType('Treasury.Bounties', 'Optional', [v28.BountyIndex], v28.Bounty) as BountiesV28,
    /**
     *  Bounties that have been made.
     */
    v9110: new StorageType('Bounties.Bounties', 'Optional', [sts.number()], v9110.Bounty) as BountiesV9110,
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV28  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v28.BountyIndex): Promise<(v28.Bounty | undefined)>
    getMany(block: Block, keys: v28.BountyIndex[]): Promise<(v28.Bounty | undefined)[]>
    getKeys(block: Block): Promise<v28.BountyIndex[]>
    getKeys(block: Block, key: v28.BountyIndex): Promise<v28.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v28.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v28.BountyIndex): AsyncIterable<v28.BountyIndex[]>
    getPairs(block: Block): Promise<[k: v28.BountyIndex, v: (v28.Bounty | undefined)][]>
    getPairs(block: Block, key: v28.BountyIndex): Promise<[k: v28.BountyIndex, v: (v28.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v28.BountyIndex, v: (v28.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v28.BountyIndex): AsyncIterable<[k: v28.BountyIndex, v: (v28.Bounty | undefined)][]>
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9110.Bounty | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9110.Bounty | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9110.Bounty | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9110.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9110.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9110.Bounty | undefined)][]>
}

export const bountyDescriptions =  {
    /**
     *  The description of each bounty.
     */
    v28: new StorageType('Treasury.BountyDescriptions', 'Optional', [v28.BountyIndex], sts.bytes()) as BountyDescriptionsV28,
}

/**
 *  The description of each bounty.
 */
export interface BountyDescriptionsV28  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v28.BountyIndex): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v28.BountyIndex[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v28.BountyIndex[]>
    getKeys(block: Block, key: v28.BountyIndex): Promise<v28.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v28.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v28.BountyIndex): AsyncIterable<v28.BountyIndex[]>
    getPairs(block: Block): Promise<[k: v28.BountyIndex, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v28.BountyIndex): Promise<[k: v28.BountyIndex, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v28.BountyIndex, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v28.BountyIndex): AsyncIterable<[k: v28.BountyIndex, v: (Bytes | undefined)][]>
}

export const bountyApprovals =  {
    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    v28: new StorageType('Treasury.BountyApprovals', 'Default', [], sts.array(() => v28.BountyIndex)) as BountyApprovalsV28,
}

/**
 *  Bounty indices that have been approved but not yet funded.
 */
export interface BountyApprovalsV28  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v28.BountyIndex[]
    get(block: Block): Promise<(v28.BountyIndex[] | undefined)>
}
