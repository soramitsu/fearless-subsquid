import { BlockContext, Event } from '../../../types'
import { getEventData } from '../../../utils/entities'
import { events } from '../../../types/generated/merged'
import { logStartProcessingEvent } from '../../../utils/logs'

export async function stakersElectionEventHandler(
	ctx: BlockContext,
	event: Event<'Staking.StakersElected' | 'Staking.StakingElection'>
): Promise<void> {
	// logStartProcessingEvent(ctx, event)

  // const type = events.transactionPayment.transactionFeePaid
	// const data = getEventData(ctx, type, event)

  // const exposures = await storage.staking.getStakingErasStakersClipped(ctx, currentEraData.index!)

	// const historyData = {
	// 	id: `${id}-${address}`,
	// 	address,
	// 	era: currentEraData?.index,
	// 	own,
	// 	total,
	// 	others,
	// 	othersWho: others.map(({ who }) => who).join(' ')
	// }

	// exposures.forEach(async ([[, validatorId], { others: othersTemp, own, total }]) => {
  //   const others = othersTemp.map(({ value, who }) => new IndividualExposure({
  //     who: encodeId(who),
  //     value: value.toString()
  //   }))
  //   const address = encodeId(validatorId)

  //   const eraValidator = new EraValidatorInfo({
  //     id: `${id}-${address}`,
  //     address,
  //     era: currentEraData?.index,
  //     own,
  //     total,
  //     others,
  //     othersWho: others.map(({ who }) => who).join(' ')
  //   })

	// 	await createEventHistoryElement(ctx, event, historyData)
  // })

}