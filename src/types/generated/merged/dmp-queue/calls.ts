import * as soraPolkadotCalls from '../../sora-polkadot/dmp-queue/calls'
import * as soraKusamaCalls from '../../sora-kusama/dmp-queue/calls'


export const serviceOverweight = {
	name: 'DmpQueue.service_overweight',
	v1SoraPolkadot: soraPolkadotCalls.serviceOverweight['v1'],
	v10SoraPolkadot: soraPolkadotCalls.serviceOverweight['v10'],
	v1SoraKusama: soraKusamaCalls.serviceOverweight['v1'],
	v7SoraKusama: soraKusamaCalls.serviceOverweight['v7'],
}
