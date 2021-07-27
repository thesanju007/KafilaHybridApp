import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
@Component({
  selector: 'app-agent-authorization',
  templateUrl: './agent-authorization.component.html',
  styleUrls: ['./agent-authorization.component.scss'],
})
export class AgentAuthorizationComponent implements OnInit {

  constructor(private tService: TestService) { }
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
  })
  AgtSrhBtn(e) {
    this.show = false
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
        this.non_list = false
        this.show = true
        console.log(this.agtList)
      }

    });
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
}
