import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-f-transactions',
  templateUrl: './f-transactions.page.html',
  styleUrls: ['./f-transactions.page.scss'],
})
export class FTransactionsPage implements OnInit {

  constructor() { }
  results: any;
  myValueSub: Subscription;
  ngOnInit() {
    // this.myValueSub = this.tService.getTestData("https://reqres.in/api/users?page=2").subscribe(result => {
    //   this.results = result.data
    //   console.log(result)
    // });
  }
  ngOnDestroy() {
    // if (this.myValueSub) {
    //   this.myValueSub.unsubscribe();
    //   console.log("Destroy")
    // }
  }

}
