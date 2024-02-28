import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9230 from '../v9230'

export const listNodes =  {
    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    v9230: new StorageType('VoterList.ListNodes', 'Optional', [v9230.AccountId32], v9230.Node) as ListNodesV9230,
}

/**
 *  A single node, within some bag.
 * 
 *  Nodes store links forward and back within their respective bags.
 */
export interface ListNodesV9230  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9230.AccountId32): Promise<(v9230.Node | undefined)>
    getMany(block: Block, keys: v9230.AccountId32[]): Promise<(v9230.Node | undefined)[]>
    getKeys(block: Block): Promise<v9230.AccountId32[]>
    getKeys(block: Block, key: v9230.AccountId32): Promise<v9230.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9230.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9230.AccountId32): AsyncIterable<v9230.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9230.AccountId32, v: (v9230.Node | undefined)][]>
    getPairs(block: Block, key: v9230.AccountId32): Promise<[k: v9230.AccountId32, v: (v9230.Node | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9230.AccountId32, v: (v9230.Node | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9230.AccountId32): AsyncIterable<[k: v9230.AccountId32, v: (v9230.Node | undefined)][]>
}

export const counterForListNodes =  {
    /**
     * Counter for the related counted storage map
     */
    v9230: new StorageType('VoterList.CounterForListNodes', 'Default', [], sts.number()) as CounterForListNodesV9230,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForListNodesV9230  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const listBags =  {
    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    v9230: new StorageType('VoterList.ListBags', 'Optional', [sts.bigint()], v9230.Bag) as ListBagsV9230,
}

/**
 *  A bag stored in storage.
 * 
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface ListBagsV9230  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v9230.Bag | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v9230.Bag | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v9230.Bag | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v9230.Bag | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v9230.Bag | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v9230.Bag | undefined)][]>
}
