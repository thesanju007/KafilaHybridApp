import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { TestService } from '../../Services/test.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  ipAddress: any;
  show = true
  u_gp = {
    "P_TYPE": "CC",
    "R_TYPE": "MGMT",
    "R_NAME": "GET_USER_GROUP"
  }
  passwordMd5
  constructor(public rout: Router, private tService: TestService,) {
    this.tService.getTestData('http://api.ipify.org/?format=json')
      .subscribe(data => {
        this.ipAddress = data
    }) 
    this.decodertn();
  }

  uType
  onCvalue
  ngOnInit() {
    this.tService.postTestData("CC", this.u_gp).subscribe(result => {
      this.uType = JSON.parse(result.response);
    });
  }

  set_cre = new FormGroup({
    cre1: new FormControl('', [Validators.required]),
    cre2: new FormControl('', [Validators.required]),
    cre3: new FormControl('', [Validators.required]),
    cre4: new FormControl('', [Validators.required])

  })

  decode(password) {
    this.passwordMd5 = Md5.hashStr(password).toString();
  }
  decodertn() {
    let w = Md5.hashAsciiStr('34ab0c05ccf0f194fe65e8b654272e84');
    console.log(w)
  }
  ccGetData(e) {
    this.show = false
    e.preventDefault();
    if (this.set_cre.value.cre1 !== "" && this.set_cre.value.cre2 !== "" && this.set_cre.value.cre3 !== "" && this.set_cre.value.cre4 !== "") {
      this.decode(this.set_cre.value.cre2.toUpperCase() + "|" + this.set_cre.value.cre3.toUpperCase());
      let ccLoginData = {
        "P_TYPE": "CC",
        "R_TYPE": "MGMT",
        "R_NAME": "GET_LOGIN",
        "R_DATA": {},
        "AID": this.set_cre.value.cre1,
        "MODULE": this.set_cre.value.cre4,
        "IP": this.ipAddress.ip,
        "TOKEN": this.passwordMd5,
        "ENV": "D",
        "Version": "1.0.0.0.0.0"
      }
      let jccLoginData = JSON.stringify(ccLoginData)
      this.tService.postTestData("CC", jccLoginData).subscribe(result => {
        if (result.response !== "") {
          sessionStorage.setItem("LoginDetails", jccLoginData)
          sessionStorage.setItem("Menu", result.response)
          sessionStorage.setItem("Name", this.set_cre.value.cre2)
          this.rout.navigate(['/cchome'])

        }

      });

    }
    else {
      this.show = true
      alert("Fillup All Details")
    }

  }

}
