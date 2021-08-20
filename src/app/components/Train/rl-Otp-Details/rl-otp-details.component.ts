import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-rl-otp-details',
  templateUrl: './rl-otp-details.component.html',
  styleUrls: ['./rl-otp-details.component.scss'],
})
export class RlOtpDetailsComponent implements OnInit {

  constructor(public modalController: ModalController) { }
  data
  p1data
  p2data
  ngOnInit() {
    let test = localStorage.getItem("otp_Details")
    this.data = JSON.parse(test)
    this.p1data = JSON.parse(this.data[0].OTP_RES)
    this.p2data= JSON.parse(this.data[1].OTP_RES)
  }
  m_close() {
    this.modalController.dismiss({
      'dismissed': true,
    });
  }
}
