import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {

  constructor() { }
  ticket
  againParseData
  ngOnInit() {
    let test = sessionStorage.getItem("ticketInfo")
    this.ticket=JSON.parse(test)
    let x =this.ticket[0].RES
    this.againParseData=JSON.parse(x)
    console.log(JSON.parse(x))
  }

}
