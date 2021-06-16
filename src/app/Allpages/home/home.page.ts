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
  // type
  credTrue = false
  more = true
  constructor(private route: Router, private tService: TestService, public platform: Platform,) {
    this.clickEventSubs = this.tService.getClickEvent().subscribe(() => {
      this.toggleMenu();
    })
  }

  ngOnInit() {
    this.tService.getTestData("../../../assets/sideMenu.json").subscribe(result => {
      this.Menu = result
      this.Menu[4].active = false

    });

    // const width = this.platform.width();
    // this.sideMenu(width);
    window.addEventListener("keyup", disableF5);
    window.addEventListener("keydown", disableF5);

    function disableF5(e: any) {
      if ((e.which || e.keyCode) == 116 || ((e.which || e.keyCode) == 82))
        e.preventDefault();
    };

  }

  ionViewWillEnter() {
    setTimeout(() => {
      alert("Session Timeout")
      this.route.navigate(['index']);
    }, 1 * 60 * 60 * 500);
  }
  toggleMenu() {
    if (this.bigMenu == true) {
      this.bigMenu = !this.bigMenu
    }
    this.bigMenu = !this.bigMenu
  }

  Flight: any
  Train: any
  Hotel: any
  toggleDetails(p) {
    this.credTrue=false
    if (p.showDetails) {
      if (this.Menu[0].title == p.title) {
        this.Menu[0].showDetails = false;
        this.Menu[1].showDetails = true;
        this.Menu[2].showDetails = true;

        this.Menu[4].showDetails = true;
        
      } else if (this.Menu[1].title == p.title) {
        this.Menu[0].showDetails = true;
        this.Menu[1].showDetails = false;
        this.Menu[2].showDetails = true;

        this.Menu[4].showDetails = true;
      }
      else if (this.Menu[2].title == p.title) {
        this.Menu[0].showDetails = true;
        this.Menu[1].showDetails = true;
        this.Menu[2].showDetails = false;

        this.Menu[4].showDetails = true;
      }

      else if (this.Menu[4].title == p.title) {
        this.Menu[0].showDetails = true;
        this.Menu[1].showDetails = true;
        this.Menu[2].showDetails = true;

        this.Menu[4].showDetails = false;
      }

      else
        p.showDetails = false;
    }
    else {
      p.showDetails = true;

    }
  }

  toggleOff() {
    this.bigMenu = false;
    this.credTrue=false
    for (let i of this.Menu) {
      i.showDetails = true
    }
  }

  // @HostListener('window:resize', ['$event'])
  // private onResize(event) {
  //   const newWidth = event.target.innerWidth;
  //   this.sideMenu(newWidth);
  // }
  // sideMenu(width) {
  //   if (width > 768) {
  //     this.type = 'push'
  //   }
  //   this.type = 'overlay'  
  // }

  set_cre = new FormGroup({
    cre1: new FormControl('', [Validators.required]),

  })
  checkCredentials() {
    if (this.set_cre.value.cre1 == "12345") {
      this.credTrue = false
      this.more = false
      this.Menu[4].active = true

    }

  }

}