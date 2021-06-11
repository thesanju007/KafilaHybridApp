import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/Services/test.service'
@Component({
  selector: 'app-t-payment-history',
  templateUrl: './t-payment-history.page.html',
  styleUrls: ['./t-payment-history.page.scss'],
})
export class TPaymentHistoryPage implements OnInit {
  public size: number;  
    public square: number;  
  constructor(private serice:TestService) {  this.size = 16;  
  
}  
  val: any;
  data:any
  getData() {
    this.data= {
      value: this.val
    }
    console.log(this.data)
  }
  ngOnInit() {
  }

}
