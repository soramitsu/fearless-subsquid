import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v13 from '../v13'

export const authorities =  {
    /**
     *  All authorities' keys at the moment.
     */
    v0: new StorageType('Parachains.Authorities', 'Default', [], sts.array(() => v0.ValidatorId)) as AuthoritiesV0,
}

/**
 *  All authorities' keys at the moment.
 */
export interface AuthoritiesV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ValidatorId[]
    get(block: Block): Promise<(v0.ValidatorId[] | undefined)>
}

export const code =  {
    /**
     *  The active code of a currently-registered parachain.
     */
    v0: new StorageType('Parachains.Code', 'Optional', [v0.ParaId], v0.ValidationCode) as CodeV0,
}

/**
 *  The active code of a currently-registered parachain.
 */
export interface CodeV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.ParaId): Promise<(v0.ValidationCode | undefined)>
    getMany(block: Block, keys: v0.ParaId[]): Promise<(v0.ValidationCode | undefined)[]>
    getKeys(block: Block): Promise<v0.ParaId[]>
    getKeys(block: Block, key: v0.ParaId): Promise<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<v0.ParaId[]>
    getPairs(block: Block): Promise<[k: v0.ParaId, v: (v0.ValidationCode | undefined)][]>
    getPairs(block: Block, key: v0.ParaId): Promise<[k: v0.ParaId, v: (v0.ValidationCode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ParaId, v: (v0.ValidationCode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<[k: v0.ParaId, v: (v0.ValidationCode | undefined)][]>
}

export const pastCodeMeta =  {
    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to assist with availability.
     */
    v0: new StorageType('Parachains.PastCodeMeta', 'Default', [v0.ParaId], v0.ParaPastCodeMeta) as PastCodeMetaV0,
}

/**
 *  Past code of parachains. The parachains themselves may not be registered anymore,
 *  but we also keep their code on-chain for the same amount of time as outdated code
 *  to assist with availability.
 */
export interface PastCodeMetaV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ParaPastCodeMeta
    get(block: Block, key: v0.ParaId): Promise<(v0.ParaPastCodeMeta | undefined)>
    getMany(block: Block, keys: v0.ParaId[]): Promise<(v0.ParaPastCodeMeta | undefined)[]>
    getKeys(block: Block): Promise<v0.ParaId[]>
    getKeys(block: Block, key: v0.ParaId): Promise<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<v0.ParaId[]>
    getPairs(block: Block): Promise<[k: v0.ParaId, v: (v0.ParaPastCodeMeta | undefined)][]>
    getPairs(block: Block, key: v0.ParaId): Promise<[k: v0.ParaId, v: (v0.ParaPastCodeMeta | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ParaId, v: (v0.ParaPastCodeMeta | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<[k: v0.ParaId, v: (v0.ParaPastCodeMeta | undefined)][]>
}

export const pastCode =  {
    /**
     *  Actual past code, indicated by the parachain and the block number at which it
     *  became outdated.
     */
    v0: new StorageType('Parachains.PastCode', 'Optional', [sts.tuple(() => [v0.ParaId, v0.BlockNumber])], v0.ValidationCode) as PastCodeV0,
}

/**
 *  Actual past code, indicated by the parachain and the block number at which it
 *  became outdated.
 */
export interface PastCodeV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v0.ParaId, v0.BlockNumber]): Promise<(v0.ValidationCode | undefined)>
    getMany(block: Block, keys: [v0.ParaId, v0.BlockNumber][]): Promise<(v0.ValidationCode | undefined)[]>
    getKeys(block: Block): Promise<[v0.ParaId, v0.BlockNumber][]>
    getKeys(block: Block, key: [v0.ParaId, v0.BlockNumber]): Promise<[v0.ParaId, v0.BlockNumber][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v0.ParaId, v0.BlockNumber][]>
    getKeysPaged(pageSize: number, block: Block, key: [v0.ParaId, v0.BlockNumber]): AsyncIterable<[v0.ParaId, v0.BlockNumber][]>
    getPairs(block: Block): Promise<[k: [v0.ParaId, v0.BlockNumber], v: (v0.ValidationCode | undefined)][]>
    getPairs(block: Block, key: [v0.ParaId, v0.BlockNumber]): Promise<[k: [v0.ParaId, v0.BlockNumber], v: (v0.ValidationCode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v0.ParaId, v0.BlockNumber], v: (v0.ValidationCode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v0.ParaId, v0.BlockNumber]): AsyncIterable<[k: [v0.ParaId, v0.BlockNumber], v: (v0.ValidationCode | undefined)][]>
}

export const pastCodePruning =  {
    /**
     *  Past code pruning, in order of priority.
     */
    v0: new StorageType('Parachains.PastCodePruning', 'Default', [], sts.array(() => sts.tuple(() => [v0.ParaId, v0.BlockNumber]))) as PastCodePruningV0,
}

/**
 *  Past code pruning, in order of priority.
 */
export interface PastCodePruningV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v0.ParaId, v0.BlockNumber][]
    get(block: Block): Promise<([v0.ParaId, v0.BlockNumber][] | undefined)>
}

