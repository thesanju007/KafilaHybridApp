import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { ModalController ,NavParams} from '@ionic/angular';


@Component({
  selector: 'app-rl-certificate-modal',
  templateUrl: './rl-certificate-modal.component.html',
  styleUrls: ['./rl-certificate-modal.component.scss'],
})
export class RlCertificateModalComponent implements OnInit {

  constructor(private navParams: NavParams) { }
  data
  date=new Date(new Date().getTime()).toISOString().split('T')[0];
  ngOnInit() {
    this.data=this.navParams.data.paramID;
    // console.log(this.data)
  }



  // npm install --save pdfmake
  // npm install html-to-pdfmake
  // npm install jspdf --save
}
