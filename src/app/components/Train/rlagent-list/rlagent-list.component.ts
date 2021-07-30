import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-rlagent-list',
  templateUrl: './rlagent-list.component.html',
  styleUrls: ['./rlagent-list.component.scss'],
})
export class RLAgentListComponent implements OnInit {
  todayt = new Date(new Date().getTime()).toISOString().split('T')[0];
  constructor(private tService: TestService, public loadingController: LoadingController) { }
  login_Details
  tabShow=false

  agtList
  ngOnInit() {
    let Json_LD = sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(Json_LD)
  }
  dateDis=true
  aidDis=false
  AgentActive(){
    this.dateDis=true
    this.aidDis=true
    this.agtLstGP.reset()
  }
  DateActive(){
    this.aidDis=false
    this.dateDis=false
    this.agtLstGP.reset()
  }
  None(){
    this.dateDis=true
    this.aidDis=false
    this.agtLstGP.reset()
  }
  agtLstGP = new FormGroup({
    RAID: new FormControl(),
    FROM: new FormControl(),
    TO: new FormControl(),
  })
  AgtSrhBtn(e) {
    this.present()
    e.preventDefault();
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
      "ENV": "D",
      "Version": "1.0.0.0.0.0"
    }
    let jAgtList = JSON.stringify(agtList)
    console.log(jAgtList)
    this.tService.postTestData("CC", jAgtList).subscribe(result => {
      if (result.response !== "") {
        this.dismiss()
        this.tabShow=true
        this.agtList = JSON.parse(result.response)
        console.log(this.agtList)
      }

    });
  }
  sortCnameAsc() {
    return this.agtList.sort((a, b) => {
      return a.COMP_NAME.localeCompare(b.COMP_NAME);
    })
  }
  sortCnameDesc() {
    return this.agtList.sort((a, b) => {
      return b.COMP_NAME.localeCompare(a.COMP_NAME);
    })
  }
  sortMailAsc() {
    return this.agtList.sort((a, b) => {
      return a.EMAIL.localeCompare(b.EMAIL);
    })
  }
  sortMailDesc() {
    return this.agtList.sort((a, b) => {
      return b.EMAIL.localeCompare(a.EMAIL);
    })
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
