import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse ,HttpHeaders} from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import {  throwError } from 'rxjs';
import { retry,  } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

urls='http://devapi.ksofttechnology.com//API/rail';

httphead = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
constructor(private http:HttpClient,private route: Router) { }

postTestData(data:any):Observable<any>{
  return this.http.post(`${this.urls}`,data,this.httphead).pipe(
    retry(2),
  )
}
}
