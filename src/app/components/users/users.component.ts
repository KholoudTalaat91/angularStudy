import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User ={
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    },
  };
  users: User[];
  showExtend: boolean =true;
  loaded: boolean = false;
  // enableAdd: boolean = false;
  currentClasses: boolean = true;
  showExtended: boolean = true;
  showUserForm: boolean = false;
  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'kev',
          lastName: 'Doew',
          age: 60,
          address: {
            street: '51 Main st',
            city: 'Boston',
            state: 'MA'
          },
          isActive: false,
          registered: new Date('03/12/2018 06:30:00'),
          hide:true
        },
        {
          firstName: 'stev',
          lastName: 'Doen',
          age: 70,
          address: {
            street: '52 Main st',
            city: 'Boston',
            state: 'MA'
          },        
          isActive: true,
          registered: new Date('01/02/2017 05:30:00'),
          hide:true
        }
      ];
      this.loaded = true;
  }
  addUser(){
    this.user.isActive = true;
    this.user.hide = false;
    this.user.registered= new Date(),
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      },
    };
  }
  onSubmit(e){
    e.preventDefault();
  } 
}
