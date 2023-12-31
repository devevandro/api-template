import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ENVIRONMENTS } from '../../constants/ENVIRONMENTS';

export class ApiKeyGuard implements CanActivate {
  private readonly apiKey = ENVIRONMENTS.API_KEY;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];

    return apiKey === this.apiKey;
  }
}
