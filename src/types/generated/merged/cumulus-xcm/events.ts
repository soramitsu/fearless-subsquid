import * as soraPolkadotEvents from '../../sora-polkadot/cumulus-xcm/events'
import * as soraKusamaEvents from '../../sora-kusama/cumulus-xcm/events'


export const invalidFormat = {
	name: 'CumulusXcm.InvalidFormat',
	v1SoraPolkadot: soraPolkadotEvents.invalidFormat['v1'],
	v1SoraKusama: soraKusamaEvents.invalidFormat['v1'],
}

export const unsupportedVersion = {
	name: 'CumulusXcm.UnsupportedVersion',
	v1SoraPolkadot: soraPolkadotEvents.unsupportedVersion['v1'],
	v1SoraKusama: soraKusamaEvents.unsupportedVersion['v1'],
}

export const executedDownward = {
	name: 'CumulusXcm.ExecutedDownward',
	v1SoraPolkadot: soraPolkadotEvents.executedDownward['v1'],
	v10SoraPolkadot: soraPolkadotEvents.executedDownward['v10'],
	v1SoraKusama: soraKusamaEvents.executedDownward['v1'],
	v7SoraKusama: soraKusamaEvents.executedDownward['v7'],
}
