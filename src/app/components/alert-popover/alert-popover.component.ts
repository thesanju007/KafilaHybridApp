import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-alert-popover',
  templateUrl: './alert-popover.component.html',
  styleUrls: ['./alert-popover.component.scss'],
})
export class AlertPopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController, private navParams: NavParams) { }
  Id: any
  ngOnInit() {
    this.Id = this.navParams.data.paramID;

  }

  async navigate() {
    await this.popoverController.dismiss();
  }
}
