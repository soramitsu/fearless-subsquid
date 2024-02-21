import * as kusamaEvents from '../../kusama/transaction-payment/events'


export const transactionFeePaid = {
	name: 'TransactionPayment.TransactionFeePaid',
	v9260Kusama: kusamaEvents.transactionFeePaid['v9260'],
}
