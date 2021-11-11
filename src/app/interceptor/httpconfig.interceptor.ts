import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {StorageService} from '../service/storage.service';
import {MatDialog} from '@angular/material/dialog';
import {ErrorDialogComponent} from '../components/error-dialog/error-dialog.component';


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  public isDialogOpen: Boolean = false;

  constructor(private storageService: StorageService, private dialog: MatDialog) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.storageService.getItem('token');
    // console.log(token);
    let auth = 'Bearer ' + token;
    request = request.clone({
      setHeaders: {
        Authorization: auth,
        'Access-Control-Expose-Headers': '*'
      }
    });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let data = {};
        console.log(JSON.stringify(error));
        data = {
          reason: error && error.message ? error.message : '',
          status: error.status
        };
        this.openDialog(data);
        return throwError(error);
      }));
  }

  private openDialog(data: any): any {
    if (this.isDialogOpen) {
      return false;
    }
    this.isDialogOpen = true;
    this.dialog.open(ErrorDialogComponent, {
      width: '300px',
      data: data
    });
  }
}
