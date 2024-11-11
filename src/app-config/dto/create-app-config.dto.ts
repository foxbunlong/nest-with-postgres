import { ApiProperty } from "@nestjs/swagger";

export class CreateAppConfigDto {
  @ApiProperty({ example: "CONFIG_KEY", required: true })
  readonly key: string;

  @ApiProperty({ example: "CONFIG_VALUE", required: true })
  readonly value: string;

  @ApiProperty({ example: "Test config", required: false })
  readonly title?: string;

  @ApiProperty({ example: "Test config description", required: false })
  readonly description?: string;
}
