import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'

export const multisigs =  {
    /**
     *  The set of open multisig operations.
     */
    v0: new StorageType('Utility.Multisigs', 'Optional', [v0.AccountId, sts.bytes()], v0.Multisig) as MultisigsV0,
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v0.AccountId, key2: Bytes): Promise<(v0.Multisig | undefined)>
    getMany(block: Block, keys: [v0.AccountId, Bytes][]): Promise<(v0.Multisig | undefined)[]>
    getKeys(block: Block): Promise<[v0.AccountId, Bytes][]>
    getKeys(block: Block, key1: v0.AccountId): Promise<[v0.AccountId, Bytes][]>
    getKeys(block: Block, key1: v0.AccountId, key2: Bytes): Promise<[v0.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v0.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.AccountId): AsyncIterable<[v0.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.AccountId, key2: Bytes): AsyncIterable<[v0.AccountId, Bytes][]>
    getPairs(block: Block): Promise<[k: [v0.AccountId, Bytes], v: (v0.Multisig | undefined)][]>
    getPairs(block: Block, key1: v0.AccountId): Promise<[k: [v0.AccountId, Bytes], v: (v0.Multisig | undefined)][]>
    getPairs(block: Block, key1: v0.AccountId, key2: Bytes): Promise<[k: [v0.AccountId, Bytes], v: (v0.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v0.AccountId, Bytes], v: (v0.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.AccountId): AsyncIterable<[k: [v0.AccountId, Bytes], v: (v0.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.AccountId, key2: Bytes): AsyncIterable<[k: [v0.AccountId, Bytes], v: (v0.Multisig | undefined)][]>
}
