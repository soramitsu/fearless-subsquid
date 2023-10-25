"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    chainName: 'moonriver',
    blockRange: { from: 0 },
    prefix: '',
    dataSource: {
        archive: 'https://moonriver.archive.subsquid.io/graphql',
        chain: 'wss://wss.api.moonriver.moonbeam.network',
    },
    typesBundle: 'moonriver',
    batchSize: 300,
};
exports.default = config;
//# sourceMappingURL=config.js.map