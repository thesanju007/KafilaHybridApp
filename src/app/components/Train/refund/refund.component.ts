import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss'],
})
export class RefundComponent implements OnInit {
data:any
  constructor() { }

  ngOnInit(){ let test = localStorage.getItem("refund")
  this.data = JSON.parse(test)
  console.log(this.data.RESULT.bookingErrorMessage)}

}
