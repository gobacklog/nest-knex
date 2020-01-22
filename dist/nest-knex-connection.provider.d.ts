import { NestKnexService } from './nest-knex.service';
export declare const connectionFactory: {
    provide: string;
    useFactory: (nestKnexService: any) => Promise<any>;
    inject: (typeof NestKnexService)[];
};
