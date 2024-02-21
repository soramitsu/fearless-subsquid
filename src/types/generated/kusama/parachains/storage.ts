import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1058 from '../v1058'
import * as v2013 from '../v2013'

export const authorities =  {
    /**
     *  All authorities' keys at the moment.
     */
    v1020: new StorageType('Parachains.Authorities', 'Default', [], sts.array(() => v1020.ValidatorId)) as AuthoritiesV1020,
}

/**
 *  All authorities' keys at the moment.
 */
export interface AuthoritiesV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.ValidatorId[]
    get(block: Block): Promise<(v1020.ValidatorId[] | undefined)>
}

export const code =  {
    /**
     *  The parachains registered at present.
     */
    v1020: new StorageType('Parachains.Code', 'Optional', [v1020.ParaId], sts.bytes()) as CodeV1020,
}

/**
 *  The parachains registered at present.
 */
export interface CodeV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.ParaId): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v1020.ParaId[]): Promise<(Bytes | undefined)[]>
}

export const heads =  {
    /**
     *  The heads of the parachains registered at present.
     */
    v1020: new StorageType('Parachains.Heads', 'Optional', [v1020.ParaId], sts.bytes()) as HeadsV1020,
}

/**
 *  The heads of the parachains registered at present.
 */
export interface HeadsV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.ParaId): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v1020.ParaId[]): Promise<(Bytes | undefined)[]>
}

export const watermarks =  {
    /**
     *  The watermark heights of the parachains registered at present.
     *  For every parachain, this is the block height from which all messages targeting
     *  that parachain have been processed. Can be `None` only if the parachain doesn't exist.
     */
    v1020: new StorageType('Parachains.Watermarks', 'Optional', [v1020.ParaId], v1020.BlockNumber) as WatermarksV1020,
}

/**
 *  The watermark heights of the parachains registered at present.
 *  For every parachain, this is the block height from which all messages targeting
 *  that parachain have been processed. Can be `None` only if the parachain doesn't exist.
 */
export interface WatermarksV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.ParaId): Promise<(v1020.BlockNumber | undefined)>
    getMany(block: Block, keys: v1020.ParaId[]): Promise<(v1020.BlockNumber | undefined)[]>
}

export const unroutedIngress =  {
    /**
     *  Unrouted ingress. Maps (BlockNumber, to_chain) pairs to [(from_chain, egress_root)].
     * 
     *  There may be an entry under (i, p) in this map for every i between the parachain's
     *  watermark and the current block.
     */
    v1020: new StorageType('Parachains.UnroutedIngress', 'Optional', [sts.tuple(() => [v1020.BlockNumber, v1020.ParaId])], sts.array(() => sts.tuple(() => [v1020.ParaId, v1020.Hash]))) as UnroutedIngressV1020,
}

/**
 *  Unrouted ingress. Maps (BlockNumber, to_chain) pairs to [(from_chain, egress_root)].
 * 
 *  There may be an entry under (i, p) in this map for every i between the parachain's
 *  watermark and the current block.
 */
export interface UnroutedIngressV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v1020.BlockNumber, v1020.ParaId]): Promise<([v1020.ParaId, v1020.Hash][] | undefined)>
    getMany(block: Block, keys: [v1020.BlockNumber, v1020.ParaId][]): Promise<([v1020.ParaId, v1020.Hash][] | undefined)[]>
}

export const relayDispatchQueue =  {
    /**
     *  Messages ready to be dispatched onto the relay chain. It is subject to
     *  `MAX_MESSAGE_COUNT` and `WATERMARK_MESSAGE_SIZE`.
     */
    v1020: new StorageType('Parachains.RelayDispatchQueue', 'Default', [v1020.ParaId], sts.array(() => v1020.UpwardMessage)) as RelayDispatchQueueV1020,
}

/**
 *  Messages ready to be dispatched onto the relay chain. It is subject to
 *  `MAX_MESSAGE_COUNT` and `WATERMARK_MESSAGE_SIZE`.
 */
export interface RelayDispatchQueueV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.UpwardMessage[]
    get(block: Block, key: v1020.ParaId): Promise<(v1020.UpwardMessage[] | undefined)>
    getMany(block: Block, keys: v1020.ParaId[]): Promise<(v1020.UpwardMessage[] | undefined)[]>
}

export const relayDispatchQueueSize =  {
    /**
     *  Size of the dispatch queues. Separated from actual data in order to avoid costly
     *  decoding when checking receipt validity. First item in tuple is the count of messages
     * 	second if the total length (in bytes) of the message payloads.
     */
    v1020: new StorageType('Parachains.RelayDispatchQueueSize', 'Default', [v1020.ParaId], sts.tuple(() => [sts.number(), sts.number()])) as RelayDispatchQueueSizeV1020,
}

