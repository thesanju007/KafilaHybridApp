import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../../Services/test.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  Menu: any;
  clickEventSubs: Subscription
  bigMenu = false;
  name
  Width
  constructor(private route: Router) {


  }


  ngOnInit() {
    let test = sessionStorage.getItem("Menu")
    this.Menu = JSON.parse(test)
    
    this.name = sessionStorage.getItem("Name")
  }

  // ionViewWillEnter() {
  //   setTimeout(() => {
  //     alert("Session Timeout")
  //     this.logout()
  //   }, 1 * 60 * 60 * 500);
  // }

  toggleSubMenu(p) {
    if (p.showDetails) {
      for (let i of this.Menu) {
        if (i.title == p.title) {
          i.showDetails = false;
        }
        else
          i.showDetails = true;
      }
    }
    else {
      p.showDetails = true;
    }
  }



  logout() {
    this.route.navigate(['/ccindex']);
    localStorage.clear();
    sessionStorage.clear();
    console.clear()
  }

}