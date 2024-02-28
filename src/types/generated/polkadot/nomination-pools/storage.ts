import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9280 from '../v9280'
import * as v9420 from '../v9420'

export const minJoinBond =  {
    /**
     *  Minimum amount to bond to join a pool.
     */
    v9280: new StorageType('NominationPools.MinJoinBond', 'Default', [], sts.bigint()) as MinJoinBondV9280,
}

/**
 *  Minimum amount to bond to join a pool.
 */
export interface MinJoinBondV9280  {
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
     * 
     *  This is the value that will always exist in the staking ledger of the pool bonded account
     *  while all other accounts leave.
     */
    v9280: new StorageType('NominationPools.MinCreateBond', 'Default', [], sts.bigint()) as MinCreateBondV9280,
}

/**
 *  Minimum bond required to create a pool.
 * 
 *  This is the amount that the depositor must put as their initial stake in the pool, as an
 *  indication of "skin in the game".
 * 
 *  This is the value that will always exist in the staking ledger of the pool bonded account
 *  while all other accounts leave.
 */
export interface MinCreateBondV9280  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const maxPools =  {
    /**
     *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
     *  pools can exist.
     */
    v9280: new StorageType('NominationPools.MaxPools', 'Optional', [], sts.number()) as MaxPoolsV9280,
}

/**
 *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
 *  pools can exist.
 */
export interface MaxPoolsV9280  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const maxPoolMembers =  {
    /**
     *  Maximum number of members that can exist in the system. If `None`, then the count
     *  members are not bound on a system wide basis.
     */
    v9280: new StorageType('NominationPools.MaxPoolMembers', 'Optional', [], sts.number()) as MaxPoolMembersV9280,
}

/**
 *  Maximum number of members that can exist in the system. If `None`, then the count
 *  members are not bound on a system wide basis.
 */
export interface MaxPoolMembersV9280  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const maxPoolMembersPerPool =  {
    /**
     *  Maximum number of members that may belong to pool. If `None`, then the count of
     *  members is not bound on a per pool basis.
     */
    v9280: new StorageType('NominationPools.MaxPoolMembersPerPool', 'Optional', [], sts.number()) as MaxPoolMembersPerPoolV9280,
}

/**
 *  Maximum number of members that may belong to pool. If `None`, then the count of
 *  members is not bound on a per pool basis.
 */
export interface MaxPoolMembersPerPoolV9280  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const poolMembers =  {
    /**
     *  Active members.
     */
    v9280: new StorageType('NominationPools.PoolMembers', 'Optional', [v9280.AccountId32], v9280.PoolMember) as PoolMembersV9280,
}

/**
 *  Active members.
 */
export interface PoolMembersV9280  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9280.AccountId32): Promise<(v9280.PoolMember | undefined)>
    getMany(block: Block, keys: v9280.AccountId32[]): Promise<(v9280.PoolMember | undefined)[]>
    getKeys(block: Block): Promise<v9280.AccountId32[]>
    getKeys(block: Block, key: v9280.AccountId32): Promise<v9280.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9280.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9280.AccountId32): AsyncIterable<v9280.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9280.AccountId32, v: (v9280.PoolMember | undefined)][]>
    getPairs(block: Block, key: v9280.AccountId32): Promise<[k: v9280.AccountId32, v: (v9280.PoolMember | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9280.AccountId32, v: (v9280.PoolMember | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9280.AccountId32): AsyncIterable<[k: v9280.AccountId32, v: (v9280.PoolMember | undefined)][]>
}

export const counterForPoolMembers =  {
    /**
     * Counter for the related counted storage map
     */
    v9280: new StorageType('NominationPools.CounterForPoolMembers', 'Default', [], sts.number()) as CounterForPoolMembersV9280,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForPoolMembersV9280  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const bondedPools =  {
    /**
     *  Storage for bonded pools.
     */
    v9280: new StorageType('NominationPools.BondedPools', 'Optional', [sts.number()], v9280.BondedPoolInner) as BondedPoolsV9280,
    /**
     *  Storage for bonded pools.
     */
    v9420: new StorageType('NominationPools.BondedPools', 'Optional', [sts.number()], v9420.BondedPoolInner) as BondedPoolsV9420,
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsV9280  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9280.BondedPoolInner | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9280.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9280.BondedPoolInner | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9280.BondedPoolInner | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9280.BondedPoolInner | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9280.BondedPoolInner | undefined)][]>
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
    v9280: new StorageType('NominationPools.CounterForBondedPools', 'Default', [], sts.number()) as CounterForBondedPoolsV9280,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForBondedPoolsV9280  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const rewardPools =  {
    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
     *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    v9280: new StorageType('NominationPools.RewardPools', 'Optional', [sts.number()], v9280.RewardPool) as RewardPoolsV9280,
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
export interface RewardPoolsV9280  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9280.RewardPool | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9280.RewardPool | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9280.RewardPool | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9280.RewardPool | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9280.RewardPool | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9280.RewardPool | undefined)][]>
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
    v9280: new StorageType('NominationPools.CounterForRewardPools', 'Default', [], sts.number()) as CounterForRewardPoolsV9280,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForRewardPoolsV9280  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const subPoolsStorage =  {
    /**
     *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
     *  hence the name sub-pools. Keyed by the bonded pools account.
     */
    v9280: new StorageType('NominationPools.SubPoolsStorage', 'Optional', [sts.number()], v9280.SubPools) as SubPoolsStorageV9280,
}

