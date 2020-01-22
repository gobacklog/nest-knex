import { NestKnexOptions } from './interfaces';
interface INestKnexService {
    getKnex(): any;
}
export declare class NestKnexService implements INestKnexService {
    private _NestKnexOptions;
    private readonly logger;
    private _knexConnection;
    constructor(_NestKnexOptions: NestKnexOptions);
    getKnex(): any;
}
export {};
