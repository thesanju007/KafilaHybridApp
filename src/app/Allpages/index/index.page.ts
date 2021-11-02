import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, ToastController, LoadingController } from '@ionic/angular';
import { LoginPopoverComponent } from '../../components/login-popover/login-popover.component';
import { TestService } from '../../Services/test.service'
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
    private tService: TestService,
  ) { }
  slideOpts = {
    autoplay: true,
    initialSlide: 0,
    speed: 1000,
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
        let obj = {
          "TYPE": "AUTH",
          "NAME": "GET_AUTH_TOKEN",
          "STR": [
            {
              "A_ID": modelData.data.cred1,
              "U_ID": modelData.data.cred2,
              "PWD": modelData.data.cred3,
              "MODULE": "B2B",
              "HS": "D"
            }
          ]
        }
        this.tService.postTestData("http://nauth.ksofttechnology.com/API/AUTH", obj).subscribe(result => {
          if (result.STATUS == "SUCCESS") {
            this.rout.navigate(['home/dashboard'])
            localStorage.setItem("Token",result.RESULT)
           
            this.dismiss()
          }
          else{
            this.dismiss()
            alert("Something Bad Happens Pls Try Again !!!!")
          }
         
        });
      }
      else {
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
      // duration: 2000
    }).then(a => {
      a.present().then(() => {
        console.log('');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log(''));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log(''));
  }

  index() {
    // this.rout.navigate(['/index'])
    //   .then(() => {
    //     window.location.reload();
    //   });
    window.location.replace('/index')
  }
  aboutus() {
    this.rout.navigate(['/aboutus'])
      .then(() => {
        window.location.reload();
      });
    //window.location.replace('/aboutus')
  }
  contactus() {
    this.rout.navigate(['/contactus'])
      .then(() => {
        window.location.reload();
      });
    //window.location.replace('/contactus')
  }

}
