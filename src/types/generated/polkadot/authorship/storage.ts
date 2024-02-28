import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9110 from '../v9110'

export const uncles =  {
    /**
     *  Uncles
     */
    v0: new StorageType('Authorship.Uncles', 'Default', [], sts.array(() => v0.UncleEntryItem)) as UnclesV0,
    /**
     *  Uncles
     */
    v9110: new StorageType('Authorship.Uncles', 'Default', [], sts.array(() => v9110.UncleEntryItem)) as UnclesV9110,
}

/**
 *  Uncles
 */
export interface UnclesV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.UncleEntryItem[]
    get(block: Block): Promise<(v0.UncleEntryItem[] | undefined)>
}

/**
 *  Uncles
 */
export interface UnclesV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.UncleEntryItem[]
    get(block: Block): Promise<(v9110.UncleEntryItem[] | undefined)>
}

export const author =  {
    /**
     *  Author of current block.
     */
    v0: new StorageType('Authorship.Author', 'Optional', [], v0.AccountId) as AuthorV0,
}

/**
 *  Author of current block.
 */
export interface AuthorV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.AccountId | undefined)>
}

export const didSetUncles =  {
    /**
     *  Whether uncles were already set in this block.
     */
    v0: new StorageType('Authorship.DidSetUncles', 'Default', [], sts.boolean()) as DidSetUnclesV0,
}

/**
 *  Whether uncles were already set in this block.
 */
export interface DidSetUnclesV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
