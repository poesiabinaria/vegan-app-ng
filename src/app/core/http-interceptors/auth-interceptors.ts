import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { AccountService } from '../account/shared/account.service';
import { catchError } from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private accountService: AccountService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.accountService.getToken();
    let request: HttpRequest<any> = req;

    console.log('INTERCEPTION');

    if (token) {
      request = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
    }

    return next.handle(request).pipe(catchError(this.handleErrors));
  }

  private handleErrors(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('Erro: ', error.error.message);
    } else {
      console.log('codigo', error.status);
    }

    return throwError('ocorreu um erro, tente novamente');
  }
}
