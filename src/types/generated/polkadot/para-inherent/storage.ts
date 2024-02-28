import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9122 from '../v9122'

export const included =  {
    /**
     *  Whether the paras inherent was included within this block.
     * 
     *  The `Option<()>` is effectively a `bool`, but it never hits storage in the `None` variant
     *  due to the guarantees of FRAME's storage APIs.
     * 
     *  If this is `None` at the end of the block, we panic and render the block invalid.
     */
    v9110: new StorageType('ParaInherent.Included', 'Optional', [], sts.unit()) as IncludedV9110,
}

/**
 *  Whether the paras inherent was included within this block.
 * 
 *  The `Option<()>` is effectively a `bool`, but it never hits storage in the `None` variant
 *  due to the guarantees of FRAME's storage APIs.
 * 
 *  If this is `None` at the end of the block, we panic and render the block invalid.
 */
export interface IncludedV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(null | undefined)>
}

export const onChainVotes =  {
    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    v9122: new StorageType('ParaInherent.OnChainVotes', 'Optional', [], v9122.V1ScrapedOnChainVotes) as OnChainVotesV9122,
}

/**
 *  Scraped on chain data for extracting resolved disputes as well as backing votes.
 */
export interface OnChainVotesV9122  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9122.V1ScrapedOnChainVotes | undefined)>
}
