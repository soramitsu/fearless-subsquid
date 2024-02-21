import { BlockContext, Call } from '../../types'
import { getCallData, getOriginAccountId } from '../../utils/entities'
import { calls } from '../../types/generated/merged'
import { logStartProcessingCall } from '../../utils/logs'
import { createStakeChange } from '../../utils/stakeChange'
import { handleAccumulatedStake } from '../../utils/staking'
import { toAddress } from '../../utils'

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

	const amount = data.value
	const payee = data.payee
	const address = toAddress(call?.extrinsic?.signature?.address as any)
  const accumulatedAmount = await handleAccumulatedStake(ctx, { address, amount });

	const stakeChangeData = {
		amount: amount.toString(),
    address,
    accumulatedAmount,
    type: BondType.Bonded,
    data: {
      payee,
    }
  }

	createStakeChange(ctx, call, stakeChangeData)
}

export async function unbondCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.unbond'>
): Promise<void> {
	logStartProcessingCall(ctx, call)

  const type = calls.staking.unbond
	const data = getCallData(ctx, type, call)

	const amount = data.value
	const address = toAddress(call?.extrinsic?.signature?.address as any)
  const accumulatedAmount = await handleAccumulatedStake(ctx, { address, amount }, false);

	const stakeChangeData = {
		amount: amount.toString(),
    address,
    accumulatedAmount,
    type: BondType.Bonded
  }

	createStakeChange(ctx, call, stakeChangeData)
}