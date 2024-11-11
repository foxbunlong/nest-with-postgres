import { join } from "path";

import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";
import { UnauthorizedExceptionFilter } from "./exceptions/unauthorized-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    rawBody: true,
  });

  // Public resource
  app.useStaticAssets(join(__dirname, "..", "public"), {
    prefix: "/public/",
    setHeaders: (res, path, stat) => {
      res.set("Access-Control-Allow-Origin", "*");
    },
  });

  if (process.env.NODE_ENV !== "production") {
    // Config swagger
    const config = new DocumentBuilder()
      .setTitle("Vhomenex API")
      .setDescription("API for device sync")
      .setVersion("0.1")
      .addBearerAuth({ type: "http" }, "JWT")
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("docs", app, document, {
      swaggerOptions: {
        defaultModelsExpandDepth: -1,
      }
    });
  }

  // Handle custom exception
  app.useGlobalFilters(new UnauthorizedExceptionFilter());

  // Setup CORS
  const allowedOrigins = ["https://9000-monospace-hello-chick-web-1706240997268.cluster-22qpi2wzsjc4utjzyqn2yu6ar6.cloudworkstations.dev/"];
  app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Authorization");
    return next();
  });

  // Fix large file
  // app.use(json({ limit: "50mb" }));
  // app.use(urlencoded({ extended: true, limit: "50mb" }));

  await app.listen(3000);
}
bootstrap();
