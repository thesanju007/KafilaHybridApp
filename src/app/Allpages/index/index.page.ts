import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor() { }
  slideOpts = {
    autoplay: true
  };
  ngOnInit() {
  }
  none=false;
  sidePanel(){
    this.none=true
  }

  public appPages = [
    { title: 'Login', url: '/home', icon: 'person-circle' },
    { title: 'Sinup', url: '/home', icon: 'person-circle' },
    { title: 'About Us', url: '/about', icon: 'people' },
    { title: 'Contact Us', url: '/contact', icon: 'call' },
    { title: 'Payment Uplaod', url: '/gallery', icon: 'images' },
    
  ];
}
