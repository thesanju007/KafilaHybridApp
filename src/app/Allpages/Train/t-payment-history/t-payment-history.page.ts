import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-payment-history',
  templateUrl: './t-payment-history.page.html',
  styleUrls: ['./t-payment-history.page.scss'],
})
export class TPaymentHistoryPage implements OnInit {
  message = {
    AGENCY_NAME: "KAFILA",
    AGENT_ID: "18785869",
    P_TYPE: "AIR",
    AMOUNT: 5777
  };
  constructor() { }
  ngOnInit() { }
  check() {
    this.message = {
      AGENCY_NAME:this.message.AGENCY_NAME,
      AGENT_ID: this.message.AGENT_ID,
      P_TYPE: this.message.P_TYPE,
      AMOUNT: this.message.AMOUNT
    }
    console.log(this.message)
  }
}
