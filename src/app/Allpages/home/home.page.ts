import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../../Services/test.service'
import { Subscription } from 'rxjs'
import { Platform } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  Menu: any;
  clickEventSubs: Subscription
  bigMenu = false;
  credTrue = false
  moreOption = true
  constructor(private route: Router, private tService: TestService, public platform: Platform,) {
    this.clickEventSubs = this.tService.getClickEvent().subscribe(() => {
      this.toggleMenu();
    })

  }

  dataFromBackend = [{ "id": 1 }, { "id": 3 }]

  ngOnInit() {
    this.tService.getTestData("../../../assets/sideMenu.json").subscribe(result => {
      this.Menu = result
      result[4].active = false
    });

    // window.addEventListener("keyup", disableF5);
    // window.addEventListener("keydown", disableF5);
    // function disableF5(e: any) {
    //   if ((e.which || e.keyCode) == 116 || ((e.which || e.keyCode) == 82))
    //     e.preventDefault();
    // };

  }

  ionViewWillEnter() {
    setTimeout(() => {
      alert("Session Timeout")
      location.replace("/index")
    }, 1 * 60 * 60 * 500);
  }


  logout(){
    location.replace("/index")
  }

  
  toggleMenu() {
    if (this.bigMenu == true) {
      this.bigMenu = !this.bigMenu
    }
    this.bigMenu = !this.bigMenu
  }


  toggleSubMenu(p) {
    this.credTrue = false
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


  myAccount() {
    this.bigMenu = false;
    this.credTrue = false
    for (let i of this.Menu) {
      i.showDetails = true
    }
  }


  set_cre = new FormGroup({
    cre1: new FormControl('', [Validators.required]),

  })

  checkCredentials() {
    if (this.set_cre.value.cre1 == "12345") {
      this.credTrue = false
      this.moreOption = false
      this.Menu[4].active = true
    }

  }

}