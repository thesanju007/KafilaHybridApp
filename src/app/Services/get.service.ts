import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetService {


  constructor(private http: HttpClient, private route: Router) { }

  GET(url: any): Observable<any> {
    return this.http.get(url).pipe(
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
