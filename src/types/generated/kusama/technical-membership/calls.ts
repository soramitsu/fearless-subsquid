import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1029 from '../v1029'
import * as v1050 from '../v1050'
import * as v9291 from '../v9291'

export const addMember =  {
    name: 'TechnicalMembership.add_member',
    /**
     *  Add a member `who` to the set.
     * 
     *  May only be called from `AddOrigin` or root.
     */
    v1020: new CallType(
        'TechnicalMembership.add_member',
        sts.struct({
            who: v1020.AccountId,
        })
    ),
    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    v9291: new CallType(
        'TechnicalMembership.add_member',
        sts.struct({
            who: v9291.MultiAddress,
        })
    ),
}

export const removeMember =  {
    name: 'TechnicalMembership.remove_member',
    /**
     *  Remove a member `who` from the set.
     * 
     *  May only be called from `RemoveOrigin` or root.
     */
    v1020: new CallType(
        'TechnicalMembership.remove_member',
        sts.struct({
            who: v1020.AccountId,
        })
    ),
    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    v9291: new CallType(
        'TechnicalMembership.remove_member',
        sts.struct({
            who: v9291.MultiAddress,
        })
    ),
}

export const swapMember =  {
    name: 'TechnicalMembership.swap_member',
    /**
     *  Swap out one member `remove` for another `add`.
     * 
     *  May only be called from `SwapOrigin` or root.
     */
    v1020: new CallType(
        'TechnicalMembership.swap_member',
        sts.struct({
            remove: v1020.AccountId,
            add: v1020.AccountId,
        })
    ),
    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    v9291: new CallType(
        'TechnicalMembership.swap_member',
        sts.struct({
            remove: v9291.MultiAddress,
            add: v9291.MultiAddress,
        })
    ),
}

export const resetMembers =  {
    name: 'TechnicalMembership.reset_members',
    /**
     *  Change the membership to a new set, disregarding the existing membership. Be nice and
     *  pass `members` pre-sorted.
     * 
     *  May only be called from `ResetOrigin` or root.
     */
    v1020: new CallType(
        'TechnicalMembership.reset_members',
        sts.struct({
            members: sts.array(() => v1020.AccountId),
        })
    ),
}

export const changeKey =  {
    name: 'TechnicalMembership.change_key',
    /**
     *  Swap out the sending member for some other key `new`.
     * 
     *  May only be called from `Signed` origin of a current member.
     */
    v1029: new CallType(
        'TechnicalMembership.change_key',
        sts.struct({
            new: v1029.AccountId,
        })
    ),
    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    v9291: new CallType(
        'TechnicalMembership.change_key',
        sts.struct({
            new: v9291.MultiAddress,
        })
    ),
}

export const setPrime =  {
    name: 'TechnicalMembership.set_prime',
    /**
     *  Set the prime member. Must be a current member.
     */
    v1050: new CallType(
        'TechnicalMembership.set_prime',
        sts.struct({
            who: v1050.AccountId,
        })
    ),
    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    v9291: new CallType(
        'TechnicalMembership.set_prime',
        sts.struct({
            who: v9291.MultiAddress,
        })
    ),
}

export const clearPrime =  {
    name: 'TechnicalMembership.clear_prime',
    /**
     *  Remove the prime member if it exists.
     */
    v1050: new CallType(
        'TechnicalMembership.clear_prime',
        sts.unit()
    ),
}
