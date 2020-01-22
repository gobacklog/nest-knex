"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function createNestKnexProviders(options) {
    return [
        {
            provide: constants_1.NEST_KNEX_OPTIONS,
            useValue: options,
        },
    ];
}
exports.createNestKnexProviders = createNestKnexProviders;
