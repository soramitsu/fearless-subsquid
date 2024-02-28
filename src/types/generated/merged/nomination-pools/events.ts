import * as polkadotEvents from '../../polkadot/nomination-pools/events'


export const created = {
	name: 'NominationPools.Created',
	v9280Polkadot: polkadotEvents.created['v9280'],
}

export const bonded = {
	name: 'NominationPools.Bonded',
	v9280Polkadot: polkadotEvents.bonded['v9280'],
}

export const paidOut = {
	name: 'NominationPools.PaidOut',
	v9280Polkadot: polkadotEvents.paidOut['v9280'],
}

export const unbonded = {
	name: 'NominationPools.Unbonded',
	v9280Polkadot: polkadotEvents.unbonded['v9280'],
}

export const withdrawn = {
	name: 'NominationPools.Withdrawn',
	v9280Polkadot: polkadotEvents.withdrawn['v9280'],
}

export const destroyed = {
	name: 'NominationPools.Destroyed',
	v9280Polkadot: polkadotEvents.destroyed['v9280'],
}

export const stateChanged = {
	name: 'NominationPools.StateChanged',
	v9280Polkadot: polkadotEvents.stateChanged['v9280'],
}

export const memberRemoved = {
	name: 'NominationPools.MemberRemoved',
	v9280Polkadot: polkadotEvents.memberRemoved['v9280'],
}

export const rolesUpdated = {
	name: 'NominationPools.RolesUpdated',
	v9280Polkadot: polkadotEvents.rolesUpdated['v9280'],
	v9420Polkadot: polkadotEvents.rolesUpdated['v9420'],
}

export const poolSlashed = {
	name: 'NominationPools.PoolSlashed',
	v9280Polkadot: polkadotEvents.poolSlashed['v9280'],
}

export const unbondingPoolSlashed = {
	name: 'NominationPools.UnbondingPoolSlashed',
	v9280Polkadot: polkadotEvents.unbondingPoolSlashed['v9280'],
}

export const poolCommissionUpdated = {
	name: 'NominationPools.PoolCommissionUpdated',
	v9420Polkadot: polkadotEvents.poolCommissionUpdated['v9420'],
}

export const poolMaxCommissionUpdated = {
	name: 'NominationPools.PoolMaxCommissionUpdated',
	v9420Polkadot: polkadotEvents.poolMaxCommissionUpdated['v9420'],
}

export const poolCommissionChangeRateUpdated = {
	name: 'NominationPools.PoolCommissionChangeRateUpdated',
	v9420Polkadot: polkadotEvents.poolCommissionChangeRateUpdated['v9420'],
}

export const poolCommissionClaimed = {
	name: 'NominationPools.PoolCommissionClaimed',
	v9420Polkadot: polkadotEvents.poolCommissionClaimed['v9420'],
}

export const minBalanceDeficitAdjusted = {
	name: 'NominationPools.MinBalanceDeficitAdjusted',
	v1001002Polkadot: polkadotEvents.minBalanceDeficitAdjusted['v1001002'],
}

export const minBalanceExcessAdjusted = {
	name: 'NominationPools.MinBalanceExcessAdjusted',
	v1001002Polkadot: polkadotEvents.minBalanceExcessAdjusted['v1001002'],
}
