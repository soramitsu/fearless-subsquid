import { BlockContext, Event } from '../../../types'
import { getStorageRepresentation } from '../../../utils/entities'
import { storage } from '../../../types/generated/merged'
import { logStartProcessingEvent } from '../../../utils/logs'
import { getActiveStakingEra } from '../../../utils/staking'
import { toAddress } from '../../../utils'
import { EraValidatorInfo, IndividualExposure } from '../../../model'

export async function stakersElectedEventHandler(
	ctx: BlockContext,
	event: Event<'Staking.StakersElected'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const activeStakingEra = await getActiveStakingEra(ctx)
	const exposures = await getStorageRepresentation(ctx, storage.staking.erasStakers)?.getPairs(ctx.block.header, activeStakingEra.index)

	exposures?.forEach(async ([[, validatorId], exposure ]) => {
    const others = exposure?.others.map(({ value, who }) => new IndividualExposure({
        who: toAddress(who),
        value: value.toString()
      }
    ))

    const address = toAddress(validatorId)

    const eraValidator = new EraValidatorInfo({
      id: `${activeStakingEra.id}-${address}`,
      address,
      era: activeStakingEra?.index,
      own: exposure?.own,
      total: exposure?.total,
      others,
      othersWho: others?.map(({ who }) => who).join(' ')
    })

	  await ctx.store.save(eraValidator)
  })
}