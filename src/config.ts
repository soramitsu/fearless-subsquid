import { ProcessorConfig } from './types/custom/processorConfig'

const config: ProcessorConfig = {
    chainName: 'moonriver',
    prefix: '',
    dataSource: {
        archive: 'https://moonriver.archive.subsquid.io/graphql',
        chain: 'wss://wss.api.moonriver.moonbeam.network',
    },
    typesBundle: 'moonriver',
    batchSize: 100,
}

export default config
