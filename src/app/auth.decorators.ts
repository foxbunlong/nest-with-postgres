import { applyDecorators } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

export function Auth() {
  return applyDecorators(
    ApiBearerAuth('JWT')
    // ApiUnauthorizedResponse({
    //   description: "Không được phép truy cập",
    // }),
    // ApiForbiddenResponse({
    //   status: 403,
    //   description: "AAAAA",
    // })
  );
}
