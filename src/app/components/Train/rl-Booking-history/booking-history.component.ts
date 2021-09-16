import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TicketComponent } from '../rl-Ticket/ticket.component'
import { ModalController } from '@ionic/angular';
import * as XLSX from 'xlsx';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss'],
})
export class BookingHistoryComponent implements OnInit {
  maxDate = new Date(new Date().getTime()).toISOString().split('T')[0];
  subscription: Subscription
  amt = 0
  unsubscribe: Subject<any>;
  constructor(private tService: TestService, public loadingController: LoadingController, private route: Router, public modalController: ModalController) {
    this.unsubscribe = new Subject<any>();
  }
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

  AgtSrhBtn(e: { preventDefault: () => void; }) {
    this.present()
    this.tabShow = false
    let bknHisData = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_BOOKING_HISTORY",
      "R_DATA": {
        "RAID": this.agtLstGP.value.RAID || "",
        "FROM": this.agtLstGP.value.FROM,
        "TO": this.agtLstGP.value.TO,
        "MODULE": this.evv,
        "STATUS": true
      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV": "P",
      "Version": "1.0.0.0.0.0"
    }
    this.subscription = this.tService.postTestData(bknHisData).subscribe(result => {
      if (result.response.length > 2) {
        this.agtList = JSON.parse(result.response)
        this.tabShow = true
        this.dismiss()
        this.amt = 0
        for (let x of this.agtList) {
          this.amt += parseInt(x.AMOUNT)
        }
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
    return this.agtList.sort((a: { AMOUNT: number; }, b: { AMOUNT: number; }) => {
      return a.AMOUNT - b.AMOUNT;
    });
  }
  sortBalDesc() {
    this.down = true
    this.up = false
    return this.agtList.sort((a: { AMOUNT: number; }, b: { AMOUNT: number; }) => {
      return b.AMOUNT - a.AMOUNT;
    });
  }
  sortMailAsc() {
    this.down1 = false
    this.up1 = true
    return this.agtList.sort((a: { EMAIL_ID: string; }, b: { EMAIL_ID: any; }) => {
      return a.EMAIL_ID.localeCompare(b.EMAIL_ID);
    })
  }
  sortMailDesc() {
    this.down1 = true
    this.up1 = false
    return this.agtList.sort((a: { EMAIL_ID: any; }, b: { EMAIL_ID: string; }) => {
      return b.EMAIL_ID.localeCompare(a.EMAIL_ID);
    })
  }
  sortDateAsc() {
    this.down2 = false
    this.up2 = true
    return this.agtList.sort((a: { ETIME: string | number | Date; }, b: { ETIME: string | number | Date; }) => {
      return <any>new Date(a.ETIME) - <any>new Date(b.ETIME);
    });
  }
  
  sortDateDesc() {
    this.down2 = true
    this.up2 = false
    return this.agtList.sort((a: { ETIME: string | number | Date; }, b: { ETIME: string | number | Date; }) => {
      return <any>new Date(b.ETIME) - <any>new Date(a.ETIME);
    });
  }



  PNR(d: { RID: any; BOOKING_ID: any; }) {
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
        this.presentModal()
        sessionStorage.setItem("ticketInfo", result.response)
      }
      else {
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

    });
    return modal.present();
  }

  tHist(d: any) {
    alert("Working")
    // let vObj = {
    //   "P_TYPE": "CC",
    //   "R_TYPE": "RAIL",
    //   "R_NAME": "RL_BOOKING_DETAILS",
    //   "R_DATA": {
    //     "RAID": d.RID,
    //     "BOOKING_ID": d.BOOKING_ID,
    //     "FILTER": true
    //   },
    //   "AID": this.login_Details.AID,
    //   "MODULE": this.login_Details.MODULE,
    //   "IP": this.login_Details.IP,
    //   "TOKEN": this.login_Details.TOKEN,
    //   "ENV": "P",
    //   "Version": "1.0.0.0.0.0"
    // }
  }
  pStatus(d: any) {
    alert("Working")
    // let vObj = {
    //   "P_TYPE": "CC",
    //   "R_TYPE": "RAIL",
    //   "R_NAME": "RL_BOOKING_DETAILS",
    //   "R_DATA": {
    //     "RAID": d.RID,
    //     "BOOKING_ID": d.BOOKING_ID,
    //     "FILTER": true
    //   },
    //   "AID": this.login_Details.AID,
    //   "MODULE": this.login_Details.MODULE,
    //   "IP": this.login_Details.IP,
    //   "TOKEN": this.login_Details.TOKEN,
    //   "ENV": "P",
    //   "Version": "1.0.0.0.0.0"
    // }
  }
  rStatus(d: any) {
    alert("Working")
    // let vObj = {
    //   "P_TYPE": "CC",
    //   "R_TYPE": "RAIL",
    //   "R_NAME": "RL_BOOKING_DETAILS",
    //   "R_DATA": {
    //     "RAID": d.RID,
    //     "BOOKING_ID": d.BOOKING_ID,
    //     "FILTER": true
    //   },
    //   "AID": this.login_Details.AID,
    //   "MODULE": this.login_Details.MODULE,
    //   "IP": this.login_Details.IP,
    //   "TOKEN": this.login_Details.TOKEN,
    //   "ENV": "P",
    //   "Version": "1.0.0.0.0.0"
    // }
  }
  fileName = 'BookingReport.xlsx';
  exportexcel(): void {
    let element = document.getElementById('tabl');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);

  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
//  9319296968