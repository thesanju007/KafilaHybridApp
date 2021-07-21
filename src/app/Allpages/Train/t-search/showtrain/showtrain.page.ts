import { Component, OnInit ,Input } from '@angular/core';
import { Router}from '@angular/router';
import { TestService } from 'src/app/Services/test.service';
import { CrudService } from 'src/app/Services/crud.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-showtrain',
  templateUrl: './showtrain.page.html',
  styleUrls: ['./showtrain.page.scss'],
})
export class ShowtrainPage implements OnInit {
  @Input() 
  searchdata = '';
  user_record:any;
  train_details:any;
  ARRAYDATA:any;
  AVLCLASS:any=[];
  newArray:any=[];
  isShown : Boolean = false;
  show:boolean=false;
  cookieValue;
  constructor(private route:Router,private service:TestService,private cservice:CrudService, private cookieService: CookieService) {
   
    this.user_record =this.service.getOption(); 
  this.read();

}
toggleShow() {
  this.isShown = true;
}
  ngOnInit(): void { 
  }
  read(){
    let data={  
      "TYPE": "RAIL",
      "NAME": "GET_TRAIN",
      "STR": [
        {
      "TOKEN_TYPE": "SLF",
          "AUTH_TOKEN": "578e1ddc-6c8f-46d0-a7eb-324cd98fedd0",
          "SESSION_ID": "",
          "SRC":  this.user_record.stationfrom,
          "DES":  this.user_record.stationto,
          "DEP_DATE": this.user_record.deptdate,
          "OI": "",
          "HS": "D",
        }
      ]
    };
    this.cservice.postTestData(data).subscribe(result=>{
      
      this.train_details=result;
  
     this.ARRAYDATA=this.train_details.TRAIN_LIST.trainBtwnStnsList;
    
    
     });
    }
}