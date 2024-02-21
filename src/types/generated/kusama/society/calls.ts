import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1040 from '../v1040'
import * as v1042 from '../v1042'
import * as v1050 from '../v1050'
import * as v2028 from '../v2028'
import * as v9111 from '../v9111'
import * as v9291 from '../v9291'
import * as v1000000 from '../v1000000'

export const bid =  {
    name: 'Society.bid',
    /**
     *  A user outside of the society can make a bid for entry.
     * 
     *  Payment: `CandidateDeposit` will be reserved for making a bid. It is returned
     *  when the bid becomes a member, or if the bid calls `unbid`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `value`: A one time payment the bid would like to receive when joining the society.
     * 
     *  # <weight>
     *  Key: B (len of bids), C (len of candidates), M (len of members), X (balance reserve)
     *  - Storage Reads:
     *  	- One storage read to check for suspended candidate. O(1)
     *  	- One storage read to check for suspended member. O(1)
     *  	- One storage read to retrieve all current bids. O(B)
     *  	- One storage read to retrieve all current candidates. O(C)
     *  	- One storage read to retrieve all members. O(M)
     *  - Storage Writes:
     *  	- One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization w/ read)
     *  	- Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)
     *  - Notable Computation:
     *  	- O(B + C + log M) search to check user is not already a part of society.
     *  	- O(log B) search to insert the new bid sorted.
     *  - External Module Operations:
     *  	- One balance reserve operation. O(X)
     *  	- Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.
     *  - Events:
     *  	- One event for new bid.
     *  	- Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.
     * 
     *  Total Complexity: O(M + B + C + logM + logB + X)
     *  # </weight>
     */
    v1040: new CallType(
        'Society.bid',
        sts.struct({
            value: v1040.BalanceOf,
        })
    ),
}

export const unbid =  {
    name: 'Society.unbid',
    /**
     *  A bidder can remove their bid for entry into society.
     *  By doing so, they will have their candidate deposit returned or
     *  they will unvouch their voucher.
     * 
     *  Payment: The bid deposit is unreserved if the user made a bid.
     * 
     *  The dispatch origin for this call must be _Signed_ and a bidder.
     * 
     *  Parameters:
     *  - `pos`: Position in the `Bids` vector of the bid who wants to unbid.
     * 
     *  # <weight>
     *  Key: B (len of bids), X (balance unreserve)
     *  - One storage read and write to retrieve and update the bids. O(B)
     *  - Either one unreserve balance action O(X) or one vouching storage removal. O(1)
     *  - One event.
     * 
     *  Total Complexity: O(B + X)
     *  # </weight>
     */
    v1040: new CallType(
        'Society.unbid',
        sts.struct({
            pos: sts.number(),
        })
    ),
    /**
     * See [`Pallet::unbid`].
     */
    v1000000: new CallType(
        'Society.unbid',
        sts.unit()
    ),
}

