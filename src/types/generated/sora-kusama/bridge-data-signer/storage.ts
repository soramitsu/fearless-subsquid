import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const peers =  {
    /**
     *  Peers
     */
    v7: new StorageType('BridgeDataSigner.Peers', 'Optional', [v7.GenericNetworkId], sts.array(() => v7.Public)) as PeersV7,
}

/**
 *  Peers
 */
export interface PeersV7  {
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

export const pendingPeerUpdate =  {
    /**
     *  Pending peers
     */
    v7: new StorageType('BridgeDataSigner.PendingPeerUpdate', 'Default', [v7.GenericNetworkId], sts.boolean()) as PendingPeerUpdateV7,
}

/**
 *  Pending peers
 */
export interface PendingPeerUpdateV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v7.GenericNetworkId): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v7.GenericNetworkId[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v7.GenericNetworkId[]>
    getKeys(block: Block, key: v7.GenericNetworkId): Promise<v7.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.GenericNetworkId): AsyncIterable<v7.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v7.GenericNetworkId, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v7.GenericNetworkId): Promise<[k: v7.GenericNetworkId, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.GenericNetworkId, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.GenericNetworkId): AsyncIterable<[k: v7.GenericNetworkId, v: (boolean | undefined)][]>
}

export const approvals =  {
    /**
     *  Approvals
     */
    v7: new StorageType('BridgeDataSigner.Approvals', 'Default', [v7.GenericNetworkId, v7.H256], sts.array(() => sts.tuple(() => [v7.Public, v7.Signature]))) as ApprovalsV7,
}

/**
 *  Approvals
 */
export interface ApprovalsV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v7.Public, v7.Signature][]
    get(block: Block, key1: v7.GenericNetworkId, key2: v7.H256): Promise<([v7.Public, v7.Signature][] | undefined)>
    getMany(block: Block, keys: [v7.GenericNetworkId, v7.H256][]): Promise<([v7.Public, v7.Signature][] | undefined)[]>
    getKeys(block: Block): Promise<[v7.GenericNetworkId, v7.H256][]>
    getKeys(block: Block, key1: v7.GenericNetworkId): Promise<[v7.GenericNetworkId, v7.H256][]>
    getKeys(block: Block, key1: v7.GenericNetworkId, key2: v7.H256): Promise<[v7.GenericNetworkId, v7.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v7.GenericNetworkId, v7.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v7.GenericNetworkId): AsyncIterable<[v7.GenericNetworkId, v7.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v7.GenericNetworkId, key2: v7.H256): AsyncIterable<[v7.GenericNetworkId, v7.H256][]>
    getPairs(block: Block): Promise<[k: [v7.GenericNetworkId, v7.H256], v: ([v7.Public, v7.Signature][] | undefined)][]>
    getPairs(block: Block, key1: v7.GenericNetworkId): Promise<[k: [v7.GenericNetworkId, v7.H256], v: ([v7.Public, v7.Signature][] | undefined)][]>
    getPairs(block: Block, key1: v7.GenericNetworkId, key2: v7.H256): Promise<[k: [v7.GenericNetworkId, v7.H256], v: ([v7.Public, v7.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v7.GenericNetworkId, v7.H256], v: ([v7.Public, v7.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v7.GenericNetworkId): AsyncIterable<[k: [v7.GenericNetworkId, v7.H256], v: ([v7.Public, v7.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v7.GenericNetworkId, key2: v7.H256): AsyncIterable<[k: [v7.GenericNetworkId, v7.H256], v: ([v7.Public, v7.Signature][] | undefined)][]>
}
