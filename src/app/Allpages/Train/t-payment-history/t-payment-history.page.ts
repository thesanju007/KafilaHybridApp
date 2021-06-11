import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-payment-history',
  templateUrl: './t-payment-history.page.html',
  styleUrls: ['./t-payment-history.page.scss'],
})
export class TPaymentHistoryPage implements OnInit {
  
  constructor() { }
  val: any;
  data:any
  getData() {
    this.data= {
      value: this.val
    }
    console.log(this.data)
  }
  ngOnInit() {
  }

}