export const vouch =  {
    name: 'Society.vouch',
    /**
     *  As a member, vouch for someone to join society by placing a bid on their behalf.
     * 
     *  There is no deposit required to vouch for a new bid, but a member can only vouch for
     *  one bid at a time. If the bid becomes a suspended candidate and ultimately rejected by
     *  the suspension judgement origin, the member will be banned from vouching again.
     * 
     *  As a vouching member, you can claim a tip if the candidate is accepted. This tip will
     *  be paid as a portion of the reward the member will receive for joining the society.
     * 
     *  The dispatch origin for this call must be _Signed_ and a member.
     * 
     *  Parameters:
     *  - `who`: The user who you would like to vouch for.
     *  - `value`: The total reward to be paid between you and the candidate if they become
     *  a member in the society.
     *  - `tip`: Your cut of the total `value` payout when the candidate is inducted into
     *  the society. Tips larger than `value` will be saturated upon payout.
     * 
     *  # <weight>
     *  Key: B (len of bids), C (len of candidates), M (len of members)
     *  - Storage Reads:
     *  	- One storage read to retrieve all members. O(M)
     *  	- One storage read to check member is not already vouching. O(1)
     *  	- One storage read to check for suspended candidate. O(1)
     *  	- One storage read to check for suspended member. O(1)
     *  	- One storage read to retrieve all current bids. O(B)
     *  	- One storage read to retrieve all current candidates. O(C)
     *  - Storage Writes:
     *  	- One storage write to insert vouching status to the member. O(1)
     *  	- One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization w/ read)
     *  	- Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)
     *  - Notable Computation:
     *  	- O(log M) search to check sender is a member.
     *  	- O(B + C + log M) search to check user is not already a part of society.
     *  	- O(log B) search to insert the new bid sorted.
     *  - External Module Operations:
     *  	- One balance reserve operation. O(X)
     *  	- Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.
     *  - Events:
     *  	- One event for vouch.
     *  	- Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.
     * 
     *  Total Complexity: O(M + B + C + logM + logB + X)
     *  # </weight>
     */
    v1040: new CallType(
        'Society.vouch',
        sts.struct({
            who: v1040.AccountId,
            value: v1040.BalanceOf,
            tip: v1040.BalanceOf,
        })
    ),
    /**
     * As a member, vouch for someone to join society by placing a bid on their behalf.
     * 
     * There is no deposit required to vouch for a new bid, but a member can only vouch for
     * one bid at a time. If the bid becomes a suspended candidate and ultimately rejected by
     * the suspension judgement origin, the member will be banned from vouching again.
     * 
     * As a vouching member, you can claim a tip if the candidate is accepted. This tip will
     * be paid as a portion of the reward the member will receive for joining the society.
     * 
     * The dispatch origin for this call must be _Signed_ and a member.
     * 
     * Parameters:
     * - `who`: The user who you would like to vouch for.
     * - `value`: The total reward to be paid between you and the candidate if they become
     * a member in the society.
     * - `tip`: Your cut of the total `value` payout when the candidate is inducted into
     * the society. Tips larger than `value` will be saturated upon payout.
     * 
     * # <weight>
     * Key: B (len of bids), C (len of candidates), M (len of members)
     * - Storage Reads:
     * 	- One storage read to retrieve all members. O(M)
     * 	- One storage read to check member is not already vouching. O(1)
     * 	- One storage read to check for suspended candidate. O(1)
     * 	- One storage read to check for suspended member. O(1)
     * 	- One storage read to retrieve all current bids. O(B)
     * 	- One storage read to retrieve all current candidates. O(C)
     * - Storage Writes:
     * 	- One storage write to insert vouching status to the member. O(1)
     * 	- One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization
     *    w/ read)
     * 	- Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)
     * - Notable Computation:
     * 	- O(log M) search to check sender is a member.
     * 	- O(B + C + log M) search to check user is not already a part of society.
     * 	- O(log B) search to insert the new bid sorted.
     * - External Pallet Operations:
     * 	- One balance reserve operation. O(X)
     * 	- Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.
     * - Events:
     * 	- One event for vouch.
     * 	- Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.
     * 
     * Total Complexity: O(M + B + C + logM + logB + X)
     * # </weight>
     */
    v9291: new CallType(
        'Society.vouch',
        sts.struct({
            who: v9291.MultiAddress,
            value: sts.bigint(),
            tip: sts.bigint(),
        })
    ),
}

export const unvouch =  {
    name: 'Society.unvouch',
    /**
     *  As a vouching member, unvouch a bid. This only works while vouched user is
     *  only a bidder (and not a candidate).
     * 
     *  The dispatch origin for this call must be _Signed_ and a vouching member.
     * 
     *  Parameters:
     *  - `pos`: Position in the `Bids` vector of the bid who should be unvouched.
     * 
     *  # <weight>
     *  Key: B (len of bids)
     *  - One storage read O(1) to check the signer is a vouching member.
     *  - One storage mutate to retrieve and update the bids. O(B)
     *  - One vouching storage removal. O(1)
     *  - One event.
     * 
     *  Total Complexity: O(B)
     *  # </weight>
     */
    v1040: new CallType(
        'Society.unvouch',
        sts.struct({
            pos: sts.number(),
        })
    ),
    /**
     * See [`Pallet::unvouch`].
     */
    v1000000: new CallType(
        'Society.unvouch',
        sts.unit()
    ),
}

