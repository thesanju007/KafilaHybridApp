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
      translucent: false,
      mode: 'ios',     
    });


    popover.onDidDismiss().then((modelData) => {
      if (modelData!== null) {
        if (modelData.data.cre1 == "18785869" && modelData.data.cre2 == "pslv" && modelData.data.cre3 == "111000") {
          this.rout.navigate(['home/dashboard'])
        }
        else {
          alert("Wrong Credentials")
        }
      }
    });



    return await popover.present();
  }



}
