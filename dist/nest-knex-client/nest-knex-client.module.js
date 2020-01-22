"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  NestKnexClientModule is a testing module that verifies that
 *  NestKnexModule was generated properly.
 *
 *  You can quickly verify this by running `npm run start:dev`, and then
 *  connecting to `http://localhost:3000` with your browser.  It should return
 *  a custom message like `Hello from NestKnexModule`.
 *
 *  Once you begin customizing NestKnexModule, you'll probably want
 *  to delete this module.
 */
const common_1 = require("@nestjs/common");
const nest_knex_client_controller_1 = require("./nest-knex-client.controller");
const nest_knex_module_1 = require("../nest-knex.module");
let NestKnexClientModule = class NestKnexClientModule {
};
NestKnexClientModule = __decorate([
    common_1.Module({
        controllers: [nest_knex_client_controller_1.NestKnexClientController],
        imports: [
            nest_knex_module_1.NestKnexModule.registerAsync({
                useFactory: () => {
                    return {
                        debug: false,
                        client: 'pg',
                        connection: {
                            host: 'localhost',
                            user: 'postgres',
                            password: 'postgres',
                            database: 'primeaction_test',
                            port: 5432,
                        },
                    };
                },
            }),
        ],
    })
], NestKnexClientModule);
exports.NestKnexClientModule = NestKnexClientModule;
