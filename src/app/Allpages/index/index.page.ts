import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { TestService } from '../../Services/test.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(public rout: Router, private tService: TestService) { }

  uType
  onCvalue = "Flight"
  ngOnInit() {
    this.tService.getTestData("../../../assets/userType.json").subscribe(result => {
      this.uType = result
    });
  }
  typeVal(e) {
    this.onCvalue = e
  }


}
