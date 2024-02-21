import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9111 from '../v9111'

export const counterForListNodes =  {
    /**
     *  How many ids are registered.
     */
    v9111: new StorageType('BagsList.CounterForListNodes', 'Default', [], sts.number()) as CounterForListNodesV9111,
}

/**
 *  How many ids are registered.
 */
export interface CounterForListNodesV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const listNodes =  {
    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    v9111: new StorageType('BagsList.ListNodes', 'Optional', [v9111.AccountId32], v9111.Node) as ListNodesV9111,
}

/**
 *  A single node, within some bag.
 * 
 *  Nodes store links forward and back within their respective bags.
 */
export interface ListNodesV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9111.AccountId32): Promise<(v9111.Node | undefined)>
    getMany(block: Block, keys: v9111.AccountId32[]): Promise<(v9111.Node | undefined)[]>
    getKeys(block: Block): Promise<v9111.AccountId32[]>
    getKeys(block: Block, key: v9111.AccountId32): Promise<v9111.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9111.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9111.AccountId32): AsyncIterable<v9111.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9111.AccountId32, v: (v9111.Node | undefined)][]>
    getPairs(block: Block, key: v9111.AccountId32): Promise<[k: v9111.AccountId32, v: (v9111.Node | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9111.AccountId32, v: (v9111.Node | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9111.AccountId32): AsyncIterable<[k: v9111.AccountId32, v: (v9111.Node | undefined)][]>
}

export const listBags =  {
    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    v9111: new StorageType('BagsList.ListBags', 'Optional', [sts.bigint()], v9111.Bag) as ListBagsV9111,
}

/**
 *  A bag stored in storage.
 * 
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface ListBagsV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v9111.Bag | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v9111.Bag | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v9111.Bag | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v9111.Bag | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v9111.Bag | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v9111.Bag | undefined)][]>
}
