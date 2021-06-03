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
  bigMenu:any;
  toggleMenu(){ 
    if(this.bigMenu==true){        
      this.bigMenu=!this.bigMenu
    }
    this.bigMenu=!this.bigMenu
  }


  subMenu=true
  j:any
  open:any
  submn(i:any){
    console.log(i)
    this.open=!this.open

  }

}
