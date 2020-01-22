/**
 *  If you're building a standalone npm package hosting a dynamic module, you
 *  should delete this file.  Its only purpose is to bootstrap the app so that
 *  you can run the quick verification test (see nest-knex-client/nest-knex-client.module.ts)
 */
import { NestFactory } from '@nestjs/core';
import { NestKnexClientModule } from './nest-knex-client/nest-knex-client.module';

async function bootstrap() {
  const app = await NestFactory.create(NestKnexClientModule);
  await app.listen(3000);
}
bootstrap();
