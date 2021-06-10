import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../Services/test.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  todayt = new Date().toJSON().split('T')[0];
  minDate= new Date().toJSON().split('T')[0];
  maxDate:any
  arp: any
  arp_new:any
  selected_airport:any
  isAfterF=true;
  isAfterT=false;
  isAfterH=false;
  flight_comp=true
  train_comp=false
  hotel_comp=false
  imgList=["1.jpg","3.jpg","7.jpg"]
  quantity:any;

  constructor(private tService: TestService) {}
  ngOnInit() {
    this.tService.getTestData("../../../assets/airport.json").subscribe(result=>{
      this.arp=result   
      this.arp_new=result    
    });    
  }
 
  removeAirportDep(airport){
    this.arp = this.arp_new.filter(Array => Array.code !== airport);
  }

  removeAirport(airport){
    this.arp_new = this.arp.filter(Array => Array.code !== airport);
  }

  returnDate(d){
    this.minDate=d
  }
  returnDateMax(d){
    this.maxDate=d
  }

  slideOpts = {
    autoplay: true
  };

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
    A_date    : new FormControl(''),
    PClass    : new FormControl(''),
    PFlight   : new FormControl(''),
    Adults    : new FormControl(''),
    Childs    : new FormControl(''),
    Infants   : new FormControl(''),
  })

  checkFlight() {
    console.log(this.flightData.value)
  }
  
  get Error() {
    return this.flightData.controls;
  }
}
