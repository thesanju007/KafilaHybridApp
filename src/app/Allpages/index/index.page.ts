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
  }

  uType
  onCvalue
  ngOnInit() {
    this.tService.postTestData(this.u_gp).subscribe(result => {
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
        "IP": "182.73.146.154",
        "TOKEN": this.passwordMd5,
        "ENV": "P",
        "Version": "1.0.0.0.0.0"
      }
      let jccLoginData = JSON.stringify(ccLoginData)

      this.tService.postTestData(jccLoginData).subscribe(result => {

        if (result.response !== null) {
          this.show = true
          sessionStorage.setItem("LoginDetails", jccLoginData)
          sessionStorage.setItem("Menu", result.response)
          sessionStorage.setItem("Name", this.set_cre.value.cre2)
          // this.rout.navigate(['/cchome'])
          this.rout.navigate(['cchome/']).then(() => {
            window.location.reload();
          });


        }
        else {
          this.show = true
          alert("Wrong Credentials")
        }

      });

    }
    else {
      this.show = true
      alert("Fillup All Details")
    }

  }

}
