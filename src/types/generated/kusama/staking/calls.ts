import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1050 from '../v1050'
import * as v1058 from '../v1058'
import * as v2005 from '../v2005'
import * as v2011 from '../v2011'
import * as v2023 from '../v2023'
import * as v2024 from '../v2024'
import * as v2028 from '../v2028'
import * as v9050 from '../v9050'
import * as v9080 from '../v9080'
import * as v9111 from '../v9111'
import * as v9160 from '../v9160'
import * as v9170 from '../v9170'
import * as v9180 from '../v9180'
import * as v9370 from '../v9370'
import * as v9430 from '../v9430'

export const bond =  {
    name: 'Staking.bond',
    /**
     *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
     *  be the account that controls it.
     * 
     *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash account.
     * 
     *  # <weight>
     *  - Independent of the arguments. Moderate complexity.
     *  - O(1).
     *  - Three extra DB entries.
     * 
     *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned unless
     *  the `origin` falls below _existential deposit_ and gets removed as dust.
     *  # </weight>
     */
    v1020: new CallType(
        'Staking.bond',
        sts.struct({
            controller: v1020.LookupSource,
            value: sts.bigint(),
            payee: v1020.RewardDestination,
        })
    ),
    /**
     *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
     *  be the account that controls it.
     * 
     *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash account.
     * 
     *  # <weight>
     *  - Independent of the arguments. Moderate complexity.
     *  - O(1).
     *  - Three extra DB entries.
     * 
     *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned unless
     *  the `origin` falls below _existential deposit_ and gets removed as dust.
     *  # </weight>
     */
    v1050: new CallType(
        'Staking.bond',
        sts.struct({
            controller: v1050.LookupSource,
            value: sts.bigint(),
            payee: v1050.RewardDestination,
        })
    ),
    /**
     *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
     *  be the account that controls it.
     * 
     *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash account.
     * 
     *  Emits `Bonded`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Moderate complexity.
     *  - O(1).
     *  - Three extra DB entries.
     * 
     *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
     *  unless the `origin` falls below _existential deposit_ and gets removed as dust.
     *  ------------------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: Bonded, Ledger, [Origin Account], Current Era, History Depth, Locks
     *  - Write: Bonded, Payee, [Origin Account], Locks, Ledger
     *  # </weight>
     */
    v2028: new CallType(
        'Staking.bond',
        sts.struct({
            controller: v2028.LookupSource,
            value: sts.bigint(),
            payee: v2028.RewardDestination,
        })
    ),
    /**
     * Take the origin account as a stash and lock up `value` of its balance. `controller` will
     * be the account that controls it.
     * 
     * `value` must be more than the `minimum_balance` specified by `T::Currency`.
     * 
     * The dispatch origin for this call must be _Signed_ by the stash account.
     * 
     * Emits `Bonded`.
     * # <weight>
     * - Independent of the arguments. Moderate complexity.
     * - O(1).
     * - Three extra DB entries.
     * 
     * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
     * unless the `origin` falls below _existential deposit_ and gets removed as dust.
     * ------------------
     * # </weight>
     */
    v9111: new CallType(
        'Staking.bond',
        sts.struct({
            controller: v9111.MultiAddress,
            value: sts.bigint(),
            payee: v9111.RewardDestination,
        })
    ),
    /**
     * Take the origin account as a stash and lock up `value` of its balance. `controller` will
     * be the account that controls it.
     * 
     * `value` must be more than the `minimum_balance` specified by `T::Currency`.
     * 
     * The dispatch origin for this call must be _Signed_ by the stash account.
     * 
     * Emits `Bonded`.
     * ## Complexity
     * - Independent of the arguments. Moderate complexity.
     * - O(1).
     * - Three extra DB entries.
     * 
     * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
     * unless the `origin` falls below _existential deposit_ and gets removed as dust.
     */
    v9430: new CallType(
        'Staking.bond',
        sts.struct({
            value: sts.bigint(),
            payee: v9430.RewardDestination,
        })
    ),
}

export const bondExtra =  {
    name: 'Staking.bond_extra',
    /**
     *  Add some extra amount that have appeared in the stash `free_balance` into the balance up
     *  for staking.
     * 
     *  Use this if there are additional funds in your stash account that you wish to bond.
     *  Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount
     *  that can be added.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - O(1).
     *  - One DB entry.
     *  # </weight>
     */
    v1020: new CallType(
        'Staking.bond_extra',
        sts.struct({
            maxAdditional: sts.bigint(),
        })
    ),
}

export const unbond =  {
    name: 'Staking.unbond',
    /**
     *  Schedule a portion of the stash to be unlocked ready for transfer out after the bond
     *  period ends. If this leaves an amount actively bonded less than
     *  T::Currency::minimum_balance(), then it is increased to the full amount.
     * 
     *  Once the unlock period is done, you can call `withdraw_unbonded` to actually move
     *  the funds out of management ready for transfer.
     * 
     *  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
     *  can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
     *  to be called first to remove some of the chunks (if possible).
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  See also [`Call::withdraw_unbonded`].
     * 
     *  # <weight>
     *  - Independent of the arguments. Limited but potentially exploitable complexity.
     *  - Contains a limited number of reads.
     *  - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
     *    will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
     *    The only way to clean the aforementioned storage item is also user-controlled via `withdraw_unbonded`.
     *  - One DB entry.
     *  </weight>
     */
    v1020: new CallType(
        'Staking.unbond',
        sts.struct({
            value: sts.bigint(),
        })
    ),
}

