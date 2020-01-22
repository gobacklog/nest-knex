import { KNEX_CONNECTION } from './constants';
import { NestKnexService } from './nest-knex.service';

export const connectionFactory = {
  provide: KNEX_CONNECTION,
  useFactory: async nestKnexService => {
    return nestKnexService.getKnex();
  },
  inject: [NestKnexService],
};