export const vote =  {
    name: 'Society.vote',
    /**
     *  As a member, vote on a candidate.
     * 
     *  The dispatch origin for this call must be _Signed_ and a member.
     * 
     *  Parameters:
     *  - `candidate`: The candidate that the member would like to bid on.
     *  - `approve`: A boolean which says if the candidate should be
     *               approved (`true`) or rejected (`false`).
     * 
     *  # <weight>
     *  Key: C (len of candidates), M (len of members)
     *  - One storage read O(M) and O(log M) search to check user is a member.
     *  - One account lookup.
     *  - One storage read O(C) and O(C) search to check that user is a candidate.
     *  - One storage write to add vote to votes. O(1)
     *  - One event.
     * 
     *  Total Complexity: O(M + logM + C)
     *  # </weight>
     */
    v1040: new CallType(
        'Society.vote',
        sts.struct({
            candidate: v1040.LookupSource,
            approve: sts.boolean(),
        })
    ),
    /**
     *  As a member, vote on a candidate.
     * 
     *  The dispatch origin for this call must be _Signed_ and a member.
     * 
     *  Parameters:
     *  - `candidate`: The candidate that the member would like to bid on.
     *  - `approve`: A boolean which says if the candidate should be
     *               approved (`true`) or rejected (`false`).
     * 
     *  # <weight>
     *  Key: C (len of candidates), M (len of members)
     *  - One storage read O(M) and O(log M) search to check user is a member.
     *  - One account lookup.
     *  - One storage read O(C) and O(C) search to check that user is a candidate.
     *  - One storage write to add vote to votes. O(1)
     *  - One event.
     * 
     *  Total Complexity: O(M + logM + C)
     *  # </weight>
     */
    v1050: new CallType(
        'Society.vote',
        sts.struct({
            candidate: v1050.LookupSource,
            approve: sts.boolean(),
        })
    ),
    /**
     *  As a member, vote on a candidate.
     * 
     *  The dispatch origin for this call must be _Signed_ and a member.
     * 
     *  Parameters:
     *  - `candidate`: The candidate that the member would like to bid on.
     *  - `approve`: A boolean which says if the candidate should be
     *               approved (`true`) or rejected (`false`).
     * 
     *  # <weight>
     *  Key: C (len of candidates), M (len of members)
     *  - One storage read O(M) and O(log M) search to check user is a member.
     *  - One account lookup.
     *  - One storage read O(C) and O(C) search to check that user is a candidate.
     *  - One storage write to add vote to votes. O(1)
     *  - One event.
     * 
     *  Total Complexity: O(M + logM + C)
     *  # </weight>
     */
    v2028: new CallType(
        'Society.vote',
        sts.struct({
            candidate: v2028.LookupSource,
            approve: sts.boolean(),
        })
    ),
    /**
     * As a member, vote on a candidate.
     * 
     * The dispatch origin for this call must be _Signed_ and a member.
     * 
     * Parameters:
     * - `candidate`: The candidate that the member would like to bid on.
     * - `approve`: A boolean which says if the candidate should be approved (`true`) or
     *   rejected (`false`).
     * 
     * # <weight>
     * Key: C (len of candidates), M (len of members)
     * - One storage read O(M) and O(log M) search to check user is a member.
     * - One account lookup.
     * - One storage read O(C) and O(C) search to check that user is a candidate.
     * - One storage write to add vote to votes. O(1)
     * - One event.
     * 
     * Total Complexity: O(M + logM + C)
     * # </weight>
     */
    v9111: new CallType(
        'Society.vote',
        sts.struct({
            candidate: v9111.MultiAddress,
            approve: sts.boolean(),
        })
    ),
}

