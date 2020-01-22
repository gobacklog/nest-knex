import { DynamicModule } from '@nestjs/common';
import { NestKnexOptions, NestKnexAsyncOptions } from './interfaces';
export declare class NestKnexModule {
    /**
     * Registers a configured NestKnex Module for import into the current module
     */
    static register(options: NestKnexOptions): DynamicModule;
    /**
     * Registers a configured NestKnex Module for import into the current module
     * using dynamic options (factory, etc)
     */
    static registerAsync(options: NestKnexAsyncOptions): DynamicModule;
    private static createProviders;
    private static createOptionsProvider;
}
