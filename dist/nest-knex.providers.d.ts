import { NestKnexOptions } from './interfaces';
export declare function createNestKnexProviders(options: NestKnexOptions): {
    provide: string;
    useValue: NestKnexOptions;
}[];
