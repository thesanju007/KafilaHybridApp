import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestService } from '../../../Services/test.service'
@Component({
  selector: 'app-f-transactions',
  templateUrl: './f-transactions.page.html',
  styleUrls: ['./f-transactions.page.scss'],
})
export class FTransactionsPage implements OnInit {

  constructor(private tService: TestService) { }
  results: any;
  myValueSub: Subscription;
  ngOnInit() {
    this.myValueSub = this.tService.getTestData("https://reqres.in/api/users?page=2").subscribe(result => {
      this.results = result.data
    });
  }
  ngOnDestroy() {
    if (this.myValueSub) {
      this.myValueSub.unsubscribe();
      console.log("Destroy")
    }
  }

}
