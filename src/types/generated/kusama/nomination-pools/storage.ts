import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9220 from '../v9220'
import * as v9230 from '../v9230'
import * as v9271 from '../v9271'
import * as v9420 from '../v9420'

export const minJoinBond =  {
    /**
     *  Minimum amount to bond to join a pool.
     */
    v9220: new StorageType('NominationPools.MinJoinBond', 'Default', [], sts.bigint()) as MinJoinBondV9220,
}

/**
 *  Minimum amount to bond to join a pool.
 */
export interface MinJoinBondV9220  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const minCreateBond =  {
    /**
     *  Minimum bond required to create a pool.
     * 
     *  This is the amount that the depositor must put as their initial stake in the pool, as an
     *  indication of "skin in the game".
     */
    v9220: new StorageType('NominationPools.MinCreateBond', 'Default', [], sts.bigint()) as MinCreateBondV9220,
}

/**
 *  Minimum bond required to create a pool.
 * 
 *  This is the amount that the depositor must put as their initial stake in the pool, as an
 *  indication of "skin in the game".
 */
export interface MinCreateBondV9220  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const maxPools =  {
    /**
     *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
     *  pools can exist.
     */
    v9220: new StorageType('NominationPools.MaxPools', 'Optional', [], sts.number()) as MaxPoolsV9220,
}

/**
 *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
 *  pools can exist.
 */
export interface MaxPoolsV9220  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const maxPoolMembers =  {
    /**
     *  Maximum number of members that can exist in the system. If `None`, then the count
     *  members are not bound on a system wide basis.
     */
    v9220: new StorageType('NominationPools.MaxPoolMembers', 'Optional', [], sts.number()) as MaxPoolMembersV9220,
}

/**
 *  Maximum number of members that can exist in the system. If `None`, then the count
 *  members are not bound on a system wide basis.
 */
export interface MaxPoolMembersV9220  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const maxPoolMembersPerPool =  {
    /**
     *  Maximum number of members that may belong to pool. If `None`, then the count of
     *  members is not bound on a per pool basis.
     */
    v9220: new StorageType('NominationPools.MaxPoolMembersPerPool', 'Optional', [], sts.number()) as MaxPoolMembersPerPoolV9220,
}

/**
 *  Maximum number of members that may belong to pool. If `None`, then the count of
 *  members is not bound on a per pool basis.
 */
export interface MaxPoolMembersPerPoolV9220  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const poolMembers =  {
    /**
     *  Active members.
     */
    v9220: new StorageType('NominationPools.PoolMembers', 'Optional', [v9220.AccountId32], v9220.PoolMember) as PoolMembersV9220,
    /**
     *  Active members.
     */
    v9271: new StorageType('NominationPools.PoolMembers', 'Optional', [v9271.AccountId32], v9271.PoolMember) as PoolMembersV9271,
}

/**
 *  Active members.
 */
export interface PoolMembersV9220  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9220.AccountId32): Promise<(v9220.PoolMember | undefined)>
    getMany(block: Block, keys: v9220.AccountId32[]): Promise<(v9220.PoolMember | undefined)[]>
    getKeys(block: Block): Promise<v9220.AccountId32[]>
    getKeys(block: Block, key: v9220.AccountId32): Promise<v9220.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9220.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9220.AccountId32): AsyncIterable<v9220.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9220.AccountId32, v: (v9220.PoolMember | undefined)][]>
    getPairs(block: Block, key: v9220.AccountId32): Promise<[k: v9220.AccountId32, v: (v9220.PoolMember | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9220.AccountId32, v: (v9220.PoolMember | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9220.AccountId32): AsyncIterable<[k: v9220.AccountId32, v: (v9220.PoolMember | undefined)][]>
}

/**
 *  Active members.
 */
export interface PoolMembersV9271  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9271.AccountId32): Promise<(v9271.PoolMember | undefined)>
    getMany(block: Block, keys: v9271.AccountId32[]): Promise<(v9271.PoolMember | undefined)[]>
    getKeys(block: Block): Promise<v9271.AccountId32[]>
    getKeys(block: Block, key: v9271.AccountId32): Promise<v9271.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9271.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9271.AccountId32): AsyncIterable<v9271.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9271.AccountId32, v: (v9271.PoolMember | undefined)][]>
    getPairs(block: Block, key: v9271.AccountId32): Promise<[k: v9271.AccountId32, v: (v9271.PoolMember | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9271.AccountId32, v: (v9271.PoolMember | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9271.AccountId32): AsyncIterable<[k: v9271.AccountId32, v: (v9271.PoolMember | undefined)][]>
}

export const counterForPoolMembers =  {
    /**
     * Counter for the related counted storage map
     */
    v9220: new StorageType('NominationPools.CounterForPoolMembers', 'Default', [], sts.number()) as CounterForPoolMembersV9220,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForPoolMembersV9220  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const bondedPools =  {
    /**
     *  Storage for bonded pools.
     */
    v9220: new StorageType('NominationPools.BondedPools', 'Optional', [sts.number()], v9220.BondedPoolInner) as BondedPoolsV9220,
    /**
     *  Storage for bonded pools.
     */
    v9230: new StorageType('NominationPools.BondedPools', 'Optional', [sts.number()], v9230.BondedPoolInner) as BondedPoolsV9230,
    /**
     *  Storage for bonded pools.
     */
    v9420: new StorageType('NominationPools.BondedPools', 'Optional', [sts.number()], v9420.BondedPoolInner) as BondedPoolsV9420,
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsV9220  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9220.BondedPoolInner | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9220.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9220.BondedPoolInner | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9220.BondedPoolInner | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9220.BondedPoolInner | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9220.BondedPoolInner | undefined)][]>
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsV9230  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9230.BondedPoolInner | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9230.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9230.BondedPoolInner | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9230.BondedPoolInner | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9230.BondedPoolInner | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9230.BondedPoolInner | undefined)][]>
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9420.BondedPoolInner | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9420.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9420.BondedPoolInner | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9420.BondedPoolInner | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9420.BondedPoolInner | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9420.BondedPoolInner | undefined)][]>
}

