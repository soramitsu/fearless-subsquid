import * as soraPolkadotEvents from '../../sora-polkadot/dmp-queue/events'
import * as soraKusamaEvents from '../../sora-kusama/dmp-queue/events'


export const invalidFormat = {
	name: 'DmpQueue.InvalidFormat',
	v1SoraPolkadot: soraPolkadotEvents.invalidFormat['v1'],
	v1SoraKusama: soraKusamaEvents.invalidFormat['v1'],
	v7SoraKusama: soraKusamaEvents.invalidFormat['v7'],
}

export const unsupportedVersion = {
	name: 'DmpQueue.UnsupportedVersion',
	v1SoraPolkadot: soraPolkadotEvents.unsupportedVersion['v1'],
	v1SoraKusama: soraKusamaEvents.unsupportedVersion['v1'],
	v7SoraKusama: soraKusamaEvents.unsupportedVersion['v7'],
}

export const executedDownward = {
	name: 'DmpQueue.ExecutedDownward',
	v1SoraPolkadot: soraPolkadotEvents.executedDownward['v1'],
	v10SoraPolkadot: soraPolkadotEvents.executedDownward['v10'],
	v1SoraKusama: soraKusamaEvents.executedDownward['v1'],
	v7SoraKusama: soraKusamaEvents.executedDownward['v7'],
}

export const weightExhausted = {
	name: 'DmpQueue.WeightExhausted',
	v1SoraPolkadot: soraPolkadotEvents.weightExhausted['v1'],
	v1SoraKusama: soraKusamaEvents.weightExhausted['v1'],
	v7SoraKusama: soraKusamaEvents.weightExhausted['v7'],
}

export const overweightEnqueued = {
	name: 'DmpQueue.OverweightEnqueued',
	v1SoraPolkadot: soraPolkadotEvents.overweightEnqueued['v1'],
	v1SoraKusama: soraKusamaEvents.overweightEnqueued['v1'],
	v7SoraKusama: soraKusamaEvents.overweightEnqueued['v7'],
}

export const overweightServiced = {
	name: 'DmpQueue.OverweightServiced',
	v1SoraPolkadot: soraPolkadotEvents.overweightServiced['v1'],
	v1SoraKusama: soraKusamaEvents.overweightServiced['v1'],
	v7SoraKusama: soraKusamaEvents.overweightServiced['v7'],
}

export const maxMessagesExhausted = {
	name: 'DmpQueue.MaxMessagesExhausted',
	v10SoraPolkadot: soraPolkadotEvents.maxMessagesExhausted['v10'],
	v7SoraKusama: soraKusamaEvents.maxMessagesExhausted['v7'],
}