export const withdrawUnbonded =  {
    name: 'Staking.withdraw_unbonded',
    /**
     *  Remove any unlocked chunks from the `unlocking` queue from our management.
     * 
     *  This essentially frees up that balance to be used by the stash account to do
     *  whatever it wants.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  See also [`Call::unbond`].
     * 
     *  # <weight>
     *  - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.
     *   It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is
     *   indirectly user-controlled. See [`unbond`] for more detail.
     *  - Contains a limited number of reads, yet the size of which could be large based on `ledger`.
     *  - Writes are limited to the `origin` account key.
     *  # </weight>
     */
    v1020: new CallType(
        'Staking.withdraw_unbonded',
        sts.unit()
    ),
    /**
     *  Remove any unlocked chunks from the `unlocking` queue from our management.
     * 
     *  This essentially frees up that balance to be used by the stash account to do
     *  whatever it wants.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  Emits `Withdrawn`.
     * 
     *  See also [`Call::unbond`].
     * 
     *  # <weight>
     *  - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.
     *   It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is
     *   indirectly user-controlled. See [`unbond`] for more detail.
     *  - Contains a limited number of reads, yet the size of which could be large based on `ledger`.
     *  - Writes are limited to the `origin` account key.
     *  ---------------
     *  Complexity O(S) where S is the number of slashing spans to remove
     *  Base Weight:
     *  Update: 50.52 + .028 * S µs
     *  - Reads: EraElectionStatus, Ledger, Current Era, Locks, [Origin Account]
     *  - Writes: [Origin Account], Locks, Ledger
     *  Kill: 79.41 + 2.366 * S µs
     *  - Reads: EraElectionStatus, Ledger, Current Era, Bonded, Slashing Spans, [Origin Account], Locks
     *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, [Origin Account], Locks
     *  - Writes Each: SpanSlash * S
     *  NOTE: Weight annotation is the kill scenario, we refund otherwise.
     *  # </weight>
     */
    v2005: new CallType(
        'Staking.withdraw_unbonded',
        sts.struct({
            numSlashingSpans: sts.number(),
        })
    ),
}

export const validate =  {
    name: 'Staking.validate',
    /**
     *  Declare the desire to validate for the origin controller.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  # </weight>
     */
    v1020: new CallType(
        'Staking.validate',
        sts.struct({
            prefs: v1020.ValidatorPrefs,
        })
    ),
    /**
     *  Declare the desire to validate for the origin controller.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  -----------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: Era Election Status, Ledger
     *  - Write: Nominators, Validators
     *  # </weight>
     */
    v2028: new CallType(
        'Staking.validate',
        sts.struct({
            prefs: v2028.ValidatorPrefs,
        })
    ),
}

export const nominate =  {
    name: 'Staking.nominate',
    /**
     *  Declare the desire to nominate `targets` for the origin controller.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  # <weight>
     *  - The transaction's complexity is proportional to the size of `targets`,
     *  which is capped at `MAX_NOMINATIONS`.
     *  - Both the reads and writes follow a similar pattern.
     *  # </weight>
     */
    v1020: new CallType(
        'Staking.nominate',
        sts.struct({
            targets: sts.array(() => v1020.LookupSource),
        })
    ),
    /**
     *  Declare the desire to nominate `targets` for the origin controller.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  # <weight>
     *  - The transaction's complexity is proportional to the size of `targets`,
     *  which is capped at `MAX_NOMINATIONS`.
     *  - Both the reads and writes follow a similar pattern.
     *  # </weight>
     */
    v1050: new CallType(
        'Staking.nominate',
        sts.struct({
            targets: sts.array(() => v1050.LookupSource),
        })
    ),
    /**
     *  Declare the desire to nominate `targets` for the origin controller.
     * 
     *  Effects will be felt at the beginning of the next era. This can only be called when
     *  [`EraElectionStatus`] is `Closed`.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - The transaction's complexity is proportional to the size of `targets` (N)
     *  which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
     *  - Both the reads and writes follow a similar pattern.
     *  ---------
     *  Weight: O(N)
     *  where N is the number of targets
     *  DB Weight:
     *  - Reads: Era Election Status, Ledger, Current Era
     *  - Writes: Validators, Nominators
     *  # </weight>
     */
    v2028: new CallType(
        'Staking.nominate',
        sts.struct({
            targets: sts.array(() => v2028.LookupSource),
        })
    ),
    /**
     * Declare the desire to nominate `targets` for the origin controller.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * # <weight>
     * - The transaction's complexity is proportional to the size of `targets` (N)
     * which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
     * - Both the reads and writes follow a similar pattern.
     * # </weight>
     */
    v9111: new CallType(
        'Staking.nominate',
        sts.struct({
            targets: sts.array(() => v9111.MultiAddress),
        })
    ),
}

