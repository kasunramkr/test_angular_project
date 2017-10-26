import { Component } from '@angular/core';
import {PostsServices} from '../services/posts.services';

@Component({
  moduleId: module.id,
  selector: 'app-user',
  templateUrl: 'user.component.html',
  providers: [PostsServices],
})
export class UserComponent {
  name: string;
  email: string;
  address: Address;
  sports: string[];
  showSports: boolean;
  newSport: string;
  posts: Posts[];

  constructor(private postsServices: PostsServices) {
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
    this.postsServices.getPost().subscribe(posts => {
      this.posts = posts;
    });
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

interface Posts {
  userId: string;
  id: string;
  title: string;
  body: string;
}
