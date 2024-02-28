import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v5 from '../v5'
import * as v10 from '../v10'

export const multisigs =  {
    /**
     *  The set of open multisig operations.
     */
    v5: new StorageType('Multisig.Multisigs', 'Optional', [v5.AccountId, sts.bytes()], v5.Multisig) as MultisigsV5,
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigsV5  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v5.AccountId, key2: Bytes): Promise<(v5.Multisig | undefined)>
    getMany(block: Block, keys: [v5.AccountId, Bytes][]): Promise<(v5.Multisig | undefined)[]>
    getKeys(block: Block): Promise<[v5.AccountId, Bytes][]>
    getKeys(block: Block, key1: v5.AccountId): Promise<[v5.AccountId, Bytes][]>
    getKeys(block: Block, key1: v5.AccountId, key2: Bytes): Promise<[v5.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v5.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v5.AccountId): AsyncIterable<[v5.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v5.AccountId, key2: Bytes): AsyncIterable<[v5.AccountId, Bytes][]>
    getPairs(block: Block): Promise<[k: [v5.AccountId, Bytes], v: (v5.Multisig | undefined)][]>
    getPairs(block: Block, key1: v5.AccountId): Promise<[k: [v5.AccountId, Bytes], v: (v5.Multisig | undefined)][]>
    getPairs(block: Block, key1: v5.AccountId, key2: Bytes): Promise<[k: [v5.AccountId, Bytes], v: (v5.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v5.AccountId, Bytes], v: (v5.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v5.AccountId): AsyncIterable<[k: [v5.AccountId, Bytes], v: (v5.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v5.AccountId, key2: Bytes): AsyncIterable<[k: [v5.AccountId, Bytes], v: (v5.Multisig | undefined)][]>
}

export const calls =  {
    v10: new StorageType('Multisig.Calls', 'Optional', [sts.bytes()], sts.tuple(() => [sts.bytes(), v10.AccountId, v10.BalanceOf])) as CallsV10,
}

export interface CallsV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<([Bytes, v10.AccountId, v10.BalanceOf] | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<([Bytes, v10.AccountId, v10.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: ([Bytes, v10.AccountId, v10.BalanceOf] | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: ([Bytes, v10.AccountId, v10.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: ([Bytes, v10.AccountId, v10.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: ([Bytes, v10.AccountId, v10.BalanceOf] | undefined)][]>
}
