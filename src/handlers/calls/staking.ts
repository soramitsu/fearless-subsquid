import { BlockContext, Call } from '../../types'
import { getCallData, getOriginAccountId } from '../../utils/entities'
import { calls } from '../../types/generated/merged'
import { createCallHistoryElement } from '../../utils/history'
import { logStartProcessingEvent } from '../../utils/logs'
import { AccumulatedStake, StakeChange } from '../../model'

export interface ActionData {
  id: string
  timestamp: number
  blockNumber: number
  extrinsicHash?: string
  extrinsicIdx?: string
}

interface AccumulatedStakeData extends ActionData {
  amount: bigint
  accountId: string
}

async function handleAccumulatedStake(ctx: BlockContext, data: AccumulatedStakeData): Promise<bigint | undefined> {
  const { accountId, amount } = data;
  const accumulatedStake =
    await ctx.store.get(AccumulatedStake, accountId)
    ?? new AccumulatedStake({ id: accountId, amount: 0n });

  const newAccumulatedAmount = accumulatedStake.amount + amount;

  accumulatedStake.amount = newAccumulatedAmount;

  await ctx.store.save(accumulatedStake);

  return newAccumulatedAmount;
}

export async function bondCallHandler(
	ctx: BlockContext,
	event: Call<'Staking.bond'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

  const type = calls.staking.bond
	const data = getCallData(ctx, type, event)

  const address = getOriginAccountId(ctx.call.origin)
  const accumulatedAmount = await handleAccumulatedStake(ctx, data) ?? 0n;

	const historyData = {
		amount: data.amount,
    address,
    accumulatedAmount
  }

	createCallHistoryElement(ctx, event, historyData)
}

export async function unbondCallHandler(
	ctx: BlockContext,
	event: Call<'Staking.unbond'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

  const type = calls.staking.unbond
	const data = getCallData(ctx, type, event)

	const historyData = {}

	createCallHistoryElement(ctx, event, historyData)
}