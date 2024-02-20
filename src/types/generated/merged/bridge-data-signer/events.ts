import * as soraPolkadotEvents from '../../sora-polkadot/bridge-data-signer/events'
import * as soraKusamaEvents from '../../sora-kusama/bridge-data-signer/events'


export const initialized = {
	name: 'BridgeDataSigner.Initialized',
	v10SoraPolkadot: soraPolkadotEvents.initialized['v10'],
	v7SoraKusama: soraKusamaEvents.initialized['v7'],
}

export const addedPeer = {
	name: 'BridgeDataSigner.AddedPeer',
	v10SoraPolkadot: soraPolkadotEvents.addedPeer['v10'],
	v7SoraKusama: soraKusamaEvents.addedPeer['v7'],
}

export const removedPeer = {
	name: 'BridgeDataSigner.RemovedPeer',
	v10SoraPolkadot: soraPolkadotEvents.removedPeer['v10'],
	v7SoraKusama: soraKusamaEvents.removedPeer['v7'],
}

export const approvalAccepted = {
	name: 'BridgeDataSigner.ApprovalAccepted',
	v10SoraPolkadot: soraPolkadotEvents.approvalAccepted['v10'],
	v7SoraKusama: soraKusamaEvents.approvalAccepted['v7'],
}

export const approved = {
	name: 'BridgeDataSigner.Approved',
	v10SoraPolkadot: soraPolkadotEvents.approved['v10'],
	v7SoraKusama: soraKusamaEvents.approved['v7'],
}
