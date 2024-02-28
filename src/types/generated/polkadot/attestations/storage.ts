import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'

export const recentParaBlocks =  {
    /**
     *  A mapping from modular block number (n % AttestationPeriod)
     *  to session index and the list of candidate hashes.
     */
    v0: new StorageType('Attestations.RecentParaBlocks', 'Optional', [v0.BlockNumber], v0.IncludedBlocks) as RecentParaBlocksV0,
}

/**
 *  A mapping from modular block number (n % AttestationPeriod)
 *  to session index and the list of candidate hashes.
 */
export interface RecentParaBlocksV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.BlockNumber): Promise<(v0.IncludedBlocks | undefined)>
    getMany(block: Block, keys: v0.BlockNumber[]): Promise<(v0.IncludedBlocks | undefined)[]>
    getKeys(block: Block): Promise<v0.BlockNumber[]>
    getKeys(block: Block, key: v0.BlockNumber): Promise<v0.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.BlockNumber): AsyncIterable<v0.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v0.BlockNumber, v: (v0.IncludedBlocks | undefined)][]>
    getPairs(block: Block, key: v0.BlockNumber): Promise<[k: v0.BlockNumber, v: (v0.IncludedBlocks | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.BlockNumber, v: (v0.IncludedBlocks | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.BlockNumber): AsyncIterable<[k: v0.BlockNumber, v: (v0.IncludedBlocks | undefined)][]>
}

export const paraBlockAttestations =  {
    /**
     *  Attestations on a recent parachain block.
     */
    v0: new StorageType('Attestations.ParaBlockAttestations', 'Optional', [v0.BlockNumber, v0.Hash], v0.BlockAttestations) as ParaBlockAttestationsV0,
}

/**
 *  Attestations on a recent parachain block.
 */
export interface ParaBlockAttestationsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v0.BlockNumber, key2: v0.Hash): Promise<(v0.BlockAttestations | undefined)>
    getMany(block: Block, keys: [v0.BlockNumber, v0.Hash][]): Promise<(v0.BlockAttestations | undefined)[]>
    getKeys(block: Block): Promise<[v0.BlockNumber, v0.Hash][]>
    getKeys(block: Block, key1: v0.BlockNumber): Promise<[v0.BlockNumber, v0.Hash][]>
    getKeys(block: Block, key1: v0.BlockNumber, key2: v0.Hash): Promise<[v0.BlockNumber, v0.Hash][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v0.BlockNumber, v0.Hash][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.BlockNumber): AsyncIterable<[v0.BlockNumber, v0.Hash][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.BlockNumber, key2: v0.Hash): AsyncIterable<[v0.BlockNumber, v0.Hash][]>
    getPairs(block: Block): Promise<[k: [v0.BlockNumber, v0.Hash], v: (v0.BlockAttestations | undefined)][]>
    getPairs(block: Block, key1: v0.BlockNumber): Promise<[k: [v0.BlockNumber, v0.Hash], v: (v0.BlockAttestations | undefined)][]>
    getPairs(block: Block, key1: v0.BlockNumber, key2: v0.Hash): Promise<[k: [v0.BlockNumber, v0.Hash], v: (v0.BlockAttestations | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v0.BlockNumber, v0.Hash], v: (v0.BlockAttestations | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.BlockNumber): AsyncIterable<[k: [v0.BlockNumber, v0.Hash], v: (v0.BlockAttestations | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.BlockNumber, key2: v0.Hash): AsyncIterable<[k: [v0.BlockNumber, v0.Hash], v: (v0.BlockAttestations | undefined)][]>
}

export const didUpdate =  {
    v0: new StorageType('Attestations.DidUpdate', 'Default', [], sts.boolean()) as DidUpdateV0,
}

export interface DidUpdateV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