export const chill =  {
    name: 'Staking.chill',
    /**
     *  Declare no desire to either validate or nominate.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains one read.
     *  - Writes are limited to the `origin` account key.
     *  # </weight>
     */
    v1020: new CallType(
        'Staking.chill',
        sts.unit()
    ),
}

export const setPayee =  {
    name: 'Staking.set_payee',
    /**
     *  (Re-)set the payment target for a controller.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  # </weight>
     */
    v1020: new CallType(
        'Staking.set_payee',
        sts.struct({
            payee: v1020.RewardDestination,
        })
    ),
}

export const setController =  {
    name: 'Staking.set_controller',
    /**
     *  (Re-)set the controller of a stash.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  # </weight>
     */
    v1020: new CallType(
        'Staking.set_controller',
        sts.struct({
            controller: v1020.LookupSource,
        })
    ),
    /**
     *  (Re-)set the controller of a stash.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  # </weight>
     */
    v1050: new CallType(
        'Staking.set_controller',
        sts.struct({
            controller: v1050.LookupSource,
        })
    ),
    /**
     *  (Re-)set the controller of a stash.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  ----------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: Bonded, Ledger New Controller, Ledger Old Controller
     *  - Write: Bonded, Ledger New Controller, Ledger Old Controller
     *  # </weight>
     */
    v2028: new CallType(
        'Staking.set_controller',
        sts.struct({
            controller: v2028.LookupSource,
        })
    ),
    /**
     * (Re-)set the controller of a stash.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - Contains a limited number of reads.
     * - Writes are limited to the `origin` account key.
     * ----------
     * Weight: O(1)
     * DB Weight:
     * - Read: Bonded, Ledger New Controller, Ledger Old Controller
     * - Write: Bonded, Ledger New Controller, Ledger Old Controller
     * # </weight>
     */
    v9111: new CallType(
        'Staking.set_controller',
        sts.struct({
            controller: v9111.MultiAddress,
        })
    ),
    /**
     * (Re-)sets the controller of a stash to the stash itself. This function previously
     * accepted a `controller` argument to set the controller to an account other than the
     * stash itself. This functionality has now been removed, now only setting the controller
     * to the stash, if it is not already.
     * 
     * Effects will be felt instantly (as soon as this function is completed successfully).
     * 
     * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     * ## Complexity
     * O(1)
     * - Independent of the arguments. Insignificant complexity.
     * - Contains a limited number of reads.
     * - Writes are limited to the `origin` account key.
     */
    v9430: new CallType(
        'Staking.set_controller',
        sts.unit()
    ),
}

