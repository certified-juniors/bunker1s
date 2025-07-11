import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {ConsoleLogger} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: new ConsoleLogger({}),
    });

    const config = new DocumentBuilder()
        .setTitle('Bunker Game API')
        .setDescription('Bunker Game REST API')
        .setVersion('1.0')
        .build()

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(8080);
}

bootstrap();