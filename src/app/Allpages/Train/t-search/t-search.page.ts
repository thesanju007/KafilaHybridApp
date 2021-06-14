import { Component, OnInit , Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from 'src/app/Services/test.service';
import { CrudService } from 'src/app/Services/crud.service'
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
  password=12345;
  constructor(private service:TestService,private cservice:CrudService) {  
  
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
    let data={
      "TYPE": "RAIL",
      "NAME": "GET_TRAIN",
      "STR": [
        {
     "TOKEN_TYPE": "SLF",
          "AUTH_TOKEN": "2df1a7e1-ac5f-421c-a4bd-1d57229ce3be",
          "SESSION_ID": "",
          "SRC":  this.station_details.value.stationfrom.toUpperCase(),
          "DES":  this.station_details.value.stationto.toUpperCase(),
          "DEP_DATE": this.travel_date.value.deptdate,
          "OI": "",
          "HS": "D"
        }
      ]
    };
     console.log(this.station_details[0]);
     let travel_data = Object.assign(this.station_details.value, this.travel_date.value,this.no_of_passengers.value);
     console.log( travel_data);
    
     this.service.setOption( travel_data);
       
    this.service.decode(this.password);
    console.log(data);
    
    this.cservice.postTestData(data).subscribe(result=>{
      console.log(result);   
    
     });
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
