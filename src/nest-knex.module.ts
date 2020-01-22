import { Module, DynamicModule, Provider, Global } from '@nestjs/common';
import { NestKnexService } from './nest-knex.service';
import {
  NEST_KNEX_OPTIONS,
} from './constants';
import {
  NestKnexOptions,
  NestKnexAsyncOptions,
  NestKnexOptionsFactory,
} from './interfaces';
import { createNestKnexProviders } from './nest-knex.providers';
import { connectionFactory } from './nest-knex-connection.provider';

@Global()
@Module({
  providers: [NestKnexService, connectionFactory],
  exports: [NestKnexService, connectionFactory],
})
export class NestKnexModule {
  /**
   * Registers a configured NestKnex Module for import into the current module
   */
  public static register(
    options: NestKnexOptions,
  ): DynamicModule {
    return {
      module: NestKnexModule,
      providers: createNestKnexProviders(options),
    };
  }

  /**
   * Registers a configured NestKnex Module for import into the current module
   * using dynamic options (factory, etc)
   */
  public static registerAsync(
    options: NestKnexAsyncOptions,
  ): DynamicModule {
    return {
      module: NestKnexModule,
      providers: [
        ...this.createProviders(options),
      ],
    };
  }

  private static createProviders(
    options: NestKnexAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createOptionsProvider(options)];
    }

    return [
      this.createOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createOptionsProvider(
    options: NestKnexAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: NEST_KNEX_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    // For useExisting...
    return {
  provide: NEST_KNEX_OPTIONS,
      useFactory: async (optionsFactory: NestKnexOptionsFactory) =>
        await optionsFactory.createNestKnexOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }

 }
