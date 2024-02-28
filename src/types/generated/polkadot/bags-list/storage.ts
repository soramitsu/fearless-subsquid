import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9140 from '../v9140'

export const listNodes =  {
    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    v9140: new StorageType('BagsList.ListNodes', 'Optional', [v9140.AccountId32], v9140.Node) as ListNodesV9140,
}

/**
 *  A single node, within some bag.
 * 
 *  Nodes store links forward and back within their respective bags.
 */
export interface ListNodesV9140  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9140.AccountId32): Promise<(v9140.Node | undefined)>
    getMany(block: Block, keys: v9140.AccountId32[]): Promise<(v9140.Node | undefined)[]>
    getKeys(block: Block): Promise<v9140.AccountId32[]>
    getKeys(block: Block, key: v9140.AccountId32): Promise<v9140.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9140.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9140.AccountId32): AsyncIterable<v9140.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9140.AccountId32, v: (v9140.Node | undefined)][]>
    getPairs(block: Block, key: v9140.AccountId32): Promise<[k: v9140.AccountId32, v: (v9140.Node | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9140.AccountId32, v: (v9140.Node | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9140.AccountId32): AsyncIterable<[k: v9140.AccountId32, v: (v9140.Node | undefined)][]>
}

export const counterForListNodes =  {
    /**
     * Counter for the related counted storage map
     */
    v9140: new StorageType('BagsList.CounterForListNodes', 'Default', [], sts.number()) as CounterForListNodesV9140,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForListNodesV9140  {
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
    v9140: new StorageType('BagsList.ListBags', 'Optional', [sts.bigint()], v9140.Bag) as ListBagsV9140,
}

/**
 *  A bag stored in storage.
 * 
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface ListBagsV9140  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v9140.Bag | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v9140.Bag | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v9140.Bag | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v9140.Bag | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v9140.Bag | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v9140.Bag | undefined)][]>
}
