import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  constructor(private common_service:CommonService) { }
  ngOnInit() {}
  Menu(){
    this.common_service.sendClickEvent();
  }
}