export const defenderVote =  {
    name: 'Society.defender_vote',
    /**
     *  As a member, vote on the defender.
     * 
     *  The dispatch origin for this call must be _Signed_ and a member.
     * 
     *  Parameters:
     *  - `approve`: A boolean which says if the candidate should be
     *  approved (`true`) or rejected (`false`).
     * 
     *  # <weight>
     *  - Key: M (len of members)
     *  - One storage read O(M) and O(log M) search to check user is a member.
     *  - One storage write to add vote to votes. O(1)
     *  - One event.
     * 
     *  Total Complexity: O(M + logM)
     *  # </weight>
     */
    v1040: new CallType(
        'Society.defender_vote',
        sts.struct({
            approve: sts.boolean(),
        })
    ),
}

export const payout =  {
    name: 'Society.payout',
    /**
     *  Transfer the first matured payout for the sender and remove it from the records.
     * 
     *  NOTE: This extrinsic needs to be called multiple times to claim multiple matured payouts.
     * 
     *  Payment: The member will receive a payment equal to their first matured
     *  payout to their free balance.
     * 
     *  The dispatch origin for this call must be _Signed_ and a member with
     *  payouts remaining.
     * 
     *  # <weight>
     *  Key: M (len of members), P (number of payouts for a particular member)
     *  - One storage read O(M) and O(log M) search to check signer is a member.
     *  - One storage read O(P) to get all payouts for a member.
     *  - One storage read O(1) to get the current block number.
     *  - One currency transfer call. O(X)
     *  - One storage write or removal to update the member's payouts. O(P)
     * 
     *  Total Complexity: O(M + logM + P + X)
     *  # </weight>
     */
    v1040: new CallType(
        'Society.payout',
        sts.unit()
    ),
}

export const found =  {
    name: 'Society.found',
    /**
     *  Found the society.
     * 
     *  This is done as a discrete action in order to allow for the
     *  module to be included into a running chain and can only be done once.
     * 
     *  The dispatch origin for this call must be from the _FounderSetOrigin_.
     * 
     *  Parameters:
     *  - `founder` - The first member and head of the newly founded society.
     * 
     *  # <weight>
     *  - Two storage mutates to set `Head` and `Founder`. O(1)
     *  - One storage write to add the first member to society. O(1)
     *  - One event.
     * 
     *  Total Complexity: O(1)
     *  # </weight>
     */
    v1040: new CallType(
        'Society.found',
        sts.struct({
            founder: v1040.AccountId,
        })
    ),
    /**
     *  Found the society.
     * 
     *  This is done as a discrete action in order to allow for the
     *  module to be included into a running chain and can only be done once.
     * 
     *  The dispatch origin for this call must be from the _FounderSetOrigin_.
     * 
     *  Parameters:
     *  - `founder` - The first member and head of the newly founded society.
     *  - `max_members` - The initial max number of members for the society.
     *  - `rules` - The rules of this society concerning membership.
     * 
     *  # <weight>
     *  - Two storage mutates to set `Head` and `Founder`. O(1)
     *  - One storage write to add the first member to society. O(1)
     *  - One event.
     * 
     *  Total Complexity: O(1)
     *  # </weight>
     */
    v1042: new CallType(
        'Society.found',
        sts.struct({
            founder: v1042.AccountId,
            maxMembers: sts.number(),
            rules: sts.bytes(),
        })
    ),
    /**
     * Found the society.
     * 
     * This is done as a discrete action in order to allow for the
     * pallet to be included into a running chain and can only be done once.
     * 
     * The dispatch origin for this call must be from the _FounderSetOrigin_.
     * 
     * Parameters:
     * - `founder` - The first member and head of the newly founded society.
     * - `max_members` - The initial max number of members for the society.
     * - `rules` - The rules of this society concerning membership.
     * 
     * # <weight>
     * - Two storage mutates to set `Head` and `Founder`. O(1)
     * - One storage write to add the first member to society. O(1)
     * - One event.
     * 
     * Total Complexity: O(1)
     * # </weight>
     */
    v9291: new CallType(
        'Society.found',
        sts.struct({
            founder: v9291.MultiAddress,
            maxMembers: sts.number(),
            rules: sts.bytes(),
        })
    ),
}

