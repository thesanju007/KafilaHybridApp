import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms';
import { Router,ActivatedRoute }from '@angular/router';
import { TestService } from 'src/app/Services/test.service';
import { CrudService } from 'src/app/Services/crud.service'

@Component({
  selector: 'app-t-booking-history',
  templateUrl: './t-booking-history.page.html',
  styleUrls: ['./t-booking-history.page.scss'],
})
export class TBookingHistoryPage implements OnInit {

  constructor(private route:Router,private service:TestService,private cservice:CrudService) {}

  ngOnInit(): void {
   
    
 

    }

}
//[ngClass]="{'my_class': step === 'step1', 'my_class2' : step === 'step2' }"