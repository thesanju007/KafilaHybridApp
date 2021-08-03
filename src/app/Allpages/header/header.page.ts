import { Component, OnInit } from '@angular/core';
import { TestService } from '../../Services/test.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  name
  constructor(private tService: TestService,private route: Router) { }
  ngOnInit() {
    this.name = sessionStorage.getItem("Name")

  }
  Menu() {
    this.tService.sendClickEvent();
  }
  logout() {
    this.route.navigate(['/ccindex']);
    localStorage.clear();
    sessionStorage.clear();
    console.clear()
  }
}
