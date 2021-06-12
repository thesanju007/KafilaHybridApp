import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../Services/test.service'
import { Router } from '@angular/router';
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
  imgList = ["1.jpg", "3.jpg", "7.jpg"]
  adult = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  childrens=["0","1", "2", "3", "4", "5", "6", "7", "8"]
  infants=["0","1","2", "3", "4",]
  d_DepCity = "DEL, Delhi, India"
  d_ArrCity = "BOM, Mumbai, India"
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
  constructor(private tService: TestService, private route: Router) { }
  ngOnInit() {
    this.tService.getTestData("../../../assets/airport.json").subscribe(result => {
      this.arp = result
      this.arp_new = result
    });
    console.log(new Date(new Date().getTime() + 86400000).toISOString().split('T')[0])

  }

  removeAirportDep(airport) {
    let depApt = airport.substring(0, 3);
    
    console.log(depApt)
    this.arp = this.arp_new.filter(Array => Array.code !== depApt);
  }

  removeAirport(airport) {
    let arrApt = airport.substring(0, 3);
    this.arp_new = this.arp.filter(Array => Array.code !== arrApt);
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

  flightData = new FormGroup({
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
  })

  checkFlight() {

    let depApt = this.flightData.value.D_airport.substring(0, 3);
    let arrApt = this.flightData.value.A_airport.substring(0, 3);
    let data: any = {
      TYPE: "AIR",
      NAME: "GET_FLIGHT",
      STR: [
        {
          AUTH_TOKEN: "f4630b87-303e-4bf7-ac5b-ba8046a9ea3c",
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
      this.route.navigate(['home/fbookinghistory']);
      // this.tService.postTestData("http://stageapi.ksofttechnology.com/API/FLIGHT", js_data).subscribe((Flight) => {
      //   console.log(Flight)
      //   
      // })
    }
    else if (this.flightData.value.flighttype == "2") {
      alert("Round Trip")
    }
    else {
      alert("Multi Trip")
    }

  }

  get Error() {
    return this.flightData.controls;
  }

}