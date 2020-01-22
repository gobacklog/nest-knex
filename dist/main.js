"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  If you're building a standalone npm package hosting a dynamic module, you
 *  should delete this file.  Its only purpose is to bootstrap the app so that
 *  you can run the quick verification test (see nest-knex-client/nest-knex-client.module.ts)
 */
const core_1 = require("@nestjs/core");
const nest_knex_client_module_1 = require("./nest-knex-client/nest-knex-client.module");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(nest_knex_client_module_1.NestKnexClientModule);
        yield app.listen(3000);
    });
}
bootstrap();
