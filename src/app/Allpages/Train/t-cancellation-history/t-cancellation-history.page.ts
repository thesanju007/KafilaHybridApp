import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service'

@Component({
  selector: 'app-t-cancellation-history',
  templateUrl: './t-cancellation-history.page.html',
  styleUrls: ['./t-cancellation-history.page.scss'],
})
export class TCancellationHistoryPage implements OnInit {
  public data={
    "TYPE": "RAIL",
    "NAME": "GET_TRAIN",
    "STR": [
      {
   "TOKEN_TYPE": "SLF",
        "AUTH_TOKEN": "aff87167-929b-4027-92df-fb8b59f1b93d",
        "SESSION_ID": "",
        "SRC": "MMCT",
        "DES": "NDLS",
        "DEP_DATE": "2021-09-09",
        "OI": "",
        "HS": "D"
      }
    ]
  };  

  constructor(private service:CrudService) { 
    this.service.postTestData(this.data).subscribe(result=>{
     console.log(result);   
   
    });;  
  
  }

  ngOnInit() {
    
  }

}
