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
    AMOUNT:57777
  };
  constructor() { }

  ngOnInit() {
  }
  
}