export const judgeSuspendedMember =  {
    name: 'Society.judge_suspended_member',
    /**
     *  Allow suspension judgement origin to make judgement on a suspended member.
     * 
     *  If a suspended member is forgiven, we simply add them back as a member, not affecting
     *  any of the existing storage items for that member.
     * 
     *  If a suspended member is rejected, remove all associated storage items, including
     *  their payouts, and remove any vouched bids they currently have.
     * 
     *  The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
     * 
     *  Parameters:
     *  - `who` - The suspended member to be judged.
     *  - `forgive` - A boolean representing whether the suspension judgement origin
     *                forgives (`true`) or rejects (`false`) a suspended member.
     * 
     *  # <weight>
     *  Key: B (len of bids), M (len of members)
     *  - One storage read to check `who` is a suspended member. O(1)
     *  - Up to one storage write O(M) with O(log M) binary search to add a member back to society.
     *  - Up to 3 storage removals O(1) to clean up a removed member.
     *  - Up to one storage write O(B) with O(B) search to remove vouched bid from bids.
     *  - Up to one additional event if unvouch takes place.
     *  - One storage removal. O(1)
     *  - One event for the judgement.
     * 
     *  Total Complexity: O(M + logM + B)
     *  # </weight>
     */
    v1040: new CallType(
        'Society.judge_suspended_member',
        sts.struct({
            who: v1040.AccountId,
            forgive: sts.boolean(),
        })
    ),
    /**
     * Allow suspension judgement origin to make judgement on a suspended member.
     * 
     * If a suspended member is forgiven, we simply add them back as a member, not affecting
     * any of the existing storage items for that member.
     * 
     * If a suspended member is rejected, remove all associated storage items, including
     * their payouts, and remove any vouched bids they currently have.
     * 
     * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
     * 
     * Parameters:
     * - `who` - The suspended member to be judged.
     * - `forgive` - A boolean representing whether the suspension judgement origin forgives
     *   (`true`) or rejects (`false`) a suspended member.
     * 
     * # <weight>
     * Key: B (len of bids), M (len of members)
     * - One storage read to check `who` is a suspended member. O(1)
     * - Up to one storage write O(M) with O(log M) binary search to add a member back to
     *   society.
     * - Up to 3 storage removals O(1) to clean up a removed member.
     * - Up to one storage write O(B) with O(B) search to remove vouched bid from bids.
     * - Up to one additional event if unvouch takes place.
     * - One storage removal. O(1)
     * - One event for the judgement.
     * 
     * Total Complexity: O(M + logM + B)
     * # </weight>
     */
    v9291: new CallType(
        'Society.judge_suspended_member',
        sts.struct({
            who: v9291.MultiAddress,
            forgive: sts.boolean(),
        })
    ),
}

