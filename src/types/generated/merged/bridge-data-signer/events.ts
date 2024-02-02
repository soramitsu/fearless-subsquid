import * as soraPolkadotEvents from '../../sora-polkadot/bridge-data-signer/events'
import * as soraKusamaEvents from '../../sora-kusama/bridge-data-signer/events'


export const initialized = {
	name: 'BridgeDataSigner.Initialized',
	soraPolkadotV10: soraPolkadotEvents.initialized['v10'],
	soraKusamaV7: soraKusamaEvents.initialized['v7'],
}

export const addedPeer = {
	name: 'BridgeDataSigner.AddedPeer',
	soraPolkadotV10: soraPolkadotEvents.addedPeer['v10'],
	soraKusamaV7: soraKusamaEvents.addedPeer['v7'],
}

export const removedPeer = {
	name: 'BridgeDataSigner.RemovedPeer',
	soraPolkadotV10: soraPolkadotEvents.removedPeer['v10'],
	soraKusamaV7: soraKusamaEvents.removedPeer['v7'],
}

export const approvalAccepted = {
	name: 'BridgeDataSigner.ApprovalAccepted',
	soraPolkadotV10: soraPolkadotEvents.approvalAccepted['v10'],
	soraKusamaV7: soraKusamaEvents.approvalAccepted['v7'],
}

export const approved = {
	name: 'BridgeDataSigner.Approved',
	soraPolkadotV10: soraPolkadotEvents.approved['v10'],
	soraKusamaV7: soraKusamaEvents.approved['v7'],
}
