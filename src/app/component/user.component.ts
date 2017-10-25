import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: '<h1 xmlns="http://www.w3.org/1999/html">Name : {{name}}</h1>' +
  '<h3>E mail : {{email}}</h3>' +
  '<h4>Address : {{address.street}},{{address.city}},{{address.country}}</h4>' +
  '<button (click)=toggleSports()>{{showSports ? "Hide Sports" : "Show Sports"}}</button>' +
  '<div *ngIf="showSports">' +
    '<h4>Sports</h4>' +
    '<ul>' +
      '<li *ngFor=" let sp of sports; let i = index">{{sp}} <button (click)="deleteSport(i)" > Delete</button></li>' +
    '</ul>' +
    '<form (submit)="addSport(sport.value)">' +
    '<label>Add Sport : </label>' +
    '<input type="text" #sport/><br/>' +
    '</form>' +
  '</div>' +
  '<h3>Edit User</h3>' +
  '<form>' +
    '<label>Name : </label>' +
    '<input type="text" name="name" [(ngModel)] ="name"/><br/>' +
    '<label>Email : </label>' +
    '<input type="text" name="email" [(ngModel)] ="email"/><br/>' +
  '</form>'
})
export class UserComponent {
  name: string;
  email: string;
  address: Address;
  sports: string[];
  showSports: boolean;
  newSport: string;

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
    this.newSport = '';
  }

  toggleSports() {
    if (this.showSports) {
       this.showSports = false;
    } else {
      this.showSports = true;
    }
  }

  addSport(sport) {
    this.sports.push(sport);
  }

  deleteSport(i) {
    this.sports.splice(i, 1 );
  }
}

interface Address {
  street: string;
  city: string;
  country: string;
}
