import { EventContext, EventHandlerContext } from '../../types/contexts'
import {
  EraValidatorInfo
} from '../../../model'
import { encodeId } from '../../../common/tools'
import storage from '../../../storage'
import { StakingStakersElectedEvent, StakingStakingElectionEvent } from '../../../types/generated/events'

export interface EraValidatorData {
  accountId: string
  id: string
}

interface EventData {
  amount: bigint
  account: Uint8Array
}

function getStakersElectedEventData(ctx: EventHandlerContext): EventData | undefined {
  const event = new StakingStakersElectedEvent(ctx)

  if (event.isV9090)
    return undefined

  // else {
  //   throw new UnknownVersionError(event.constructor.name)
  // }
}


function getStakingElectionEventData(ctx: EventHandlerContext): EventData | undefined {
  const event = new StakingStakingElectionEvent(ctx)

  if (event.isV2030)
    return undefined
  else if (event.isV1058) {
    const [account, amount] = event.asV1058

    return {
      account,
    }
  }
  // else {
  //   throw new UnknownVersionError(event.constructor.name)
  // }
}


export async function handleStakersElected(event: EventHandlerContext): Promise<void> {
  await handleNewEra(event)
}

export async function handleNewEra(ctx: EventHandlerContext, old = false): Promise<void> {
  const data = old ? getStakersElectedEventData(ctx) : getStakingElectionEventData(ctx)

  if (!data) return

  // const currentEra = (await api.query.staking.currentEra()).unwrap()

  // const exposures = await api.query.staking.erasStakersClipped.entries(currentEra.toNumber());

  // await saveEraValidatorInfo(ctx, {
  //   id: ctx.event.id,
  //   accountId: encodeId(data.account),
  // })

  // exposures.forEach(async ([key, exposure]) => {
  //   const [, validatorId] = key.args

  //   let validatorIdString = validatorId.toString()
  //   const eraValidatorInfo = new EraValidatorInfo(eventId(ctx) + validatorIdString)
  //   eraValidatorInfo.era = currentEra.toNumber()
  //   eraValidatorInfo.address = validatorIdString
  //   eraValidatorInfo.total = exposure.total.toBigInt()
  //   eraValidatorInfo.own = exposure.own.toBigInt()
  //   eraValidatorInfo.others = exposure.others.map(other => {
  //     return {
  //       who: other.who.toString(),
  //       value: other.value.toString()
  //     }
  //   })

  //   await ctx.store.insert(eraValidatorInfo)
  // })
}

export async function saveEraValidatorInfo(ctx: EventHandlerContext, data: EraValidatorData) {
  const { accountId, id, } = data;
  const currentEraData = await storage.staking.getCurrentEra(ctx)

  const stakeChange = new EraValidatorInfo({
    id,
    address: accountId,
    era: currentEraData?.index,
    // others,
    // own,
    // total
  })

  await ctx.store.insert(stakeChange)
}