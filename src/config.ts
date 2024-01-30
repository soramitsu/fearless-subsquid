/* eslint-disable sonarjs/no-duplicate-string */
import { ProcessorConfig } from './types/custom/processorConfig'

const config: ProcessorConfig = {
    chainName: 'kusama',
    prefix: 'kusama',
    dataSource: {
        chain: 'wss://kusama-rpc.polkadot.io', // сюда ссылку на ноду
    },
    typesBundle: 'kusama',
    batchSize: 10,
    blockRange: {
        from: 0,
    },
}

export default config
