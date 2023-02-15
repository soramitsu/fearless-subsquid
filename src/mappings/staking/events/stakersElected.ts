import {  EventHandlerContext } from '../../types/contexts'
import {
  EraValidatorInfo, IndividualExposure
} from '../../../model'
import storage from '../../../storage'
import { encodeId } from '../../../common/tools'

export interface EraValidatorData {
  id: string
}

export async function handleStakingElection(event: EventHandlerContext): Promise<void> {
  await handleStakersElected(event, true)
}

export async function handleStakersElected(ctx: EventHandlerContext, old = false): Promise<void> {
  await saveEraValidatorInfo(ctx, {
    id: ctx.event.id,
  })
}

export async function saveEraValidatorInfo(ctx: EventHandlerContext, data: EraValidatorData) {
  const { id, } = data;
  const currentEraData = await storage.staking.getCurrentEra(ctx)

  if (!currentEraData) return

  const exposures = await storage.staking.getStakingErasStakersClipped(ctx, currentEraData.index!)

  if (!exposures) return

  exposures.forEach(async ([[, validatorId], { others: othersTemp, own, total }]) => {
    const others = othersTemp.map(({ value, who }) => new IndividualExposure({
      who: encodeId(who),
      value: value.toString()
    }))
    const address = encodeId(validatorId)

    const eraValidator = new EraValidatorInfo({
      id: `${id}-${address}`,
      address,
      era: currentEraData?.index,
      own,
      total,
      others
    })

    await ctx.store.insert(eraValidator)
  })
}