import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { TestService } from '../../Services/test.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  todayt = new Date(new Date().getTime()).toISOString().split('T')[0];
  minDate = new Date(new Date().getTime()).toISOString().split('T')[0];
  maxDate: any
  arp: any
  arp_new: any
  selected_airport: any
  isAfterF = true;
  isAfterT = false;
  isAfterH = false;
  flight_comp = true
  train_comp = false
  hotel_comp = false
  adult = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  childrens = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
  infants = ["0", "1", "2", "3", "4",]
  d_DepCity
  d_ArrCity
  f_Type = "1";
  t_Type = "1";
  d_Adult = "1";
  d_Child = "0";
  d_Infants = "0";

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

  constructor(private tService: TestService, private route: Router, private fb: FormBuilder) { }
  ngOnInit() {
    this.tService.getTestData("../../../assets/airport.json").subscribe(result => {
      this.arp = result
      this.arp_new = result
    });
    //console.log(new Date(new Date().getTime() + 86400000).toISOString().split('T')[0])

  }




  returnDate(d) {
    this.minDate = d
  }
  returnDateMax(d) {

    this.maxDate = d
  }

  slideOpts = {
    autoplay: true
  };

  flight() {
    this.flight_comp = true
    this.hotel_comp = false
    this.train_comp = false
    this.isAfterF = true;
    this.isAfterT = false;
    this.isAfterH = false;
  }

  train() {
    this.flight_comp = false
    this.hotel_comp = false
    this.train_comp = true
    this.isAfterT = true
    this.isAfterF = false;
    this.isAfterH = false;
  }

  hotel() {
    this.flight_comp = false
    this.hotel_comp = true
    this.train_comp = false
    this.isAfterH = true
    this.isAfterF = false;
    this.isAfterT = false;
  }
  //flight Data



  one_way = true
  round_trip = false
  multi_trip = true

  R_Onw_Way() {
    this.one_way = true
    this.round_trip = false
    this.multi_trip = true

  }
  R_Round_Trip() {
    this.one_way = false
    this.round_trip = true
    this.multi_trip = true

  }

  R_Multi_Trip() {
    this.one_way = false
    this.round_trip = false
    this.multi_trip = false

  }

mfArray=["1","2","3",]


  flightData = this.fb.group({
    flighttype: new FormControl('', [Validators.required]),
    D_airport: new FormControl('', [Validators.required]),
    A_airport: new FormControl('', [Validators.required]),
    D_date: new FormControl('', [Validators.required]),
    A_date: new FormControl(''),
    PClass: new FormControl(''),
    PFlight: new FormControl(''),
    Adults: new FormControl(''),
    Childs: new FormControl(''),
    Infants: new FormControl(''),
    quantities: this.fb.array([])

  })

  quantities(): FormArray {
    return this.flightData.get("quantities") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      MD_airport: new FormControl('', [Validators.required]),
      MA_airport: new FormControl('', [Validators.required]),
      MD_date: new FormControl('', [Validators.required]),
    })
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
  
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
   


  showw = false
  showwR = false
  searcharp
  s: any;
  showArpList() {
    this.showw = true
  }
  airValue(arpt) {
    this.d_DepCity = arpt.code + " , " + arpt.city + " , " + arpt.country
    this.showw = false
    this.removeAirport(arpt.code)
  }
  removeAirport(arrApt) {
    this.arp_new = this.arp.filter(Array => Array.code !== arrApt);
  }
  search(val: any) {
    this.s = val.target.value;

  }

  //Return Airport
  r
  searchRet(val: any) {
    this.r = val.target.value;
  }
  showArpListRet() {
    this.showwR = true
  }

  airValueRet(arpt) {
    this.d_ArrCity = arpt.code + " , " + arpt.city + " , " + arpt.country
    this.showwR = false
    this.removeAirportDep(arpt.code)
  }

  removeAirportDep(depApt) {
    this.arp = this.arp_new.filter(Array => Array.code !== depApt);
  }

  //Get Flight Data

  checkFlight() {

    let depApt = this.flightData.value.D_airport.substring(0, 3);
    let arrApt = this.flightData.value.A_airport.substring(0, 3);
    let data: any = {
      TYPE: "AIR",
      NAME: "GET_FLIGHT",
      STR: [
        {
          AUTH_TOKEN: "b53e07c1-d094-4a00-b746-1294a3051793",
          SESSION_ID: "",
          TRIP: this.flightData.value.flighttype,
          SECTOR: "D",
          SRC: depApt,
          DES: arrApt,
          DEP_DATE: this.flightData.value.D_date,
          RET_DATE: this.flightData.value.A_date,
          ADT: this.flightData.value.Adults || this.d_Adult,
          CHD: this.flightData.value.Childs || this.d_Child,
          INF: this.flightData.value.Infants || this.d_Infants,
          PC: "",
          PF: "",
          HS: "D"
        }
      ]
    }
    let js_data = JSON.stringify(data)
    if (this.flightData.value.flighttype == "1") {
      this.tService.getData(js_data)
      // this.route.navigate(['home/fbookinghistory']);
      // this.tService.postTestData("/API/FLIGHT", js_data).subscribe((Flight) => {
      //   console.log(Flight)

      // })
    }
    else if (this.flightData.value.flighttype == "2") {
      alert("Round Trip")
    }
    else {
      alert("Multi Trip")
      console.log(this.flightData.value)
    }

  }


  //tain Data




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

  get Error() {
    return this.flightData.controls;
  }






}