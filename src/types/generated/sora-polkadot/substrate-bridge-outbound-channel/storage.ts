import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v10 from '../v10'

export const interval =  {
    /**
     *  Interval between committing messages.
     */
    v1: new StorageType('SubstrateBridgeOutboundChannel.Interval', 'Default', [], sts.number()) as IntervalV1,
}

/**
 *  Interval between committing messages.
 */
export interface IntervalV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const messageQueues =  {
    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    v1: new StorageType('SubstrateBridgeOutboundChannel.MessageQueues', 'Default', [v1.SubNetworkId], sts.array(() => v1.ParachainMessage)) as MessageQueuesV1,
    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    v10: new StorageType('SubstrateBridgeOutboundChannel.MessageQueues', 'Default', [v10.SubNetworkId], sts.array(() => v10.BridgeMessage)) as MessageQueuesV10,
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface MessageQueuesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.ParachainMessage[]
    get(block: Block, key: v1.SubNetworkId): Promise<(v1.ParachainMessage[] | undefined)>
    getMany(block: Block, keys: v1.SubNetworkId[]): Promise<(v1.ParachainMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v1.SubNetworkId[]>
    getKeys(block: Block, key: v1.SubNetworkId): Promise<v1.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.SubNetworkId): AsyncIterable<v1.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v1.SubNetworkId, v: (v1.ParachainMessage[] | undefined)][]>
    getPairs(block: Block, key: v1.SubNetworkId): Promise<[k: v1.SubNetworkId, v: (v1.ParachainMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.SubNetworkId, v: (v1.ParachainMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.SubNetworkId): AsyncIterable<[k: v1.SubNetworkId, v: (v1.ParachainMessage[] | undefined)][]>
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface MessageQueuesV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v10.BridgeMessage[]
    get(block: Block, key: v10.SubNetworkId): Promise<(v10.BridgeMessage[] | undefined)>
    getMany(block: Block, keys: v10.SubNetworkId[]): Promise<(v10.BridgeMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v10.SubNetworkId[]>
    getKeys(block: Block, key: v10.SubNetworkId): Promise<v10.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.SubNetworkId): AsyncIterable<v10.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v10.SubNetworkId, v: (v10.BridgeMessage[] | undefined)][]>
    getPairs(block: Block, key: v10.SubNetworkId): Promise<[k: v10.SubNetworkId, v: (v10.BridgeMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.SubNetworkId, v: (v10.BridgeMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.SubNetworkId): AsyncIterable<[k: v10.SubNetworkId, v: (v10.BridgeMessage[] | undefined)][]>
}

export const channelNonces =  {
    v1: new StorageType('SubstrateBridgeOutboundChannel.ChannelNonces', 'Default', [v1.SubNetworkId], sts.bigint()) as ChannelNoncesV1,
    v10: new StorageType('SubstrateBridgeOutboundChannel.ChannelNonces', 'Default', [v10.SubNetworkId], sts.bigint()) as ChannelNoncesV10,
}

export interface ChannelNoncesV1  {
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

export interface ChannelNoncesV10  {
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

export const fee =  {
    v1: new StorageType('SubstrateBridgeOutboundChannel.Fee', 'Default', [], sts.bigint()) as FeeV1,
}

export interface FeeV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const latestCommitment =  {
    v10: new StorageType('SubstrateBridgeOutboundChannel.LatestCommitment', 'Optional', [v10.SubNetworkId], v10.GenericCommitmentWithBlock) as LatestCommitmentV10,
}

export interface LatestCommitmentV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10.SubNetworkId): Promise<(v10.GenericCommitmentWithBlock | undefined)>
    getMany(block: Block, keys: v10.SubNetworkId[]): Promise<(v10.GenericCommitmentWithBlock | undefined)[]>
    getKeys(block: Block): Promise<v10.SubNetworkId[]>
    getKeys(block: Block, key: v10.SubNetworkId): Promise<v10.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.SubNetworkId): AsyncIterable<v10.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v10.SubNetworkId, v: (v10.GenericCommitmentWithBlock | undefined)][]>
    getPairs(block: Block, key: v10.SubNetworkId): Promise<[k: v10.SubNetworkId, v: (v10.GenericCommitmentWithBlock | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.SubNetworkId, v: (v10.GenericCommitmentWithBlock | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.SubNetworkId): AsyncIterable<[k: v10.SubNetworkId, v: (v10.GenericCommitmentWithBlock | undefined)][]>
}
