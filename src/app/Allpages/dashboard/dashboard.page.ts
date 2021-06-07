import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  todayt = new Date().toJSON().split('T')[0];
  minDate:any
  arp: any
  arp_new:any
  selected_airport:any

  
  constructor() {}
  ngOnInit() {}

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

  removeAirport(airport){
    // this.arp_new=airport

    console.log(airport)
    this.arp.some(this.isAir)
  }
  isAir(element, index, array){
    console.log(element)
    console.log(index)
    console.log(array)
  }

//  iseven(element, index, array) 
// {  
//    return (element % 2 == 0);  
// }   
// var arr = [ 11, 89, 23, 7, 91 ]; 
// var value = arr.some(iseven); 
// console.log( value );

  returnDate(d){
    this.minDate=d
  }


  today:any = new Date();
  dd:any = String(this.today.getDate()).padStart(2, '0');
  mm:any = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy:any = this.today.getFullYear();
  Today =   this.yyyy+  '-' +this.mm + '-' +this.dd; 
  min = new Date();
  max = new Date(this.min.getFullYear(), this.min.getMonth() + 6, this.min.getDate());

  slideOpts = {
    autoplay: true
  };
  

  minSelectableDate=this.Today;
  maxSelectableDate=this.Today;
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
