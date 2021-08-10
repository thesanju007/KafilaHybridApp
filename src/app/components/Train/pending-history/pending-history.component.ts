import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-pending-history',
  templateUrl: './pending-history.component.html',
  styleUrls: ['./pending-history.component.scss'],
})
export class PendingHistoryComponent implements OnInit {

  maxDate = new Date(new Date().getTime()).toISOString().split('T')[0];
  constructor(private tService: TestService, public loadingController: LoadingController) { }
  login_Details
  tabShow = false
  dateDis = false
  agtList
  skArr = []
  skeltonShow = false
  subscription: Subscription
  ngOnInit() {
    let Json_LD = sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(Json_LD)
    for (let i = 0; i <= 30; i++) {
      this.skArr.push(i)
    }

  }
  AgentActive() {
    this.dateDis = true
    this.agtLstGP.reset()
    this.btn = true
  }
  DateActive() {
    this.dateDis = false
    this.agtLstGP.reset()
    this.btn = true
  }
  btn = false
  btnActive() {
    this.btn = false
  }
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
    RAID: new FormControl(),
    FROM: new FormControl(this.maxDate),
    TO: new FormControl(this.maxDate),
  })
  AgtSrhBtn(e) {

    e.preventDefault();
    this.present()
    this.skeltonShow = true
    this.tabShow = false
    let pndHistList = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_PENDING_HISTORY",
      "R_DATA": {
        "RAID": this.agtLstGP.value.RAID || "",
        "FROM": this.agtLstGP.value.FROM || "",
        "TO": this.agtLstGP.value.TO || "",
        "MODULE": this.evv,
        "STATUS": false
      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV": "P",
      "Version": "1.0.0.0.0.0"
    }

    let jPndHistList = JSON.stringify(pndHistList)
    // console.log(jPndHistList)
    this.subscription = this.tService.postTestData(jPndHistList).subscribe(result => {
      if (result.response !== "") {
        this.dismiss()
        // this.skeltonShow = false
        this.tabShow = true
        this.agtList = JSON.parse(result.response)
        // console.log(this.agtList)
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
      if (result.response !== "") {

        this.dismiss()
        console.log(result.response)
        sessionStorage.setItem("ticketInfo", result.response)
        window.open("RlTicket", "_blank",'location=yes,height=770,width=1200,scrollbars=yes,status=yes')
      }
    });
  }
  checktoirctc(d) {


    let pndHistList = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_CHK_BOOKING_IRCTC",
      "R_DATA": {
        "RAID": d.RID,
        "BOOKING_ID": d.BOOKING_ID,
        "REQUIRED_RESULT": false

      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV": "p",
      "Version": "1.0.0.0.0.0"
    }

    let jPndHistList = JSON.stringify(pndHistList)
    console.log(jPndHistList)
    this.tService.postTestData(jPndHistList).subscribe(result => {
      localStorage.setItem("chkbooking", result.response)
      if (result.response !== "") {
        this.dismiss()
        this.agtList = JSON.parse(result.response)
        console.log(this.agtList);
        window.open("/rlchkbookingirctc", "_blank", 'location=yes,height=770,width=1200,scrollbars=yes,status=yes')

      }

    });

  }
  refund(d) {
    this.present()

    let pndHistList = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_REFUND_PROCESS",
      "R_DATA": {
        "REFUND_TYPE": "FAILED_BOOKING",
        "RID": d.RID,
        "FID": d.FID,
        "BOOKING_ID": d.BOOKING_ID,
        "STAFF": "SANJEEV"
      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV": "P",
      "Version": "1.0.0.0.0.0"
    }

    let jPndHistList = JSON.stringify(pndHistList)

    this.tService.postTestData(jPndHistList).subscribe(result => {
      localStorage.setItem("refund", result.response)
      if (result.response !== "") {
        this.dismiss()
        this.agtList = JSON.parse(result.response)

        window.open("/refundtoagent","_blank",'location=yes,height=770,width=1200,scrollbars=yes,status=yes')

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
