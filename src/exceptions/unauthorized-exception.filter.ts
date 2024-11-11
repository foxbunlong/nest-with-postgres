import { Response } from "express";

import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  UnauthorizedException,
} from "@nestjs/common";

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let status = exception.getStatus();
    response.status(status).json({
      status: 401,
      message: "Không cho phép truy cập",
      data: null,
    });
  }
}
