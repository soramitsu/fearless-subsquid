import * as soraPolkadotEvents from '../../sora-polkadot/parachain-system/events'
import * as soraKusamaEvents from '../../sora-kusama/parachain-system/events'


export const validationFunctionStored = {
	name: 'ParachainSystem.ValidationFunctionStored',
	v1SoraPolkadot: soraPolkadotEvents.validationFunctionStored['v1'],
	v1SoraKusama: soraKusamaEvents.validationFunctionStored['v1'],
}

export const validationFunctionApplied = {
	name: 'ParachainSystem.ValidationFunctionApplied',
	v1SoraPolkadot: soraPolkadotEvents.validationFunctionApplied['v1'],
	v1SoraKusama: soraKusamaEvents.validationFunctionApplied['v1'],
	v7SoraKusama: soraKusamaEvents.validationFunctionApplied['v7'],
}

export const validationFunctionDiscarded = {
	name: 'ParachainSystem.ValidationFunctionDiscarded',
	v1SoraPolkadot: soraPolkadotEvents.validationFunctionDiscarded['v1'],
	v1SoraKusama: soraKusamaEvents.validationFunctionDiscarded['v1'],
}

export const upgradeAuthorized = {
	name: 'ParachainSystem.UpgradeAuthorized',
	v1SoraPolkadot: soraPolkadotEvents.upgradeAuthorized['v1'],
	v1SoraKusama: soraKusamaEvents.upgradeAuthorized['v1'],
	v7SoraKusama: soraKusamaEvents.upgradeAuthorized['v7'],
}

export const downwardMessagesReceived = {
	name: 'ParachainSystem.DownwardMessagesReceived',
	v1SoraPolkadot: soraPolkadotEvents.downwardMessagesReceived['v1'],
	v1SoraKusama: soraKusamaEvents.downwardMessagesReceived['v1'],
	v7SoraKusama: soraKusamaEvents.downwardMessagesReceived['v7'],
}

export const downwardMessagesProcessed = {
	name: 'ParachainSystem.DownwardMessagesProcessed',
	v1SoraPolkadot: soraPolkadotEvents.downwardMessagesProcessed['v1'],
	v1SoraKusama: soraKusamaEvents.downwardMessagesProcessed['v1'],
	v7SoraKusama: soraKusamaEvents.downwardMessagesProcessed['v7'],
}

export const upwardMessageSent = {
	name: 'ParachainSystem.UpwardMessageSent',
	v10SoraPolkadot: soraPolkadotEvents.upwardMessageSent['v10'],
	v7SoraKusama: soraKusamaEvents.upwardMessageSent['v7'],
}
