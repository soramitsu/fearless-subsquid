import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'

export const now =  {
    /**
     *  Current time for the current block.
     */
    v1020: new StorageType('Timestamp.Now', 'Default', [], v1020.Moment) as NowV1020,
}

/**
 *  Current time for the current block.
 */
export interface NowV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.Moment
    get(block: Block): Promise<(v1020.Moment | undefined)>
}

export const didUpdate =  {
    /**
     *  Did the timestamp get updated in this block?
     */
    v1020: new StorageType('Timestamp.DidUpdate', 'Default', [], sts.boolean()) as DidUpdateV1020,
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface DidUpdateV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
