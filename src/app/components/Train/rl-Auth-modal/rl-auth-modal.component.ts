import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-rl-auth-modal',
  templateUrl: './rl-auth-modal.component.html',
  styleUrls: ['./rl-auth-modal.component.scss'],
})
export class RlAuthModalComponent implements OnInit {
  a_data: any
  agtLstGP: FormGroup
  constructor(private modalController: ModalController, private navParams: NavParams) { }
  defaultValue
  ngOnInit() {
    this.a_data = this.navParams.data.paramID;
    this.defaultValue = this.a_data.STATUS
    this.agtLstGP = new FormGroup({

      c_name: new FormControl(this.a_data.COMP_NAME, [Validators.required]),
      email: new FormControl(this.a_data.EMAIL, [Validators.required]),
      pwd: new FormControl(this.a_data.RAIL_PWD, [Validators.required]),
      raid: new FormControl(this.a_data.RAID, [Validators.required, Validators.pattern("^[0-9]*$")]),
      railId: new FormControl(this.a_data.RAIL_ID, [Validators.required]),
      mobile: new FormControl(this.a_data.MOBILE, [Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(10),Validators.minLength(10)]),
      city: new FormControl(this.a_data.CITY, [Validators.required]),
      status: new FormControl('', [Validators.required]),

    })
  }

  user_update() {
    this.close(this.agtLstGP.value)

  }
  close(d) {
    this.modalController.dismiss({
      'dismissed': true,
      "obj": d||"",
    });
  }
  get Error() {
    return this.agtLstGP.controls;
  }
}
