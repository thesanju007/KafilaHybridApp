import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-rlagent-list',
  templateUrl: './rlagent-list.component.html',
  styleUrls: ['./rlagent-list.component.scss'],
})
export class RLAgentListComponent implements OnInit {
  maxDate = new Date(new Date().getTime()).toISOString().split('T')[0];
  constructor(private tService: TestService, public loadingController: LoadingController) { }
  login_Details
  tabShow = false
  subscription: Subscription
  skArr = []
  skeltonShow = false
  agtList

  ngOnInit() {
    let Json_LD = sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(Json_LD)
    for (let i = 0; i <= 30; i++) {
      this.skArr.push(i)
    }
  }
  dateDis = true
  aidDis = false
  AgentActive() {
    this.dateDis = true
    this.aidDis = true
    this.agtLstGP.reset()
    this.btn=true
  }
  DateActive() {
    this.aidDis = false
    this.dateDis = false
    this.agtLstGP.reset()
    this.btn=true
  }
  None() {
    this.dateDis = true
    this.aidDis = false
    this.agtLstGP.reset()
    this.btn=false
  }

  btn=false
  btnActive() {
   this.btn=false
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
    FROM: new FormControl(),
    TO: new FormControl(),
  })
  AgtSrhBtn(e) {
    this.tService.present()
    e.preventDefault();
    this.tabShow=false
    this.skeltonShow = true
    let agtList = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_AGENT_LIST",
      "R_DATA": {
        "RAID": this.agtLstGP.value.RAID || "",
        "FROM": this.agtLstGP.value.FROM || "",
        "TO": this.agtLstGP.value.TO || ""
      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV":this.evv,
      "Version": "1.0.0.0.0.0"
    }
    let jAgtList = JSON.stringify(agtList)
    // console.log(jAgtList)
    this.subscription = this.tService.postTestData("CC", jAgtList).subscribe(result => {
      if (result.response !== "") {
        this.tService.dismiss()
        // this.skeltonShow = false
        this.tabShow = true
        this.agtList = JSON.parse(result.response)
   
      }

    });
  }
  up=false
  down=true
  up1=false
  down1=true
  up2=false
  down2=true
  sortCnameAsc() {
    this.down=false
    this.up=true
    return this.agtList.sort((a, b) => {
      return a.COMP_NAME.localeCompare(b.COMP_NAME);
    })
  }
  sortCnameDesc() {
    this.down=true
    this.up=false
    return this.agtList.sort((a, b) => {
      return b.COMP_NAME.localeCompare(a.COMP_NAME);
    })
  }
  sortMailAsc() {
    this.down1=false
    this.up1=true
    return this.agtList.sort((a, b) => {
      return a.EMAIL.localeCompare(b.EMAIL);
    })
  }
  sortMailDesc() {
    this.down1=true
    this.up1=false
    return this.agtList.sort((a, b) => {
      return b.EMAIL.localeCompare(a.EMAIL);
    })
  }
  sortDateAsc() {
    this.down2=false
    this.up2=true
    return this.agtList.sort((a, b) => {
      return <any>new Date(a.ETIME) - <any>new Date(b.ETIME);
    });
  }
  sortDateDesc() {
    this.down2=true
    this.up2=false
    return this.agtList.sort((a, b) => {
      return <any>new Date(b.ETIME) - <any>new Date(a.ETIME);
    });
  }



  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe()
  // }

}
