"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_product_entity_1 = require("./entities/order-product.entity");
const order_product_service_1 = require("./order-product.service");
let OrderProductModule = exports.OrderProductModule = class OrderProductModule {
};
exports.OrderProductModule = OrderProductModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_product_entity_1.OrderProductEntity])],
        providers: [order_product_service_1.OrderProductService],
        exports: [order_product_service_1.OrderProductService],
    })
], OrderProductModule);
//# sourceMappingURL=order-product.module.js.map