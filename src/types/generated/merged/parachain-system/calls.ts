import * as soraPolkadotCalls from '../../sora-polkadot/parachain-system/calls'
import * as soraKusamaCalls from '../../sora-kusama/parachain-system/calls'


export const setValidationData = {
	name: 'ParachainSystem.set_validation_data',
	v1SoraPolkadot: soraPolkadotCalls.setValidationData['v1'],
	v1SoraKusama: soraKusamaCalls.setValidationData['v1'],
}

export const sudoSendUpwardMessage = {
	name: 'ParachainSystem.sudo_send_upward_message',
	v1SoraPolkadot: soraPolkadotCalls.sudoSendUpwardMessage['v1'],
	v1SoraKusama: soraKusamaCalls.sudoSendUpwardMessage['v1'],
}

export const authorizeUpgrade = {
	name: 'ParachainSystem.authorize_upgrade',
	v1SoraPolkadot: soraPolkadotCalls.authorizeUpgrade['v1'],
	v1SoraKusama: soraKusamaCalls.authorizeUpgrade['v1'],
}

export const enactAuthorizedUpgrade = {
	name: 'ParachainSystem.enact_authorized_upgrade',
	v1SoraPolkadot: soraPolkadotCalls.enactAuthorizedUpgrade['v1'],
	v1SoraKusama: soraKusamaCalls.enactAuthorizedUpgrade['v1'],
}
