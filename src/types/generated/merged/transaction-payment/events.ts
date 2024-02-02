import * as soraPolkadotEvents from '../../sora-polkadot/transaction-payment/events'
import * as soraKusamaEvents from '../../sora-kusama/transaction-payment/events'


export const transactionFeePaid = {
	name: 'TransactionPayment.TransactionFeePaid',
	soraPolkadotV1: soraPolkadotEvents.transactionFeePaid['v1'],
	soraKusamaV7: soraKusamaEvents.transactionFeePaid['v7'],
}
