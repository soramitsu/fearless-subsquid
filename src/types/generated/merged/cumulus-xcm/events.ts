import * as soraPolkadotEvents from '../../sora-polkadot/cumulus-xcm/events'
import * as soraKusamaEvents from '../../sora-kusama/cumulus-xcm/events'


export const invalidFormat = {
	name: 'CumulusXcm.InvalidFormat',
	soraPolkadotV1: soraPolkadotEvents.invalidFormat['v1'],
	soraKusamaV1: soraKusamaEvents.invalidFormat['v1'],
}

export const unsupportedVersion = {
	name: 'CumulusXcm.UnsupportedVersion',
	soraPolkadotV1: soraPolkadotEvents.unsupportedVersion['v1'],
	soraKusamaV1: soraKusamaEvents.unsupportedVersion['v1'],
}

export const executedDownward = {
	name: 'CumulusXcm.ExecutedDownward',
	soraPolkadotV1: soraPolkadotEvents.executedDownward['v1'],
	soraPolkadotV10: soraPolkadotEvents.executedDownward['v10'],
	soraKusamaV1: soraKusamaEvents.executedDownward['v1'],
	soraKusamaV7: soraKusamaEvents.executedDownward['v7'],
}
