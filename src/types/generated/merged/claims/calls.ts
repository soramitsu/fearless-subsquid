import * as polkadotCalls from '../../polkadot/claims/calls'


export const claim = {
	name: 'Claims.claim',
	v0Polkadot: polkadotCalls.claim['v0'],
}

export const mintClaim = {
	name: 'Claims.mint_claim',
	v0Polkadot: polkadotCalls.mintClaim['v0'],
}

export const claimAttest = {
	name: 'Claims.claim_attest',
	v0Polkadot: polkadotCalls.claimAttest['v0'],
}

export const attest = {
	name: 'Claims.attest',
	v0Polkadot: polkadotCalls.attest['v0'],
}

export const moveClaim = {
	name: 'Claims.move_claim',
	v6Polkadot: polkadotCalls.moveClaim['v6'],
}
