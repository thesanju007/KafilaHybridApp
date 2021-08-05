import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {

  constructor() { }
  test
  resParseData
  ngOnInit() {
    let ticket = sessionStorage.getItem("ticketInfo")
    this.test = JSON.parse(ticket)
    console.log(this.test)
  }


}
