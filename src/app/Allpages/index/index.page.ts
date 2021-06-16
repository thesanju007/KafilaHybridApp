import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoginPopoverComponent } from '../../components/login-popover/login-popover.component'
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(public rout:Router,public popoverController: PopoverController) { }
  slideOpts = {
    autoplay: true
  };
  ngOnInit() {
   
  }
  none=false;
  
  login(){
    this.rout.navigate(['/home'])
  }

  public appPages = [
    { title: 'Login', url: '/home', icon: 'log-in' },
    { title: 'Signup', url: '/home', icon: 'log-out' },
    { title: 'About Us', url: '/about', icon: 'people' },
    { title: 'Contact Us', url: '/contact', icon: 'call' },
    { title: 'Payment Uplaod', url: '/gallery', icon: 'images' },
    
  ];
  
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: LoginPopoverComponent,
      cssClass: 'pop-over-style',
      event: ev,
      translucent: false,
      animated:true,
      backdropDismiss:true
      
    });
   
    await popover.present();
    const { role } = await popover.onDidDismiss();
  }
}
