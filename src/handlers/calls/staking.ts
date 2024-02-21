import { BlockContext, Call } from '../../types'
import { getCallData, getOriginAccountId } from '../../utils/entities'
import { calls } from '../../types/generated/merged'
import { createCallHistoryElement } from '../../utils/history'
import { logStartProcessingCall } from '../../utils/logs'
import { AccumulatedStake } from '../../model'
import { createStakeChange } from '../../utils/stakeChange'
import { handleAccumulatedStake } from '../../utils/staking'

enum BondType {
  Bonded = 'bonded',
  Unbonded = 'unbonded',

}

export async function bondCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.bond'>
): Promise<void> {
	logStartProcessingCall(ctx, call)

  const type = calls.staking.bond
	const data = getCallData(ctx, type, call)

  const address = getOriginAccountId(ctx.call.origin)
  const accumulatedAmount = await handleAccumulatedStake(ctx, data) ?? 0n;

	const historyData = {
		amount: data.amount,
    address,
    accumulatedAmount,
    type: BondType.Bonded
  }

	createStakeChange(ctx, call, historyData)
}

export async function unbondCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.unbond'>
): Promise<void> {
	logStartProcessingCall(ctx, call)

  const type = calls.staking.unbond
	const data = getCallData(ctx, type, call)

  const address = getOriginAccountId(ctx.call.origin)
  const accumulatedAmount = await handleAccumulatedStake(ctx, data) ?? 0n;

	const historyData = {
    amount: data.amount,
    address,
    accumulatedAmount,
    type: BondType.Unbonded
  }

	createStakeChange(ctx, call, historyData)
}