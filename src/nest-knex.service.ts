import { Injectable, Inject, Logger } from '@nestjs/common';
import { NEST_KNEX_OPTIONS } from './constants';
import { NestKnexOptions } from './interfaces';

const Knex = require('knex');

interface INestKnexService {
  getKnex();
}

@Injectable()
export class NestKnexService implements INestKnexService {
  private readonly logger: Logger;
  private _knexConnection: any;
  constructor(@Inject(NEST_KNEX_OPTIONS) private _NestKnexOptions: NestKnexOptions) {
    this.logger = new Logger('NestKnexService');
    this.logger.log(`Options: ${JSON.stringify(this._NestKnexOptions)}`);
  }

  getKnex() {
    if (!this._knexConnection) {
      this._knexConnection = new Knex(this._NestKnexOptions);
    }
    return this._knexConnection;
  }
}
