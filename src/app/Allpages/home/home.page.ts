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
    if (window.screen.width <768) { 
      this.smallMenu=false
      this.bigMenu=true
    }
  }

  ionViewWillEnter()
  {
    setTimeout(() => {
      alert("Session Timeout")
      this.route.navigate(['index']);
    }, 6*60*60*500);
  }
  bigMenu=true;
  smallMenu=false;
  toggleMenu(){ 
    if (window.screen.width >768) {
      if(this.bigMenu==true){
        this.smallMenu=true
        this.bigMenu=false
      }
      else{
        this.smallMenu=false
        this.bigMenu=true
      }

    }
    else if (window.screen.width <768) {
      if(this.bigMenu==true){        
        this.bigMenu=false
      }
      this.bigMenu=true
    }
  }


  isRemainderF=true
  j:any
  submn(d:any,i:any){
    this.j=i
    this.isRemainderF=!this.isRemainderF
  }
  
}
