import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {

  constructor() { }
  ticket
  resParseData
  ngOnInit() {
    let test = sessionStorage.getItem("ticketInfo")
    this.ticket=JSON.parse(test)
    let x =this.ticket[0].RES
    this.resParseData=JSON.parse(x)
    console.log(JSON.parse(x))
  }

}
