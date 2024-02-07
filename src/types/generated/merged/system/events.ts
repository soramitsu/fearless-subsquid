import * as soraPolkadotEvents from '../../sora-polkadot/system/events'
import * as soraKusamaEvents from '../../sora-kusama/system/events'


export const extrinsicSuccess = {
	name: 'System.ExtrinsicSuccess',
	v1SoraPolkadot: soraPolkadotEvents.extrinsicSuccess['v1'],
	v1SoraKusama: soraKusamaEvents.extrinsicSuccess['v1'],
	v7SoraKusama: soraKusamaEvents.extrinsicSuccess['v7'],
}

export const extrinsicFailed = {
	name: 'System.ExtrinsicFailed',
	v1SoraPolkadot: soraPolkadotEvents.extrinsicFailed['v1'],
	v1SoraKusama: soraKusamaEvents.extrinsicFailed['v1'],
	v7SoraKusama: soraKusamaEvents.extrinsicFailed['v7'],
}

export const codeUpdated = {
	name: 'System.CodeUpdated',
	v1SoraPolkadot: soraPolkadotEvents.codeUpdated['v1'],
	v1SoraKusama: soraKusamaEvents.codeUpdated['v1'],
}

export const newAccount = {
	name: 'System.NewAccount',
	v1SoraPolkadot: soraPolkadotEvents.newAccount['v1'],
	v1SoraKusama: soraKusamaEvents.newAccount['v1'],
	v7SoraKusama: soraKusamaEvents.newAccount['v7'],
}

export const killedAccount = {
	name: 'System.KilledAccount',
	v1SoraPolkadot: soraPolkadotEvents.killedAccount['v1'],
	v1SoraKusama: soraKusamaEvents.killedAccount['v1'],
	v7SoraKusama: soraKusamaEvents.killedAccount['v7'],
}

export const remarked = {
	name: 'System.Remarked',
	v1SoraPolkadot: soraPolkadotEvents.remarked['v1'],
	v1SoraKusama: soraKusamaEvents.remarked['v1'],
	v7SoraKusama: soraKusamaEvents.remarked['v7'],
}
