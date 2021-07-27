import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss'],
})
export class BookingHistoryComponent implements OnInit {
  todayt = new Date(new Date().getTime()).toISOString().split('T')[0];
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
    FROM: new FormControl(this.todayt),
    TO: new FormControl(this.todayt),
  })
  AgtSrhBtn(e) {
    this.show = false
    e.preventDefault();
    let bknHisData = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_BOOKING_HISTORY",
      "R_DATA": {
        "RAID": this.agtLstGP.value.RAID || "",
        "FROM": this.agtLstGP.value.FROM || "",
        "TO": this.agtLstGP.value.TO || "",
        "MODULE": "D",
        "STATUS": true
      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV": "P",
      "Version": "1.0.0.0.0.0"
    }
    let jbknHisData = JSON.stringify(bknHisData)
    console.log(jbknHisData)
    this.tService.postTestData("CC", jbknHisData).subscribe(result => {
      if (result.response !== "") {
        this.agtList = JSON.parse(result.response)
        this.non_list = false
        this.show = true
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
      return a.AMOUNT - b.AMOUNT;
    });
  }

  sortBalDesc() {
    return this.agtList.sort((a, b) => {
      return b.AMOUNT - a.AMOUNT;
    });
  }
  sortDateAsc() {
    return this.agtList.sort((a, b) => {
      return <any>new Date(a.DEP_DATE) - <any>new Date(b.DEP_DATE);
    });
  }
  sortDateDesc() {
    return this.agtList.sort((a, b) => {
      return <any>new Date(b.DEP_DATE) - <any>new Date(a.DEP_DATE);
    });
  }

}
