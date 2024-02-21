import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v2005 from '../v2005'
import * as v2011 from '../v2011'

export const multisigs =  {
    /**
     *  The set of open multisig operations.
     */
    v2005: new StorageType('Multisig.Multisigs', 'Optional', [v2005.AccountId, sts.bytes()], v2005.Multisig) as MultisigsV2005,
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigsV2005  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v2005.AccountId, key2: Bytes): Promise<(v2005.Multisig | undefined)>
    getMany(block: Block, keys: [v2005.AccountId, Bytes][]): Promise<(v2005.Multisig | undefined)[]>
    getKeys(block: Block): Promise<[v2005.AccountId, Bytes][]>
    getKeys(block: Block, key1: v2005.AccountId): Promise<[v2005.AccountId, Bytes][]>
    getKeys(block: Block, key1: v2005.AccountId, key2: Bytes): Promise<[v2005.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v2005.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v2005.AccountId): AsyncIterable<[v2005.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v2005.AccountId, key2: Bytes): AsyncIterable<[v2005.AccountId, Bytes][]>
    getPairs(block: Block): Promise<[k: [v2005.AccountId, Bytes], v: (v2005.Multisig | undefined)][]>
    getPairs(block: Block, key1: v2005.AccountId): Promise<[k: [v2005.AccountId, Bytes], v: (v2005.Multisig | undefined)][]>
    getPairs(block: Block, key1: v2005.AccountId, key2: Bytes): Promise<[k: [v2005.AccountId, Bytes], v: (v2005.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v2005.AccountId, Bytes], v: (v2005.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v2005.AccountId): AsyncIterable<[k: [v2005.AccountId, Bytes], v: (v2005.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v2005.AccountId, key2: Bytes): AsyncIterable<[k: [v2005.AccountId, Bytes], v: (v2005.Multisig | undefined)][]>
}

export const calls =  {
    v2011: new StorageType('Multisig.Calls', 'Optional', [sts.bytes()], sts.tuple(() => [sts.bytes(), v2011.AccountId, v2011.BalanceOf])) as CallsV2011,
}

export interface CallsV2011  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<([Bytes, v2011.AccountId, v2011.BalanceOf] | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<([Bytes, v2011.AccountId, v2011.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: ([Bytes, v2011.AccountId, v2011.BalanceOf] | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: ([Bytes, v2011.AccountId, v2011.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: ([Bytes, v2011.AccountId, v2011.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: ([Bytes, v2011.AccountId, v2011.BalanceOf] | undefined)][]>
}
