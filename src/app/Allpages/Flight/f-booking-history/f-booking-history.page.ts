import { OnInit, Component } from '@angular/core';
import { TestService } from '../../../Services/test.service'
@Component({
  selector: 'app-f-booking-history',
  templateUrl: './f-booking-history.page.html',
  styleUrls: ['./f-booking-history.page.scss'],
})
export class FBookingHistoryPage implements OnInit {
  constructor(private tService: TestService) {
  }

  x:any
  ngOnInit() {
    this.x=this.tService.sendData()
    console.log(this.x)
  }

}
