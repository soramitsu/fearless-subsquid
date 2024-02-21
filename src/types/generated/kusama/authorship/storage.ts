import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v9111 from '../v9111'

export const uncles =  {
    /**
     *  Uncles
     */
    v1020: new StorageType('Authorship.Uncles', 'Default', [], sts.array(() => v1020.UncleEntryItem)) as UnclesV1020,
    /**
     *  Uncles
     */
    v9111: new StorageType('Authorship.Uncles', 'Default', [], sts.array(() => v9111.UncleEntryItem)) as UnclesV9111,
}

/**
 *  Uncles
 */
export interface UnclesV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.UncleEntryItem[]
    get(block: Block): Promise<(v1020.UncleEntryItem[] | undefined)>
}

/**
 *  Uncles
 */
export interface UnclesV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9111.UncleEntryItem[]
    get(block: Block): Promise<(v9111.UncleEntryItem[] | undefined)>
}

export const author =  {
    /**
     *  Author of current block.
     */
    v1020: new StorageType('Authorship.Author', 'Optional', [], v1020.AccountId) as AuthorV1020,
}

/**
 *  Author of current block.
 */
export interface AuthorV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1020.AccountId | undefined)>
}

export const didSetUncles =  {
    /**
     *  Whether uncles were already set in this block.
     */
    v1020: new StorageType('Authorship.DidSetUncles', 'Default', [], sts.boolean()) as DidSetUnclesV1020,
}

/**
 *  Whether uncles were already set in this block.
 */
export interface DidSetUnclesV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
