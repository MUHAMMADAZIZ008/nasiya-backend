import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { AdminRoles } from '../enum';
import { log } from 'console';

@Injectable()
export class SelfGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    log(req.user);
    if (!req.user) {
      throw new ForbiddenException('User not authenticated');
    }

    if (
      req.user ||
      req.user.role === AdminRoles.SUPERADMIN ||
      req.user.role === AdminRoles.ADMIN
    ) {
      return true;
    }

    if (
      !req.user.sub ||
      !req.params.sub ||
      String(req.params.sub) !== String(req.user.sub)
    ) {
      throw new ForbiddenException('Forbidden user');
    }

    return true;
  }
}
