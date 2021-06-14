import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-t-refund-history',
  templateUrl: './t-refund-history.page.html',
  styleUrls: ['./t-refund-history.page.scss'],
})
export class TRefundHistoryPage implements OnInit {

  constructor() {this.decode() }
  password: string = "hello world a";

  
  decode() {
    const passwordMd5 = Md5.hashStr(this.password).toString(); 
    console.log(passwordMd5);
  }
  
  ngOnInit() {
   
  }

}
