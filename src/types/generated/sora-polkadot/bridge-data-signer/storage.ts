import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v10 from '../v10'

export const peers =  {
    /**
     *  Peers
     */
    v10: new StorageType('BridgeDataSigner.Peers', 'Optional', [v10.GenericNetworkId], sts.array(() => v10.Public)) as PeersV10,
}

/**
 *  Peers
 */
export interface PeersV10  {
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

export const pendingPeerUpdate =  {
    /**
     *  Pending peers
     */
    v10: new StorageType('BridgeDataSigner.PendingPeerUpdate', 'Default', [v10.GenericNetworkId], sts.boolean()) as PendingPeerUpdateV10,
}

/**
 *  Pending peers
 */
export interface PendingPeerUpdateV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v10.GenericNetworkId): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v10.GenericNetworkId[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v10.GenericNetworkId[]>
    getKeys(block: Block, key: v10.GenericNetworkId): Promise<v10.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.GenericNetworkId): AsyncIterable<v10.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v10.GenericNetworkId, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v10.GenericNetworkId): Promise<[k: v10.GenericNetworkId, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.GenericNetworkId, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.GenericNetworkId): AsyncIterable<[k: v10.GenericNetworkId, v: (boolean | undefined)][]>
}

export const approvals =  {
    /**
     *  Approvals
     */
    v10: new StorageType('BridgeDataSigner.Approvals', 'Default', [v10.GenericNetworkId, v10.H256], sts.array(() => sts.tuple(() => [v10.Public, v10.Signature]))) as ApprovalsV10,
}

/**
 *  Approvals
 */
export interface ApprovalsV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v10.Public, v10.Signature][]
    get(block: Block, key1: v10.GenericNetworkId, key2: v10.H256): Promise<([v10.Public, v10.Signature][] | undefined)>
    getMany(block: Block, keys: [v10.GenericNetworkId, v10.H256][]): Promise<([v10.Public, v10.Signature][] | undefined)[]>
    getKeys(block: Block): Promise<[v10.GenericNetworkId, v10.H256][]>
    getKeys(block: Block, key1: v10.GenericNetworkId): Promise<[v10.GenericNetworkId, v10.H256][]>
    getKeys(block: Block, key1: v10.GenericNetworkId, key2: v10.H256): Promise<[v10.GenericNetworkId, v10.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v10.GenericNetworkId, v10.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v10.GenericNetworkId): AsyncIterable<[v10.GenericNetworkId, v10.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v10.GenericNetworkId, key2: v10.H256): AsyncIterable<[v10.GenericNetworkId, v10.H256][]>
    getPairs(block: Block): Promise<[k: [v10.GenericNetworkId, v10.H256], v: ([v10.Public, v10.Signature][] | undefined)][]>
    getPairs(block: Block, key1: v10.GenericNetworkId): Promise<[k: [v10.GenericNetworkId, v10.H256], v: ([v10.Public, v10.Signature][] | undefined)][]>
    getPairs(block: Block, key1: v10.GenericNetworkId, key2: v10.H256): Promise<[k: [v10.GenericNetworkId, v10.H256], v: ([v10.Public, v10.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v10.GenericNetworkId, v10.H256], v: ([v10.Public, v10.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v10.GenericNetworkId): AsyncIterable<[k: [v10.GenericNetworkId, v10.H256], v: ([v10.Public, v10.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v10.GenericNetworkId, key2: v10.H256): AsyncIterable<[k: [v10.GenericNetworkId, v10.H256], v: ([v10.Public, v10.Signature][] | undefined)][]>
}
