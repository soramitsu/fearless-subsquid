import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'
import * as v1000000 from '../v1000000'

export const currentSessionIndex =  {
    /**
     *  The current session index.
     */
    v9010: new StorageType('ParasShared.CurrentSessionIndex', 'Default', [], v9010.SessionIndex) as CurrentSessionIndexV9010,
}

/**
 *  The current session index.
 */
export interface CurrentSessionIndexV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.SessionIndex
    get(block: Block): Promise<(v9010.SessionIndex | undefined)>
}

export const activeValidatorIndices =  {
    /**
     *  All the validators actively participating in parachain consensus.
     *  Indices are into the broader validator set.
     */
    v9010: new StorageType('ParasShared.ActiveValidatorIndices', 'Default', [], sts.array(() => v9010.ParaValidatorIndex)) as ActiveValidatorIndicesV9010,
}

/**
 *  All the validators actively participating in parachain consensus.
 *  Indices are into the broader validator set.
 */
export interface ActiveValidatorIndicesV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.ParaValidatorIndex[]
    get(block: Block): Promise<(v9010.ParaValidatorIndex[] | undefined)>
}

export const activeValidatorKeys =  {
    /**
     *  The parachain attestation keys of the validators actively participating in parachain consensus.
     *  This should be the same length as `ActiveValidatorIndices`.
     */
    v9010: new StorageType('ParasShared.ActiveValidatorKeys', 'Default', [], sts.array(() => v9010.ValidatorId)) as ActiveValidatorKeysV9010,
}

/**
 *  The parachain attestation keys of the validators actively participating in parachain consensus.
 *  This should be the same length as `ActiveValidatorIndices`.
 */
export interface ActiveValidatorKeysV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.ValidatorId[]
    get(block: Block): Promise<(v9010.ValidatorId[] | undefined)>
}

export const allowedRelayParents =  {
    /**
     *  All allowed relay-parents.
     */
    v1000000: new StorageType('ParasShared.AllowedRelayParents', 'Default', [], v1000000.AllowedRelayParentsTracker) as AllowedRelayParentsV1000000,
}

/**
 *  All allowed relay-parents.
 */
export interface AllowedRelayParentsV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1000000.AllowedRelayParentsTracker
    get(block: Block): Promise<(v1000000.AllowedRelayParentsTracker | undefined)>
}