export const setValidatorCount =  {
    name: 'Staking.set_validator_count',
    /**
     *  The ideal number of validators.
     */
    v1020: new CallType(
        'Staking.set_validator_count',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const forceNoEras =  {
    name: 'Staking.force_no_eras',
    /**
     *  Force there to be no new eras indefinitely.
     * 
     *  # <weight>
     *  - No arguments.
     *  # </weight>
     */
    v1020: new CallType(
        'Staking.force_no_eras',
        sts.unit()
    ),
}

export const forceNewEra =  {
    name: 'Staking.force_new_era',
    /**
     *  Force there to be a new era at the end of the next session. After this, it will be
     *  reset to normal (non-forced) behaviour.
     * 
     *  # <weight>
     *  - No arguments.
     *  # </weight>
     */
    v1020: new CallType(
        'Staking.force_new_era',
        sts.unit()
    ),
}

export const setInvulnerables =  {
    name: 'Staking.set_invulnerables',
    /**
     *  Set the validators who cannot be slashed (if any).
     */
    v1020: new CallType(
        'Staking.set_invulnerables',
        sts.struct({
            validators: sts.array(() => v1020.AccountId),
        })
    ),
    /**
     *  Set the validators who cannot be slashed (if any).
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - O(V)
     *  - Write: Invulnerables
     *  # </weight>
     */
    v2024: new CallType(
        'Staking.set_invulnerables',
        sts.struct({
            invulnerables: sts.array(() => v2024.AccountId),
        })
    ),
}

export const forceUnstake =  {
    name: 'Staking.force_unstake',
    /**
     *  Force a current staker to become completely unstaked, immediately.
     */
    v1020: new CallType(
        'Staking.force_unstake',
        sts.struct({
            stash: v1020.AccountId,
        })
    ),
    /**
     *  Force a current staker to become completely unstaked, immediately.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  O(S) where S is the number of slashing spans to be removed
     *  Base Weight: 53.07 + 2.365 * S µs
     *  Reads: Bonded, Slashing Spans, Account, Locks
     *  Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Account, Locks
     *  Writes Each: SpanSlash * S
     *  # </weight>
     */
    v2005: new CallType(
        'Staking.force_unstake',
        sts.struct({
            stash: v2005.AccountId,
            numSlashingSpans: sts.number(),
        })
    ),
}

export const forceNewEraAlways =  {
    name: 'Staking.force_new_era_always',
    /**
     *  Force there to be a new era at the end of sessions indefinitely.
     * 
     *  # <weight>
     *  - One storage write
     *  # </weight>
     */
    v1020: new CallType(
        'Staking.force_new_era_always',
        sts.unit()
    ),
}

export const cancelDeferredSlash =  {
    name: 'Staking.cancel_deferred_slash',
    /**
     *  Cancel enactment of a deferred slash. Can be called by either the root origin or
     *  the `T::SlashCancelOrigin`.
     *  passing the era and indices of the slashes for that era to kill.
     * 
     *  # <weight>
     *  - One storage write.
     *  # </weight>
     */
    v1020: new CallType(
        'Staking.cancel_deferred_slash',
        sts.struct({
            era: v1020.EraIndex,
            slashIndices: sts.array(() => sts.number()),
        })
    ),
}

export const rebond =  {
    name: 'Staking.rebond',
    /**
     *  Rebond a portion of the stash scheduled to be unlocked.
     * 
     *  # <weight>
     *  - Time complexity: O(1). Bounded by `MAX_UNLOCKING_CHUNKS`.
     *  - Storage changes: Can't increase storage, only decrease it.
     *  # </weight>
     */
    v1038: new CallType(
        'Staking.rebond',
        sts.struct({
            value: sts.bigint(),
        })
    ),
}

export const payoutNominator =  {
    name: 'Staking.payout_nominator',
    /**
     *  Make one nominator's payout for one era.
     * 
     *  - `who` is the controller account of the nominator to pay out.
     *  - `era` may not be lower than one following the most recently paid era. If it is higher,
     *    then it indicates an instruction to skip the payout of all previous eras.
     *  - `validators` is the list of all validators that `who` had exposure to during `era`.
     *    If it is incomplete, then less than the full reward will be paid out.
     *    It must not exceed `MAX_NOMINATIONS`.
     * 
     *  WARNING: once an era is payed for a validator such validator can't claim the payout of
     *  previous era.
     * 
     *  WARNING: Incorrect arguments here can result in loss of payout. Be very careful.
     * 
     *  # <weight>
     *  - Number of storage read of `O(validators)`; `validators` is the argument of the call,
     *    and is bounded by `MAX_NOMINATIONS`.
     *  - Each storage read is `O(N)` size and decode complexity; `N` is the  maximum
     *    nominations that can be given to a single validator.
     *  - Computation complexity: `O(MAX_NOMINATIONS * logN)`; `MAX_NOMINATIONS` is the
     *    maximum number of validators that may be nominated by a single nominator, it is
     *    bounded only economically (all nominators are required to place a minimum stake).
     *  # </weight>
     */
    v1050: new CallType(
        'Staking.payout_nominator',
        sts.struct({
            era: v1050.EraIndex,
            validators: sts.array(() => sts.tuple(() => [v1050.AccountId, sts.number()])),
        })
    ),
}

export const payoutValidator =  {
    name: 'Staking.payout_validator',
    /**
     *  Make one validator's payout for one era.
     * 
     *  - `who` is the controller account of the validator to pay out.
     *  - `era` may not be lower than one following the most recently paid era. If it is higher,
     *    then it indicates an instruction to skip the payout of all previous eras.
     * 
     *  WARNING: once an era is payed for a validator such validator can't claim the payout of
     *  previous era.
     * 
     *  WARNING: Incorrect arguments here can result in loss of payout. Be very careful.
     * 
     *  # <weight>
     *  - Time complexity: O(1).
     *  - Contains a limited number of reads and writes.
     *  # </weight>
     */
    v1050: new CallType(
        'Staking.payout_validator',
        sts.struct({
            era: v1050.EraIndex,
        })
    ),
}

export const setHistoryDepth =  {
    name: 'Staking.set_history_depth',
    /**
     *  Set history_depth value.
     * 
     *  Origin must be root.
     */
    v1050: new CallType(
        'Staking.set_history_depth',
        sts.struct({
            newHistoryDepth: sts.number(),
        })
    ),
    /**
     *  Set `HistoryDepth` value. This function will delete any history information
     *  when `HistoryDepth` is reduced.
     * 
     *  Parameters:
     *  - `new_history_depth`: The new history depth you would like to set.
     *  - `era_items_deleted`: The number of items that will be deleted by this dispatch.
     *     This should report all the storage items that will be deleted by clearing old
     *     era history. Needed to report an accurate weight for the dispatch. Trusted by
     *     `Root` to report an accurate number.
     * 
     *  Origin must be root.
     * 
     *  # <weight>
     *  - E: Number of history depths removed, i.e. 10 -> 7 = 3
     *  - Base Weight: 29.13 * E µs
     *  - DB Weight:
     *      - Reads: Current Era, History Depth
     *      - Writes: History Depth
     *      - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
     *      - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake, ErasStartSessionIndex
     *  # </weight>
     */
    v2005: new CallType(
        'Staking.set_history_depth',
        sts.struct({
            newHistoryDepth: sts.number(),
            eraItemsDeleted: sts.number(),
        })
    ),
}

export const reapStash =  {
    name: 'Staking.reap_stash',
    /**
     *  Remove all data structure concerning a staker/stash once its balance is zero.
     *  This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone
     *  and the target `stash` must have no funds left.
     * 
     *  This can be called from any origin.
     * 
     *  - `stash`: The stash account to reap. Its balance must be zero.
     */
    v1050: new CallType(
        'Staking.reap_stash',
        sts.struct({
            stash: v1050.AccountId,
        })
    ),
    /**
     *  Remove all data structure concerning a staker/stash once its balance is zero.
     *  This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone
     *  and the target `stash` must have no funds left.
     * 
     *  This can be called from any origin.
     * 
     *  - `stash`: The stash account to reap. Its balance must be zero.
     * 
     *  # <weight>
     *  Complexity: O(S) where S is the number of slashing spans on the account.
     *  Base Weight: 75.94 + 2.396 * S µs
     *  DB Weight:
     *  - Reads: Stash Account, Bonded, Slashing Spans, Locks
     *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Stash Account, Locks
     *  - Writes Each: SpanSlash * S
     *  # </weight>
     */
    v2005: new CallType(
        'Staking.reap_stash',
        sts.struct({
            stash: v2005.AccountId,
            numSlashingSpans: sts.number(),
        })
    ),
}

export const payoutStakers =  {
    name: 'Staking.payout_stakers',
    /**
     *  Pay out all the stakers behind a single validator for a single era.
     * 
     *  - `validator_stash` is the stash account of the validator. Their nominators, up to
     *    `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
     *  - `era` may be any era between `[current_era - history_depth; current_era]`.
     * 
     *  The origin of this call must be _Signed_. Any account can call this function, even if
     *  it is not one of the stakers.
     * 
     *  This can only be called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Time complexity: at most O(MaxNominatorRewardedPerValidator).
     *  - Contains a limited number of reads and writes.
     *  # </weight>
     */
    v1058: new CallType(
        'Staking.payout_stakers',
        sts.struct({
            validatorStash: v1058.AccountId,
            era: v1058.EraIndex,
        })
    ),
}

export const submitElectionSolution =  {
    name: 'Staking.submit_election_solution',
    /**
     *  Submit a phragmen result to the chain. If the solution:
     * 
     *  1. is valid.
     *  2. has a better score than a potentially existing solution on chain.
     * 
     *  then, it will be _put_ on chain.
     * 
     *  A solution consists of two pieces of data:
     * 
     *  1. `winners`: a flat vector of all the winners of the round.
     *  2. `assignments`: the compact version of an assignment vector that encodes the edge
     *     weights.
     * 
     *  Both of which may be computed using [`phragmen`], or any other algorithm.
     * 
     *  Additionally, the submitter must provide:
     * 
     *  - The `score` that they claim their solution has.
     * 
     *  Both validators and nominators will be represented by indices in the solution. The
     *  indices should respect the corresponding types ([`ValidatorIndex`] and
     *  [`NominatorIndex`]). Moreover, they should be valid when used to index into
     *  [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the
     *  solution to be rejected. These two storage items are set during the election window and
     *  may be used to determine the indices.
     * 
     *  A solution is valid if:
     * 
     *  0. It is submitted when [`EraElectionStatus`] is `Open`.
     *  1. Its claimed score is equal to the score computed on-chain.
     *  2. Presents the correct number of winners.
     *  3. All indexes must be value according to the snapshot vectors. All edge values must
     *     also be correct and should not overflow the granularity of the ratio type (i.e. 256
     *     or billion).
     *  4. For each edge, all targets are actually nominated by the voter.
     *  5. Has correct self-votes.
     * 
     *  A solutions score is consisted of 3 parameters:
     * 
     *  1. `min { support.total }` for each support of a winner. This value should be maximized.
     *  2. `sum { support.total }` for each support of a winner. This value should be minimized.
     *  3. `sum { support.total^2 }` for each support of a winner. This value should be
     *     minimized (to ensure less variance)
     * 
     *  # <weight>
     *  E: number of edges. m: size of winner committee. n: number of nominators. d: edge degree
     *  (16 for now) v: number of on-chain validator candidates.
     * 
     *  NOTE: given a solution which is reduced, we can enable a new check the ensure `|E| < n +
     *  m`. We don't do this _yet_, but our offchain worker code executes it nonetheless.
     * 
     *  major steps (all done in `check_and_replace_solution`):
     * 
     *  - Storage: O(1) read `ElectionStatus`.
     *  - Storage: O(1) read `PhragmenScore`.
     *  - Storage: O(1) read `ValidatorCount`.
     *  - Storage: O(1) length read from `SnapshotValidators`.
     * 
     *  - Storage: O(v) reads of `AccountId` to fetch `snapshot_validators`.
     *  - Memory: O(m) iterations to map winner index to validator id.
     *  - Storage: O(n) reads `AccountId` to fetch `snapshot_nominators`.
     *  - Memory: O(n + m) reads to map index to `AccountId` for un-compact.
     * 
     *  - Storage: O(e) accountid reads from `Nomination` to read correct nominations.
     *  - Storage: O(e) calls into `slashable_balance_of_vote_weight` to convert ratio to staked.
     * 
     *  - Memory: build_support_map. O(e).
     *  - Memory: evaluate_support: O(E).
     * 
     *  - Storage: O(e) writes to `QueuedElected`.
     *  - Storage: O(1) write to `QueuedScore`
     * 
     *  The weight of this call is 1/10th of the blocks total weight.
     *  # </weight>
     */
    v1058: new CallType(
        'Staking.submit_election_solution',
        sts.struct({
            winners: sts.array(() => v1058.ValidatorIndex),
            compactAssignments: v1058.CompactAssignments,
            score: v1058.PhragmenScore,
            era: v1058.EraIndex,
        })
    ),
    /**
     *  Submit an election result to the chain. If the solution:
     * 
     *  1. is valid.
     *  2. has a better score than a potentially existing solution on chain.
     * 
     *  then, it will be _put_ on chain.
     * 
     *  A solution consists of two pieces of data:
     * 
     *  1. `winners`: a flat vector of all the winners of the round.
     *  2. `assignments`: the compact version of an assignment vector that encodes the edge
     *     weights.
     * 
     *  Both of which may be computed using _phragmen_, or any other algorithm.
     * 
     *  Additionally, the submitter must provide:
     * 
     *  - The `score` that they claim their solution has.
     * 
     *  Both validators and nominators will be represented by indices in the solution. The
     *  indices should respect the corresponding types ([`ValidatorIndex`] and
     *  [`NominatorIndex`]). Moreover, they should be valid when used to index into
     *  [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the
     *  solution to be rejected. These two storage items are set during the election window and
     *  may be used to determine the indices.
     * 
     *  A solution is valid if:
     * 
     *  0. It is submitted when [`EraElectionStatus`] is `Open`.
     *  1. Its claimed score is equal to the score computed on-chain.
     *  2. Presents the correct number of winners.
     *  3. All indexes must be value according to the snapshot vectors. All edge values must
     *     also be correct and should not overflow the granularity of the ratio type (i.e. 256
     *     or billion).
     *  4. For each edge, all targets are actually nominated by the voter.
     *  5. Has correct self-votes.
     * 
     *  A solutions score is consisted of 3 parameters:
     * 
     *  1. `min { support.total }` for each support of a winner. This value should be maximized.
     *  2. `sum { support.total }` for each support of a winner. This value should be minimized.
     *  3. `sum { support.total^2 }` for each support of a winner. This value should be
     *     minimized (to ensure less variance)
     * 
     *  # <weight>
     *  See `crate::weight` module.
     *  # </weight>
     */
    v2005: new CallType(
        'Staking.submit_election_solution',
        sts.struct({
            winners: sts.array(() => v2005.ValidatorIndex),
            compact: v2005.CompactAssignments,
            score: v2005.ElectionScore,
            era: v2005.EraIndex,
            size: v2005.ElectionSize,
        })
    ),
    /**
     *  Submit an election result to the chain. If the solution:
     * 
     *  1. is valid.
     *  2. has a better score than a potentially existing solution on chain.
     * 
     *  then, it will be _put_ on chain.
     * 
     *  A solution consists of two pieces of data:
     * 
     *  1. `winners`: a flat vector of all the winners of the round.
     *  2. `assignments`: the compact version of an assignment vector that encodes the edge
     *     weights.
     * 
     *  Both of which may be computed using _phragmen_, or any other algorithm.
     * 
     *  Additionally, the submitter must provide:
     * 
     *  - The `score` that they claim their solution has.
     * 
     *  Both validators and nominators will be represented by indices in the solution. The
     *  indices should respect the corresponding types ([`ValidatorIndex`] and
     *  [`NominatorIndex`]). Moreover, they should be valid when used to index into
     *  [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the
     *  solution to be rejected. These two storage items are set during the election window and
     *  may be used to determine the indices.
     * 
     *  A solution is valid if:
     * 
     *  0. It is submitted when [`EraElectionStatus`] is `Open`.
     *  1. Its claimed score is equal to the score computed on-chain.
     *  2. Presents the correct number of winners.
     *  3. All indexes must be value according to the snapshot vectors. All edge values must
     *     also be correct and should not overflow the granularity of the ratio type (i.e. 256
     *     or billion).
     *  4. For each edge, all targets are actually nominated by the voter.
     *  5. Has correct self-votes.
     * 
     *  A solutions score is consisted of 3 parameters:
     * 
     *  1. `min { support.total }` for each support of a winner. This value should be maximized.
     *  2. `sum { support.total }` for each support of a winner. This value should be minimized.
     *  3. `sum { support.total^2 }` for each support of a winner. This value should be
     *     minimized (to ensure less variance)
     * 
     *  # <weight>
     *  See `crate::weight` module.
     *  # </weight>
     */
    v2023: new CallType(
        'Staking.submit_election_solution',
        sts.struct({
            winners: sts.array(() => v2023.ValidatorIndex),
            compact: v2023.CompactAssignments,
            score: v2023.ElectionScore,
            era: v2023.EraIndex,
            size: v2023.ElectionSize,
        })
    ),
}

export const submitElectionSolutionUnsigned =  {
    name: 'Staking.submit_election_solution_unsigned',
    /**
     *  Unsigned version of `submit_election_solution`.
     * 
     *  Note that this must pass the [`ValidateUnsigned`] check which only allows transactions
     *  from the local node to be included. In other words, only the block author can include a
     *  transaction in the block.
     */
    v1058: new CallType(
        'Staking.submit_election_solution_unsigned',
        sts.struct({
            winners: sts.array(() => v1058.ValidatorIndex),
            compactAssignments: v1058.CompactAssignments,
            score: v1058.PhragmenScore,
            era: v1058.EraIndex,
        })
    ),
    /**
     *  Unsigned version of `submit_election_solution`.
     * 
     *  Note that this must pass the [`ValidateUnsigned`] check which only allows transactions
     *  from the local node to be included. In other words, only the block author can include a
     *  transaction in the block.
     * 
     *  # <weight>
     *  See `crate::weight` module.
     *  # </weight>
     */
    v2005: new CallType(
        'Staking.submit_election_solution_unsigned',
        sts.struct({
            winners: sts.array(() => v2005.ValidatorIndex),
            compact: v2005.CompactAssignments,
            score: v2005.ElectionScore,
            era: v2005.EraIndex,
            size: v2005.ElectionSize,
        })
    ),
    /**
     *  Unsigned version of `submit_election_solution`.
     * 
     *  Note that this must pass the [`ValidateUnsigned`] check which only allows transactions
     *  from the local node to be included. In other words, only the block author can include a
     *  transaction in the block.
     * 
     *  # <weight>
     *  See `crate::weight` module.
     *  # </weight>
     */
    v2023: new CallType(
        'Staking.submit_election_solution_unsigned',
        sts.struct({
            winners: sts.array(() => v2023.ValidatorIndex),
            compact: v2023.CompactAssignments,
            score: v2023.ElectionScore,
            era: v2023.EraIndex,
            size: v2023.ElectionSize,
        })
    ),
}

export const increaseValidatorCount =  {
    name: 'Staking.increase_validator_count',
    /**
     *  Increments the ideal number of validators.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  Base Weight: 1.717 µs
     *  Read/Write: Validator Count
     *  # </weight>
     */
    v2011: new CallType(
        'Staking.increase_validator_count',
        sts.struct({
            additional: sts.number(),
        })
    ),
}

export const scaleValidatorCount =  {
    name: 'Staking.scale_validator_count',
    /**
     *  Scale up the ideal number of validators by a factor.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  Base Weight: 1.717 µs
     *  Read/Write: Validator Count
     *  # </weight>
     */
    v2011: new CallType(
        'Staking.scale_validator_count',
        sts.struct({
            factor: v2011.Percent,
        })
    ),
}

export const kick =  {
    name: 'Staking.kick',
    /**
     *  Remove the given nominations from the calling validator.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`. The controller
     *  account should represent a validator.
     * 
     *  - `who`: A list of nominator stash accounts who are nominating this validator which
     *    should no longer be nominating this validator.
     * 
     *  Note: Making this call only makes sense if you first set the validator preferences to
     *  block any further nominations.
     */
    v2028: new CallType(
        'Staking.kick',
        sts.struct({
            who: sts.array(() => v2028.LookupSource),
        })
    ),
    /**
     * Remove the given nominations from the calling validator.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * - `who`: A list of nominator stash accounts who are nominating this validator which
     *   should no longer be nominating this validator.
     * 
     * Note: Making this call only makes sense if you first set the validator preferences to
     * block any further nominations.
     */
    v9111: new CallType(
        'Staking.kick',
        sts.struct({
            who: sts.array(() => v9111.MultiAddress),
        })
    ),
}

export const updateStakingLimits =  {
    name: 'Staking.update_staking_limits',
    /**
     *  Update the various staking limits this pallet.
     * 
     *  * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     *  * `min_validator_bond`: The minimum active bond needed to be a validator.
     *  * `max_nominator_count`: The max number of users who can be a nominator at once.
     *    When set to `None`, no limit is enforced.
     *  * `max_validator_count`: The max number of users who can be a validator at once.
     *    When set to `None`, no limit is enforced.
     * 
     *  Origin must be Root to call this function.
     * 
     *  NOTE: Existing nominators and validators will not be affected by this update.
     *  to kick people under the new limits, `chill_other` should be called.
     */
    v9050: new CallType(
        'Staking.update_staking_limits',
        sts.struct({
            minNominatorBond: v9050.BalanceOf,
            minValidatorBond: v9050.BalanceOf,
            maxNominatorCount: sts.option(() => sts.number()),
            maxValidatorCount: sts.option(() => sts.number()),
        })
    ),
}

export const chillOther =  {
    name: 'Staking.chill_other',
    /**
     *  Declare a `controller` as having no desire to either validator or nominate.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_, but can be called by anyone.
     * 
     *  If the caller is the same as the controller being targeted, then no further checks
     *  are enforced. However, this call can also be made by an third party user who witnesses
     *  that this controller does not satisfy the minimum bond requirements to be in their role.
     * 
     *  This can be helpful if bond requirements are updated, and we need to remove old users
     *  who do not satisfy these requirements.
     * 
     */
    v9050: new CallType(
        'Staking.chill_other',
        sts.struct({
            controller: v9050.AccountId,
        })
    ),
}

export const setStakingLimits =  {
    name: 'Staking.set_staking_limits',
    /**
     *  Update the various staking limits this pallet.
     * 
     *  * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     *  * `min_validator_bond`: The minimum active bond needed to be a validator.
     *  * `max_nominator_count`: The max number of users who can be a nominator at once.
     *    When set to `None`, no limit is enforced.
     *  * `max_validator_count`: The max number of users who can be a validator at once.
     *    When set to `None`, no limit is enforced.
     * 
     *  Origin must be Root to call this function.
     * 
     *  NOTE: Existing nominators and validators will not be affected by this update.
     *  to kick people under the new limits, `chill_other` should be called.
     */
    v9080: new CallType(
        'Staking.set_staking_limits',
        sts.struct({
            minNominatorBond: v9080.BalanceOf,
            minValidatorBond: v9080.BalanceOf,
            maxNominatorCount: sts.option(() => sts.number()),
            maxValidatorCount: sts.option(() => sts.number()),
            threshold: sts.option(() => v9080.Percent),
        })
    ),
}

export const setStakingConfigs =  {
    name: 'Staking.set_staking_configs',
    /**
     * Update the various staking configurations .
     * 
     * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     * * `min_validator_bond`: The minimum active bond needed to be a validator.
     * * `max_nominator_count`: The max number of users who can be a nominator at once. When
     *   set to `None`, no limit is enforced.
     * * `max_validator_count`: The max number of users who can be a validator at once. When
     *   set to `None`, no limit is enforced.
     * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
     *   should be filled in order for the `chill_other` transaction to work.
     * * `min_commission`: The minimum amount of commission that each validators must maintain.
     *   This is checked only upon calling `validate`. Existing validators are not affected.
     * 
     * Origin must be Root to call this function.
     * 
     * NOTE: Existing nominators and validators will not be affected by this update.
     * to kick people under the new limits, `chill_other` should be called.
     */
    v9160: new CallType(
        'Staking.set_staking_configs',
        sts.struct({
            minNominatorBond: sts.bigint(),
            minValidatorBond: sts.bigint(),
            maxNominatorCount: sts.option(() => sts.number()),
            maxValidatorCount: sts.option(() => sts.number()),
            chillThreshold: sts.option(() => v9160.Percent),
            minCommission: v9160.Perbill,
        })
    ),
    /**
     * Update the various staking configurations .
     * 
     * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     * * `min_validator_bond`: The minimum active bond needed to be a validator.
     * * `max_nominator_count`: The max number of users who can be a nominator at once. When
     *   set to `None`, no limit is enforced.
     * * `max_validator_count`: The max number of users who can be a validator at once. When
     *   set to `None`, no limit is enforced.
     * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
     *   should be filled in order for the `chill_other` transaction to work.
     * * `min_commission`: The minimum amount of commission that each validators must maintain.
     *   This is checked only upon calling `validate`. Existing validators are not affected.
     * 
     * Origin must be Root to call this function.
     * 
     * NOTE: Existing nominators and validators will not be affected by this update.
     * to kick people under the new limits, `chill_other` should be called.
     */
    v9180: new CallType(
        'Staking.set_staking_configs',
        sts.struct({
            minNominatorBond: v9180.ConfigOp,
            minValidatorBond: v9180.ConfigOp,
            maxNominatorCount: v9180.Type_243,
            maxValidatorCount: v9180.Type_243,
            chillThreshold: v9180.Type_244,
            minCommission: v9180.Type_245,
        })
    ),
}

export const forceApplyMinCommission =  {
    name: 'Staking.force_apply_min_commission',
    /**
     * Force a validator to have at least the minimum commission. This will not affect a
     * validator who already has a commission greater than or equal to the minimum. Any account
     * can call this.
     */
    v9170: new CallType(
        'Staking.force_apply_min_commission',
        sts.struct({
            validatorStash: v9170.AccountId32,
        })
    ),
}

export const setMinCommission =  {
    name: 'Staking.set_min_commission',
    /**
     * Sets the minimum amount of commission that each validators must maintain.
     * 
     * This call has lower privilege requirements than `set_staking_config` and can be called
     * by the `T::AdminOrigin`. Root can always call this.
     */
    v9370: new CallType(
        'Staking.set_min_commission',
        sts.struct({
            new: v9370.Perbill,
        })
    ),
}
