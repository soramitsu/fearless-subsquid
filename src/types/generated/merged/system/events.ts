import * as soraPolkadotEvents from '../../sora-polkadot/system/events'
import * as soraKusamaEvents from '../../sora-kusama/system/events'


export const extrinsicSuccess = {
	name: 'System.ExtrinsicSuccess',
	soraPolkadotV1: soraPolkadotEvents.extrinsicSuccess['v1'],
	soraKusamaV1: soraKusamaEvents.extrinsicSuccess['v1'],
	soraKusamaV7: soraKusamaEvents.extrinsicSuccess['v7'],
}

export const extrinsicFailed = {
	name: 'System.ExtrinsicFailed',
	soraPolkadotV1: soraPolkadotEvents.extrinsicFailed['v1'],
	soraKusamaV1: soraKusamaEvents.extrinsicFailed['v1'],
	soraKusamaV7: soraKusamaEvents.extrinsicFailed['v7'],
}

export const codeUpdated = {
	name: 'System.CodeUpdated',
	soraPolkadotV1: soraPolkadotEvents.codeUpdated['v1'],
	soraKusamaV1: soraKusamaEvents.codeUpdated['v1'],
}

export const newAccount = {
	name: 'System.NewAccount',
	soraPolkadotV1: soraPolkadotEvents.newAccount['v1'],
	soraKusamaV1: soraKusamaEvents.newAccount['v1'],
	soraKusamaV7: soraKusamaEvents.newAccount['v7'],
}

export const killedAccount = {
	name: 'System.KilledAccount',
	soraPolkadotV1: soraPolkadotEvents.killedAccount['v1'],
	soraKusamaV1: soraKusamaEvents.killedAccount['v1'],
	soraKusamaV7: soraKusamaEvents.killedAccount['v7'],
}

export const remarked = {
	name: 'System.Remarked',
	soraPolkadotV1: soraPolkadotEvents.remarked['v1'],
	soraKusamaV1: soraKusamaEvents.remarked['v1'],
	soraKusamaV7: soraKusamaEvents.remarked['v7'],
}
