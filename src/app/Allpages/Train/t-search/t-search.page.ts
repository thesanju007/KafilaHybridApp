import { Component, OnInit , Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from 'src/app/Services/test.service'
@Component({
  selector: 'app-t-search',
  templateUrl: './t-search.page.html',
  styleUrls: ['./t-search.page.scss'],
})
export class TSearchPage implements OnInit {
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
  constructor(private service:TestService) {  
}  


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

   onSubmit()
   {
     let travel_data = Object.assign(this.station_details.value, this.travel_date.value,this.no_of_passengers.value);
     console.log( travel_data);
    
     this.service.setOption( travel_data);  
  
   }

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
  ngOnInit() {}
 
}
