import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-t-show',
  templateUrl: './t-show.page.html',
  styleUrls: ['./t-show.page.scss'],
})
export class TShowPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  go(){
    this.route.navigate(['home/tpax'])
  }
}
