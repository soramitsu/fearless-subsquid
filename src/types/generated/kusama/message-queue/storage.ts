import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9430 from '../v9430'

export const bookStateFor =  {
    /**
     *  The index of the first and last (non-empty) pages.
     */
    v9430: new StorageType('MessageQueue.BookStateFor', 'Default', [v9430.AggregateMessageOrigin], v9430.BookState) as BookStateForV9430,
}

/**
 *  The index of the first and last (non-empty) pages.
 */
export interface BookStateForV9430  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9430.BookState
    get(block: Block, key: v9430.AggregateMessageOrigin): Promise<(v9430.BookState | undefined)>
    getMany(block: Block, keys: v9430.AggregateMessageOrigin[]): Promise<(v9430.BookState | undefined)[]>
    getKeys(block: Block): Promise<v9430.AggregateMessageOrigin[]>
    getKeys(block: Block, key: v9430.AggregateMessageOrigin): Promise<v9430.AggregateMessageOrigin[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9430.AggregateMessageOrigin[]>
    getKeysPaged(pageSize: number, block: Block, key: v9430.AggregateMessageOrigin): AsyncIterable<v9430.AggregateMessageOrigin[]>
    getPairs(block: Block): Promise<[k: v9430.AggregateMessageOrigin, v: (v9430.BookState | undefined)][]>
    getPairs(block: Block, key: v9430.AggregateMessageOrigin): Promise<[k: v9430.AggregateMessageOrigin, v: (v9430.BookState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9430.AggregateMessageOrigin, v: (v9430.BookState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9430.AggregateMessageOrigin): AsyncIterable<[k: v9430.AggregateMessageOrigin, v: (v9430.BookState | undefined)][]>
}

export const serviceHead =  {
    /**
     *  The origin at which we should begin servicing.
     */
    v9430: new StorageType('MessageQueue.ServiceHead', 'Optional', [], v9430.AggregateMessageOrigin) as ServiceHeadV9430,
}

/**
 *  The origin at which we should begin servicing.
 */
export interface ServiceHeadV9430  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9430.AggregateMessageOrigin | undefined)>
}

export const pages =  {
    /**
     *  The map of page indices to pages.
     */
    v9430: new StorageType('MessageQueue.Pages', 'Optional', [v9430.AggregateMessageOrigin, sts.number()], v9430.Page) as PagesV9430,
}

/**
 *  The map of page indices to pages.
 */
export interface PagesV9430  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v9430.AggregateMessageOrigin, key2: number): Promise<(v9430.Page | undefined)>
    getMany(block: Block, keys: [v9430.AggregateMessageOrigin, number][]): Promise<(v9430.Page | undefined)[]>
    getKeys(block: Block): Promise<[v9430.AggregateMessageOrigin, number][]>
    getKeys(block: Block, key1: v9430.AggregateMessageOrigin): Promise<[v9430.AggregateMessageOrigin, number][]>
    getKeys(block: Block, key1: v9430.AggregateMessageOrigin, key2: number): Promise<[v9430.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v9430.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v9430.AggregateMessageOrigin): AsyncIterable<[v9430.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v9430.AggregateMessageOrigin, key2: number): AsyncIterable<[v9430.AggregateMessageOrigin, number][]>
    getPairs(block: Block): Promise<[k: [v9430.AggregateMessageOrigin, number], v: (v9430.Page | undefined)][]>
    getPairs(block: Block, key1: v9430.AggregateMessageOrigin): Promise<[k: [v9430.AggregateMessageOrigin, number], v: (v9430.Page | undefined)][]>
    getPairs(block: Block, key1: v9430.AggregateMessageOrigin, key2: number): Promise<[k: [v9430.AggregateMessageOrigin, number], v: (v9430.Page | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v9430.AggregateMessageOrigin, number], v: (v9430.Page | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v9430.AggregateMessageOrigin): AsyncIterable<[k: [v9430.AggregateMessageOrigin, number], v: (v9430.Page | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v9430.AggregateMessageOrigin, key2: number): AsyncIterable<[k: [v9430.AggregateMessageOrigin, number], v: (v9430.Page | undefined)][]>
}
