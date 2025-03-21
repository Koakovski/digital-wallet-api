import { ExceptionMapped } from 'src/domain/config/exeception-mapped/exception-mapped';
import { ExceptionMapper } from 'src/infra/exception-filters/mappers/exception-mapper';

export class UnknownExceptionMapper implements ExceptionMapper {
  constructor(private readonly exception: unknown) {}

  map(): ExceptionMapped {
    console.log({ exception: this.exception });

    return {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Internal Server Error',
      status: 500,
    };
  }
}
