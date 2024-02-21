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

const version = 1

export const chains: Chains = {
	[Chain.KUSAMA]: {
		name: 'kusama',
		description: 'kusama squid',
		version,
		chain: 'wss://kusama-rpc.polkadot.io',
		archive: 'kusama',
		storage: '100G',
		scaleProfiles: {
      postgres: ScaleProfile.SMALL,
      processor: ScaleProfile.SMALL,
      api: ScaleProfile.SMALL,
		},
  }
}

export default chains
