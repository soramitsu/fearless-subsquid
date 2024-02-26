import { BlockContext, Call } from '../../types'
import { getCallData } from '../../utils/entities'
import { calls } from '../../types/generated/merged'
import { logStartProcessingCall } from '../../utils/logs'
import { createStakeChange } from '../../utils/stakeChange'
import { handleAccumulatedStake } from '../../utils/staking'
import { toAddress } from '../../utils'

export async function bondCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.bond'>
): Promise<void> {
	logStartProcessingCall(ctx, call)

  const type = calls.staking.bond
	const data = getCallData(ctx, type, call)

	const amount = data.value
	const payee = data.payee.__kind
	const signatureAddress = call?.extrinsic?.signature?.address as any
	const _address = typeof signatureAddress === 'string' ? signatureAddress : 'value' in signatureAddress ? signatureAddress?.value : signatureAddress
	const address = toAddress(_address)
  const accumulatedAmount = await handleAccumulatedStake(ctx, { address, amount });

	const stakeChangeData = {
		amount: amount.toString(),
    address,
    type: 'bond',
    accumulatedAmount,
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
	const signatureAddress = call?.extrinsic?.signature?.address as any
	const _address = typeof signatureAddress === 'string' ? signatureAddress : 'value' in signatureAddress ? signatureAddress?.value : signatureAddress
	const address = toAddress(_address)
	const accumulatedAmount = await handleAccumulatedStake(ctx, { address, amount }, false);

	const stakeChangeData = {
		amount: amount.toString(),
    address,
    type: 'unbond',
    accumulatedAmount,
  }

	createStakeChange(ctx, call, stakeChangeData)
}