export const counterForBondedPools =  {
    /**
     * Counter for the related counted storage map
     */
    v9220: new StorageType('NominationPools.CounterForBondedPools', 'Default', [], sts.number()) as CounterForBondedPoolsV9220,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForBondedPoolsV9220  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const rewardPools =  {
    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
     *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    v9220: new StorageType('NominationPools.RewardPools', 'Optional', [sts.number()], v9220.RewardPool) as RewardPoolsV9220,
    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
     *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    v9271: new StorageType('NominationPools.RewardPools', 'Optional', [sts.number()], v9271.RewardPool) as RewardPoolsV9271,
    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout is
     *  claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    v9420: new StorageType('NominationPools.RewardPools', 'Optional', [sts.number()], v9420.RewardPool) as RewardPoolsV9420,
}

/**
 *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
 *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
 */
export interface RewardPoolsV9220  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9220.RewardPool | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9220.RewardPool | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9220.RewardPool | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9220.RewardPool | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9220.RewardPool | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9220.RewardPool | undefined)][]>
}

/**
 *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
 *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
 */
export interface RewardPoolsV9271  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9271.RewardPool | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9271.RewardPool | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9271.RewardPool | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9271.RewardPool | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9271.RewardPool | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9271.RewardPool | undefined)][]>
}

/**
 *  Reward pools. This is where there rewards for each pool accumulate. When a members payout is
 *  claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
 */
export interface RewardPoolsV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9420.RewardPool | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9420.RewardPool | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9420.RewardPool | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9420.RewardPool | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9420.RewardPool | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9420.RewardPool | undefined)][]>
}

export const counterForRewardPools =  {
    /**
     * Counter for the related counted storage map
     */
    v9220: new StorageType('NominationPools.CounterForRewardPools', 'Default', [], sts.number()) as CounterForRewardPoolsV9220,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForRewardPoolsV9220  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const subPoolsStorage =  {
    /**
     *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
     *  hence the name sub-pools. Keyed by the bonded pools account.
     */
    v9220: new StorageType('NominationPools.SubPoolsStorage', 'Optional', [sts.number()], v9220.SubPools) as SubPoolsStorageV9220,
}

/**
 *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
 *  hence the name sub-pools. Keyed by the bonded pools account.
 */
export interface SubPoolsStorageV9220  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9220.SubPools | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9220.SubPools | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9220.SubPools | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9220.SubPools | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9220.SubPools | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9220.SubPools | undefined)][]>
}

