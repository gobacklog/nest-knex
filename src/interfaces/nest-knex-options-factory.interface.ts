import {
  NestKnexOptions,
} from './nest-knex-options.interface';

export interface NestKnexOptionsFactory {
  createNestKnexOptions():
    | Promise<NestKnexOptions>
    | NestKnexOptions;
}
