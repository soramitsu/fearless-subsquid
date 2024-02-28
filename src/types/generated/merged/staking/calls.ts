import * as polkadotCalls from '../../polkadot/staking/calls'


export const bond = {
	name: 'Staking.bond',
	v0Polkadot: polkadotCalls.bond['v0'],
	v28Polkadot: polkadotCalls.bond['v28'],
	v9110Polkadot: polkadotCalls.bond['v9110'],
	v9430Polkadot: polkadotCalls.bond['v9430'],
}

export const bondExtra = {
	name: 'Staking.bond_extra',
	v0Polkadot: polkadotCalls.bondExtra['v0'],
}

export const unbond = {
	name: 'Staking.unbond',
	v0Polkadot: polkadotCalls.unbond['v0'],
}

export const withdrawUnbonded = {
	name: 'Staking.withdraw_unbonded',
	v0Polkadot: polkadotCalls.withdrawUnbonded['v0'],
}

export const validate = {
	name: 'Staking.validate',
	v0Polkadot: polkadotCalls.validate['v0'],
	v28Polkadot: polkadotCalls.validate['v28'],
}

export const nominate = {
	name: 'Staking.nominate',
	v0Polkadot: polkadotCalls.nominate['v0'],
	v28Polkadot: polkadotCalls.nominate['v28'],
	v9110Polkadot: polkadotCalls.nominate['v9110'],
}

export const chill = {
	name: 'Staking.chill',
	v0Polkadot: polkadotCalls.chill['v0'],
}

export const setPayee = {
	name: 'Staking.set_payee',
	v0Polkadot: polkadotCalls.setPayee['v0'],
}

export const setController = {
	name: 'Staking.set_controller',
	v0Polkadot: polkadotCalls.setController['v0'],
	v28Polkadot: polkadotCalls.setController['v28'],
	v9110Polkadot: polkadotCalls.setController['v9110'],
	v9430Polkadot: polkadotCalls.setController['v9430'],
}

export const setValidatorCount = {
	name: 'Staking.set_validator_count',
	v0Polkadot: polkadotCalls.setValidatorCount['v0'],
}

export const forceNoEras = {
	name: 'Staking.force_no_eras',
	v0Polkadot: polkadotCalls.forceNoEras['v0'],
}

export const forceNewEra = {
	name: 'Staking.force_new_era',
	v0Polkadot: polkadotCalls.forceNewEra['v0'],
}

export const setInvulnerables = {
	name: 'Staking.set_invulnerables',
	v0Polkadot: polkadotCalls.setInvulnerables['v0'],
	v24Polkadot: polkadotCalls.setInvulnerables['v24'],
}

export const forceUnstake = {
	name: 'Staking.force_unstake',
	v0Polkadot: polkadotCalls.forceUnstake['v0'],
}

export const forceNewEraAlways = {
	name: 'Staking.force_new_era_always',
	v0Polkadot: polkadotCalls.forceNewEraAlways['v0'],
}

export const cancelDeferredSlash = {
	name: 'Staking.cancel_deferred_slash',
	v0Polkadot: polkadotCalls.cancelDeferredSlash['v0'],
}

export const payoutNominator = {
	name: 'Staking.payout_nominator',
	v0Polkadot: polkadotCalls.payoutNominator['v0'],
}

export const payoutValidator = {
	name: 'Staking.payout_validator',
	v0Polkadot: polkadotCalls.payoutValidator['v0'],
}

export const payoutStakers = {
	name: 'Staking.payout_stakers',
	v0Polkadot: polkadotCalls.payoutStakers['v0'],
}

export const rebond = {
	name: 'Staking.rebond',
	v0Polkadot: polkadotCalls.rebond['v0'],
}

export const setHistoryDepth = {
	name: 'Staking.set_history_depth',
	v0Polkadot: polkadotCalls.setHistoryDepth['v0'],
}

export const reapStash = {
	name: 'Staking.reap_stash',
	v0Polkadot: polkadotCalls.reapStash['v0'],
}

export const submitElectionSolution = {
	name: 'Staking.submit_election_solution',
	v0Polkadot: polkadotCalls.submitElectionSolution['v0'],
	v23Polkadot: polkadotCalls.submitElectionSolution['v23'],
}

export const submitElectionSolutionUnsigned = {
	name: 'Staking.submit_election_solution_unsigned',
	v0Polkadot: polkadotCalls.submitElectionSolutionUnsigned['v0'],
	v23Polkadot: polkadotCalls.submitElectionSolutionUnsigned['v23'],
}

export const increaseValidatorCount = {
	name: 'Staking.increase_validator_count',
	v11Polkadot: polkadotCalls.increaseValidatorCount['v11'],
}

export const scaleValidatorCount = {
	name: 'Staking.scale_validator_count',
	v11Polkadot: polkadotCalls.scaleValidatorCount['v11'],
}

export const kick = {
	name: 'Staking.kick',
	v28Polkadot: polkadotCalls.kick['v28'],
	v9110Polkadot: polkadotCalls.kick['v9110'],
}

export const updateStakingLimits = {
	name: 'Staking.update_staking_limits',
	v9050Polkadot: polkadotCalls.updateStakingLimits['v9050'],
}

export const chillOther = {
	name: 'Staking.chill_other',
	v9050Polkadot: polkadotCalls.chillOther['v9050'],
}

export const setStakingLimits = {
	name: 'Staking.set_staking_limits',
	v9080Polkadot: polkadotCalls.setStakingLimits['v9080'],
}

export const setStakingConfigs = {
	name: 'Staking.set_staking_configs',
	v9170Polkadot: polkadotCalls.setStakingConfigs['v9170'],
	v9180Polkadot: polkadotCalls.setStakingConfigs['v9180'],
}

export const forceApplyMinCommission = {
	name: 'Staking.force_apply_min_commission',
	v9170Polkadot: polkadotCalls.forceApplyMinCommission['v9170'],
}

export const setMinCommission = {
	name: 'Staking.set_min_commission',
	v9370Polkadot: polkadotCalls.setMinCommission['v9370'],
}
