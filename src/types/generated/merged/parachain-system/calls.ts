import * as soraPolkadotCalls from '../../sora-polkadot/parachain-system/calls'
import * as soraKusamaCalls from '../../sora-kusama/parachain-system/calls'


export const setValidationData = {
	name: 'ParachainSystem.set_validation_data',
	soraPolkadotV1: soraPolkadotCalls.setValidationData['v1'],
	soraKusamaV1: soraKusamaCalls.setValidationData['v1'],
}

export const sudoSendUpwardMessage = {
	name: 'ParachainSystem.sudo_send_upward_message',
	soraPolkadotV1: soraPolkadotCalls.sudoSendUpwardMessage['v1'],
	soraKusamaV1: soraKusamaCalls.sudoSendUpwardMessage['v1'],
}

export const authorizeUpgrade = {
	name: 'ParachainSystem.authorize_upgrade',
	soraPolkadotV1: soraPolkadotCalls.authorizeUpgrade['v1'],
	soraKusamaV1: soraKusamaCalls.authorizeUpgrade['v1'],
}

export const enactAuthorizedUpgrade = {
	name: 'ParachainSystem.enact_authorized_upgrade',
	soraPolkadotV1: soraPolkadotCalls.enactAuthorizedUpgrade['v1'],
	soraKusamaV1: soraKusamaCalls.enactAuthorizedUpgrade['v1'],
}
