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
exports.RoundCollator = void 0;
const typeorm_1 = require("typeorm");
const marshal = __importStar(require("./marshal"));
const round_model_1 = require("./round.model");
const roundNomination_model_1 = require("./roundNomination.model");
const staker_model_1 = require("./staker.model");
const collator_model_1 = require("./collator.model");
let RoundCollator = class RoundCollator {
    constructor(props) {
        Object.assign(this, props);
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], RoundCollator.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.ManyToOne)(() => round_model_1.Round, { nullable: true }),
    __metadata("design:type", round_model_1.Round)
], RoundCollator.prototype, "round", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { transformer: marshal.bigintTransformer, nullable: true }),
    __metadata("design:type", Object)
], RoundCollator.prototype, "ownBond", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { transformer: marshal.bigintTransformer, nullable: false }),
    __metadata("design:type", BigInt)
], RoundCollator.prototype, "totalBond", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { transformer: marshal.floatTransformer, nullable: true }),
    __metadata("design:type", Object)
], RoundCollator.prototype, "rewardAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { transformer: marshal.floatTransformer, nullable: true }),
    __metadata("design:type", Object)
], RoundCollator.prototype, "apr", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { transformer: marshal.floatTransformer, nullable: true }),
    __metadata("design:type", Object)
], RoundCollator.prototype, "aprTechnNumerator", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { transformer: marshal.floatTransformer, nullable: true }),
    __metadata("design:type", Object)
], RoundCollator.prototype, "aprTechnDenominator", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => roundNomination_model_1.RoundNomination, e => e.collator),
    __metadata("design:type", Array)
], RoundCollator.prototype, "nominators", void 0);
__decorate([
    (0, typeorm_1.Column)("int4", { nullable: true }),
    __metadata("design:type", Object)
], RoundCollator.prototype, "nominatorsCount", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: false }),
    __metadata("design:type", String)
], RoundCollator.prototype, "stakerId", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.ManyToOne)(() => staker_model_1.Staker, { nullable: true }),
    __metadata("design:type", staker_model_1.Staker)
], RoundCollator.prototype, "staker", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.ManyToOne)(() => collator_model_1.Collator, { nullable: true }),
    __metadata("design:type", Object)
], RoundCollator.prototype, "collator", void 0);
RoundCollator = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], RoundCollator);
exports.RoundCollator = RoundCollator;
//# sourceMappingURL=roundCollator.model.js.map