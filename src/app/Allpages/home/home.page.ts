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
  bigMenu=false;
  toggleMenu(){ 
   
    if(this.bigMenu==true){        
      this.bigMenu=false
    }
    this.bigMenu=true
  
   
    
  }


  isRemainderF=true
  j:any
  submn(d:any,i:any){
    this.j=i
    this.isRemainderF=!this.isRemainderF
  }
  
}