/**
 *  Size of the dispatch queues. Separated from actual data in order to avoid costly
 *  decoding when checking receipt validity. First item in tuple is the count of messages
 * 	second if the total length (in bytes) of the message payloads.
 */
export interface RelayDispatchQueueSizeV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number]
    get(block: Block, key: v1020.ParaId): Promise<([number, number] | undefined)>
    getMany(block: Block, keys: v1020.ParaId[]): Promise<([number, number] | undefined)[]>
}

export const needsDispatch =  {
    /**
     *  The ordered list of ParaIds that have a `RelayDispatchQueue` entry.
     */
    v1020: new StorageType('Parachains.NeedsDispatch', 'Default', [], sts.array(() => v1020.ParaId)) as NeedsDispatchV1020,
}

/**
 *  The ordered list of ParaIds that have a `RelayDispatchQueue` entry.
 */
export interface NeedsDispatchV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.ParaId[]
    get(block: Block): Promise<(v1020.ParaId[] | undefined)>
}

export const didUpdate =  {
    /**
     *  Some if the parachain heads get updated in this block, along with the parachain IDs that
     *  did update. Ordered in the same way as `registrar::Active` (i.e. by ParaId).
     * 
     *  None if not yet updated.
     */
    v1020: new StorageType('Parachains.DidUpdate', 'Optional', [], sts.array(() => v1020.ParaId)) as DidUpdateV1020,
}

/**
 *  Some if the parachain heads get updated in this block, along with the parachain IDs that
 *  did update. Ordered in the same way as `registrar::Active` (i.e. by ParaId).
 * 
 *  None if not yet updated.
 */
export interface DidUpdateV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1020.ParaId[] | undefined)>
}

export const pastCodeMeta =  {
    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to assist with availability.
     */
    v1058: new StorageType('Parachains.PastCodeMeta', 'Default', [v1058.ParaId], v1058.ParaPastCodeMeta) as PastCodeMetaV1058,
}

/**
 *  Past code of parachains. The parachains themselves may not be registered anymore,
 *  but we also keep their code on-chain for the same amount of time as outdated code
 *  to assist with availability.
 */
export interface PastCodeMetaV1058  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1058.ParaPastCodeMeta
    get(block: Block, key: v1058.ParaId): Promise<(v1058.ParaPastCodeMeta | undefined)>
    getMany(block: Block, keys: v1058.ParaId[]): Promise<(v1058.ParaPastCodeMeta | undefined)[]>
    getKeys(block: Block): Promise<v1058.ParaId[]>
    getKeys(block: Block, key: v1058.ParaId): Promise<v1058.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1058.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1058.ParaId): AsyncIterable<v1058.ParaId[]>
    getPairs(block: Block): Promise<[k: v1058.ParaId, v: (v1058.ParaPastCodeMeta | undefined)][]>
    getPairs(block: Block, key: v1058.ParaId): Promise<[k: v1058.ParaId, v: (v1058.ParaPastCodeMeta | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1058.ParaId, v: (v1058.ParaPastCodeMeta | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1058.ParaId): AsyncIterable<[k: v1058.ParaId, v: (v1058.ParaPastCodeMeta | undefined)][]>
}

export const pastCode =  {
    /**
     *  Actual past code, indicated by the parachain and the block number at which it
     *  became outdated.
     */
    v1058: new StorageType('Parachains.PastCode', 'Optional', [sts.tuple(() => [v1058.ParaId, v1058.BlockNumber])], v1058.ValidationCode) as PastCodeV1058,
}

/**
 *  Actual past code, indicated by the parachain and the block number at which it
 *  became outdated.
 */
export interface PastCodeV1058  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v1058.ParaId, v1058.BlockNumber]): Promise<(v1058.ValidationCode | undefined)>
    getMany(block: Block, keys: [v1058.ParaId, v1058.BlockNumber][]): Promise<(v1058.ValidationCode | undefined)[]>
    getKeys(block: Block): Promise<[v1058.ParaId, v1058.BlockNumber][]>
    getKeys(block: Block, key: [v1058.ParaId, v1058.BlockNumber]): Promise<[v1058.ParaId, v1058.BlockNumber][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1058.ParaId, v1058.BlockNumber][]>
    getKeysPaged(pageSize: number, block: Block, key: [v1058.ParaId, v1058.BlockNumber]): AsyncIterable<[v1058.ParaId, v1058.BlockNumber][]>
    getPairs(block: Block): Promise<[k: [v1058.ParaId, v1058.BlockNumber], v: (v1058.ValidationCode | undefined)][]>
    getPairs(block: Block, key: [v1058.ParaId, v1058.BlockNumber]): Promise<[k: [v1058.ParaId, v1058.BlockNumber], v: (v1058.ValidationCode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1058.ParaId, v1058.BlockNumber], v: (v1058.ValidationCode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v1058.ParaId, v1058.BlockNumber]): AsyncIterable<[k: [v1058.ParaId, v1058.BlockNumber], v: (v1058.ValidationCode | undefined)][]>
}

