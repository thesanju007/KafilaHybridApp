import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-payment-history',
  templateUrl: './t-payment-history.page.html',
  styleUrls: ['./t-payment-history.page.scss'],
})
export class TPaymentHistoryPage implements OnInit {
<<<<<<< HEAD

=======
  message={
  AGENCY_NAME:"KAFILA",
  AGENT_ID:"18785869",
  P_TYPE:"AIR",
  AMOUNT:0
  };
>>>>>>> origin/Sanjeev
  constructor() { }

  ngOnInit() {
  }
<<<<<<< HEAD
  val: any;
  data:any
  getData() {
    this.data= {
      value: this.val
    }
    console.log(this.data)
  }
=======
onConfirm()
{
  
}
>>>>>>> origin/Sanjeev
}
