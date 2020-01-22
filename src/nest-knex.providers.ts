import { NestKnexOptions } from './interfaces';

import { NEST_KNEX_OPTIONS } from './constants';

export function createNestKnexProviders(
  options: NestKnexOptions,
) {
  return [
    {
      provide: NEST_KNEX_OPTIONS,
      useValue: options,
    },
  ];
}
