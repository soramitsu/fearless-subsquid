import * as soraPolkadotEvents from '../../sora-polkadot/dmp-queue/events'
import * as soraKusamaEvents from '../../sora-kusama/dmp-queue/events'


export const invalidFormat = {
	name: 'DmpQueue.InvalidFormat',
	soraPolkadotV1: soraPolkadotEvents.invalidFormat['v1'],
	soraKusamaV1: soraKusamaEvents.invalidFormat['v1'],
	soraKusamaV7: soraKusamaEvents.invalidFormat['v7'],
}

export const unsupportedVersion = {
	name: 'DmpQueue.UnsupportedVersion',
	soraPolkadotV1: soraPolkadotEvents.unsupportedVersion['v1'],
	soraKusamaV1: soraKusamaEvents.unsupportedVersion['v1'],
	soraKusamaV7: soraKusamaEvents.unsupportedVersion['v7'],
}

export const executedDownward = {
	name: 'DmpQueue.ExecutedDownward',
	soraPolkadotV1: soraPolkadotEvents.executedDownward['v1'],
	soraPolkadotV10: soraPolkadotEvents.executedDownward['v10'],
	soraKusamaV1: soraKusamaEvents.executedDownward['v1'],
	soraKusamaV7: soraKusamaEvents.executedDownward['v7'],
}

export const weightExhausted = {
	name: 'DmpQueue.WeightExhausted',
	soraPolkadotV1: soraPolkadotEvents.weightExhausted['v1'],
	soraKusamaV1: soraKusamaEvents.weightExhausted['v1'],
	soraKusamaV7: soraKusamaEvents.weightExhausted['v7'],
}

export const overweightEnqueued = {
	name: 'DmpQueue.OverweightEnqueued',
	soraPolkadotV1: soraPolkadotEvents.overweightEnqueued['v1'],
	soraKusamaV1: soraKusamaEvents.overweightEnqueued['v1'],
	soraKusamaV7: soraKusamaEvents.overweightEnqueued['v7'],
}

export const overweightServiced = {
	name: 'DmpQueue.OverweightServiced',
	soraPolkadotV1: soraPolkadotEvents.overweightServiced['v1'],
	soraKusamaV1: soraKusamaEvents.overweightServiced['v1'],
	soraKusamaV7: soraKusamaEvents.overweightServiced['v7'],
}

export const maxMessagesExhausted = {
	name: 'DmpQueue.MaxMessagesExhausted',
	soraPolkadotV10: soraPolkadotEvents.maxMessagesExhausted['v10'],
	soraKusamaV7: soraKusamaEvents.maxMessagesExhausted['v7'],
}
