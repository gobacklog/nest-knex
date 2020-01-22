import { Controller, Inject, Get } from '@nestjs/common';
import { KNEX_CONNECTION } from '../constants';

@Controller()
export class NestKnexClientController {
  // new
  constructor(@Inject(KNEX_CONNECTION) private readonly knex) {}
  // old
  // constructor(private readonly nestKnexService: NestKnexService) {}

  @Get()
  async index() {
    // following line no longer needed
    // const knex = this.nestKnexService.getKnex();
    const newcat = await this.knex('cats').insert({
      name: 'Fred',
      age: 5,
      breed: 'tom cat',
    });

    const cats = await this.knex.select('*').from('cats');

    return cats;
  }
}

