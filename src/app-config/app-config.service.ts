import { Repository } from "typeorm";

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { CreateAppConfigDto } from "./dto/create-app-config.dto";
import { AppConfigEntity } from "./entities/app-config.entity";

@Injectable()
export class AppConfigService {
  constructor(
    @InjectRepository(AppConfigEntity)
    private appConfigRepository: Repository<AppConfigEntity>
  ) {}

  async upsert(data: CreateAppConfigDto) {
    const oldConfig = await this.appConfigRepository.findOne({
      where: { key: data.key },
    });
    if (oldConfig) {
      const appConfig = {
        ...oldConfig,
        ...data,
      };
      await this.appConfigRepository.update(data.key, appConfig);
      const response = {
        status: 200,
        message: "Updated",
        data: appConfig,
      };
      return response;
    } else {
      const appConfig = this.appConfigRepository.create(data);
      await this.appConfigRepository.save(appConfig);
      const response = {
        status: 201,
        message: "Created",
        data,
      };
      return response;
    }
  }

  async findAll() {
    const data = await this.appConfigRepository.find();
    if (data) {
      const response = {
        status: 200,
        message: "OK",
        data,
      };
      return response;
    }
    const response = {
      status: 404,
      message: "(Lỗi) Không có config",
      data: null,
    };
    return response;
  }

  async findOne(key: string) {
    const appConfig = await this.appConfigRepository.findOne({
      where: { key },
    });
    if (appConfig) {
      const response = {
        status: 200,
        message: "OK",
        data: appConfig,
      };
      return response;
    }
    const response = {
      status: 404,
      message: "(Lỗi) Không có config",
      data: null,
    };
    return response;
  }

  async remove(key: string) {
    await this.appConfigRepository.delete(key);
    const response = {
      status: 202,
      message: "OK",
      data: null,
    };
    return response;
  }
}
