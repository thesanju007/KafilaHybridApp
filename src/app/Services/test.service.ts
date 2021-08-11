import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoadingController, PopoverController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  httphead = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*',
      "Access-Control-Allow-Origin": '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    })
  }
  login_Details
  private subject = new Subject<any>();
  l_Details
  constructor(private http: HttpClient, private route: Router, public loadingController: LoadingController, public popoverController: PopoverController) {
   this.l_Details= sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(this.l_Details)
  }
  get isLoggedIn(): boolean {
    if (this.login_Details !== null) {
      return true
    }
    return false;

  }

  getTestData(url: any): Observable<any> {
    return this.http.get(url).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }


  postTestData(data: any): Observable<any> {
    return this.http.post<any>('https://caller.ksofttechnology.com/api/CC', data, this.httphead).pipe(
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

  sendClickEvent() {
    this.subject.next();
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  holdData
  getData(recieve) {
    this.holdData = recieve
  }

  sendData() {
    return this.holdData
  }
  

}
