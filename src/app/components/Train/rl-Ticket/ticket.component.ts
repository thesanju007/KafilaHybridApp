import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {

  constructor(public modalController: ModalController) { }
  test
  resParseData
  ngOnInit() {
    let ticket = sessionStorage.getItem("ticketInfo")
    this.test = JSON.parse(ticket)
    console.log(this.test)
  }
  m_close() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
