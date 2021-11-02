import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-t-search',
  templateUrl: './t-search.page.html',
  styleUrls: ['./t-search.page.scss'],
})
export class TSearchPage implements OnInit {
 
  todayt = new Date(new Date().getTime()).toISOString().split('T')[0];
  minDate = new Date(new Date().getTime()).toISOString().split('T')[0];
  maxDate: any
  
  
 dis=true


  constructor(private tService: TestService, private route: Router, private fb: FormBuilder) { }
  ngOnInit() {


  }










   










  s_Trains = true
  check_PNR = false
  live_trains = false
  live_station = false

  trainData = new FormGroup({
    radiotype: new FormControl('', [Validators.required]),
    D_station: new FormControl('', [Validators.required]),
    A_station: new FormControl('', [Validators.required]),
    DT_date: new FormControl('', [Validators.required]),
    PNR: new FormControl(''),
    LiveTrain: new FormControl(''),

  })
  R_train() {
    this.s_Trains = true
    this.check_PNR = false
    this.live_trains = false
    this.live_station = false
  }
  R_check_PNR() {
    this.check_PNR = true
    this.s_Trains = false
    this.live_trains = false
    this.live_station = false
  }
  R_live_trains_status() {
    this.live_trains = true
    this.s_Trains = false
    this.check_PNR = false
    this.live_station = false

  }
  R_live_station() {
    this.live_station = true
    this.s_Trains = false
    this.check_PNR = false
    this.live_trains = false
  }
  checkTrains() {

    if (this.trainData.value.radiotype == 1) {
      alert("FLIGHT SEARCH")
      let trainData = {
        "TYPE": "RAIL",
        "NAME": "GET_TRAIN",
        "STR": [
          {
            "TOKEN_TYPE": "SLF",
            "AUTH_TOKEN": "",
            "SESSION_ID": "",
            "SRC": this.trainData.value.D_station,
            "DES": this.trainData.value.A_station,
            "DEP_DATE": this.trainData.value.DT_date,
            "OI": "",
            "HS": "D"
          }
        ]
      }
      console.log(trainData)
    }

    if (this.trainData.value.radiotype == 2) {
      alert("CHECK PNR")
      console.log(this.trainData.value.PNR)
    }

    if (this.trainData.value.radiotype == 3) {
      alert("SEARCHING LIVE TRAIN")
      console.log(this.trainData.value.LiveTrain)
    }

  }

  // get Error() {
  //   return this.flightData.controls;
  // }





 

}
