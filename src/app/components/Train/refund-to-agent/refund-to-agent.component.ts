import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refund',
  templateUrl: './refund-to-agent.component.html',
  styleUrls: ['./refund-to-agent.component.scss'],
})
export class RefundToAgentComponent implements OnInit {
data:any
  constructor() { }

  ngOnInit(){ let test = localStorage.getItem("refund")
  this.data = JSON.parse(test)
  console.log(this.data.RESULT.bookingErrorMessage)}

}
