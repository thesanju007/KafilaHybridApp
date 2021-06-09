import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-payment-history',
  templateUrl: './f-payment-history.page.html',
  styleUrls: ['./f-payment-history.page.scss'],
})
export class FPaymentHistoryPage implements OnInit {

  constructor() { }

  PG: any []=[
    {"name":"paytm","status":true,"item":[
      {"iname":"CC","active":true,"percent":true,"value":"0.5"},
      {"iname":"DC","active":true,"percent":true,"value":"0.5"},
      {"iname":"NB","active":true,"percent":true,"value":"0.5"},
      {"iname":"UPI","active":true,"percent":true,"value":"0.5"},
      {"iname":"CASH","active":true,"percent":true,"value":"0.5"}]
    },
    {"name":"payu","status":true,"item":[
      {"iname":"CC","active":true,"percent":true,"value":"0.5"},
      {"iname":"DC","active":true,"percent":true,"value":"0.5"},
      {"iname":"NB","active":true,"percent":true,"value":"0.5"},
      {"iname":"UPI","active":true,"percent":true,"value":"0.5"},
      {"iname":"CASH","active":false,"percent":true,"value":"0.5"}]
    },
    {"name":"paymate","status":true,"item":[
      {"iname":"CC","active":true,"percent":true,"value":"0.5"},
      {"iname":"DC","active":true,"percent":true,"value":"0.5"},
      {"iname":"NB","active":true,"percent":true,"value":"0.5"},
      {"iname":"UPI","active":true,"percent":true,"value":"0.5"},
      {"iname":"CASH","active":true,"percent":true,"value":"0.5"}]
    },
    {"name":"hdfc","status":true,"item":[
      {"iname":"CC","active":true,"percent":true,"value":"0.5"},
      {"iname":"DC","active":true,"percent":true,"value":"0.5"},
      {"iname":"NB","active":true,"percent":true,"value":"0.5"},
      {"iname":"UPI","active":true,"percent":true,"value":"0.5"},
      {"iname":"CASH","active":true,"percent":true,"value":"0.5"}]
    }
  ];

  itemArr: any[]=[];
  pg_name="";
  selected:string;
  ngOnInit() {}

  optionControler(x:string){    
    for(let i=0;i<this.PG.length;i++)
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
  

  }
  get_calculation(event) {
    console.log(event.target.value);
  }

}
