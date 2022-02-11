import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private subject = new Subject<any>();
  constructor() { }


  sendClickEvent() {
    this.subject.next();
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  holdData:any
  getData(recieve) {
    this.holdData = recieve
  }

  sendData() {
    return this.holdData
  }


  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
