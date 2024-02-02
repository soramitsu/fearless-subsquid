import * as soraPolkadotCalls from '../../sora-polkadot/dmp-queue/calls'
import * as soraKusamaCalls from '../../sora-kusama/dmp-queue/calls'


export const serviceOverweight = {
	name: 'DmpQueue.service_overweight',
	soraPolkadotV1: soraPolkadotCalls.serviceOverweight['v1'],
	soraPolkadotV10: soraPolkadotCalls.serviceOverweight['v10'],
	soraKusamaV1: soraKusamaCalls.serviceOverweight['v1'],
	soraKusamaV7: soraKusamaCalls.serviceOverweight['v7'],
}
