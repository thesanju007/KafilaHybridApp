import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LogModalComponent } from '../log-modal/log-modal.component'
@Component({
  selector: 'app-rl-log',
  templateUrl: './rl-log.component.html',
  styleUrls: ['./rl-log.component.scss'],
})
export class RlLogComponent implements OnInit {

  maxDate = new Date(new Date().getTime()).toISOString().split('T')[0];
   currentDate = new Date()
   day = this.currentDate.getDate()
   month = this.currentDate.getMonth() + 1
   year = this.currentDate.getFullYear()
   twoDigitYear = this.year.toString().substr(-2);

  str_Date=this.day + "" + this.month + "" + this.twoDigitYear
  constructor(private tService: TestService, public loadingController: LoadingController, private route: Router, public modalController: ModalController) {

  }
  login_Details
  agtList
  allDataList = true
  ngOnInit() {
    let Json_LD = sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(Json_LD)
    console.clear()
 
  }



  dateDis = false
  booleanValue = false
  evv = "p"
  toggle() {
    this.booleanValue = !this.booleanValue
    if (this.booleanValue == true) {
      this.evv = "D"
    }

    else {
      this.evv = "P"
    }
  }
  agtLstGP = new FormGroup({
    RAID: new FormControl('',[Validators.required, Validators.minLength(8)]),
    FROM: new FormControl(this.maxDate),

  })
  dog = false

  AgtSrhBtn() {
    this.present()
    this.aID=this.agtLstGP.value.RAID
    let log = {
      "P_TYPE": "CC",
      "R_TYPE": "DEV",
      "R_NAME": "LOG",
      "R_DATA": {
        "ACTION": "RETRIVE",
        "LOG_PRODUCT": "RAIL",
        "RAIL_ID": this.agtLstGP.value.RAID,
        "DATE": this.str_Date,
        "FILE_NAME": ""
      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV": "D",
      "Version": "1.0.0.0.0.0"
    }

    this.tService.postTestData(log).subscribe(result => {
      if (result.response.length > 2) {
        this.logFiles = result.response
        this.gtFls=true
        this.dismiss()
        this.dog = false
      }
      else {
        this.dog = true
        this.dismiss()
      }
    });
  }








  gtFls = false
  logFiles: any
  aID: any



  getRecFileWise(d) {
    this.present()
    let log = {
      "P_TYPE": "CC",
      "R_TYPE": "DEV",
      "R_NAME": "LOG",
      "R_DATA": {
        "ACTION": "RETRIVE",
        "LOG_PRODUCT": "RAIL",
        "RAIL_ID": this.aID,
        "DATE": this.str_Date,
        "FILE_NAME": d
      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV": "D",
      "Version": "1.0.0.0.0.0"
    }
    this.tService.postTestData(log).subscribe(result => {
      if (result.response.length > 2) {
        this.presentModal1(result.response)
        this.dismiss()
      }
      else {
        this.dismiss()
      }
    });
  }




  isLoading = false;
  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Loading',
      mode: 'ios',
      backdropDismiss: false,
      spinner: 'bubbles',
    }).then(a => {
      a.present().then(() => {
        console.log('');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log());
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log());
  }








  async presentModal1(x) {
    const modal1 = await this.modalController.create({
      component: LogModalComponent,
      cssClass: 'logModal',
      showBackdrop: true,
      backdropDismiss: false, 
      componentProps: {
        "param": x,
      },
    });
    return await modal1.present();
  }





 
  get Error() {
    return this.agtLstGP.controls;
  }



}
