import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9320 from '../v9320'
import * as v9350 from '../v9350'
import * as v9370 from '../v9370'
import * as v9381 from '../v9381'
import * as v9420 from '../v9420'

export const referendumCount =  {
    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    v9320: new StorageType('Referenda.ReferendumCount', 'Default', [], sts.number()) as ReferendumCountV9320,
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface ReferendumCountV9320  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const referendumInfoFor =  {
    /**
     *  Information concerning any given referendum.
     */
    v9320: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v9320.Type_620) as ReferendumInfoForV9320,
    /**
     *  Information concerning any given referendum.
     */
    v9350: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v9350.Type_620) as ReferendumInfoForV9350,
    /**
     *  Information concerning any given referendum.
     */
    v9370: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v9370.Type_621) as ReferendumInfoForV9370,
    /**
     *  Information concerning any given referendum.
     */
    v9381: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v9381.Type_626) as ReferendumInfoForV9381,
    /**
     *  Information concerning any given referendum.
     */
    v9420: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v9420.ReferendumInfo) as ReferendumInfoForV9420,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV9320  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9320.Type_620 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9320.Type_620 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9320.Type_620 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9320.Type_620 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9320.Type_620 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9320.Type_620 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV9350  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9350.Type_620 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9350.Type_620 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9350.Type_620 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9350.Type_620 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9350.Type_620 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9350.Type_620 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV9370  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9370.Type_621 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9370.Type_621 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9370.Type_621 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9370.Type_621 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9370.Type_621 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9370.Type_621 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV9381  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9381.Type_626 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9381.Type_626 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9381.Type_626 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9381.Type_626 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9381.Type_626 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9381.Type_626 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9420.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9420.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9420.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9420.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9420.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9420.ReferendumInfo | undefined)][]>
}

export const trackQueue =  {
    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     * 
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    v9320: new StorageType('Referenda.TrackQueue', 'Default', [sts.number()], sts.array(() => sts.tuple(() => [sts.number(), sts.bigint()]))) as TrackQueueV9320,
}

/**
 *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
 *  conviction-weighted approvals.
 * 
 *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
 */
export interface TrackQueueV9320  {
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
    v9320: new StorageType('Referenda.DecidingCount', 'Default', [sts.number()], sts.number()) as DecidingCountV9320,
}

/**
 *  The number of referenda being decided currently.
 */
export interface DecidingCountV9320  {
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
