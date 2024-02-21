import { AccumulatedStake } from '../model';
import { BlockContext } from '../types';


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

export async function handleAccumulatedStake(ctx: BlockContext, data: AccumulatedStakeData): Promise<bigint | undefined> {
  const { accountId, amount } = data;
  const accumulatedStake =
    await ctx.store.get(AccumulatedStake, accountId)
    ?? new AccumulatedStake({ id: accountId, amount: 0n });

  const newAccumulatedAmount = accumulatedStake.amount + amount;

  accumulatedStake.amount = newAccumulatedAmount;

  await ctx.store.save(accumulatedStake);

  return newAccumulatedAmount;
}