import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { TestService } from '../../Services/test.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(public rout: Router, private tService: TestService) { }

  uType
  onCvalue
  ngOnInit() {
    this.tService.getTestData("../../../assets/userType.json").subscribe(result => {
      this.uType = result
    });
  }
  typeVal(e) {
    this.onCvalue = "as "+ e +" user"
  }
  set_cre = new FormGroup({
    cre1: new FormControl('', [Validators.required]),
    cre2: new FormControl('', [Validators.required]),
    cre3: new FormControl('', [Validators.required]),
    cre4: new FormControl('', [Validators.required])

  })

  
  ccGetData() {
    
    let data = {
      cred1: this.set_cre.value.cre1,
      cred2: this.set_cre.value.cre2,
      cred3: this.set_cre.value.cre3,
      cred4: this.set_cre.value.cre4
    }
    console.log(data)
  }

}
