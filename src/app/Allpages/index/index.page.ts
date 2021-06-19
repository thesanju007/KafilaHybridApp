import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoginPopoverComponent } from '../../components/login-popover/login-popover.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(public rout: Router, public popoverController: PopoverController) { }
  slideOpts = {
    autoplay: true
  };
  ngOnInit() {

  }
  none = false;

  // login() {
  //   this.rout.navigate(['/home'])
  // }

  public appPages = [
    { title: 'Login', url: '/home', icon: 'log-in' },
    { title: 'Signup', url: '/home', icon: 'log-out' },
    { title: 'About Us', url: '/about', icon: 'people' },
    { title: 'Contact Us', url: '/contact', icon: 'call' },
    { title: 'Payment Uplaod', url: '/gallery', icon: 'images' },

  ];
  modelData_data: any;


  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: LoginPopoverComponent,
      event: ev,
      cssClass: 'popover_setting',
      translucent: true,
      componentProps: {
        'model_title': "Nomadic model's reveberation"
      }
    });


    popover.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData_data = modelData.data;
        console.log('Modal Data : ' + this.modelData_data);
      }
    });

    return await popover.present();
  }



}
