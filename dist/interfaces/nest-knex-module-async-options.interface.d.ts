import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { NestKnexOptions } from './nest-knex-options.interface';
import { NestKnexOptionsFactory } from './nest-knex-options-factory.interface';
export interface NestKnexAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[];
    useExisting?: Type<NestKnexOptionsFactory>;
    useClass?: Type<NestKnexOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<NestKnexOptions> | NestKnexOptions;
}
