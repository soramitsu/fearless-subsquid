import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'

export const whitelistedCall =  {
    v9420: new StorageType('Whitelist.WhitelistedCall', 'Optional', [v9420.H256], sts.unit()) as WhitelistedCallV9420,
}

export interface WhitelistedCallV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9420.H256): Promise<(null | undefined)>
    getMany(block: Block, keys: v9420.H256[]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<v9420.H256[]>
    getKeys(block: Block, key: v9420.H256): Promise<v9420.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.H256): AsyncIterable<v9420.H256[]>
    getPairs(block: Block): Promise<[k: v9420.H256, v: (null | undefined)][]>
    getPairs(block: Block, key: v9420.H256): Promise<[k: v9420.H256, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.H256, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.H256): AsyncIterable<[k: v9420.H256, v: (null | undefined)][]>
}
