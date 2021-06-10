import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
@Input() Pdata;
  constructor() { }
  default_pg="paytm";
  PG: any []=[{"name":"paytm","status":true,"item":[{"iname":"CC","active":true,"percent":true,"value":"2"},{"iname":"DC","active":true,"percent":true,"value":"1"},{"iname":"NB","active":true,"percent":false,"value":"150"},{"iname":"UPI","active":true,"percent":true,"value":"3"},{"iname":"CASH","active":true,"percent":true,"value":"8"}]},{"name":"payu","status":true,"item":[{"iname":"CC","active":true,"percent":true,"value":"0.5"},{"iname":"DC","active":true,"percent":true,"value":"0.5"},{"iname":"NB","active":true,"percent":true,"value":"0.5"},{"iname":"UPI","active":true,"percent":true,"value":"0.5"},{"iname":"CASH","active":false,"percent":true,"value":"0.5"}]},{"name":"paymate","status":true,"item":[{"iname":"CC","active":true,"percent":true,"value":"0.5"},{"iname":"DC","active":true,"percent":true,"value":"0.5"},{"iname":"NB","active":true,"percent":true,"value":"0.5"},{"iname":"UPI","active":true,"percent":true,"value":"0.5"},{"iname":"CASH","active":true,"percent":true,"value":"0.5"}]},{"name":"hdfc","status":true,"item":[{"iname":"CC","active":true,"percent":true,"value":"0.5"},{"iname":"DC","active":true,"percent":true,"value":"0.5"},{"iname":"NB","active":true,"percent":true,"value":"0.5"},{"iname":"UPI","active":true,"percent":true,"value":"0.5"},{"iname":"CASH","active":true,"percent":true,"value":"0.5"}]}];
  itemArr: any[]=[];
  pg_name="";
  selected:string;
  conf=false;
  CD: any;
  input_amount=5000;
  ngOnInit() {
    
  }

  

optionControler(x:string){

  var i=0;
  for( i=0;i<this.PG.length;i++)
  {
    if(x==this.PG[i]["name"])
    {
     this.pg_name=this.PG[i]["name"];
    this.itemArr= this.PG[i]["item"].filter((e) => { return e.active == true })

    }
    else{
      this.PG[i]["value"]=false;

    }

  }
  this.conf=false;

}
get_calculation($event:MatRadioChange) 
{
  var PGC=0;
  var NET_AMOUNT=0;
 var  dt = $event.value.split(",");
if(dt[2]==='true')
{
PGC= (this.input_amount *(dt[3]/100) );
NET_AMOUNT= this.input_amount + (this.input_amount *(dt[3]/100) );
}
else
{
  PGC= dt[3];
NET_AMOUNT=  this.input_amount + parseInt(PGC.toString());
}
var calcData = { 
  PG_NAME:dt[0], 
  PG_COMP:dt[1],
  PG_PERCENT:dt[2],
  PG_VALUE:dt[3], 
  PG_CHARGE:PGC,
  AMOUNT:this.input_amount,
  NET:NET_AMOUNT

};
this.CD=calcData;
this.conf=true;
 
}
onConfirm(){
  console.log(this.CD);
}
}
