import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {PersistanceService} from "./persistance.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const persistanceService = inject(PersistanceService);
  const token = persistanceService.get('accessToken');
  const authReq = req.clone({
    setHeaders: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  })

  return next(authReq);
};

