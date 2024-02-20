import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v10 from '../v10'

export const latestMmrRoots =  {
    v1: new StorageType('BeefyLightClient.LatestMMRRoots', 'Default', [v1.SubNetworkId], sts.array(() => v1.H256)) as LatestMmrRootsV1,
    v10: new StorageType('BeefyLightClient.LatestMMRRoots', 'Default', [v10.SubNetworkId], sts.array(() => v10.H256)) as LatestMmrRootsV10,
}

export interface LatestMmrRootsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.H256[]
    get(block: Block, key: v1.SubNetworkId): Promise<(v1.H256[] | undefined)>
    getMany(block: Block, keys: v1.SubNetworkId[]): Promise<(v1.H256[] | undefined)[]>
    getKeys(block: Block): Promise<v1.SubNetworkId[]>
    getKeys(block: Block, key: v1.SubNetworkId): Promise<v1.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.SubNetworkId): AsyncIterable<v1.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v1.SubNetworkId, v: (v1.H256[] | undefined)][]>
    getPairs(block: Block, key: v1.SubNetworkId): Promise<[k: v1.SubNetworkId, v: (v1.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.SubNetworkId, v: (v1.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.SubNetworkId): AsyncIterable<[k: v1.SubNetworkId, v: (v1.H256[] | undefined)][]>
}

export interface LatestMmrRootsV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v10.H256[]
    get(block: Block, key: v10.SubNetworkId): Promise<(v10.H256[] | undefined)>
    getMany(block: Block, keys: v10.SubNetworkId[]): Promise<(v10.H256[] | undefined)[]>
    getKeys(block: Block): Promise<v10.SubNetworkId[]>
    getKeys(block: Block, key: v10.SubNetworkId): Promise<v10.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.SubNetworkId): AsyncIterable<v10.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v10.SubNetworkId, v: (v10.H256[] | undefined)][]>
    getPairs(block: Block, key: v10.SubNetworkId): Promise<[k: v10.SubNetworkId, v: (v10.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.SubNetworkId, v: (v10.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.SubNetworkId): AsyncIterable<[k: v10.SubNetworkId, v: (v10.H256[] | undefined)][]>
}

export const latestBeefyBlock =  {
    v1: new StorageType('BeefyLightClient.LatestBeefyBlock', 'Default', [v1.SubNetworkId], sts.bigint()) as LatestBeefyBlockV1,
    v10: new StorageType('BeefyLightClient.LatestBeefyBlock', 'Default', [v10.SubNetworkId], sts.bigint()) as LatestBeefyBlockV10,
}

export interface LatestBeefyBlockV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v1.SubNetworkId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v1.SubNetworkId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v1.SubNetworkId[]>
    getKeys(block: Block, key: v1.SubNetworkId): Promise<v1.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.SubNetworkId): AsyncIterable<v1.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v1.SubNetworkId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v1.SubNetworkId): Promise<[k: v1.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.SubNetworkId): AsyncIterable<[k: v1.SubNetworkId, v: (bigint | undefined)][]>
}

export interface LatestBeefyBlockV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v10.SubNetworkId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v10.SubNetworkId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v10.SubNetworkId[]>
    getKeys(block: Block, key: v10.SubNetworkId): Promise<v10.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.SubNetworkId): AsyncIterable<v10.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v10.SubNetworkId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v10.SubNetworkId): Promise<[k: v10.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.SubNetworkId): AsyncIterable<[k: v10.SubNetworkId, v: (bigint | undefined)][]>
}

export const latestRandomSeed =  {
    v1: new StorageType('BeefyLightClient.LatestRandomSeed', 'Default', [v1.SubNetworkId], sts.tuple(() => [v1.H256, sts.number()])) as LatestRandomSeedV1,
    v10: new StorageType('BeefyLightClient.LatestRandomSeed', 'Default', [v10.SubNetworkId], sts.tuple(() => [v10.H256, sts.number()])) as LatestRandomSeedV10,
}

