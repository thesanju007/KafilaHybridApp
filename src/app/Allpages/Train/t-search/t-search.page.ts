import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
@Component({
  selector: 'app-t-search',
  templateUrl: './t-search.page.html',
  styleUrls: ['./t-search.page.scss'],
})
export class TSearchPage implements OnInit {
 
  constructor() {}
  ngOnInit() {}
  isAfterF=true;
  isAfterT=false;
  isAfterH=false;
  flight_comp=true
  train_comp=false
  hotel_comp=false
  today:any = new Date();
  dd:any = String(this.today.getDate()).padStart(2, '0');
  mm:any = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy:any = this.today.getFullYear();
  Today =   this.yyyy+  '-' +this.mm + '-' +this.dd; 
  min = new Date();
  max = new Date(this.min.getFullYear(), this.min.getMonth() + 6, this.min.getDate());

  
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
  isShown : Boolean = false;
  showflight : Boolean = true;
  showhotel : Boolean = false;
  showtrain : Boolean = false;
  showlogin : Boolean = false;
  show : Boolean = true;
  isSelected_F: any = true;
  isSelected_T: any = false;
  isSelected_H: any = false;
  toggleStyle : boolean = false;
  value:any;
  
 

  station_details= new FormGroup({
 
    stationfrom:new FormControl('',[Validators.required]),
    stationto:new FormControl('',[Validators.required]),
   
   });


   travel_date= new FormGroup({
 
    deptdate:new FormControl('',[Validators.required]),
    retdate:new FormControl('',[Validators.required]),
   
   });

   no_of_passengers= new FormGroup({
    adults:new FormControl('',[Validators.required]),
    childs:new FormControl('',[Validators.required]),

   });


  toggleShow() {
    this.isShown = true;
  }

  toggleShow1() {
    this.isShown = false;
  }

  login() {
    this.showlogin = !this.showlogin;
    this.show = !this.show;
  }

  toggleflight() {
    this.showflight= true;
    this.showhotel = false;
    this.showtrain = false;
    this.isSelected_F = true;
    this.isSelected_T = false;
    this.isSelected_H = false;
  }
  
  togglehotel() {
    this.showflight = false;
    this.showhotel = true;
    this.showtrain = false;
    this.isSelected_H = true;
    this.isSelected_F = false;
    this.isSelected_T = false;
  }

  toggletrain() {
    this.showflight = false;
    this.showhotel = false;
    this.showtrain = true;
    this.isSelected_F = false;
    this.isSelected_T = true;
    this.isSelected_H = false;
  } 
         
 

}
