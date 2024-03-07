export enum Chain {
	KUSAMA = 'kusama',
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

const version = 2

export const chains: Chains = {
	[Chain.KUSAMA]: {
		name: 'kusama',
		squidName: 'fearless-kusama',
		description: 'kusama squid',
		version,
		chain: 'wss://kusama-rpc.polkadot.io',
		archive: 'kusama',
		storage: '100G',
		scaleProfiles: {
      postgres: ScaleProfile.LARGE,
      processor: ScaleProfile.LARGE,
      api: ScaleProfile.LARGE,
		},
  }
}

export default chains
