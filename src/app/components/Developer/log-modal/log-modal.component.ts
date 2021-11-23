import { Component, OnInit } from '@angular/core';
import { ModalController ,NavParams} from '@ionic/angular';
@Component({
  selector: 'app-log-modal',
  templateUrl: './log-modal.component.html',
  styleUrls: ['./log-modal.component.scss'],
})
export class LogModalComponent implements OnInit {

  constructor(public modalController: ModalController,private navParams: NavParams) { }
  b_Id
  pb_Id
  size
  ngOnInit() {
    this.b_Id = this.navParams.data.param;
    console.log(this.b_Id)
    this.size = Object.keys(this.b_Id).length;
    if(this.size>200){
      this.pb_Id=JSON.parse(this.b_Id)
      console.log(this.pb_Id)
    }
  }


  close() {
    this.modalController.dismiss({
      'dismissed': true,
    });
  }

}
