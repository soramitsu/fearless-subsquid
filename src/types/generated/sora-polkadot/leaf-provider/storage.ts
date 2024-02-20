import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v10 from '../v10'

export const latestDigest =  {
    /**
     *  Latest digest
     */
    v1: new StorageType('LeafProvider.LatestDigest', 'Optional', [], sts.array(() => v1.AuxiliaryDigestItem)) as LatestDigestV1,
    /**
     *  Latest digest
     */
    v10: new StorageType('LeafProvider.LatestDigest', 'Optional', [], sts.array(() => v10.AuxiliaryDigestItem)) as LatestDigestV10,
}

/**
 *  Latest digest
 */
export interface LatestDigestV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.AuxiliaryDigestItem[] | undefined)>
}

/**
 *  Latest digest
 */
export interface LatestDigestV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v10.AuxiliaryDigestItem[] | undefined)>
}
