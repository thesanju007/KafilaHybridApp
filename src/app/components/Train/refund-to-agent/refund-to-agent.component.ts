import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-refund',
  templateUrl: './refund-to-agent.component.html',
  styleUrls: ['./refund-to-agent.component.scss'],
})
export class RefundToAgentComponent implements OnInit {
data:any
constructor(public modalController: ModalController) { }

  ngOnInit(){ let test = localStorage.getItem("refund")
  this.data = JSON.parse(test)
  console.log(this.data.RESULT.bookingErrorMessage)}
  m_close() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