/**
 *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
 *  hence the name sub-pools. Keyed by the bonded pools account.
 */
export interface SubPoolsStorageV9280  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9280.SubPools | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9280.SubPools | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9280.SubPools | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9280.SubPools | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9280.SubPools | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9280.SubPools | undefined)][]>
}

export const counterForSubPoolsStorage =  {
    /**
     * Counter for the related counted storage map
     */
    v9280: new StorageType('NominationPools.CounterForSubPoolsStorage', 'Default', [], sts.number()) as CounterForSubPoolsStorageV9280,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForSubPoolsStorageV9280  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const metadata =  {
    /**
     *  Metadata for the pool.
     */
    v9280: new StorageType('NominationPools.Metadata', 'Default', [sts.number()], sts.bytes()) as MetadataV9280,
}

/**
 *  Metadata for the pool.
 */
export interface MetadataV9280  {
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
    v9280: new StorageType('NominationPools.CounterForMetadata', 'Default', [], sts.number()) as CounterForMetadataV9280,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForMetadataV9280  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const lastPoolId =  {
    /**
     *  Ever increasing number of all pools created so far.
     */
    v9280: new StorageType('NominationPools.LastPoolId', 'Default', [], sts.number()) as LastPoolIdV9280,
}

/**
 *  Ever increasing number of all pools created so far.
 */
export interface LastPoolIdV9280  {
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
    v9280: new StorageType('NominationPools.ReversePoolIdLookup', 'Optional', [v9280.AccountId32], sts.number()) as ReversePoolIdLookupV9280,
}

/**
 *  A reverse lookup from the pool's account id to its id.
 * 
 *  This is only used for slashing. In all other instances, the pool id is used, and the
 *  accounts are deterministically derived from it.
 */
export interface ReversePoolIdLookupV9280  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9280.AccountId32): Promise<(number | undefined)>
    getMany(block: Block, keys: v9280.AccountId32[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v9280.AccountId32[]>
    getKeys(block: Block, key: v9280.AccountId32): Promise<v9280.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9280.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9280.AccountId32): AsyncIterable<v9280.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9280.AccountId32, v: (number | undefined)][]>
    getPairs(block: Block, key: v9280.AccountId32): Promise<[k: v9280.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9280.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9280.AccountId32): AsyncIterable<[k: v9280.AccountId32, v: (number | undefined)][]>
}

export const counterForReversePoolIdLookup =  {
    /**
     * Counter for the related counted storage map
     */
    v9280: new StorageType('NominationPools.CounterForReversePoolIdLookup', 'Default', [], sts.number()) as CounterForReversePoolIdLookupV9280,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForReversePoolIdLookupV9280  {
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
    v1001002: new StorageType('NominationPools.TotalValueLocked', 'Default', [], sts.bigint()) as TotalValueLockedV1001002,
}

/**
 *  The sum of funds across all pools.
 * 
 *  This might be lower but never higher than the sum of `total_balance` of all [`PoolMembers`]
 *  because calling `pool_withdraw_unbonded` might decrease the total stake of the pool's
 *  `bonded_account` without adjusting the pallet-internal `UnbondingPool`'s.
 */
export interface TotalValueLockedV1001002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
