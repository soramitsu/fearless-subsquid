import * as soraPolkadotEvents from '../../sora-polkadot/parachain-system/events'
import * as soraKusamaEvents from '../../sora-kusama/parachain-system/events'


export const validationFunctionStored = {
	name: 'ParachainSystem.ValidationFunctionStored',
	soraPolkadotV1: soraPolkadotEvents.validationFunctionStored['v1'],
	soraKusamaV1: soraKusamaEvents.validationFunctionStored['v1'],
}

export const validationFunctionApplied = {
	name: 'ParachainSystem.ValidationFunctionApplied',
	soraPolkadotV1: soraPolkadotEvents.validationFunctionApplied['v1'],
	soraKusamaV1: soraKusamaEvents.validationFunctionApplied['v1'],
	soraKusamaV7: soraKusamaEvents.validationFunctionApplied['v7'],
}

export const validationFunctionDiscarded = {
	name: 'ParachainSystem.ValidationFunctionDiscarded',
	soraPolkadotV1: soraPolkadotEvents.validationFunctionDiscarded['v1'],
	soraKusamaV1: soraKusamaEvents.validationFunctionDiscarded['v1'],
}

export const upgradeAuthorized = {
	name: 'ParachainSystem.UpgradeAuthorized',
	soraPolkadotV1: soraPolkadotEvents.upgradeAuthorized['v1'],
	soraKusamaV1: soraKusamaEvents.upgradeAuthorized['v1'],
	soraKusamaV7: soraKusamaEvents.upgradeAuthorized['v7'],
}

export const downwardMessagesReceived = {
	name: 'ParachainSystem.DownwardMessagesReceived',
	soraPolkadotV1: soraPolkadotEvents.downwardMessagesReceived['v1'],
	soraKusamaV1: soraKusamaEvents.downwardMessagesReceived['v1'],
	soraKusamaV7: soraKusamaEvents.downwardMessagesReceived['v7'],
}

export const downwardMessagesProcessed = {
	name: 'ParachainSystem.DownwardMessagesProcessed',
	soraPolkadotV1: soraPolkadotEvents.downwardMessagesProcessed['v1'],
	soraKusamaV1: soraKusamaEvents.downwardMessagesProcessed['v1'],
	soraKusamaV7: soraKusamaEvents.downwardMessagesProcessed['v7'],
}

export const upwardMessageSent = {
	name: 'ParachainSystem.UpwardMessageSent',
	soraPolkadotV10: soraPolkadotEvents.upwardMessageSent['v10'],
	soraKusamaV7: soraKusamaEvents.upwardMessageSent['v7'],
}
