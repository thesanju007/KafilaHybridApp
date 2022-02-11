import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-h-search',
  templateUrl: './h-search.page.html',
  styleUrls: ['./h-search.page.scss'],
})
export class HSearchPage implements OnInit {

  todayt = new Date(new Date().getTime()).toISOString().split('T')[0];
  minDate = new Date(new Date().getTime()).toISOString().split('T')[0];
  maxDate: any
 
  isAfterOW = true;
  isAfterRT = false;
  isAfterMT = false;
  isAfterRS = false;
  isAfterAT = false;
  flight_comp = true
  train_comp = false
  hotel_comp = true
 


  constructor(private fb: FormBuilder) { }
  ngOnInit() {
   
    //console.log(new Date(new Date().getTime() + 86400000).toISOString().split('T')[0])

  }



  slideOpts = {
    autoplay: true
  };





  // one_way = true
  round_trip = false
  multi_trip = true
  trip_val:any=1
  One_Star() {
    this.trip_val=1
    this.isAfterOW=true
    this.isAfterRT=false
    this.isAfterMT=false
    this.isAfterRS=false
    this.isAfterAT=false
    
    
    // this.one_way = true
    this.round_trip = false
    this.multi_trip = true

  }
  Two_Star() {
    this.trip_val=2
    this.isAfterOW=false
    this.isAfterRT=true
    this.isAfterMT=false
    this.isAfterRS=false
    this.isAfterAT=false

    // this.one_way = false
    this.round_trip = true
    this.multi_trip = true
  }

  Three_Star() {
    this.trip_val=3
    this.isAfterOW=false
    this.isAfterRT=false
    this.isAfterMT=true
    this.isAfterRS=false
    this.isAfterAT=false

    // this.one_way = false
    this.round_trip = false
    this.multi_trip = false

  }

  Four_Star(){
    this.trip_val=4
    this.isAfterOW=false
    this.isAfterRT=false
    this.isAfterMT=false
    this.isAfterRS=true
    this.isAfterAT=false

    // this.one_way = false
    this.round_trip = true
    this.multi_trip = true
  }

  Five_Star(){
    this.trip_val=5
    this.isAfterOW=false
    this.isAfterRT=false
    this.isAfterMT=false
    this.isAfterRS=false
    this.isAfterAT=true

    // this.one_way = false
    this.round_trip = true
    this.multi_trip = true
  }




 


}
