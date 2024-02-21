import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'

export const included =  {
    /**
     *  Whether the paras inherent was included within this block.
     * 
     *  The `Option<()>` is effectively a bool, but it never hits storage in the `None` variant
     *  due to the guarantees of FRAME's storage APIs.
     * 
     *  If this is `None` at the end of the block, we panic and render the block invalid.
     */
    v9010: new StorageType('ParaInherent.Included', 'Optional', [], sts.unit()) as IncludedV9010,
}

/**
 *  Whether the paras inherent was included within this block.
 * 
 *  The `Option<()>` is effectively a bool, but it never hits storage in the `None` variant
 *  due to the guarantees of FRAME's storage APIs.
 * 
 *  If this is `None` at the end of the block, we panic and render the block invalid.
 */
export interface IncludedV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(null | undefined)>
}
