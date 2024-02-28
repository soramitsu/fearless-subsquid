import * as polkadotEvents from '../../polkadot/staking/events'


export const eraPayout = {
	name: 'Staking.EraPayout',
	v0Polkadot: polkadotEvents.eraPayout['v0'],
}

export const reward = {
	name: 'Staking.Reward',
	v0Polkadot: polkadotEvents.reward['v0'],
}

export const slash = {
	name: 'Staking.Slash',
	v0Polkadot: polkadotEvents.slash['v0'],
}

export const oldSlashingReportDiscarded = {
	name: 'Staking.OldSlashingReportDiscarded',
	v0Polkadot: polkadotEvents.oldSlashingReportDiscarded['v0'],
	v9300Polkadot: polkadotEvents.oldSlashingReportDiscarded['v9300'],
}

export const stakingElection = {
	name: 'Staking.StakingElection',
	v0Polkadot: polkadotEvents.stakingElection['v0'],
	v30Polkadot: polkadotEvents.stakingElection['v30'],
}

export const solutionStored = {
	name: 'Staking.SolutionStored',
	v0Polkadot: polkadotEvents.solutionStored['v0'],
}

export const bonded = {
	name: 'Staking.Bonded',
	v0Polkadot: polkadotEvents.bonded['v0'],
	v9300Polkadot: polkadotEvents.bonded['v9300'],
}

export const unbonded = {
	name: 'Staking.Unbonded',
	v0Polkadot: polkadotEvents.unbonded['v0'],
	v9300Polkadot: polkadotEvents.unbonded['v9300'],
}

export const withdrawn = {
	name: 'Staking.Withdrawn',
	v0Polkadot: polkadotEvents.withdrawn['v0'],
	v9300Polkadot: polkadotEvents.withdrawn['v9300'],
}

export const kicked = {
	name: 'Staking.Kicked',
	v28Polkadot: polkadotEvents.kicked['v28'],
	v9300Polkadot: polkadotEvents.kicked['v9300'],
}

export const stakingElectionFailed = {
	name: 'Staking.StakingElectionFailed',
	v9050Polkadot: polkadotEvents.stakingElectionFailed['v9050'],
}

export const eraPaid = {
	name: 'Staking.EraPaid',
	v9090Polkadot: polkadotEvents.eraPaid['v9090'],
	v9300Polkadot: polkadotEvents.eraPaid['v9300'],
}

export const rewarded = {
	name: 'Staking.Rewarded',
	v9090Polkadot: polkadotEvents.rewarded['v9090'],
	v9300Polkadot: polkadotEvents.rewarded['v9300'],
	v1001002Polkadot: polkadotEvents.rewarded['v1001002'],
}

export const slashed = {
	name: 'Staking.Slashed',
	v9090Polkadot: polkadotEvents.slashed['v9090'],
	v9300Polkadot: polkadotEvents.slashed['v9300'],
}

export const stakersElected = {
	name: 'Staking.StakersElected',
	v9090Polkadot: polkadotEvents.stakersElected['v9090'],
}

export const chilled = {
	name: 'Staking.Chilled',
	v9090Polkadot: polkadotEvents.chilled['v9090'],
	v9300Polkadot: polkadotEvents.chilled['v9300'],
}

export const payoutStarted = {
	name: 'Staking.PayoutStarted',
	v9090Polkadot: polkadotEvents.payoutStarted['v9090'],
	v9300Polkadot: polkadotEvents.payoutStarted['v9300'],
}

export const validatorPrefsSet = {
	name: 'Staking.ValidatorPrefsSet',
	v9200Polkadot: polkadotEvents.validatorPrefsSet['v9200'],
	v9300Polkadot: polkadotEvents.validatorPrefsSet['v9300'],
}

export const slashReported = {
	name: 'Staking.SlashReported',
	v9360Polkadot: polkadotEvents.slashReported['v9360'],
}

export const forceEra = {
	name: 'Staking.ForceEra',
	v9370Polkadot: polkadotEvents.forceEra['v9370'],
}

export const snapshotVotersSizeExceeded = {
	name: 'Staking.SnapshotVotersSizeExceeded',
	v1000001Polkadot: polkadotEvents.snapshotVotersSizeExceeded['v1000001'],
}

export const snapshotTargetsSizeExceeded = {
	name: 'Staking.SnapshotTargetsSizeExceeded',
	v1000001Polkadot: polkadotEvents.snapshotTargetsSizeExceeded['v1000001'],
}
