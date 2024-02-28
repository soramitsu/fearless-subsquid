import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'
import * as v1000001 from '../v1000001'

export const referendumCount =  {
    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    v9420: new StorageType('Referenda.ReferendumCount', 'Default', [], sts.number()) as ReferendumCountV9420,
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface ReferendumCountV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const referendumInfoFor =  {
    /**
     *  Information concerning any given referendum.
     */
    v9420: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v9420.Type_617) as ReferendumInfoForV9420,
    /**
     *  Information concerning any given referendum.
     */
    v1000001: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v1000001.ReferendumInfo) as ReferendumInfoForV1000001,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9420.Type_617 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9420.Type_617 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9420.Type_617 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9420.Type_617 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9420.Type_617 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9420.Type_617 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV1000001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1000001.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1000001.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1000001.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1000001.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1000001.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1000001.ReferendumInfo | undefined)][]>
}

export const trackQueue =  {
    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     * 
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    v9420: new StorageType('Referenda.TrackQueue', 'Default', [sts.number()], sts.array(() => sts.tuple(() => [sts.number(), sts.bigint()]))) as TrackQueueV9420,
}

/**
 *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
 *  conviction-weighted approvals.
 * 
 *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
 */
export interface TrackQueueV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, bigint][]
    get(block: Block, key: number): Promise<([number, bigint][] | undefined)>
    getMany(block: Block, keys: number[]): Promise<([number, bigint][] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ([number, bigint][] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ([number, bigint][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ([number, bigint][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ([number, bigint][] | undefined)][]>
}

export const decidingCount =  {
    /**
     *  The number of referenda being decided currently.
     */
    v9420: new StorageType('Referenda.DecidingCount', 'Default', [sts.number()], sts.number()) as DecidingCountV9420,
}

/**
 *  The number of referenda being decided currently.
 */
export interface DecidingCountV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: number): Promise<(number | undefined)>
    getMany(block: Block, keys: number[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (number | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (number | undefined)][]>
}

export const metadataOf =  {
    /**
     *  The metadata is a general information concerning the referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    v9420: new StorageType('Referenda.MetadataOf', 'Optional', [sts.number()], v9420.H256) as MetadataOfV9420,
}

/**
 *  The metadata is a general information concerning the referendum.
 *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
 *  dump or IPFS hash of a JSON file.
 * 
 *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
 *  large preimages.
 */
export interface MetadataOfV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9420.H256 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9420.H256 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9420.H256 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9420.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9420.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9420.H256 | undefined)][]>
}
