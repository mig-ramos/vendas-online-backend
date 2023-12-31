"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cache_module_1 = require("../cache/cache.module");
const city_controller_1 = require("./city.controller");
const city_service_1 = require("./city.service");
const city_entity_1 = require("./entities/city.entity");
let CityModule = exports.CityModule = class CityModule {
};
exports.CityModule = CityModule = __decorate([
    (0, common_1.Module)({
        imports: [cache_module_1.CacheModule, typeorm_1.TypeOrmModule.forFeature([city_entity_1.CityEntity])],
        controllers: [city_controller_1.CityController],
        providers: [city_service_1.CityService],
        exports: [city_service_1.CityService],
    })
], CityModule);
//# sourceMappingURL=city.module.js.map