export const futureCodeUpgrades =  {
    v0: new StorageType('Parachains.FutureCodeUpgrades', 'Optional', [v0.ParaId], v0.BlockNumber) as FutureCodeUpgradesV0,
}

export interface FutureCodeUpgradesV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.ParaId): Promise<(v0.BlockNumber | undefined)>
    getMany(block: Block, keys: v0.ParaId[]): Promise<(v0.BlockNumber | undefined)[]>
    getKeys(block: Block): Promise<v0.ParaId[]>
    getKeys(block: Block, key: v0.ParaId): Promise<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<v0.ParaId[]>
    getPairs(block: Block): Promise<[k: v0.ParaId, v: (v0.BlockNumber | undefined)][]>
    getPairs(block: Block, key: v0.ParaId): Promise<[k: v0.ParaId, v: (v0.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ParaId, v: (v0.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<[k: v0.ParaId, v: (v0.BlockNumber | undefined)][]>
}

export const futureCode =  {
    v0: new StorageType('Parachains.FutureCode', 'Default', [v0.ParaId], v0.ValidationCode) as FutureCodeV0,
}

export interface FutureCodeV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ValidationCode
    get(block: Block, key: v0.ParaId): Promise<(v0.ValidationCode | undefined)>
    getMany(block: Block, keys: v0.ParaId[]): Promise<(v0.ValidationCode | undefined)[]>
    getKeys(block: Block): Promise<v0.ParaId[]>
    getKeys(block: Block, key: v0.ParaId): Promise<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<v0.ParaId[]>
    getPairs(block: Block): Promise<[k: v0.ParaId, v: (v0.ValidationCode | undefined)][]>
    getPairs(block: Block, key: v0.ParaId): Promise<[k: v0.ParaId, v: (v0.ValidationCode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ParaId, v: (v0.ValidationCode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<[k: v0.ParaId, v: (v0.ValidationCode | undefined)][]>
}

export const heads =  {
    /**
     *  The heads of the parachains registered at present.
     */
    v0: new StorageType('Parachains.Heads', 'Optional', [v0.ParaId], v0.HeadData) as HeadsV0,
}

/**
 *  The heads of the parachains registered at present.
 */
export interface HeadsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.ParaId): Promise<(v0.HeadData | undefined)>
    getMany(block: Block, keys: v0.ParaId[]): Promise<(v0.HeadData | undefined)[]>
    getKeys(block: Block): Promise<v0.ParaId[]>
    getKeys(block: Block, key: v0.ParaId): Promise<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<v0.ParaId[]>
    getPairs(block: Block): Promise<[k: v0.ParaId, v: (v0.HeadData | undefined)][]>
    getPairs(block: Block, key: v0.ParaId): Promise<[k: v0.ParaId, v: (v0.HeadData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ParaId, v: (v0.HeadData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<[k: v0.ParaId, v: (v0.HeadData | undefined)][]>
}

export const relayDispatchQueue =  {
    /**
     *  Messages ready to be dispatched onto the relay chain. It is subject to
     *  `MAX_MESSAGE_COUNT` and `WATERMARK_MESSAGE_SIZE`.
     */
    v0: new StorageType('Parachains.RelayDispatchQueue', 'Default', [v0.ParaId], sts.array(() => v0.UpwardMessage)) as RelayDispatchQueueV0,
}

/**
 *  Messages ready to be dispatched onto the relay chain. It is subject to
 *  `MAX_MESSAGE_COUNT` and `WATERMARK_MESSAGE_SIZE`.
 */
export interface RelayDispatchQueueV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.UpwardMessage[]
    get(block: Block, key: v0.ParaId): Promise<(v0.UpwardMessage[] | undefined)>
    getMany(block: Block, keys: v0.ParaId[]): Promise<(v0.UpwardMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v0.ParaId[]>
    getKeys(block: Block, key: v0.ParaId): Promise<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<v0.ParaId[]>
    getPairs(block: Block): Promise<[k: v0.ParaId, v: (v0.UpwardMessage[] | undefined)][]>
    getPairs(block: Block, key: v0.ParaId): Promise<[k: v0.ParaId, v: (v0.UpwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ParaId, v: (v0.UpwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<[k: v0.ParaId, v: (v0.UpwardMessage[] | undefined)][]>
}

export const relayDispatchQueueSize =  {
    /**
     *  Size of the dispatch queues. Separated from actual data in order to avoid costly
     *  decoding when checking receipt validity. First item in tuple is the count of messages
     *  second if the total length (in bytes) of the message payloads.
     */
    v0: new StorageType('Parachains.RelayDispatchQueueSize', 'Default', [v0.ParaId], sts.tuple(() => [sts.number(), sts.number()])) as RelayDispatchQueueSizeV0,
}

/**
 *  Size of the dispatch queues. Separated from actual data in order to avoid costly
 *  decoding when checking receipt validity. First item in tuple is the count of messages
 *  second if the total length (in bytes) of the message payloads.
 */
export interface RelayDispatchQueueSizeV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number]
    get(block: Block, key: v0.ParaId): Promise<([number, number] | undefined)>
    getMany(block: Block, keys: v0.ParaId[]): Promise<([number, number] | undefined)[]>
    getKeys(block: Block): Promise<v0.ParaId[]>
    getKeys(block: Block, key: v0.ParaId): Promise<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<v0.ParaId[]>
    getPairs(block: Block): Promise<[k: v0.ParaId, v: ([number, number] | undefined)][]>
    getPairs(block: Block, key: v0.ParaId): Promise<[k: v0.ParaId, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ParaId, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<[k: v0.ParaId, v: ([number, number] | undefined)][]>
}

export const needsDispatch =  {
    /**
     *  The ordered list of ParaIds that have a `RelayDispatchQueue` entry.
     */
    v0: new StorageType('Parachains.NeedsDispatch', 'Default', [], sts.array(() => v0.ParaId)) as NeedsDispatchV0,
}

/**
 *  The ordered list of ParaIds that have a `RelayDispatchQueue` entry.
 */
export interface NeedsDispatchV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ParaId[]
    get(block: Block): Promise<(v0.ParaId[] | undefined)>
}

export const didUpdate =  {
    /**
     *  `Some` if the parachain heads get updated in this block, along with the parachain IDs
     *  that did update. Ordered in the same way as `registrar::Active` (i.e. by ParaId).
     * 
     *  `None` if not yet updated.
     */
    v0: new StorageType('Parachains.DidUpdate', 'Optional', [], sts.array(() => v0.ParaId)) as DidUpdateV0,
}

/**
 *  `Some` if the parachain heads get updated in this block, along with the parachain IDs
 *  that did update. Ordered in the same way as `registrar::Active` (i.e. by ParaId).
 * 
 *  `None` if not yet updated.
 */
export interface DidUpdateV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.ParaId[] | undefined)>
}

export const downwardMessageQueue =  {
    /**
     *  Messages waiting to be delivered from the Relay chain into the parachain.
     */
    v13: new StorageType('Parachains.DownwardMessageQueue', 'Default', [v13.ParaId], sts.array(() => v13.DownwardMessage)) as DownwardMessageQueueV13,
}

/**
 *  Messages waiting to be delivered from the Relay chain into the parachain.
 */
export interface DownwardMessageQueueV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v13.DownwardMessage[]
    get(block: Block, key: v13.ParaId): Promise<(v13.DownwardMessage[] | undefined)>
    getMany(block: Block, keys: v13.ParaId[]): Promise<(v13.DownwardMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v13.ParaId[]>
    getKeys(block: Block, key: v13.ParaId): Promise<v13.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v13.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v13.ParaId): AsyncIterable<v13.ParaId[]>
    getPairs(block: Block): Promise<[k: v13.ParaId, v: (v13.DownwardMessage[] | undefined)][]>
    getPairs(block: Block, key: v13.ParaId): Promise<[k: v13.ParaId, v: (v13.DownwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v13.ParaId, v: (v13.DownwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v13.ParaId): AsyncIterable<[k: v13.ParaId, v: (v13.DownwardMessage[] | undefined)][]>
}
