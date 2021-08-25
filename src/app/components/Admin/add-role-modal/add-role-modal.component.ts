import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  ModalController,
  NavParams
} from '@ionic/angular';

@Component({
  selector: 'app-add-role-modal',
  templateUrl: './add-role-modal.component.html',
  styleUrls: ['./add-role-modal.component.scss'],
})
export class AddRoleModalComponent implements OnInit {
  g_Id
  constructor(private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
    this.g_Id = this.navParams.data.paramID;
  }
  agtLstGP = new FormGroup({

    SID: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(2)]),
    TITLE: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]*$"),Validators.minLength(4)]),
    URL: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]*$"),Validators.minLength(4)]),
  })

  AddRole() {
    let s_Role = {
      "sid": this.agtLstGP.value.SID,
      "title": this.agtLstGP.value.TITLE,
      "url": this.agtLstGP.value.URL,
      "icon": "return-right",
      "Eicon": "chevron-forward"
    }
    this.m_close(s_Role)
  }
  m_close(d) {
    this.modalController.dismiss({
      'dismissed': true,
      "obj": d,
      "gid": this.g_Id
    });
  }
  get Error() {
    return this.agtLstGP.controls;
  }
}
