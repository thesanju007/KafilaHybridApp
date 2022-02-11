import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  httphead = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*',
    })
  }

  constructor(private http: HttpClient) { }

  POST(url: any, data: any): Observable<any> {
    let d=JSON.stringify(data)
    return this.http.post<any>(url, d, this.httphead).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      alert('An error occurred');
    } else {
      alert(`Backend returned code ${error.status}`);
    }
    return throwError('Something bad happened; please try again later.');
  };


}