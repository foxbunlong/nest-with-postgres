import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppConfigController } from "./app-config.controller";
import { AppConfigService } from "./app-config.service";
import { AppConfigEntity } from "./entities/app-config.entity";

@Module({
  imports: [TypeOrmModule.forFeature([AppConfigEntity])],
  controllers: [AppConfigController],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
