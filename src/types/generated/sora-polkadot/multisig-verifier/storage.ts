import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v10 from '../v10'

export const peerKeys =  {
    v10: new StorageType('MultisigVerifier.PeerKeys', 'Optional', [v10.GenericNetworkId], sts.array(() => v10.Public)) as PeerKeysV10,
}

export interface PeerKeysV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10.GenericNetworkId): Promise<(v10.Public[] | undefined)>
    getMany(block: Block, keys: v10.GenericNetworkId[]): Promise<(v10.Public[] | undefined)[]>
    getKeys(block: Block): Promise<v10.GenericNetworkId[]>
    getKeys(block: Block, key: v10.GenericNetworkId): Promise<v10.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.GenericNetworkId): AsyncIterable<v10.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v10.GenericNetworkId, v: (v10.Public[] | undefined)][]>
    getPairs(block: Block, key: v10.GenericNetworkId): Promise<[k: v10.GenericNetworkId, v: (v10.Public[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.GenericNetworkId, v: (v10.Public[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.GenericNetworkId): AsyncIterable<[k: v10.GenericNetworkId, v: (v10.Public[] | undefined)][]>
}
