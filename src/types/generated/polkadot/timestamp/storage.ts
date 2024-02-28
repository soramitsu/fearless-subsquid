import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'

export const now =  {
    /**
     *  Current time for the current block.
     */
    v0: new StorageType('Timestamp.Now', 'Default', [], v0.Moment) as NowV0,
}

/**
 *  Current time for the current block.
 */
export interface NowV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Moment
    get(block: Block): Promise<(v0.Moment | undefined)>
}

export const didUpdate =  {
    /**
     *  Did the timestamp get updated in this block?
     */
    v0: new StorageType('Timestamp.DidUpdate', 'Default', [], sts.boolean()) as DidUpdateV0,
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface DidUpdateV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
