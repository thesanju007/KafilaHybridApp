import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { TicketComponent } from '../rl-Ticket/ticket.component'
@Component({
  selector: 'app-rlagency-statement',
  templateUrl: './rlagency-statement.component.html',
  styleUrls: ['./rlagency-statement.component.scss'],
})
export class RlagencyStatementComponent implements OnInit {

  maxDate = new Date(new Date().getTime()).toISOString().split('T')[0];

  subscription: Subscription

  constructor(private tService: TestService,
    public loadingController: LoadingController,
    private route: Router,
    public modalController: ModalController) { }
  login_Details
  agtList
  tabShow = false
  ngOnInit() {
    let Json_LD = sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(Json_LD)
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

    RAID: new FormControl('', Validators.required),
    FROM: new FormControl(this.maxDate, Validators.required),
    TO: new FormControl(this.maxDate, Validators.required),
  })

  AgtSrhBtn() {
    this.present()
    this.tabShow = false
    let bknHisData = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_AGENCY_STATEMENT",
      "R_DATA": {
        "RAID": this.agtLstGP.value.RAID,
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
        console.log(this.agtList)
        this.tabShow = true
        this.dismiss()
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
      return a.BALANCE - b.BALANCE;
    });
  }

  sortBalDesc() {
    this.down = true
    this.up = false
    return this.agtList.sort((a, b) => {
      return b.BALANCE - a.BALANCE;
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
    let r = d.BOOKING_ID.slice(0, 2)
    if (r == "RL") {
      let vObj = {
        "P_TYPE": "CC",
        "R_TYPE": "RAIL",
        "R_NAME": "RL_BOOKING_DETAILS",
        "R_DATA": {
          "RAID": d.AGENT_ID,
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
    else {
      alert("No Data Found")
      this.dismiss()
    }

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
      showBackdrop: true
    });
    return await modal.present();
  }

  get Error() {
    return this.agtLstGP.controls;
  }
}
