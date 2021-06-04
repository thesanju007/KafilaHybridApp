import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  todayt = new Date().toJSON().split('T')[0];
  minDate=new Date().toJSON().split('T')[0];
  constructor() {}
  ngOnInit() {}
  isAfterF=true;
  isAfterT=false;
  isAfterH=false;
  flight_comp=true
  train_comp=false
  hotel_comp=false
  maxDate:any;
  returnDate(d){
    this.minDate=d
  }
  slideOpts = {
    autoplay: true
  };
  imgList=["1.jpg","3.jpg","7.jpg"]
  
  quantity:any; 
  flight(){
    this.flight_comp=true
    this.hotel_comp=false
    this.train_comp=false
    this.isAfterF=true;
    this.isAfterT=false;
    this.isAfterH=false;
  }
  train(){
    this.flight_comp=false
    this.hotel_comp=false
    this.train_comp=true
    this.isAfterT=true
    this.isAfterF=false;
    this.isAfterH=false;
  }
  hotel(){
    this.flight_comp=false
    this.hotel_comp=true
    this.train_comp=false
    this.isAfterH=true
    this.isAfterF=false;
    this.isAfterT=false;
  }

  flightData = new FormGroup({
    flighttype: new FormControl('', [Validators.required]),
    D_airport : new FormControl('', [Validators.required]),
    A_airport : new FormControl('', [Validators.required]),
    D_date    : new FormControl('', [Validators.required]),
    A_date    : new FormControl('', [Validators.required]),
    PClass    : new FormControl('', [Validators.required]),
    PFlight   : new FormControl('', [Validators.required]),
    Adults    : new FormControl('', [Validators.required]),
    Childs    : new FormControl('', [Validators.required]),
    Infants   : new FormControl('', [Validators.required]),
  })
  checkFlight() {
   
    console.log(this.flightData.value)
  }
  
}
