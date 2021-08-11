import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-rl-chk-booking-irctc',
  templateUrl: './rl-chk-booking-irctc.component.html',
  styleUrls: ['./rl-chk-booking-irctc.component.scss'],
})
export class RLCHKBOOKINGIRCTCComponent implements OnInit {
  data: any
  constructor(public modalController: ModalController) { }

  ngOnInit() {

    let test = localStorage.getItem("chkbooking")
    this.data = JSON.parse(test)
    console.log(this.data.RESULT)
  }
  m_close() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
