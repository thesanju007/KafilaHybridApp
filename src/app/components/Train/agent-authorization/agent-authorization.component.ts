import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-agent-authorization',
  templateUrl: './agent-authorization.component.html',
  styleUrls: ['./agent-authorization.component.scss'],
})
export class AgentAuthorizationComponent implements OnInit {

  constructor(private tService: TestService,public loadingController: LoadingController) { }
  login_Details

  agtList
  tabShow=false
  ngOnInit() {
    let Json_LD = sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(Json_LD)
  }
  dateDis=true
  agtId(){
    this.dateDis=false
    this.agtLstGP.reset()
  }
  none(){
    this.dateDis=true
    this.agtLstGP.reset()
  }

  agtLstGP = new FormGroup({
    RAID: new FormControl(),
  })
  AgtSrhBtn(e) {
    this.present()
    e.preventDefault();
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
    this.tService.postTestData("CC", jaBal).subscribe(result => {
      if (result.response !== "") {
        this.agtList = JSON.parse(result.response)
        this.dismiss()
        this.tabShow=true
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

  sortBalAsc() {
    return this.agtList.sort((a, b) => {
      return <any>new Date(a.BALANCE) - <any>new Date(b.BALANCE);
    });
  }

  sortBalDesc() {
    return this.agtList.sort((a, b) => {
      return <any>new Date(b.BALANCE) - <any>new Date(a.BALANCE);
    });
  }
  sortDateAsc(){
    return this.agtList.sort((a, b) => {
      return <any>new Date(a.ETIME) - <any>new Date(b.ETIME);
    });
  }
  sortDateDesc(){
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
