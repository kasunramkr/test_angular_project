import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: '<h1>Name : {{name}}</h1>' +
  '<h3>E mail : {{email}}</h3>' +
  '<h4>Address : {{address.street}},{{address.city}},{{address.country}}</h4>' +
  '<button (click)=toggleSports()>{{showSports ? "Hide Sports" : "Show Sportstoo"}}</button>' +
  '<h1>{{showSport}}</h1>' +
  '<div *ngIf="showSports">' +
    '<h4>Sports</h4>' +
    '<ul>' +
      '<li *ngFor=" let i of sports">{{i}}</li>' +
    '</ul>' +
  '</div>'
})
export class UserComponent {
  name: string;
  email: string;
  address: Address;
  sports: string[];
  showSports: boolean;

  constructor() {
    this.name = 'milinda';
    this.email = 'milindakasun@live.com';
    this.address = {
      street : 'new road',
      city : 'warakapola',
      country : 'Srilanaka'
    };
    this.sports = ['Rugby', 'Baseball', 'Basketball'];
    this.showSports = false;
  }

  toggleSports() {
    if (this.showSports) {
       this.showSports = false;
    } else {
      this.showSports = true;
    }
  }
}

interface Address {
  street: string;
  city: string;
  country: string;
}
