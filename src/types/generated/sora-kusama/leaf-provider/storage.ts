import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const latestDigest =  {
    /**
     *  Latest digest
     */
    v7: new StorageType('LeafProvider.LatestDigest', 'Optional', [], sts.array(() => v7.AuxiliaryDigestItem)) as LatestDigestV7,
}

/**
 *  Latest digest
 */
export interface LatestDigestV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v7.AuxiliaryDigestItem[] | undefined)>
}
