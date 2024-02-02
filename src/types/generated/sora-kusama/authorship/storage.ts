import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const uncles =  {
    /**
     *  Uncles
     */
    v1: new StorageType('Authorship.Uncles', 'Default', [], sts.array(() => v1.UncleEntryItem)) as UnclesV1,
}

/**
 *  Uncles
 */
export interface UnclesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.UncleEntryItem[]
    get(block: Block): Promise<(v1.UncleEntryItem[] | undefined)>
}

export const author =  {
    /**
     *  Author of current block.
     */
    v1: new StorageType('Authorship.Author', 'Optional', [], v1.AccountId32) as AuthorV1,
}

/**
 *  Author of current block.
 */
export interface AuthorV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.AccountId32 | undefined)>
}

export const didSetUncles =  {
    /**
     *  Whether uncles were already set in this block.
     */
    v1: new StorageType('Authorship.DidSetUncles', 'Default', [], sts.boolean()) as DidSetUnclesV1,
}

/**
 *  Whether uncles were already set in this block.
 */
export interface DidSetUnclesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
