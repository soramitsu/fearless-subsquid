import { AccumulatedStake, StakingEra } from '../model';
import { BlockContext } from '../types';
import { storage } from '../types/generated/merged';
import { getStorageRepresentation } from './entities';
import { getUtilsLog } from './logs';

interface AccumulatedStakeData {
  amount: bigint
  address: string
}

export async function handleAccumulatedStake(ctx: BlockContext, data: AccumulatedStakeData, isBond = true): Promise<string | undefined> {
  const { address, amount } = data;
  const stakeStore = await ctx.store.get(AccumulatedStake, address)
  const accumulatedStake = stakeStore ?? new AccumulatedStake({ id: address, amount: 0n });

  const newAccumulatedAmount = accumulatedStake.amount + (isBond ? amount : -amount);

  accumulatedStake.amount = newAccumulatedAmount;

  await ctx.store.save(accumulatedStake);

  return newAccumulatedAmount.toString();
}

export const getActiveStakingEra = async (ctx: BlockContext): Promise<StakingEra> => {
	const activeEra = await getStorageRepresentation(ctx, storage.staking.activeEra)?.get(ctx.block.header)

	let stakingEra = await ctx.store.get(StakingEra, activeEra?.index.toString()!)

	if (!stakingEra && activeEra) {
		stakingEra = new StakingEra()
		stakingEra.id = activeEra?.index.toString()
		stakingEra.index = activeEra.index

		if (activeEra?.start) stakingEra.start = activeEra.start

		await ctx.store.save(stakingEra)

		getUtilsLog(ctx).debug({ index: activeEra.index }, 'Staking era saved')
	}

	return stakingEra!
}
