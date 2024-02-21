import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9320 from '../v9320'

export const whitelistedCall =  {
    v9320: new StorageType('Whitelist.WhitelistedCall', 'Optional', [v9320.H256], sts.unit()) as WhitelistedCallV9320,
}

export interface WhitelistedCallV9320  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9320.H256): Promise<(null | undefined)>
    getMany(block: Block, keys: v9320.H256[]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<v9320.H256[]>
    getKeys(block: Block, key: v9320.H256): Promise<v9320.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9320.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9320.H256): AsyncIterable<v9320.H256[]>
    getPairs(block: Block): Promise<[k: v9320.H256, v: (null | undefined)][]>
    getPairs(block: Block, key: v9320.H256): Promise<[k: v9320.H256, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9320.H256, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9320.H256): AsyncIterable<[k: v9320.H256, v: (null | undefined)][]>
}
