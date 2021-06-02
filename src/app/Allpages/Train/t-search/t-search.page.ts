import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
@Component({
  selector: 'app-t-search',
  templateUrl: './t-search.page.html',
  styleUrls: ['./t-search.page.scss'],
})
export class TSearchPage implements OnInit {

  constructor(private tService: TestService) { }

  ngOnInit() {
    this.tService.getTestData("../../../assets/airport.json").subscribe(result=>{
      this.arp=result
    });
  }
   arp: any

  token: any 
  
  RoundFlight: any = false
  F_class = [
    "First",
    "Bussiness",
    "Premium First",
    "Premium Ecomomy",
    "Ecomomy (Coach)"
  ]
  F_flights = [
    "All"
  ]
  isAfter: any = true;
  ShowOne() {
    this.RoundFlight = false
  }
  ShowRound() {
    this.RoundFlight = true
  }
  flightData = new FormGroup({
    flighttype: new FormControl('', [Validators.required]),
    D_airport: new FormControl('', [Validators.required, Validators.pattern('[A-Z,a-z, ]{1,20}')]),
    A_airport: new FormControl('', [Validators.required, Validators.pattern('[A-Z,a-z, ]{1,20}')]),
    D_date: new FormControl('', [Validators.required]),
    A_date: new FormControl('', [Validators.required]),
    PClass: new FormControl(''),
    PFlight: new FormControl(''),
    Adults: new FormControl('', [Validators.required, Validators.pattern('[0-9, ]{1}')]),
    Childs: new FormControl('', [Validators.pattern('[0-9, ]{1}')]),
    Infants: new FormControl('', [Validators.pattern('[0-9, ]{1}')]),
  })

  minDate = new Date();
  dateval(event: any) {
    this.selDate = event
  }
  selDate: any
  checkFlight() {

    let data: any = {
      TYPE: "AIR",
      NAME: "GET_FLIGHT",
      STR: [
        {
          AUTH_TOKEN: this.token,
          SESSION_ID: "",
          TRIP: this.flightData.value.flighttype,
          SECTOR: "D",
          SRC: this.flightData.value.D_airport,
          DES: this.flightData.value.A_airport,
          DEP_DATE: this.flightData.value.D_date,
          RET_DATE: this.flightData.value.A_date,
          ADT: this.flightData.value.Adults,
          CHD: 0,
          INF: 0,
          PC: "",
          PF: "",
          HS: "D"
        }
      ]
    }
    let js_data = JSON.stringify(data)
 
  }

}
