import { Component, OnInit } from '@angular/core';
import { ModalController ,NavParams} from '@ionic/angular';
@Component({
  selector: 'app-refund',
  templateUrl: './refund-to-agent.component.html',
  styleUrls: ['./refund-to-agent.component.scss'],
})
export class RefundToAgentComponent implements OnInit {
  data: any
  constructor(public modalController: ModalController,private navParams: NavParams) { }
  b_Id
  ngOnInit() {
    let test = localStorage.getItem("refund")
    this.data = JSON.parse(test)
    this.b_Id = this.navParams.data.paramID;

  }
  close() {
    this.modalController.dismiss({
      'dismissed': true,
      "Book_ID": this.b_Id
    });
  }
}
