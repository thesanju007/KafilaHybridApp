import { Component, OnInit } from '@angular/core';
import { TestService } from '../../Services/test.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  constructor(private tService: TestService) { }
  ngOnInit() {}
  Menu(){
    this.tService.sendClickEvent();
  }
}
