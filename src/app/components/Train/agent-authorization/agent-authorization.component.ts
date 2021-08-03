import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-agent-authorization',
  templateUrl: './agent-authorization.component.html',
  styleUrls: ['./agent-authorization.component.scss'],
})
export class AgentAuthorizationComponent implements OnInit {

  constructor(private tService: TestService, public loadingController: LoadingController) { }
  login_Details
  subscription: Subscription
  agtList
  skArr = []
  tabShow = false
  ngOnInit() {
    let Json_LD = sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(Json_LD)
    for (let i = 0; i <= 30; i++) {
      this.skArr.push(i)
    }
  }
  dateDis = true
  agtId() {
    this.dateDis = false
    this.agtLstGP.reset()
    this.btn = true
  }
  none() {
    this.dateDis = true
    this.agtLstGP.reset()
  }
  btn = false
  btnActive() {
    this.btn = false
  }

  agtLstGP = new FormGroup({
    RAID: new FormControl('', [Validators.pattern("[0-9]")]),
  })
  skeltonShow = false
  AgtSrhBtn(e) {
    // this.present()
    this.skeltonShow = true
    this.tabShow = false
    let aBal = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_AGENT_BALANCE",
      "R_DATA": {
        "RAID": this.agtLstGP.value.RAID || "",
      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV": "D",
      "Version": "1.0.0.0.0.0"
    }

    let jaBal = JSON.stringify(aBal)
    this.subscription = this.tService.postTestData("CC", jaBal).subscribe(result => {
      if (result.response !== "") {
        this.agtList = JSON.parse(result.response)
        //this.dismiss()
        this.skeltonShow = false
        this.tabShow = true
        console.log(this.agtList)
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
      return a.EMAIL.localeCompare(b.EMAIL);
    })
  }
  sortMailDesc() {
    this.down1 = true
    this.up1 = false
    return this.agtList.sort((a, b) => {
      return b.EMAIL.localeCompare(a.EMAIL);
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
  sortCnameAsc() {
    this.down3 = false
    this.up3 = true
    return this.agtList.sort((a, b) => {
      return a.COMP_NAME.localeCompare(b.COMP_NAME);
    })
  }
  sortCnameDesc() {

    this.down3 = true
    this.up3 = false
    return this.agtList.sort((a, b) => {
      return b.COMP_NAME.localeCompare(a.COMP_NAME);
    })
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
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
