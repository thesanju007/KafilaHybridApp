import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-pending-history',
  templateUrl: './pending-history.component.html',
  styleUrls: ['./pending-history.component.scss'],
})
export class PendingHistoryComponent implements OnInit {

  todayt = new Date(new Date().getTime()).toISOString().split('T')[0];
  constructor(private tService: TestService, public loadingController: LoadingController) { }
  login_Details
  non_list = true
  show = true
  dis = true
  id = true
  agtList
  ngOnInit() {
    let Json_LD = sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(Json_LD)
  }
  RfieldEn() {
    this.id = true
    this.dis = false
  }
  fieldEn() {
    this.id = false
    this.dis = true
  }
  agtLstGP = new FormGroup({
    RAID: new FormControl(),
    FROM: new FormControl(),
    TO: new FormControl(),
  })
  AgtSrhBtn(e) {
    this.present()
    e.preventDefault();
    let pndHistList = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_PENDING_HISTORY",
      "R_DATA": {
        "RAID": this.agtLstGP.value.RAID || "",
        "FROM": this.agtLstGP.value.FROM || "",
        "TO": this.agtLstGP.value.TO || "",
        "MODULE": "D",
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
    console.log(jPndHistList)
    this.tService.postTestData("CC", jPndHistList).subscribe(result => {
      if (result.response !== "") {
        this.dismiss()
        this.agtList = JSON.parse(result.response)
        console.log(this.agtList)
      }

    });
  }

  sortMailAsc() {
    return this.agtList.sort((a, b) => {
      return a.EMAIL_ID.localeCompare(b.EMAIL_ID);
    })
  }
  sortMailDesc() {
    return this.agtList.sort((a, b) => {
      return b.EMAIL_ID.localeCompare(a.EMAIL_ID);
    })
  }
  sortBalAsc() {
    return this.agtList.sort((a, b) => {
      return <any>new Date(a.AMOUNT) - <any>new Date(b.AMOUNT);
    });
  }

  sortBalDesc() {
    return this.agtList.sort((a, b) => {
      return <any>new Date(b.AMOUNT) - <any>new Date(a.AMOUNT);
    });
  }
  sortDateAsc() {
    return this.agtList.sort((a, b) => {
      return <any>new Date(a.ETIME) - <any>new Date(b.ETIME);
    });
  }
  sortDateDesc() {
    return this.agtList.sort((a, b) => {
      return <any>new Date(b.ETIME) - <any>new Date(a.ETIME);
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
