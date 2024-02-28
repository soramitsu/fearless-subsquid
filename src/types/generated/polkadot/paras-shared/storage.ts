import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'
import * as v1000001 from '../v1000001'

export const currentSessionIndex =  {
    /**
     *  The current session index.
     */
    v9110: new StorageType('ParasShared.CurrentSessionIndex', 'Default', [], sts.number()) as CurrentSessionIndexV9110,
}

/**
 *  The current session index.
 */
export interface CurrentSessionIndexV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const activeValidatorIndices =  {
    /**
     *  All the validators actively participating in parachain consensus.
     *  Indices are into the broader validator set.
     */
    v9110: new StorageType('ParasShared.ActiveValidatorIndices', 'Default', [], sts.array(() => v9110.V0ValidatorIndex)) as ActiveValidatorIndicesV9110,
}

/**
 *  All the validators actively participating in parachain consensus.
 *  Indices are into the broader validator set.
 */
export interface ActiveValidatorIndicesV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.V0ValidatorIndex[]
    get(block: Block): Promise<(v9110.V0ValidatorIndex[] | undefined)>
}

export const activeValidatorKeys =  {
    /**
     *  The parachain attestation keys of the validators actively participating in parachain consensus.
     *  This should be the same length as `ActiveValidatorIndices`.
     */
    v9110: new StorageType('ParasShared.ActiveValidatorKeys', 'Default', [], sts.array(() => sts.bytes())) as ActiveValidatorKeysV9110,
}

/**
 *  The parachain attestation keys of the validators actively participating in parachain consensus.
 *  This should be the same length as `ActiveValidatorIndices`.
 */
export interface ActiveValidatorKeysV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<(Bytes[] | undefined)>
}

export const allowedRelayParents =  {
    /**
     *  All allowed relay-parents.
     */
    v1000001: new StorageType('ParasShared.AllowedRelayParents', 'Default', [], v1000001.AllowedRelayParentsTracker) as AllowedRelayParentsV1000001,
}

/**
 *  All allowed relay-parents.
 */
export interface AllowedRelayParentsV1000001  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1000001.AllowedRelayParentsTracker
    get(block: Block): Promise<(v1000001.AllowedRelayParentsTracker | undefined)>
}
