import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { createElementCssSelector } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';
import { TestService } from 'src/app/Services/test.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
@Input() Data;
message={
  AGENCY_NAME:"KAFILA",
  AGENT_ID:"18785869",
  P_TYPE:"AIR",
  AMOUNT:0
  };
  constructor() { }
  PG_CTRL:any;
 AGENT_BALANCE=50000;
  default_pg="paytm";
  PG: any []=[{"name":"paytm","status":true,"item":[{"iname":"CC","active":true,"percent":true,"value":"2"},{"iname":"DC","active":true,"percent":true,"value":"1"},{"iname":"NB","active":true,"percent":false,"value":"150"},{"iname":"UPI","active":true,"percent":true,"value":"3"},{"iname":"CASH","active":true,"percent":true,"value":"8"}]},{"name":"payu","status":true,"item":[{"iname":"CC","active":true,"percent":true,"value":"0.5"},{"iname":"DC","active":true,"percent":true,"value":"0.5"},{"iname":"NB","active":true,"percent":true,"value":"0.5"},{"iname":"UPI","active":true,"percent":true,"value":"0.5"},{"iname":"CASH","active":false,"percent":true,"value":"0.5"}]},{"name":"paymate","status":true,"item":[{"iname":"CC","active":true,"percent":true,"value":"0.5"},{"iname":"DC","active":true,"percent":true,"value":"0.5"},{"iname":"NB","active":true,"percent":true,"value":"0.5"},{"iname":"UPI","active":true,"percent":true,"value":"0.5"},{"iname":"CASH","active":true,"percent":true,"value":"0.5"}]},{"name":"hdfc","status":true,"item":[{"iname":"CC","active":true,"percent":true,"value":"0.5"},{"iname":"DC","active":true,"percent":true,"value":"0.5"},{"iname":"NB","active":true,"percent":true,"value":"0.5"},{"iname":"UPI","active":true,"percent":true,"value":"0.5"},{"iname":"CASH","active":true,"percent":true,"value":"0.5"}]}];
  OO={
    PG_NAME:"", 
    PG_COMP:"", 
    PG_PERCENT:"",
    PG_VALUE:"", 
    PG_CHARGE:0,
    AMOUNT_PG:0,
    AMOUNT_WALLET:0,
    NET:0
  };
  itemArr: any[]=[];
  pg_name="";
  selected:string;
  conf=false;
  CD: any;
  chkBox:any;
  input_amount=0;
  AMOUNT_PG=0;
  AMOUNT_WALLET=0
  ngOnInit() {
    this.SetDefaultCtrl();
  }

  SetDefaultCtrl(){
    if(this.AgencyBalanceStatus())
    {
      this.PG_CTRL= false;
      this.conf=true;
      this.chkBox=true;
      this.AMOUNT_WALLET= this.Data.AMOUNT;
    }
    else{
     this.chkBox=true;
     this.PG_CTRL=true;
     this.conf=false; 
     this.AMOUNT_WALLET= this.AGENT_BALANCE;
     this.AMOUNT_PG= this.Data.AMOUNT-this.AGENT_BALANCE;
    }
  }
  AgencyBalanceStatus(){
   
     return this.Data.AMOUNT>this.AGENT_BALANCE? false:true;

  }

optionControler(x:string){

  var i=0;
  for( i=0;i<this.PG.length;i++)
  {
    if(x==this.PG[i]["name"])
    {
     this.pg_name=this.PG[i]["name"];
    this.itemArr= this.PG[i]["item"].filter((e) => { return e.active == true });

    }
    else{
      this.PG[i]["value"]=false;

    }

  }
  this.conf=false;

}
get_calculation($event:MatRadioChange) 
{
  if(this.AgencyBalanceStatus()==true){this.AMOUNT_PG=this.Data.AMOUNT; this.AMOUNT_WALLET=0;}
  var PGC=0;
  var NET =0;
 var  dt = $event.value.split(",");
if(dt[2]==='true')
{
PGC= (this.AMOUNT_PG *(dt[3]/100) );
NET= parseInt(this.AMOUNT_PG.toString()) + (this.AMOUNT_PG *(dt[3]/100) );
}
else
{
  PGC= dt[3];
  NET=  parseInt(this.AMOUNT_PG.toString()) + parseInt(PGC.toString());
}
this.OO.PG_NAME=dt[0];
this.OO.PG_COMP=dt[1];
this.OO.PG_PERCENT=dt[2];
this.OO.PG_VALUE=dt[3];
this.OO.PG_CHARGE=PGC;
this.OO.AMOUNT_PG=this.AMOUNT_PG;
this.OO.AMOUNT_WALLET=this.AMOUNT_WALLET;
this.OO.NET=NET;

this.CD=this.OO;
this.conf=true;
 
}
onConfirm(){
  console.log(this.CD);
}
TogChk(){
  return this.chkBox!=this.chkBox;
}
ToggelChkbox(){
 this.chkBox=this.TogChk();
  if(this.chkBox===true)
    {
      if(this.WalletPGConditon())
      {
        this.ChkboxChecked();
      }
    }
  else
  {

    if(this.WalletPGConditon())
    {
      this.ChkboxUNChecked();
    }

  }
  
}
ToggelChkboxOnButton(){
  
   if(this.chkBox==false)
     {
       if(this.WalletPGConditon())
       {
         this.FilloutputDataForWallet();
       }
     }
   
   
 }
 FilloutputDataForWallet(){
  this.chkBox=true;
  this.conf= true;
  this.PG_CTRL=false;

  this.OO.PG_NAME="";
  this.OO.PG_COMP="";
  this.OO.PG_PERCENT="0";
  this.OO.PG_VALUE="0";
  this.OO.PG_CHARGE=0;
  this.OO.AMOUNT_PG=0;
  this.OO.AMOUNT_WALLET=this.Data.AMOUNT;
  this.OO.NET=this.Data.AMOUNT;
  this.AMOUNT_WALLET=this.Data.AMOUNT;
  this.CD=this.OO;
 }
ChkboxChecked(){
  this.conf= true;
   this.PG_CTRL=false;
}
ChkboxUNChecked(){
  this.conf= false;
   this.PG_CTRL=true;
}
WalletPGConditon()
{
  if(this.AgencyBalanceStatus())
  {return true;}
  else{ return false;}

}
}
