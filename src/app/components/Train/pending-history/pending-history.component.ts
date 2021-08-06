import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pending-history',
  templateUrl: './pending-history.component.html',
  styleUrls: ['./pending-history.component.scss'],
})
export class PendingHistoryComponent implements OnInit {
  todayt = new Date(new Date().getTime()).toISOString().split('T')[0];
  constructor(private tService: TestService, public loadingController: LoadingController,private route: Router) { }
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

  checktoirctc() {
    this.present()
   
    let pndHistList = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_CHK_BOOKING_IRCTC",
      "R_DATA": {
        "RAID":"14889208",
       "BOOKING_ID":"RL0508211400PM598c0" ,
       "REQUIRED_RESULT":false
  
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
      localStorage.setItem("chkbooking", result.response)
      if (result.response !== "") {
        this.dismiss()
        this.agtList = JSON.parse(result.response)
        console.log(this.agtList);
        window.open("/rl-chk-booking-irctc","_blank")
      
      }

    });
  
  }
  refund() {
    this.present()
   
    let pndHistList = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_REFUND_PROCESS",
      "R_DATA": {
        "REFUND_TYPE": "FAILED_BOOKING",
        "RID": "79547372",
        "FID": "18785869",
        "BOOKING_ID": "RL0508211634PM2f0e9",
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
    console.log(jPndHistList)
    this.tService.postTestData("CC", jPndHistList).subscribe(result => {
      localStorage.setItem("refund", result.response)
      if (result.response !== "") {
        this.dismiss()
        this.agtList = JSON.parse(result.response)
        console.log(this.agtList);
        window.open("/refund","_blank")
      
      }

    });
  
  }

}