export const pastCodePruning =  {
    /**
     *  Past code pruning, in order of priority.
     */
    v1058: new StorageType('Parachains.PastCodePruning', 'Default', [], sts.array(() => sts.tuple(() => [v1058.ParaId, v1058.BlockNumber]))) as PastCodePruningV1058,
}

/**
 *  Past code pruning, in order of priority.
 */
export interface PastCodePruningV1058  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1058.ParaId, v1058.BlockNumber][]
    get(block: Block): Promise<([v1058.ParaId, v1058.BlockNumber][] | undefined)>
}

export const futureCodeUpgrades =  {
    v1058: new StorageType('Parachains.FutureCodeUpgrades', 'Optional', [v1058.ParaId], v1058.BlockNumber) as FutureCodeUpgradesV1058,
}

export interface FutureCodeUpgradesV1058  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1058.ParaId): Promise<(v1058.BlockNumber | undefined)>
    getMany(block: Block, keys: v1058.ParaId[]): Promise<(v1058.BlockNumber | undefined)[]>
    getKeys(block: Block): Promise<v1058.ParaId[]>
    getKeys(block: Block, key: v1058.ParaId): Promise<v1058.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1058.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1058.ParaId): AsyncIterable<v1058.ParaId[]>
    getPairs(block: Block): Promise<[k: v1058.ParaId, v: (v1058.BlockNumber | undefined)][]>
    getPairs(block: Block, key: v1058.ParaId): Promise<[k: v1058.ParaId, v: (v1058.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1058.ParaId, v: (v1058.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1058.ParaId): AsyncIterable<[k: v1058.ParaId, v: (v1058.BlockNumber | undefined)][]>
}

export const futureCode =  {
    v1058: new StorageType('Parachains.FutureCode', 'Default', [v1058.ParaId], v1058.ValidationCode) as FutureCodeV1058,
}

export interface FutureCodeV1058  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1058.ValidationCode
    get(block: Block, key: v1058.ParaId): Promise<(v1058.ValidationCode | undefined)>
    getMany(block: Block, keys: v1058.ParaId[]): Promise<(v1058.ValidationCode | undefined)[]>
    getKeys(block: Block): Promise<v1058.ParaId[]>
    getKeys(block: Block, key: v1058.ParaId): Promise<v1058.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1058.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1058.ParaId): AsyncIterable<v1058.ParaId[]>
    getPairs(block: Block): Promise<[k: v1058.ParaId, v: (v1058.ValidationCode | undefined)][]>
    getPairs(block: Block, key: v1058.ParaId): Promise<[k: v1058.ParaId, v: (v1058.ValidationCode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1058.ParaId, v: (v1058.ValidationCode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1058.ParaId): AsyncIterable<[k: v1058.ParaId, v: (v1058.ValidationCode | undefined)][]>
}

export const downwardMessageQueue =  {
    /**
     *  Messages waiting to be delivered from the Relay chain into the parachain.
     */
    v2013: new StorageType('Parachains.DownwardMessageQueue', 'Default', [v2013.ParaId], sts.array(() => v2013.DownwardMessage)) as DownwardMessageQueueV2013,
}

/**
 *  Messages waiting to be delivered from the Relay chain into the parachain.
 */
export interface DownwardMessageQueueV2013  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2013.DownwardMessage[]
    get(block: Block, key: v2013.ParaId): Promise<(v2013.DownwardMessage[] | undefined)>
    getMany(block: Block, keys: v2013.ParaId[]): Promise<(v2013.DownwardMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v2013.ParaId[]>
    getKeys(block: Block, key: v2013.ParaId): Promise<v2013.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2013.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v2013.ParaId): AsyncIterable<v2013.ParaId[]>
    getPairs(block: Block): Promise<[k: v2013.ParaId, v: (v2013.DownwardMessage[] | undefined)][]>
    getPairs(block: Block, key: v2013.ParaId): Promise<[k: v2013.ParaId, v: (v2013.DownwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2013.ParaId, v: (v2013.DownwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2013.ParaId): AsyncIterable<[k: v2013.ParaId, v: (v2013.DownwardMessage[] | undefined)][]>
}
