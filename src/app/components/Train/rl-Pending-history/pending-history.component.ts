import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { TicketComponent } from '../rl-Ticket/ticket.component'
import { ModalController } from '@ionic/angular';
import { RefundToAgentComponent } from '../rl-Refund-to-agent/refund-to-agent.component';
import { RLCHKBOOKINGIRCTCComponent } from '../rl-Chk-booking-irctc/rl-chk-booking-irctc.component'
@Component({
  selector: 'app-pending-history',
  templateUrl: './pending-history.component.html',
  styleUrls: ['./pending-history.component.scss'],
})
export class PendingHistoryComponent implements OnInit {

  maxDate = new Date(new Date().getTime()).toISOString().split('T')[0];
  constructor(private tService: TestService, public loadingController: LoadingController, public modalController: ModalController) { this.unsubscribe = new Subject<any>(); }
  login_Details
  tabShow = false
  dateDis = false
  agtList
  name
  unsubscribe: Subject<any>;
  subscription: Subscription
  ngOnInit() {
    let Json_LD = sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(Json_LD)
    this.name = sessionStorage.getItem("Name")

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
    this.present()
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

    this.subscription = this.tService.postTestData(pndHistList).subscribe(result => {
      if (result.response.length > 2) {
        this.dismiss()
        this.tabShow = true
        this.agtList = JSON.parse(result.response)
      }
      else {
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
    this.tService.postTestData(vObj).subscribe(result => {
      if (result.response !== null) {
        this.dismiss()
        sessionStorage.setItem("ticketInfo", result.response)
        this.presentModal()
      }
      else {
        alert("No Data Found")
        this.dismiss()
      }
    });
  }


  checktoirctc(d) {
    this.present()

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
    this.tService.postTestData(pndHistList).subscribe(result => {
      localStorage.setItem("chkbooking", result.response)
      this.dismiss()
      this.presentModal2()
    });

  }


  refund(d) {
    this.present()
    let t = confirm("Are you sure to execute this action?");
    if (t === true) {
      let pndHistList = {
        "P_TYPE": "CC",
        "R_TYPE": "RAIL",
        "R_NAME": "RL_REFUND_PROCESS",
        "R_DATA": {
          "REFUND_TYPE": "FAILED_BOOKING",
          "RID": d.RID,
          "FID": d.FID,
          "BOOKING_ID": d.BOOKING_ID,
          "STAFF": this.name
        },
        "AID": this.login_Details.AID,
        "MODULE": this.login_Details.MODULE,
        "IP": this.login_Details.IP,
        "TOKEN": this.login_Details.TOKEN,
        "ENV": "P",
        "Version": "1.0.0.0.0.0"
      }
      this.tService.postTestData(pndHistList).subscribe(result => {
        localStorage.setItem("refund", result.response)
        this.dismiss()
        this.presentModal1( d.BOOKING_ID)
       
      });
    }
    else {
      this.dismiss()
    }
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
        console.log();
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

  async presentModal() {
    const modal = await this.modalController.create({
      component: TicketComponent,
      cssClass: 'popover_setting',
      showBackdrop: true
    });
    return await modal.present();
  }


  async presentModal1(x) {
    const modal1 = await this.modalController.create({
      component: RefundToAgentComponent,
      cssClass: 'popover_setting2',
      showBackdrop: true,
      componentProps: {
        "paramID": x,
      },
    });
    modal1.onDidDismiss()
      .then((d) => {
        console.log(d.data.Book_ID)
        this.agtList = this.agtList.filter(Array => Array.BOOKING_ID !== d.data.Book_ID);
      });
    return await modal1.present();
  }


  async presentModal2() {
    const modal2 = await this.modalController.create({
      component: RLCHKBOOKINGIRCTCComponent,
      cssClass: 'popover_setting2',
      showBackdrop: true,
    });
  
    return await modal2.present();
  }


  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
