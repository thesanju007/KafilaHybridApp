import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/Services/test.service'

@Component({
  selector: 'app-t-cancellation-history',
  templateUrl: './t-cancellation-history.page.html',
  styleUrls: ['./t-cancellation-history.page.scss'],
})
export class TCancellationHistoryPage implements OnInit {
  public data;  

  constructor(private service:TestService) {debugger;  
    this.data = service.getOption();  
  console.log(this.data);
  }

  ngOnInit() {
  }

}