export const judgeSuspendedCandidate =  {
    name: 'Society.judge_suspended_candidate',
    /**
     *  Allow suspended judgement origin to make judgement on a suspended candidate.
     * 
     *  If the judgement is `Approve`, we add them to society as a member with the appropriate
     *  payment for joining society.
     * 
     *  If the judgement is `Reject`, we either slash the deposit of the bid, giving it back
     *  to the society treasury, or we ban the voucher from vouching again.
     * 
     *  If the judgement is `Rebid`, we put the candidate back in the bid pool and let them go
     *  through the induction process again.
     * 
     *  The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
     * 
     *  Parameters:
     *  - `who` - The suspended candidate to be judged.
     *  - `judgement` - `Approve`, `Reject`, or `Rebid`.
     * 
     *  # <weight>
     *  Key: B (len of bids), M (len of members), X (balance action)
     *  - One storage read to check `who` is a suspended candidate.
     *  - One storage removal of the suspended candidate.
     *  - Approve Logic
     *  	- One storage read to get the available pot to pay users with. O(1)
     *  	- One storage write to update the available pot. O(1)
     *  	- One storage read to get the current block number. O(1)
     *  	- One storage read to get all members. O(M)
     *  	- Up to one unreserve currency action.
     *  	- Up to two new storage writes to payouts.
     *  	- Up to one storage write with O(log M) binary search to add a member to society.
     *  - Reject Logic
     *  	- Up to one repatriate reserved currency action. O(X)
     *  	- Up to one storage write to ban the vouching member from vouching again.
     *  - Rebid Logic
     *  	- Storage mutate with O(log B) binary search to place the user back into bids.
     *  - Up to one additional event if unvouch takes place.
     *  - One storage removal.
     *  - One event for the judgement.
     * 
     *  Total Complexity: O(M + logM + B + X)
     *  # </weight>
     */
    v1040: new CallType(
        'Society.judge_suspended_candidate',
        sts.struct({
            who: v1040.AccountId,
            judgement: v1040.SocietyJudgement,
        })
    ),
    /**
     * Allow suspended judgement origin to make judgement on a suspended candidate.
     * 
     * If the judgement is `Approve`, we add them to society as a member with the appropriate
     * payment for joining society.
     * 
     * If the judgement is `Reject`, we either slash the deposit of the bid, giving it back
     * to the society treasury, or we ban the voucher from vouching again.
     * 
     * If the judgement is `Rebid`, we put the candidate back in the bid pool and let them go
     * through the induction process again.
     * 
     * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
     * 
     * Parameters:
     * - `who` - The suspended candidate to be judged.
     * - `judgement` - `Approve`, `Reject`, or `Rebid`.
     * 
     * # <weight>
     * Key: B (len of bids), M (len of members), X (balance action)
     * - One storage read to check `who` is a suspended candidate.
     * - One storage removal of the suspended candidate.
     * - Approve Logic
     * 	- One storage read to get the available pot to pay users with. O(1)
     * 	- One storage write to update the available pot. O(1)
     * 	- One storage read to get the current block number. O(1)
     * 	- One storage read to get all members. O(M)
     * 	- Up to one unreserve currency action.
     * 	- Up to two new storage writes to payouts.
     * 	- Up to one storage write with O(log M) binary search to add a member to society.
     * - Reject Logic
     * 	- Up to one repatriate reserved currency action. O(X)
     * 	- Up to one storage write to ban the vouching member from vouching again.
     * - Rebid Logic
     * 	- Storage mutate with O(log B) binary search to place the user back into bids.
     * - Up to one additional event if unvouch takes place.
     * - One storage removal.
     * - One event for the judgement.
     * 
     * Total Complexity: O(M + logM + B + X)
     * # </weight>
     */
    v9291: new CallType(
        'Society.judge_suspended_candidate',
        sts.struct({
            who: v9291.MultiAddress,
            judgement: v9291.Type_386,
        })
    ),
}

export const setMaxMembers =  {
    name: 'Society.set_max_members',
    /**
     *  Allows root origin to change the maximum number of members in society.
     *  Max membership count must be greater than 1.
     * 
     *  The dispatch origin for this call must be from _ROOT_.
     * 
     *  Parameters:
     *  - `max` - The maximum number of members for the society.
     * 
     *  # <weight>
     *  - One storage write to update the max. O(1)
     *  - One event.
     * 
     *  Total Complexity: O(1)
     *  # </weight>
     */
    v1040: new CallType(
        'Society.set_max_members',
        sts.struct({
            max: sts.number(),
        })
    ),
}

