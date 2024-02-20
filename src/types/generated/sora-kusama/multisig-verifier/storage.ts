import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const peerKeys =  {
    v7: new StorageType('MultisigVerifier.PeerKeys', 'Optional', [v7.GenericNetworkId], sts.array(() => v7.Public)) as PeerKeysV7,
}

export interface PeerKeysV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.GenericNetworkId): Promise<(v7.Public[] | undefined)>
    getMany(block: Block, keys: v7.GenericNetworkId[]): Promise<(v7.Public[] | undefined)[]>
    getKeys(block: Block): Promise<v7.GenericNetworkId[]>
    getKeys(block: Block, key: v7.GenericNetworkId): Promise<v7.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.GenericNetworkId): AsyncIterable<v7.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v7.GenericNetworkId, v: (v7.Public[] | undefined)][]>
    getPairs(block: Block, key: v7.GenericNetworkId): Promise<[k: v7.GenericNetworkId, v: (v7.Public[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.GenericNetworkId, v: (v7.Public[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.GenericNetworkId): AsyncIterable<[k: v7.GenericNetworkId, v: (v7.Public[] | undefined)][]>
}
