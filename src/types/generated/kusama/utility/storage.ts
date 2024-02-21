import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1032 from '../v1032'

export const multisigs =  {
    /**
     *  The set of open multisig operations.
     */
    v1032: new StorageType('Utility.Multisigs', 'Optional', [v1032.AccountId, sts.bytes()], v1032.Multisig) as MultisigsV1032,
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigsV1032  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1032.AccountId, key2: Bytes): Promise<(v1032.Multisig | undefined)>
    getMany(block: Block, keys: [v1032.AccountId, Bytes][]): Promise<(v1032.Multisig | undefined)[]>
    getKeys(block: Block): Promise<[v1032.AccountId, Bytes][]>
    getKeys(block: Block, key1: v1032.AccountId): Promise<[v1032.AccountId, Bytes][]>
    getKeys(block: Block, key1: v1032.AccountId, key2: Bytes): Promise<[v1032.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1032.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1032.AccountId): AsyncIterable<[v1032.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1032.AccountId, key2: Bytes): AsyncIterable<[v1032.AccountId, Bytes][]>
    getPairs(block: Block): Promise<[k: [v1032.AccountId, Bytes], v: (v1032.Multisig | undefined)][]>
    getPairs(block: Block, key1: v1032.AccountId): Promise<[k: [v1032.AccountId, Bytes], v: (v1032.Multisig | undefined)][]>
    getPairs(block: Block, key1: v1032.AccountId, key2: Bytes): Promise<[k: [v1032.AccountId, Bytes], v: (v1032.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1032.AccountId, Bytes], v: (v1032.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1032.AccountId): AsyncIterable<[k: [v1032.AccountId, Bytes], v: (v1032.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1032.AccountId, key2: Bytes): AsyncIterable<[k: [v1032.AccountId, Bytes], v: (v1032.Multisig | undefined)][]>
}
