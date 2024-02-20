import * as soraPolkadotEvents from '../../sora-polkadot/transaction-payment/events'
import * as soraKusamaEvents from '../../sora-kusama/transaction-payment/events'


export const transactionFeePaid = {
	name: 'TransactionPayment.TransactionFeePaid',
	v1SoraPolkadot: soraPolkadotEvents.transactionFeePaid['v1'],
	v7SoraKusama: soraKusamaEvents.transactionFeePaid['v7'],
}
