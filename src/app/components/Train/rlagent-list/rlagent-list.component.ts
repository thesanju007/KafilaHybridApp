import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
@Component({
  selector: 'app-rlagent-list',
  templateUrl: './rlagent-list.component.html',
  styleUrls: ['./rlagent-list.component.scss'],
})
export class RLAgentListComponent implements OnInit {

  constructor(private tService: TestService) { }
  login_Details
  non_list = true
  agtList
  ngOnInit() {
    let Json_LD = sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(Json_LD)
  }


  agtLstGP = new FormGroup({
    RAID: new FormControl(),
    FROM: new FormControl(),
    TO: new FormControl(),
  })
  AgtSrhBtn(e) {
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
        this.agtList = JSON.parse(result.response)
        this.non_list = false
        console.log(this.agtList)
      }

    });
  }
}
