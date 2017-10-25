import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
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
