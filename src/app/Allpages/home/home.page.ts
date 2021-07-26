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

  constructor(private route: Router, private tService: TestService) {
    this.clickEventSubs = this.tService.getClickEvent().subscribe(() => {
      this.toggleMenu();
    })
  }


  ngOnInit() {
    let test = sessionStorage.getItem("Menu")
   this.Menu = JSON.parse(test)
    
     
    console.log(this.Menu)
  }


  toggleMenu() {
    if (this.bigMenu == true) {
      this.bigMenu = !this.bigMenu
    }
    this.bigMenu = !this.bigMenu
  }

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
  }

}