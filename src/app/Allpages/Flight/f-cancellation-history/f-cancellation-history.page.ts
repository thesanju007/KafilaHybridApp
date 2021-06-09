import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-cancellation-history',
  templateUrl: './f-cancellation-history.page.html',
  styleUrls: ['./f-cancellation-history.page.scss'],
})
export class FCancellationHistoryPage implements OnInit {

  constructor() { }
  test:boolean=false
  ngOnInit() {
    console.log(this.test)
  }
  array=[
    {"PG_PERCENT":true,"PG_VALUE":10},
    {"PG_PERCENT":true,"PG_VALUE":11},
    {"PG_PERCENT":false,"PG_VALUE":12}
  ]
  state(c){
    console.log(c)
  }
  
}
