import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from 'rxjs';
import {AlertType, AlertUtils} from '../utils/alert.utils';

export const corsInterceptor: HttpInterceptorFn = (req, next) => {
  // const authToken = 'TOKEN_HERE';

  const authReq = req.clone({
    setHeaders: {
      // Authorization: `Bearer ${authToken}`
    }
  });

  return next(authReq).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 0 || err.statusText === 'Unknown Error') {
          AlertUtils.Dialog(AlertType.ERROR, 'Erro no servidor');
        }
        if (err.status > 400 && err.status < 500) {
          AlertUtils.Dialog(AlertType.ERROR, err.error.error);
        }
      }
      return throwError(() => err);
    })
  );
};
