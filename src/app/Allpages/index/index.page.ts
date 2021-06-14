import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(public rout:Router) { }
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
    { title: 'Sinup', url: '/home', icon: 'log-out' },
    { title: 'About Us', url: '/about', icon: 'people' },
    { title: 'Contact Us', url: '/contact', icon: 'call' },
    { title: 'Payment Uplaod', url: '/gallery', icon: 'images' },
    
  ];
}