export interface LatestRandomSeedV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1.H256, number]
    get(block: Block, key: v1.SubNetworkId): Promise<([v1.H256, number] | undefined)>
    getMany(block: Block, keys: v1.SubNetworkId[]): Promise<([v1.H256, number] | undefined)[]>
    getKeys(block: Block): Promise<v1.SubNetworkId[]>
    getKeys(block: Block, key: v1.SubNetworkId): Promise<v1.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.SubNetworkId): AsyncIterable<v1.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v1.SubNetworkId, v: ([v1.H256, number] | undefined)][]>
    getPairs(block: Block, key: v1.SubNetworkId): Promise<[k: v1.SubNetworkId, v: ([v1.H256, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.SubNetworkId, v: ([v1.H256, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.SubNetworkId): AsyncIterable<[k: v1.SubNetworkId, v: ([v1.H256, number] | undefined)][]>
}

export interface LatestRandomSeedV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v10.H256, number]
    get(block: Block, key: v10.SubNetworkId): Promise<([v10.H256, number] | undefined)>
    getMany(block: Block, keys: v10.SubNetworkId[]): Promise<([v10.H256, number] | undefined)[]>
    getKeys(block: Block): Promise<v10.SubNetworkId[]>
    getKeys(block: Block, key: v10.SubNetworkId): Promise<v10.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.SubNetworkId): AsyncIterable<v10.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v10.SubNetworkId, v: ([v10.H256, number] | undefined)][]>
    getPairs(block: Block, key: v10.SubNetworkId): Promise<[k: v10.SubNetworkId, v: ([v10.H256, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.SubNetworkId, v: ([v10.H256, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.SubNetworkId): AsyncIterable<[k: v10.SubNetworkId, v: ([v10.H256, number] | undefined)][]>
}

export const currentValidatorSet =  {
    v1: new StorageType('BeefyLightClient.CurrentValidatorSet', 'Optional', [v1.SubNetworkId], v1.BeefyAuthoritySet) as CurrentValidatorSetV1,
    v10: new StorageType('BeefyLightClient.CurrentValidatorSet', 'Optional', [v10.SubNetworkId], v10.BeefyAuthoritySet) as CurrentValidatorSetV10,
}

export interface CurrentValidatorSetV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.SubNetworkId): Promise<(v1.BeefyAuthoritySet | undefined)>
    getMany(block: Block, keys: v1.SubNetworkId[]): Promise<(v1.BeefyAuthoritySet | undefined)[]>
    getKeys(block: Block): Promise<v1.SubNetworkId[]>
    getKeys(block: Block, key: v1.SubNetworkId): Promise<v1.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.SubNetworkId): AsyncIterable<v1.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v1.SubNetworkId, v: (v1.BeefyAuthoritySet | undefined)][]>
    getPairs(block: Block, key: v1.SubNetworkId): Promise<[k: v1.SubNetworkId, v: (v1.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.SubNetworkId, v: (v1.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.SubNetworkId): AsyncIterable<[k: v1.SubNetworkId, v: (v1.BeefyAuthoritySet | undefined)][]>
}

export interface CurrentValidatorSetV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10.SubNetworkId): Promise<(v10.BeefyAuthoritySet | undefined)>
    getMany(block: Block, keys: v10.SubNetworkId[]): Promise<(v10.BeefyAuthoritySet | undefined)[]>
    getKeys(block: Block): Promise<v10.SubNetworkId[]>
    getKeys(block: Block, key: v10.SubNetworkId): Promise<v10.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.SubNetworkId): AsyncIterable<v10.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v10.SubNetworkId, v: (v10.BeefyAuthoritySet | undefined)][]>
    getPairs(block: Block, key: v10.SubNetworkId): Promise<[k: v10.SubNetworkId, v: (v10.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.SubNetworkId, v: (v10.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.SubNetworkId): AsyncIterable<[k: v10.SubNetworkId, v: (v10.BeefyAuthoritySet | undefined)][]>
}

export const nextValidatorSet =  {
    v1: new StorageType('BeefyLightClient.NextValidatorSet', 'Optional', [v1.SubNetworkId], v1.BeefyAuthoritySet) as NextValidatorSetV1,
    v10: new StorageType('BeefyLightClient.NextValidatorSet', 'Optional', [v10.SubNetworkId], v10.BeefyAuthoritySet) as NextValidatorSetV10,
}

export interface NextValidatorSetV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.SubNetworkId): Promise<(v1.BeefyAuthoritySet | undefined)>
    getMany(block: Block, keys: v1.SubNetworkId[]): Promise<(v1.BeefyAuthoritySet | undefined)[]>
    getKeys(block: Block): Promise<v1.SubNetworkId[]>
    getKeys(block: Block, key: v1.SubNetworkId): Promise<v1.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.SubNetworkId): AsyncIterable<v1.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v1.SubNetworkId, v: (v1.BeefyAuthoritySet | undefined)][]>
    getPairs(block: Block, key: v1.SubNetworkId): Promise<[k: v1.SubNetworkId, v: (v1.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.SubNetworkId, v: (v1.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.SubNetworkId): AsyncIterable<[k: v1.SubNetworkId, v: (v1.BeefyAuthoritySet | undefined)][]>
}

export interface NextValidatorSetV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10.SubNetworkId): Promise<(v10.BeefyAuthoritySet | undefined)>
    getMany(block: Block, keys: v10.SubNetworkId[]): Promise<(v10.BeefyAuthoritySet | undefined)[]>
    getKeys(block: Block): Promise<v10.SubNetworkId[]>
    getKeys(block: Block, key: v10.SubNetworkId): Promise<v10.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.SubNetworkId): AsyncIterable<v10.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v10.SubNetworkId, v: (v10.BeefyAuthoritySet | undefined)][]>
    getPairs(block: Block, key: v10.SubNetworkId): Promise<[k: v10.SubNetworkId, v: (v10.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.SubNetworkId, v: (v10.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.SubNetworkId): AsyncIterable<[k: v10.SubNetworkId, v: (v10.BeefyAuthoritySet | undefined)][]>
}

export const thisNetworkId =  {
    v1: new StorageType('BeefyLightClient.ThisNetworkId', 'Default', [], v1.SubNetworkId) as ThisNetworkIdV1,
    v10: new StorageType('BeefyLightClient.ThisNetworkId', 'Default', [], v10.SubNetworkId) as ThisNetworkIdV10,
}

export interface ThisNetworkIdV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.SubNetworkId
    get(block: Block): Promise<(v1.SubNetworkId | undefined)>
}

export interface ThisNetworkIdV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v10.SubNetworkId
    get(block: Block): Promise<(v10.SubNetworkId | undefined)>
}
