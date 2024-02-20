import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const interval =  {
    /**
     *  Interval between committing messages.
     */
    v7: new StorageType('SubstrateBridgeOutboundChannel.Interval', 'Default', [], sts.number()) as IntervalV7,
}

/**
 *  Interval between committing messages.
 */
export interface IntervalV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const messageQueues =  {
    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    v7: new StorageType('SubstrateBridgeOutboundChannel.MessageQueues', 'Default', [v7.SubNetworkId], sts.array(() => v7.BridgeMessage)) as MessageQueuesV7,
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface MessageQueuesV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v7.BridgeMessage[]
    get(block: Block, key: v7.SubNetworkId): Promise<(v7.BridgeMessage[] | undefined)>
    getMany(block: Block, keys: v7.SubNetworkId[]): Promise<(v7.BridgeMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v7.SubNetworkId[]>
    getKeys(block: Block, key: v7.SubNetworkId): Promise<v7.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.SubNetworkId): AsyncIterable<v7.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v7.SubNetworkId, v: (v7.BridgeMessage[] | undefined)][]>
    getPairs(block: Block, key: v7.SubNetworkId): Promise<[k: v7.SubNetworkId, v: (v7.BridgeMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.SubNetworkId, v: (v7.BridgeMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.SubNetworkId): AsyncIterable<[k: v7.SubNetworkId, v: (v7.BridgeMessage[] | undefined)][]>
}

export const channelNonces =  {
    v7: new StorageType('SubstrateBridgeOutboundChannel.ChannelNonces', 'Default', [v7.SubNetworkId], sts.bigint()) as ChannelNoncesV7,
}

export interface ChannelNoncesV7  {
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

export const latestCommitment =  {
    v7: new StorageType('SubstrateBridgeOutboundChannel.LatestCommitment', 'Optional', [v7.SubNetworkId], v7.GenericCommitmentWithBlock) as LatestCommitmentV7,
}

export interface LatestCommitmentV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.SubNetworkId): Promise<(v7.GenericCommitmentWithBlock | undefined)>
    getMany(block: Block, keys: v7.SubNetworkId[]): Promise<(v7.GenericCommitmentWithBlock | undefined)[]>
    getKeys(block: Block): Promise<v7.SubNetworkId[]>
    getKeys(block: Block, key: v7.SubNetworkId): Promise<v7.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.SubNetworkId): AsyncIterable<v7.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v7.SubNetworkId, v: (v7.GenericCommitmentWithBlock | undefined)][]>
    getPairs(block: Block, key: v7.SubNetworkId): Promise<[k: v7.SubNetworkId, v: (v7.GenericCommitmentWithBlock | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.SubNetworkId, v: (v7.GenericCommitmentWithBlock | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.SubNetworkId): AsyncIterable<[k: v7.SubNetworkId, v: (v7.GenericCommitmentWithBlock | undefined)][]>
}
