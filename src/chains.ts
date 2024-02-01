export enum Environment {
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

type Environments = {
	[environment in Environment]: EnvironmentAddresses
}

const version = 4

export const chains: Environments = {
	[Environment.SORA_POLKADOT]: {
    name: 'sora',
    description: 'Sora squid',
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
	[Environment.SORA_KUSAMA]: {
    name: 'sora',
    description: 'Sora squid',
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
