import dotenv from 'dotenv'
import { ScaleProfile, EnvironmentAddresses } from './environments'

dotenv.config()

const environment = process.env.INDEXER_ENVIRONMENT || 'stage'
const environmentConfig: EnvironmentAddresses = {
  name: 'sora',
  description: 'Sora squid',
  version: 4,
  chain: 'wss://ws.parachain-collator-3.pc3.sora2.soramitsu.co.jp/',
  archive: null,
  storage: '100G',
  scaleProfiles: {
    postgres: ScaleProfile.LARGE,
    processor: ScaleProfile.LARGE,
    api: ScaleProfile.LARGE,
  },
};

if (!environmentConfig) {
	throw new Error(`Environment ${environment} is not defined`)
}

export const { chain, archive } = environmentConfig
export const startBlock = process.env.INDEXER_START_BLOCK ? parseInt(process.env.INDEXER_START_BLOCK) : 0
export const testLogMode = process.env.INDEXER_TEST_LOG_MODE ? process.env.INDEXER_TEST_LOG_MODE === 'true' : false
export const performanceLogMode = process.env.INDEXER_PERFORMANCE_LOG_MODE ? process.env.INDEXER_PERFORMANCE_LOG_MODE === 'true' : false
export const performanceLogMinTime = process.env.INDEXER_PERFORMANCE_LOG_MIN_TIME
	? parseInt(process.env.INDEXER_PERFORMANCE_LOG_MIN_TIME)
	: 0
