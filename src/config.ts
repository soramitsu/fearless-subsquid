/* eslint-disable sonarjs/no-duplicate-string */
import { ProcessorConfig } from './types/custom/processorConfig'

const config: ProcessorConfig = {
    chainName: 'SORA Polkadot parachain',
    prefix: 'sora-polkadot-parachain',
    dataSource: {
        archive: '',
        chain: 'wss://ws.parachain-collator-3.pc3.sora2.soramitsu.co.jp/', // сюда ссылку на ноду
    },
    typesBundle: 'kusama',
    batchSize: 10,
    blockRange: {
        from: 0,
    },
}

export default config
