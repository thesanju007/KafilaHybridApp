import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TicketComponent } from '../rl-Ticket/ticket.component'
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-cancellation-history',
  templateUrl: './cancellation-history.component.html',
  styleUrls: ['./cancellation-history.component.scss'],
})
export class CancellationHistoryComponent implements OnInit {

  maxDate = new Date(new Date().getTime()).toISOString().split('T')[0];

  subscription: Subscription

  constructor(private tService: TestService, public loadingController: LoadingController, private route: Router, public modalController: ModalController) { }
  login_Details
  agtList
  tabShow = false
  ngOnInit() {
    let Json_LD = sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(Json_LD)
  }

  dateDis = false
  AgentActive() {
    this.dateDis = true
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
  evv="p"
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
    this.tabShow = false
    let bknHisData = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_CANCEL_HISTORY",
      "R_DATA": {
        "RAID": this.agtLstGP.value.RAID || "",
        "FROM": this.agtLstGP.value.FROM,
        "TO": this.agtLstGP.value.TO ,
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
    this.subscription = this.tService.postTestData(bknHisData).subscribe(result => {
      if (result.response.length>2) {
        this.agtList = JSON.parse(result.response)
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
  up3 = false
  down3 = true
  up4 = false
  down4 = true
  sortBalAscC() {
    this.down = false
    this.up = true
    return this.agtList.sort((a, b) => {
      return a.CANCEL_CHARGE - b.CANCEL_CHARGE;
    });
  }

  sortBalDescC() {
    this.down = true
    this.up = false
    return this.agtList.sort((a, b) => {
      return b.CANCEL_CHARGE - a.CANCEL_CHARGE;
    });
  }

  sortBalAscR() {
    this.down1 = false
    this.up1 = true
    return this.agtList.sort((a, b) => {
      return a.REFUND_AMT - b.REFUND_AMT;
    });
  }

  sortBalDescR() {
    this.down1 = true
    this.up1 = false
    return this.agtList.sort((a, b) => {
      return b.REFUND_AMT - a.REFUND_AMT;
    });
  }

  sortDateAsc() {
    this.down4 = false
    this.up4 = true
    return this.agtList.sort((a, b) => {
      return <any>new Date(a.REQ_TIME) - <any>new Date(b.REQ_TIME);
    });
  }
  sortDateDesc() {
    this.down4 = true
    this.up4 = false
    return this.agtList.sort((a, b) => {
      return <any>new Date(b.REQ_TIME) - <any>new Date(a.REQ_TIME);
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

    this.tService.postTestData( vObj).subscribe(result => {
      if (result.response!==null) {

       this.dismiss()
        console.log(result.response)
        sessionStorage.setItem("ticketInfo", result.response)
        this.presentModal()
      }
      else{
        alert("No Data Found")
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

 
  async presentModal() {
    const modal = await this.modalController.create({
      component: TicketComponent,
      cssClass: 'popover_setting',
      showBackdrop:true
    });
    return await modal.present();
  }

}