export const counterForSubPoolsStorage =  {
    /**
     * Counter for the related counted storage map
     */
    v9220: new StorageType('NominationPools.CounterForSubPoolsStorage', 'Default', [], sts.number()) as CounterForSubPoolsStorageV9220,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForSubPoolsStorageV9220  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const metadata =  {
    /**
     *  Metadata for the pool.
     */
    v9220: new StorageType('NominationPools.Metadata', 'Default', [sts.number()], sts.bytes()) as MetadataV9220,
}

/**
 *  Metadata for the pool.
 */
export interface MetadataV9220  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: number[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
}

export const counterForMetadata =  {
    /**
     * Counter for the related counted storage map
     */
    v9220: new StorageType('NominationPools.CounterForMetadata', 'Default', [], sts.number()) as CounterForMetadataV9220,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForMetadataV9220  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const lastPoolId =  {
    /**
     *  Ever increasing number of all pools created so far.
     */
    v9220: new StorageType('NominationPools.LastPoolId', 'Default', [], sts.number()) as LastPoolIdV9220,
}

/**
 *  Ever increasing number of all pools created so far.
 */
export interface LastPoolIdV9220  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const reversePoolIdLookup =  {
    /**
     *  A reverse lookup from the pool's account id to its id.
     * 
     *  This is only used for slashing. In all other instances, the pool id is used, and the
     *  accounts are deterministically derived from it.
     */
    v9220: new StorageType('NominationPools.ReversePoolIdLookup', 'Optional', [v9220.AccountId32], sts.number()) as ReversePoolIdLookupV9220,
}

/**
 *  A reverse lookup from the pool's account id to its id.
 * 
 *  This is only used for slashing. In all other instances, the pool id is used, and the
 *  accounts are deterministically derived from it.
 */
export interface ReversePoolIdLookupV9220  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9220.AccountId32): Promise<(number | undefined)>
    getMany(block: Block, keys: v9220.AccountId32[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v9220.AccountId32[]>
    getKeys(block: Block, key: v9220.AccountId32): Promise<v9220.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9220.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9220.AccountId32): AsyncIterable<v9220.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9220.AccountId32, v: (number | undefined)][]>
    getPairs(block: Block, key: v9220.AccountId32): Promise<[k: v9220.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9220.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9220.AccountId32): AsyncIterable<[k: v9220.AccountId32, v: (number | undefined)][]>
}

export const counterForReversePoolIdLookup =  {
    /**
     * Counter for the related counted storage map
     */
    v9220: new StorageType('NominationPools.CounterForReversePoolIdLookup', 'Default', [], sts.number()) as CounterForReversePoolIdLookupV9220,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForReversePoolIdLookupV9220  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const globalMaxCommission =  {
    /**
     *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
     *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
     *  `GlobalMaxCommission` is lower than some current pool commissions.
     */
    v9420: new StorageType('NominationPools.GlobalMaxCommission', 'Optional', [], v9420.Perbill) as GlobalMaxCommissionV9420,
}

/**
 *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
 *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
 *  `GlobalMaxCommission` is lower than some current pool commissions.
 */
export interface GlobalMaxCommissionV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9420.Perbill | undefined)>
}

export const claimPermissions =  {
    /**
     *  Map from a pool member account to their opted claim permission.
     */
    v9420: new StorageType('NominationPools.ClaimPermissions', 'Default', [v9420.AccountId32], v9420.ClaimPermission) as ClaimPermissionsV9420,
}

/**
 *  Map from a pool member account to their opted claim permission.
 */
export interface ClaimPermissionsV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9420.ClaimPermission
    get(block: Block, key: v9420.AccountId32): Promise<(v9420.ClaimPermission | undefined)>
    getMany(block: Block, keys: v9420.AccountId32[]): Promise<(v9420.ClaimPermission | undefined)[]>
    getKeys(block: Block): Promise<v9420.AccountId32[]>
    getKeys(block: Block, key: v9420.AccountId32): Promise<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<v9420.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9420.AccountId32, v: (v9420.ClaimPermission | undefined)][]>
    getPairs(block: Block, key: v9420.AccountId32): Promise<[k: v9420.AccountId32, v: (v9420.ClaimPermission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.AccountId32, v: (v9420.ClaimPermission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<[k: v9420.AccountId32, v: (v9420.ClaimPermission | undefined)][]>
}

export const totalValueLocked =  {
    /**
     *  The sum of funds across all pools.
     * 
     *  This might be lower but never higher than the sum of `total_balance` of all [`PoolMembers`]
     *  because calling `pool_withdraw_unbonded` might decrease the total stake of the pool's
     *  `bonded_account` without adjusting the pallet-internal `UnbondingPool`'s.
     */
    v1001000: new StorageType('NominationPools.TotalValueLocked', 'Default', [], sts.bigint()) as TotalValueLockedV1001000,
}

/**
 *  The sum of funds across all pools.
 * 
 *  This might be lower but never higher than the sum of `total_balance` of all [`PoolMembers`]
 *  because calling `pool_withdraw_unbonded` might decrease the total stake of the pool's
 *  `bonded_account` without adjusting the pallet-internal `UnbondingPool`'s.
 */
export interface TotalValueLockedV1001000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
