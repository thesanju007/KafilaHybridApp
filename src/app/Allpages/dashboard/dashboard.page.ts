import { Component, OnInit } from '@angular/core';
import { TestService } from '../../Services/test.service'
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  unsubscribe: Subject<any>;
  constructor(private tService: TestService) { 
    let Json_LD = sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(Json_LD)
  }
  login_Details
  amt1 = 0
  amt2=0
  amt3=0
  amt4=0
  subscription: Subscription
  tic_len1=0
  tic_len2=0
  tic_len3=0
  tic_len4=0
  maxDate = new Date(new Date().getTime()).toISOString().split('T')[0];
  ngOnInit() {
    this.boking(event)
    this.pending(event)
    this.Failed(event)
    this.Refund(event)
  }





  boking(e) {
    let bknHisData = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_BOOKING_HISTORY",
      "R_DATA": {
        "RAID": "",
        "FROM": this.maxDate,
        "TO": this.maxDate,
        "MODULE": "P",
        "STATUS": true
      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV": "P",
      "Version": "1.0.0.0.0.0"
    }
   
    this.subscription = this.tService.postTestData(bknHisData).subscribe(result => {
      if (result.response.length > 2) {
        let BookingTicket= JSON.parse(result.response)
        this.amt1 = 0
        this.tic_len1=BookingTicket.length
        for (let x of BookingTicket) {
          this.amt1 += parseInt(x.AMOUNT)
        }
      }
    });
  }







  pending(e) {
    let pndHistList = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_PENDING_HISTORY",
      "R_DATA": {
        "RAID": "",
        "FROM": this.maxDate,
        "TO": this.maxDate,
        "MODULE": "P",
        "STATUS": false
      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV": "P",
      "Version": "1.0.0.0.0.0"
    }

    this.subscription = this.tService.postTestData(pndHistList).subscribe(result => {
      if (result.response.length > 2) {
        let pend= JSON.parse(result.response)
        this.amt2 = 0
        this.tic_len2=pend.length
        for (let x of pend) {
          this.amt2 += parseInt(x.AMOUNT)
        }
      }

    });
  }










  Failed(e) {
    let bknHisData = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_FAILED_HISTORY",
      "R_DATA": {
        "RAID":"",
        "FROM": this.maxDate ,
        "TO": this.maxDate,
        "MODULE": "P",
        "STATUS": true
      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV": "P",
      "Version": "1.0.0.0.0.0"
    }
    this.subscription = this.tService.postTestData(bknHisData).subscribe(result => {
      if (result.response.length > 2) {
        let fail = JSON.parse(result.response)
        this.amt3 = 0
        this.tic_len3=fail.length
        for (let x of fail) {
          this.amt3 += parseInt(x.AMOUNT)
        }
      }
      
    });
  }











  Refund(e) {
    let bknHisData = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_REFUND_HISTORY",
      "R_DATA": {
        "RAID": "",
        "FROM": this.maxDate,
        "TO": this.maxDate,
        "MODULE":"P",
        "STATUS": true
      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV": "P",
      "Version": "1.0.0.0.0.0"
    }
    this.subscription = this.tService.postTestData(bknHisData).subscribe(result => {
      if (result.response.length>2) {
        let ref = JSON.parse(result.response)
        this.amt4=0
        this.tic_len4=ref.length
        for(let x of ref){
          this.amt4+=x.AMOUNT
        }
      }
    });
  }

  // ngOnDestroy(): void {
  //   this.unsubscribe.next();
  //   this.unsubscribe.complete();
  // }
}