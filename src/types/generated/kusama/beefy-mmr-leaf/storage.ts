import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1000000 from '../v1000000'

export const beefyAuthorities =  {
    /**
     *  Details of current BEEFY authority set.
     */
    v1000000: new StorageType('BeefyMmrLeaf.BeefyAuthorities', 'Default', [], v1000000.BeefyAuthoritySet) as BeefyAuthoritiesV1000000,
}

/**
 *  Details of current BEEFY authority set.
 */
export interface BeefyAuthoritiesV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1000000.BeefyAuthoritySet
    get(block: Block): Promise<(v1000000.BeefyAuthoritySet | undefined)>
}

export const beefyNextAuthorities =  {
    /**
     *  Details of next BEEFY authority set.
     * 
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    v1000000: new StorageType('BeefyMmrLeaf.BeefyNextAuthorities', 'Default', [], v1000000.BeefyAuthoritySet) as BeefyNextAuthoritiesV1000000,
}

/**
 *  Details of next BEEFY authority set.
 * 
 *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
 */
export interface BeefyNextAuthoritiesV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1000000.BeefyAuthoritySet
    get(block: Block): Promise<(v1000000.BeefyAuthoritySet | undefined)>
}