export const unfound =  {
    name: 'Society.unfound',
    /**
     *  Anull the founding of the society.
     * 
     *  The dispatch origin for this call must be Signed, and the signing account must be both
     *  the `Founder` and the `Head`. This implies that it may only be done when there is one
     *  member.
     * 
     *  # <weight>
     *  - Two storage reads O(1).
     *  - Four storage removals O(1).
     *  - One event.
     * 
     *  Total Complexity: O(1)
     *  # </weight>
     */
    v1042: new CallType(
        'Society.unfound',
        sts.unit()
    ),
}

export const waiveRepay =  {
    name: 'Society.waive_repay',
    /**
     * See [`Pallet::waive_repay`].
     */
    v1000000: new CallType(
        'Society.waive_repay',
        sts.struct({
            amount: sts.bigint(),
        })
    ),
}

export const foundSociety =  {
    name: 'Society.found_society',
    /**
     * See [`Pallet::found_society`].
     */
    v1000000: new CallType(
        'Society.found_society',
        sts.struct({
            founder: v1000000.MultiAddress,
            maxMembers: sts.number(),
            maxIntake: sts.number(),
            maxStrikes: sts.number(),
            candidateDeposit: sts.bigint(),
            rules: sts.bytes(),
        })
    ),
}

export const dissolve =  {
    name: 'Society.dissolve',
    /**
     * See [`Pallet::dissolve`].
     */
    v1000000: new CallType(
        'Society.dissolve',
        sts.unit()
    ),
}

export const setParameters =  {
    name: 'Society.set_parameters',
    /**
     * See [`Pallet::set_parameters`].
     */
    v1000000: new CallType(
        'Society.set_parameters',
        sts.struct({
            maxMembers: sts.number(),
            maxIntake: sts.number(),
            maxStrikes: sts.number(),
            candidateDeposit: sts.bigint(),
        })
    ),
}

export const punishSkeptic =  {
    name: 'Society.punish_skeptic',
    /**
     * See [`Pallet::punish_skeptic`].
     */
    v1000000: new CallType(
        'Society.punish_skeptic',
        sts.unit()
    ),
}

export const claimMembership =  {
    name: 'Society.claim_membership',
    /**
     * See [`Pallet::claim_membership`].
     */
    v1000000: new CallType(
        'Society.claim_membership',
        sts.unit()
    ),
}

export const bestowMembership =  {
    name: 'Society.bestow_membership',
    /**
     * See [`Pallet::bestow_membership`].
     */
    v1000000: new CallType(
        'Society.bestow_membership',
        sts.struct({
            candidate: v1000000.AccountId32,
        })
    ),
}

export const kickCandidate =  {
    name: 'Society.kick_candidate',
    /**
     * See [`Pallet::kick_candidate`].
     */
    v1000000: new CallType(
        'Society.kick_candidate',
        sts.struct({
            candidate: v1000000.AccountId32,
        })
    ),
}

export const resignCandidacy =  {
    name: 'Society.resign_candidacy',
    /**
     * See [`Pallet::resign_candidacy`].
     */
    v1000000: new CallType(
        'Society.resign_candidacy',
        sts.unit()
    ),
}

export const dropCandidate =  {
    name: 'Society.drop_candidate',
    /**
     * See [`Pallet::drop_candidate`].
     */
    v1000000: new CallType(
        'Society.drop_candidate',
        sts.struct({
            candidate: v1000000.AccountId32,
        })
    ),
}

export const cleanupCandidacy =  {
    name: 'Society.cleanup_candidacy',
    /**
     * See [`Pallet::cleanup_candidacy`].
     */
    v1000000: new CallType(
        'Society.cleanup_candidacy',
        sts.struct({
            candidate: v1000000.AccountId32,
            max: sts.number(),
        })
    ),
}

export const cleanupChallenge =  {
    name: 'Society.cleanup_challenge',
    /**
     * See [`Pallet::cleanup_challenge`].
     */
    v1000000: new CallType(
        'Society.cleanup_challenge',
        sts.struct({
            challengeRound: sts.number(),
            max: sts.number(),
        })
    ),
}
