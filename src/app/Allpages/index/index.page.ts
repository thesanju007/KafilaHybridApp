import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, ToastController, LoadingController } from '@ionic/angular';
import { LoginPopoverComponent } from '../../components/login-popover/login-popover.component';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(
    public rout: Router,
    public popoverController: PopoverController,
    public toastController: ToastController,
    public loadingController: LoadingController,
  ) { }
  slideOpts = {
    autoplay: true,
    initialSlide: 0,
    speed: 500,
    effect: 'flip',
  };
  ngOnInit() { }
  none = false;

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
      if (modelData.data.cred1 !== "" && modelData.data.cred2 !== "" && modelData.data.cred3 !== "") {
        this.present()
        if (modelData.data.cred1 == "18785869" && modelData.data.cred2 == "pslv" && modelData.data.cred3 == "111000") {
          this.dismiss()
          this.rout.navigate(['home/dashboard'])
        }
        else {
          this.presentToast()
          this.dismiss()
        }
      }
      else if (modelData.data.cred1 == "" || modelData.data.cred2 == "" || modelData.data.cred3 == "") {
        this.dismiss()
        this.blank()
      }
    });
    return await popover.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Wrong Credentials',
      duration: 3000,
    });
    toast.present();
  }

  async blank() {
    const toast = await this.toastController.create({
      message: 'Enter all details',
      duration: 3000,
    });
    toast.present();
  }

  isLoading = false;

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Please wait...',
      mode: 'ios',
      backdropDismiss: false,
      spinner: 'bubbles',
      duration: 2000
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  index() {
    // this.rout.navigate(['/index'])
    //   .then(() => {
    //     window.location.reload();
    //   });
    window.location.replace('/index')
  }
  aboutus() {
    // this.rout.navigate(['/aboutus'])
    //   .then(() => {
    //     window.location.reload();
    //   });
    window.location.replace('/aboutus')
  }
  contactus() {
    // this.rout.navigate(['/contactus'])
    //   .then(() => {
    //     window.location.reload();
    //   });
    window.location.replace('/contactus')
  }

}
