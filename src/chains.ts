export enum Chain {
	POLKADOT = 'polkadot',
}

export enum ScaleProfile {
	SMALL = 'small',
	MEDIUM = 'medium',
	LARGE = 'large',
}

export interface EnvironmentAddresses {
	name: string
	squidName: string
	description: string
	version: number
	chain: string
	archive: string | null
	storage: string
	scaleProfiles: {
		postgres: ScaleProfile
		processor: ScaleProfile
		api: ScaleProfile
	}
}

type Chains = {
	[chain in Chain]: EnvironmentAddresses
}

const version = 3

export const chains: Chains = {
	[Chain.POLKADOT]: {
		name: 'polkadot',
		squidName: 'fearless-polkadot',
		description: 'polkadot squid',
		version,
		chain: 'wss://rpc.polkadot.io',
		archive: 'polkadot',
		storage: '100G',
		scaleProfiles: {
      postgres: ScaleProfile.LARGE,
      processor: ScaleProfile.LARGE,
      api: ScaleProfile.LARGE,
		},
  }
}

export default chains
