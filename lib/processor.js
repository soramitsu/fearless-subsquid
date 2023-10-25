"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const substrate_processor_1 = require("@subsquid/substrate-processor");
const consts_1 = require("./common/consts");
const modules = __importStar(require("./mappings"));
const typeorm_store_1 = require("@subsquid/typeorm-store");
const database = new typeorm_store_1.TypeormDatabase();
const processor = new substrate_processor_1.SubstrateProcessor(database);
processor.setTypesBundle(config_1.default.typesBundle);
processor.setBatchSize(config_1.default.batchSize || consts_1.DEFAULT_BATCH_SIZE);
processor.setDataSource(config_1.default.dataSource);
processor.setPrometheusPort(config_1.default.port || consts_1.DEFAULT_PORT);
processor.setBlockRange(config_1.default.blockRange || { from: 0 });
//events handlers
processor.addEventHandler('ParachainStaking.NewRound', modules.staking.events.handleNewRound);
processor.addEventHandler('ParachainStaking.Rewarded', modules.staking.events.handleRewarded);
processor.addEventHandler('ParachainStaking.CandidateBondedMore', modules.staking.events.handleBondedMore);
processor.addEventHandler('ParachainStaking.CandidateBondedLess', modules.staking.events.handleBondedLess);
processor.addEventHandler('ParachainStaking.Delegation', modules.staking.events.handleDelegation);
processor.addEventHandler('ParachainStaking.DelegationDecreased', modules.staking.events.handleDelegationDecreased);
processor.addEventHandler('ParachainStaking.DelegationIncreased', modules.staking.events.handleDelegationIncreased);
processor.addEventHandler('ParachainStaking.DelegationRevoked', modules.staking.events.handleDelegationRevoked);
processor.run();
//# sourceMappingURL=processor.js.map