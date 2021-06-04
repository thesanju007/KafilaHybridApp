import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  constructor() { }
  PG: any [] = [{"name":"wallet","value":false},{"name":"paytm","value":false},{"name":"payu","value":false},{"name":"paymate","value":false},{"name":"hdfc","value":false}];
  dummyList: any [] = []; 
  
  ngOnInit() {}

optionControler(x:string){

  var i=0;
  for( i=0;i<this.PG.length;i++)
  {
    if(x==this.PG[i]["name"])
    {
      this.PG[i]["value"]=true;
    
    }
    else{
      this.PG[i]["value"]=false;

    }

  }
  console.log(this.PG);
  this.dummyList=this.PG;
}
doRefresh(event) {
  console.log('Begin async operation');

  setTimeout(() => {
    
    console.log('Async operation has ended');
    event.target.complete();
  }, 20);
}
}
