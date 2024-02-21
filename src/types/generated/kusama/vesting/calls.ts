import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1050 from '../v1050'
import * as v2011 from '../v2011'
import * as v2028 from '../v2028'
import * as v9111 from '../v9111'

export const vest =  {
    name: 'Vesting.vest',
    /**
     *  Unlock any vested funds of the sender account.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have funds still
     *  locked under this module.
     * 
     *  Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One balance-lock operation.
     *  - One storage read (codec `O(1)`) and up to one removal.
     *  - One event.
     *  # </weight>
     */
    v1050: new CallType(
        'Vesting.vest',
        sts.unit()
    ),
}

export const vestOther =  {
    name: 'Vesting.vest_other',
    /**
     *  Unlock any vested funds of a `target` account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `target`: The account whose vested funds should be unlocked. Must have funds still
     *  locked under this module.
     * 
     *  Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - Up to one account lookup.
     *  - One balance-lock operation.
     *  - One storage read (codec `O(1)`) and up to one removal.
     *  - One event.
     *  # </weight>
     */
    v1050: new CallType(
        'Vesting.vest_other',
        sts.struct({
            target: v1050.LookupSource,
        })
    ),
    /**
     *  Unlock any vested funds of a `target` account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `target`: The account whose vested funds should be unlocked. Must have funds still
     *  locked under this module.
     * 
     *  Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - DbWeight: 3 Reads, 3 Writes
     *      - Reads: Vesting Storage, Balances Locks, Target Account
     *      - Writes: Vesting Storage, Balances Locks, Target Account
     *  # </weight>
     */
    v2028: new CallType(
        'Vesting.vest_other',
        sts.struct({
            target: v2028.LookupSource,
        })
    ),
    /**
     * Unlock any vested funds of a `target` account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `target`: The account whose vested funds should be unlocked. Must have funds still
     * locked under this pallet.
     * 
     * Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 3 Reads, 3 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account
     *     - Writes: Vesting Storage, Balances Locks, Target Account
     * # </weight>
     */
    v9111: new CallType(
        'Vesting.vest_other',
        sts.struct({
            target: v9111.MultiAddress,
        })
    ),
}

export const vestedTransfer =  {
    name: 'Vesting.vested_transfer',
    /**
     *  Create a vested transfer. 
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `target`: The account that should be transferred the vested funds.
     *  - `amount`: The amount of funds to transfer and will be vested.
     *  - `schedule`: The vesting schedule attached to the transfer.
     * 
     *  Emits `VestingCreated`.
     * 
     *  # <weight>
     *  - Creates a new storage entry, but is protected by a minimum transfer
     * 	   amount needed to succeed.
     *  # </weight>
     */
    v1050: new CallType(
        'Vesting.vested_transfer',
        sts.struct({
            target: v1050.LookupSource,
            schedule: v1050.VestingInfo,
        })
    ),
    /**
     *  Create a vested transfer.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `target`: The account that should be transferred the vested funds.
     *  - `amount`: The amount of funds to transfer and will be vested.
     *  - `schedule`: The vesting schedule attached to the transfer.
     * 
     *  Emits `VestingCreated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - DbWeight: 3 Reads, 3 Writes
     *      - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     *      - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     *  # </weight>
     */
    v2028: new CallType(
        'Vesting.vested_transfer',
        sts.struct({
            target: v2028.LookupSource,
            schedule: v2028.VestingInfo,
        })
    ),
    /**
     * Create a vested transfer.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `target`: The account receiving the vested funds.
     * - `schedule`: The vesting schedule attached to the transfer.
     * 
     * Emits `VestingCreated`.
     * 
     * NOTE: This will unlock all schedules through the current block.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 3 Reads, 3 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     *     - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     * # </weight>
     */
    v9111: new CallType(
        'Vesting.vested_transfer',
        sts.struct({
            target: v9111.MultiAddress,
            schedule: v9111.VestingInfo,
        })
    ),
}

export const forceVestedTransfer =  {
    name: 'Vesting.force_vested_transfer',
    /**
     *  Force a vested transfer.
     * 
     *  The dispatch origin for this call must be _Root_.
     * 
     *  - `source`: The account whose funds should be transferred.
     *  - `target`: The account that should be transferred the vested funds.
     *  - `amount`: The amount of funds to transfer and will be vested.
     *  - `schedule`: The vesting schedule attached to the transfer.
     * 
     *  Emits `VestingCreated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - DbWeight: 4 Reads, 4 Writes
     *      - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
     *      - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
     *  - Benchmark: 100.3 + .365 * l µs (min square analysis)
     *  - Using 100 µs fixed. Assuming less than 50 locks on any user, else we may want factor in number of locks.
     *  # </weight>
     */
    v2011: new CallType(
        'Vesting.force_vested_transfer',
        sts.struct({
            source: v2011.LookupSource,
            target: v2011.LookupSource,
            schedule: v2011.VestingInfo,
        })
    ),
    /**
     *  Force a vested transfer.
     * 
     *  The dispatch origin for this call must be _Root_.
     * 
     *  - `source`: The account whose funds should be transferred.
     *  - `target`: The account that should be transferred the vested funds.
     *  - `amount`: The amount of funds to transfer and will be vested.
     *  - `schedule`: The vesting schedule attached to the transfer.
     * 
     *  Emits `VestingCreated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - DbWeight: 4 Reads, 4 Writes
     *      - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
     *      - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
     *  # </weight>
     */
    v2028: new CallType(
        'Vesting.force_vested_transfer',
        sts.struct({
            source: v2028.LookupSource,
            target: v2028.LookupSource,
            schedule: v2028.VestingInfo,
        })
    ),
    /**
     * Force a vested transfer.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `source`: The account whose funds should be transferred.
     * - `target`: The account that should be transferred the vested funds.
     * - `schedule`: The vesting schedule attached to the transfer.
     * 
     * Emits `VestingCreated`.
     * 
     * NOTE: This will unlock all schedules through the current block.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 4 Reads, 4 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
     *     - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
     * # </weight>
     */
    v9111: new CallType(
        'Vesting.force_vested_transfer',
        sts.struct({
            source: v9111.MultiAddress,
            target: v9111.MultiAddress,
            schedule: v9111.VestingInfo,
        })
    ),
}

export const mergeSchedules =  {
    name: 'Vesting.merge_schedules',
    /**
     * Merge two vesting schedules together, creating a new vesting schedule that unlocks over
     * the highest possible start and end blocks. If both schedules have already started the
     * current block will be used as the schedule start; with the caveat that if one schedule
     * is finished by the current block, the other will be treated as the new merged schedule,
     * unmodified.
     * 
     * NOTE: If `schedule1_index == schedule2_index` this is a no-op.
     * NOTE: This will unlock all schedules through the current block prior to merging.
     * NOTE: If both schedules have ended by the current block, no new schedule will be created
     * and both will be removed.
     * 
     * Merged schedule attributes:
     * - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
     *   current_block)`.
     * - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
     * - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `schedule1_index`: index of the first schedule to merge.
     * - `schedule2_index`: index of the second schedule to merge.
     */
    v9111: new CallType(
        'Vesting.merge_schedules',
        sts.struct({
            schedule1Index: sts.number(),
            schedule2Index: sts.number(),
        })
    ),
}
