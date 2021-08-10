import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-rlagency-statement',
  templateUrl: './rlagency-statement.component.html',
  styleUrls: ['./rlagency-statement.component.scss'],
})
export class RlagencyStatementComponent implements OnInit {

  maxDate = new Date(new Date().getTime()).toISOString().split('T')[0];

  subscription: Subscription

  constructor(private tService: TestService, public loadingController: LoadingController, private route: Router) { }
  login_Details
  skArr = []
  agtList
  tabShow = false
  skeltonShow = false
  ngOnInit() {
    let Json_LD = sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(Json_LD)

    for (let i = 0; i <= 30; i++) {
      this.skArr.push(i)
    }
  }

  dateDis = false
  AgentActive() {
    this.dateDis = true
    this.btn = true
  }
  DateActive() {
    this.dateDis = false
   
    this.btn = true
  }
  btn = false
  btnActive() {
    this.btn = false
  }
  booleanValue = false
  evv="p"
  toggle() {
    this.booleanValue = !this.booleanValue
    if (this.booleanValue == true) {
      this.evv = "D"
      this.AgtSrhBtn()
    }
    else {
      this.evv = "P"
      this.AgtSrhBtn()
    }
  }
  agtLstGP = new FormGroup({

    RAID: new FormControl('',Validators.required),
    FROM: new FormControl(this.maxDate),
    TO: new FormControl(this.maxDate),
  })
  
  AgtSrhBtn() {

  
    this.present()
    this.skeltonShow = true
    this.tabShow = false
    let bknHisData = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_AGENCY_STATEMENT",
      "R_DATA": {
        "RAID": this.agtLstGP.value.RAID,
        "FROM": this.agtLstGP.value.FROM || "",
        "TO": this.agtLstGP.value.TO || "",
        "MODULE":this.evv,
        "STATUS": true
      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV":"P",
      "Version": "1.0.0.0.0.0"
    }
    let jbknHisData = JSON.stringify(bknHisData)
    console.log(jbknHisData)
    this.subscription = this.tService.postTestData(jbknHisData).subscribe(result => {
      console.log(result.response.length)
      if (result.response.length>2) {
        this.agtList = JSON.parse(result.response)
        console.log(this.agtList)
        this.tabShow = true
        this.dismiss()

      }
      else{
        alert("No Data Found")
        this.dismiss()
      }

    });
  }
  up = false
  down = true
  up1 = false
  down1 = true
  up2 = false
  down2 = true
  sortBalAsc() {
    this.down = false
    this.up = true
    return this.agtList.sort((a, b) => {
      return a.AMOUNT - b.AMOUNT;
    });
  }

  sortBalDesc() {
    this.down = true
    this.up = false
    return this.agtList.sort((a, b) => {
      return b.AMOUNT - a.AMOUNT;
    });
  }
  sortMailAsc() {
    this.down1 = false
    this.up1 = true
    return this.agtList.sort((a, b) => {
      return a.EMAIL_ID.localeCompare(b.EMAIL_ID);
    })
  }
  sortMailDesc() {
    this.down1 = true
    this.up1 = false
    return this.agtList.sort((a, b) => {
      return b.EMAIL_ID.localeCompare(a.EMAIL_ID);
    })
  }
  sortDateAsc() {
    this.down2 = false
    this.up2 = true
    return this.agtList.sort((a, b) => {
      return <any>new Date(a.ETIME) - <any>new Date(b.ETIME);
    });
  }
  sortDateDesc() {
    this.down2 = true
    this.up2 = false
    return this.agtList.sort((a, b) => {
      return <any>new Date(b.ETIME) - <any>new Date(a.ETIME);
    });
  }



  PNR(d) {
    this.present()
    let vObj = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_BOOKING_DETAILS",
      "R_DATA": {
        "RAID": d.RID,
        "BOOKING_ID": d.BOOKING_ID,
        "FILTER": true
      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV": "P",
      "Version": "1.0.0.0.0.0"
    }
    let jvObj = JSON.stringify(vObj)
    console.log(jvObj)
    this.tService.postTestData(jvObj).subscribe(result => {
      if (result.response!==null) {

       this.dismiss()
        console.log(result.response)
        sessionStorage.setItem("ticketInfo", result.response)
        window.open("RlTicket", "_blank")
      }
      else{
        alert("No Data Found")
        this.dismiss()
      }
    });
  }
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe()
  // }
  isLoading = false;
  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Loading',
      mode: 'ios',
      backdropDismiss: false,
      spinner: 'bubbles',
      // duration: 2000
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
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
}
