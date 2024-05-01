import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpEvent} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) {
  }

  GET<T>(url: string, options?: any): Observable<T | any> {
    return this.http.get<T>(url, options);
  }

  POST<T>(url: string, body?: any, options?: any): Observable<T | any> {
    return this.http.post<T>(url, body, options);
  }

  PUT<T>(url: string, body?: any, options?: any): Observable<T | any> {
    return this.http.put<T>(url, body, options);
  }

  DELETE<T>(url: string, options?: any): Observable<T | any> {
    return this.http.delete<T>(url, options);
  }
}
