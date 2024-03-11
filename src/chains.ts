export enum Chain {
	SORA_POLKADOT = 'sora-polkadot',
	SORA_KUSAMA = 'sora-kusama',
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
	[Chain.SORA_POLKADOT]: {
		name: 'sora-polkadot',
		description: 'sora-polkadot squid',
		version,
		chain: 'wss://ws.parachain-collator-3.pc3.sora2.soramitsu.co.jp/',
		archive: null,
		storage: '100G',
		scaleProfiles: {
      postgres: ScaleProfile.LARGE,
      processor: ScaleProfile.LARGE,
      api: ScaleProfile.LARGE,
		},
	},
	[Chain.SORA_KUSAMA]: {
		name: 'sora-kusama',
		description: 'sora-kusama squid',
		version,
		chain: 'wss://ws.parachain-collator-2.c2.sora2.soramitsu.co.jp/',
		archive: null,
		storage: '100G',
		scaleProfiles: {
      postgres: ScaleProfile.LARGE,
      processor: ScaleProfile.LARGE,
      api: ScaleProfile.LARGE,
		},
  }
}

export default chains
