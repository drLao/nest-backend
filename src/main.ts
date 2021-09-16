import { NestFactory } from '@nestjs/core';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

import { ValidationPipe } from './pipes/validation.pipe';

async function start() {
  const PORT = process.env.PORT || 5000;
  const App = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NEST JS backend demo')
    .setDescription('REST API Documentation')
    .setVersion('1.0.0')
    .addTag('dr_Lao smooooll API')
    .build();
  const document = SwaggerModule.createDocument(App, config);
  SwaggerModule.setup('/api', App, document);

  App.useGlobalPipes(new ValidationPipe());

  await App.listen(PORT, () => {
    console.log(`App is running on port = ${PORT}`);
  });
}

start();
