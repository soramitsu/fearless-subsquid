import { ProcessorConfig } from './types/custom/processorConfig'

const config: ProcessorConfig = {
    chainName: 'moonriver',
    blockRange: { from: 0 },
    prefix: '',
    dataSource: {
        archive: 'https://moonriver.archive.subsquid.io/graphql',
        chain: 'wss://wss.api.moonriver.moonbeam.network',
    },
    typesBundle: 'moonriver',
    batchSize: 300,
}

export default config
