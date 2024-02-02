import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const latestMmrRoots =  {
    v7: new StorageType('BeefyLightClient.LatestMMRRoots', 'Default', [v7.SubNetworkId], sts.array(() => v7.H256)) as LatestMmrRootsV7,
}

export interface LatestMmrRootsV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v7.H256[]
    get(block: Block, key: v7.SubNetworkId): Promise<(v7.H256[] | undefined)>
    getMany(block: Block, keys: v7.SubNetworkId[]): Promise<(v7.H256[] | undefined)[]>
    getKeys(block: Block): Promise<v7.SubNetworkId[]>
    getKeys(block: Block, key: v7.SubNetworkId): Promise<v7.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.SubNetworkId): AsyncIterable<v7.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v7.SubNetworkId, v: (v7.H256[] | undefined)][]>
    getPairs(block: Block, key: v7.SubNetworkId): Promise<[k: v7.SubNetworkId, v: (v7.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.SubNetworkId, v: (v7.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.SubNetworkId): AsyncIterable<[k: v7.SubNetworkId, v: (v7.H256[] | undefined)][]>
}

export const latestBeefyBlock =  {
    v7: new StorageType('BeefyLightClient.LatestBeefyBlock', 'Default', [v7.SubNetworkId], sts.bigint()) as LatestBeefyBlockV7,
}

export interface LatestBeefyBlockV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v7.SubNetworkId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v7.SubNetworkId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v7.SubNetworkId[]>
    getKeys(block: Block, key: v7.SubNetworkId): Promise<v7.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.SubNetworkId): AsyncIterable<v7.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v7.SubNetworkId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v7.SubNetworkId): Promise<[k: v7.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.SubNetworkId): AsyncIterable<[k: v7.SubNetworkId, v: (bigint | undefined)][]>
}

export const latestRandomSeed =  {
    v7: new StorageType('BeefyLightClient.LatestRandomSeed', 'Default', [v7.SubNetworkId], sts.tuple(() => [v7.H256, sts.number()])) as LatestRandomSeedV7,
}

export interface LatestRandomSeedV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v7.H256, number]
    get(block: Block, key: v7.SubNetworkId): Promise<([v7.H256, number] | undefined)>
    getMany(block: Block, keys: v7.SubNetworkId[]): Promise<([v7.H256, number] | undefined)[]>
    getKeys(block: Block): Promise<v7.SubNetworkId[]>
    getKeys(block: Block, key: v7.SubNetworkId): Promise<v7.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.SubNetworkId): AsyncIterable<v7.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v7.SubNetworkId, v: ([v7.H256, number] | undefined)][]>
    getPairs(block: Block, key: v7.SubNetworkId): Promise<[k: v7.SubNetworkId, v: ([v7.H256, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.SubNetworkId, v: ([v7.H256, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.SubNetworkId): AsyncIterable<[k: v7.SubNetworkId, v: ([v7.H256, number] | undefined)][]>
}

export const currentValidatorSet =  {
    v7: new StorageType('BeefyLightClient.CurrentValidatorSet', 'Optional', [v7.SubNetworkId], v7.BeefyAuthoritySet) as CurrentValidatorSetV7,
}

export interface CurrentValidatorSetV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.SubNetworkId): Promise<(v7.BeefyAuthoritySet | undefined)>
    getMany(block: Block, keys: v7.SubNetworkId[]): Promise<(v7.BeefyAuthoritySet | undefined)[]>
    getKeys(block: Block): Promise<v7.SubNetworkId[]>
    getKeys(block: Block, key: v7.SubNetworkId): Promise<v7.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.SubNetworkId): AsyncIterable<v7.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v7.SubNetworkId, v: (v7.BeefyAuthoritySet | undefined)][]>
    getPairs(block: Block, key: v7.SubNetworkId): Promise<[k: v7.SubNetworkId, v: (v7.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.SubNetworkId, v: (v7.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.SubNetworkId): AsyncIterable<[k: v7.SubNetworkId, v: (v7.BeefyAuthoritySet | undefined)][]>
}

export const nextValidatorSet =  {
    v7: new StorageType('BeefyLightClient.NextValidatorSet', 'Optional', [v7.SubNetworkId], v7.BeefyAuthoritySet) as NextValidatorSetV7,
}

export interface NextValidatorSetV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.SubNetworkId): Promise<(v7.BeefyAuthoritySet | undefined)>
    getMany(block: Block, keys: v7.SubNetworkId[]): Promise<(v7.BeefyAuthoritySet | undefined)[]>
    getKeys(block: Block): Promise<v7.SubNetworkId[]>
    getKeys(block: Block, key: v7.SubNetworkId): Promise<v7.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.SubNetworkId): AsyncIterable<v7.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v7.SubNetworkId, v: (v7.BeefyAuthoritySet | undefined)][]>
    getPairs(block: Block, key: v7.SubNetworkId): Promise<[k: v7.SubNetworkId, v: (v7.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.SubNetworkId, v: (v7.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.SubNetworkId): AsyncIterable<[k: v7.SubNetworkId, v: (v7.BeefyAuthoritySet | undefined)][]>
}

export const thisNetworkId =  {
    v7: new StorageType('BeefyLightClient.ThisNetworkId', 'Default', [], v7.SubNetworkId) as ThisNetworkIdV7,
}

export interface ThisNetworkIdV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v7.SubNetworkId
    get(block: Block): Promise<(v7.SubNetworkId | undefined)>
}
