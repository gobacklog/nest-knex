import { Controller, Inject, Get } from '@nestjs/common';
import { KNEX_CONNECTION } from '../constants';

@Controller('nestknex')
export class NestKnexClientController {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex) {}

  @Get('test')
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

