import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './modules/auth/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
