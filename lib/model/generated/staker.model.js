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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staker = void 0;
const typeorm_1 = require("typeorm");
const marshal = __importStar(require("./marshal"));
const account_model_1 = require("./account.model");
const roundCollator_model_1 = require("./roundCollator.model");
const roundNominator_model_1 = require("./roundNominator.model");
const reward_model_1 = require("./reward.model");
let Staker = class Staker {
    constructor(props) {
        Object.assign(this, props);
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Staker.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: false }),
    __metadata("design:type", String)
], Staker.prototype, "stashId", void 0);
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.OneToOne)(() => account_model_1.Account, { nullable: false }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", account_model_1.Account)
], Staker.prototype, "stash", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: true }),
    __metadata("design:type", Object)
], Staker.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { transformer: marshal.floatTransformer, nullable: true }),
    __metadata("design:type", Object)
], Staker.prototype, "commission", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { transformer: marshal.bigintTransformer, nullable: false }),
    __metadata("design:type", BigInt)
], Staker.prototype, "activeBond", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { transformer: marshal.bigintTransformer, nullable: false }),
    __metadata("design:type", BigInt)
], Staker.prototype, "totalReward", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { transformer: marshal.floatTransformer, nullable: true }),
    __metadata("design:type", Object)
], Staker.prototype, "apr24h", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => roundCollator_model_1.RoundCollator, e => e.staker),
    __metadata("design:type", Array)
], Staker.prototype, "collatorHistory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => roundNominator_model_1.RoundNominator, e => e.staker),
    __metadata("design:type", Array)
], Staker.prototype, "nominatorHistory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reward_model_1.Reward, e => e.staker),
    __metadata("design:type", Array)
], Staker.prototype, "rewards", void 0);
Staker = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], Staker);
exports.Staker = Staker;
//# sourceMappingURL=staker.model.js.map