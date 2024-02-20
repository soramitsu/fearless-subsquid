import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'

export const authorities =  {
    /**
     *  Serves as cache for the authorities.
     * 
     *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
     *  but we require the old authorities to verify the seal when validating a PoV. This will always
     *  be updated to the latest AuRa authorities in `on_finalize`.
     */
    v1: new StorageType('AuraExt.Authorities', 'Default', [], sts.array(() => sts.bytes())) as AuthoritiesV1,
}

/**
 *  Serves as cache for the authorities.
 * 
 *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
 *  but we require the old authorities to verify the seal when validating a PoV. This will always
 *  be updated to the latest AuRa authorities in `on_finalize`.
 */
export interface AuthoritiesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<(Bytes[] | undefined)>
}
