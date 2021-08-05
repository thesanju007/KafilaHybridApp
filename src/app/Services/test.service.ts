import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  httphead = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*',
    })
  }
  login_Details
  private subject = new Subject<any>();
  constructor(private http: HttpClient, private route: Router, public loadingController: LoadingController) {
    let Json_LD = sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(Json_LD)
  }
  get isLoggedIn(): boolean {
    let authToken = sessionStorage.getItem('LoginDetails');
    if (authToken !== null) {
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


  postTestData(url: any, data: any): Observable<any> {
    return this.http.post<any>('https://caller.ksofttechnology.com/api/' + url, data, this.httphead).pipe(
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
  isLoading = false;
  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Loading',
      mode: 'ios',
      backdropDismiss: false,
      spinner: 'bubbles',
      // duration: 2000
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log());
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log());
  }


  viewMore(d) {
    this.present()
    let vObj = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_BOOKING_DETAILS",
      "R_DATA": {
        "RAID": d.RID,
        "BOOKING_ID": d.BOOKING_ID,
        "FILTER": true
      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV": "P",
      "Version": "1.0.0.0.0.0"
    }
    let jvObj = JSON.stringify(vObj)
    console.log(jvObj)
    this.postTestData("CC", jvObj).subscribe(result => {
      if (result.response !== "") {

        this.dismiss()
        console.log(result.response)
        sessionStorage.setItem("ticketInfo", result.response)
        window.open("RlTicket", "_blank")
      }
    });
  }
}
