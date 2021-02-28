import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  // he-IL
  headers = new HttpHeaders().set(
    'Accept-Language', 'he-IL');

  constructor(private http: HttpClient) {
  }

  get(path: string) {
    return this.http
      .get(environment.apiUrl + path, {headers: this.headers});
  }

  post(path: string, data: any) {
    return this.http
      .post(environment.apiUrl + path, data, {observe: 'response'});
  }

  patch(path: string, data: any) {
    return this.http
      .patch(environment.apiUrl + path, data);
  }

  delete(path: string) {
    return this.http
      .delete(environment.apiUrl + path, {observe: 'response'});
  }

}
