import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1001002 from '../v1001002'

export const beefyAuthorities =  {
    /**
     *  Details of current BEEFY authority set.
     */
    v1001002: new StorageType('BeefyMmrLeaf.BeefyAuthorities', 'Default', [], v1001002.BeefyAuthoritySet) as BeefyAuthoritiesV1001002,
}

/**
 *  Details of current BEEFY authority set.
 */
export interface BeefyAuthoritiesV1001002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1001002.BeefyAuthoritySet
    get(block: Block): Promise<(v1001002.BeefyAuthoritySet | undefined)>
}

export const beefyNextAuthorities =  {
    /**
     *  Details of next BEEFY authority set.
     * 
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    v1001002: new StorageType('BeefyMmrLeaf.BeefyNextAuthorities', 'Default', [], v1001002.BeefyAuthoritySet) as BeefyNextAuthoritiesV1001002,
}

/**
 *  Details of next BEEFY authority set.
 * 
 *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
 */
export interface BeefyNextAuthoritiesV1001002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1001002.BeefyAuthoritySet
    get(block: Block): Promise<(v1001002.BeefyAuthoritySet | undefined)>
}
