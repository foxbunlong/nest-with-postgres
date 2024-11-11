import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

import { AppConfigService } from "./app-config.service";
import { CreateAppConfigDto } from "./dto/create-app-config.dto";

@ApiTags("App Config")
@Controller("app-config")
export class AppConfigController {
  constructor(private readonly appConfigService: AppConfigService) {}

  @ApiOperation({ summary: "Upsert app config" })
  @Post()
  create(@Body() createAppConfigDto: CreateAppConfigDto) {
    return this.appConfigService.upsert(createAppConfigDto);
  }

  @ApiOperation({ summary: "Get all app config" })
  @Get()
  findAll() {
    return this.appConfigService.findAll();
  }

  @ApiOperation({ summary: "Get app config by key" })
  @Get(":key")
  findOne(@Param("key") key: string) {
    return this.appConfigService.findOne(key);
  }

  @ApiOperation({ summary: "Remove app config by key" })
  @Delete(":key")
  remove(@Param("key") key: string) {
    return this.appConfigService.remove(key);
  }
}
