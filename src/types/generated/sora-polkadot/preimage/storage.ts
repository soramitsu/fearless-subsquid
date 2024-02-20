import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v10 from '../v10'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v10: new StorageType('Preimage.StatusFor', 'Optional', [v10.H256], v10.RequestStatus) as StatusForV10,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10.H256): Promise<(v10.RequestStatus | undefined)>
    getMany(block: Block, keys: v10.H256[]): Promise<(v10.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v10.H256[]>
    getKeys(block: Block, key: v10.H256): Promise<v10.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.H256): AsyncIterable<v10.H256[]>
    getPairs(block: Block): Promise<[k: v10.H256, v: (v10.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v10.H256): Promise<[k: v10.H256, v: (v10.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.H256, v: (v10.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.H256): AsyncIterable<[k: v10.H256, v: (v10.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    v10: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v10.H256, sts.number()])], sts.bytes()) as PreimageForV10,
}

export interface PreimageForV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v10.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v10.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v10.H256, number][]>
    getKeys(block: Block, key: [v10.H256, number]): Promise<[v10.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v10.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v10.H256, number]): AsyncIterable<[v10.H256, number][]>
    getPairs(block: Block): Promise<[k: [v10.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v10.H256, number]): Promise<[k: [v10.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v10.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v10.H256, number]): AsyncIterable<[k: [v10.H256, number], v: (Bytes | undefined)][]>
}
