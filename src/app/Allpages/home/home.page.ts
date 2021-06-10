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
  Menu:any;
  clickEventSubs:Subscription
  bigMenu=false;
  constructor(private route: Router,private tService: TestService) {
    this.clickEventSubs=this.tService.getClickEvent().subscribe(()=>{
      this.toggleMenu();
    })


  
  }
  ngOnInit() {
    this.tService.getTestData("../../../assets/sideMenu.json").subscribe(result=>{
      this.Menu=result
    });
   
  }
  ionViewWillEnter()
  {
    setTimeout(() => {
      alert("Session Timeout")
      this.route.navigate(['index']);
    }, 6*60*60*500);
  }
  toggleMenu(){ 
    if(this.bigMenu==true){        
      this.bigMenu=!this.bigMenu
    }
    this.bigMenu=!this.bigMenu
  }
  Flight:any
  Train:any
  Hotel:any
  toggleDetails(p) {
    if (p.showDetails) {
      if(this.Menu[0].title==p.title){
        this.Menu[0].showDetails = false;
        this.Menu[1].showDetails= true;
        this.Menu[2].showDetails= true;
      }else if(this.Menu[1].title==p.title){
        this.Menu[1].showDetails= false;
        this.Menu[0].showDetails= true;
        this.Menu[2].showDetails= true;
      }
      else if(this.Menu[2].title==p.title){
        this.Menu[2].showDetails = false;
        this.Menu[0].showDetails= true;
        this.Menu[1].showDetails= true;
      }
      else
      p.showDetails = false;    
    }
    else {
      p.showDetails = true;  
    }
  }

}
