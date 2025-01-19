import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log("[main.ts]: Using ConfigService & Reading env variables");
  const configService = app.get(ConfigService);
  const port = configService.get<number>("APP_PORT");

  await app.listen(port);
}
bootstrap();
