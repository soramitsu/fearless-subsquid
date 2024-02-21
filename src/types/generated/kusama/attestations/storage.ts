import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'

export const recentParaBlocks =  {
    /**
     *  A mapping from modular block number (n % AttestationPeriod)
     *  to session index and the list of candidate hashes.
     */
    v1020: new StorageType('Attestations.RecentParaBlocks', 'Optional', [v1020.BlockNumber], v1020.IncludedBlocks) as RecentParaBlocksV1020,
}

/**
 *  A mapping from modular block number (n % AttestationPeriod)
 *  to session index and the list of candidate hashes.
 */
export interface RecentParaBlocksV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.BlockNumber): Promise<(v1020.IncludedBlocks | undefined)>
    getMany(block: Block, keys: v1020.BlockNumber[]): Promise<(v1020.IncludedBlocks | undefined)[]>
}

export const paraBlockAttestations =  {
    /**
     *  Attestations on a recent parachain block.
     */
    v1020: new StorageType('Attestations.ParaBlockAttestations', 'Optional', [v1020.BlockNumber, v1020.Hash], v1020.BlockAttestations) as ParaBlockAttestationsV1020,
}

/**
 *  Attestations on a recent parachain block.
 */
export interface ParaBlockAttestationsV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1020.BlockNumber, key2: v1020.Hash): Promise<(v1020.BlockAttestations | undefined)>
    getMany(block: Block, keys: [v1020.BlockNumber, v1020.Hash][]): Promise<(v1020.BlockAttestations | undefined)[]>
}

export const didUpdate =  {
    v1020: new StorageType('Attestations.DidUpdate', 'Default', [], sts.boolean()) as DidUpdateV1020,
}

export interface DidUpdateV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
