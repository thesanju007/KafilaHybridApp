import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rl-chk-booking-irctc',
  templateUrl: './rl-chk-booking-irctc.component.html',
  styleUrls: ['./rl-chk-booking-irctc.component.scss'],
})
export class RLCHKBOOKINGIRCTCComponent implements OnInit {
  data: any
  constructor() { }

  ngOnInit() {

    let test = localStorage.getItem("chkbooking")
    this.data = JSON.parse(test)
    console.log(this.data.RESULT)
  }

}
