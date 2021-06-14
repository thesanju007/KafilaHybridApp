import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse ,HttpHeaders} from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  urls='https://reqres.in/api/users';
  localproxyUrl='http://localhost:3000'
  httphead = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*',
    })
  }
  private subject = new Subject<any>();
  constructor(private http:HttpClient,private route: Router) { }


  getTestData(url:any):Observable<any>{
    return this.http.get(url).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }


  postTestData(url:any,data:any):Observable<any>{
    return this.http.post<any>( 'http://localhost:3000'+url,data,this.httphead).pipe(
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

  sendClickEvent(){
    this.subject.next();
  }

  getClickEvent():Observable<any>{
    return this.subject.asObservable();
  }

  holdData
  getData(recieve){
    this.holdData=recieve
  }
  
  sendData(){
    return this.holdData
  }
}
