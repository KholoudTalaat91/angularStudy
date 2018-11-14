import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtend: boolean =true;
  loaded: boolean = false;

  constructor() { }

  ngOnInit() {
    // setTimeout( () => {
      this.users = [
        {
          firstName: 'John1',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          }
        },
        {
          firstName: 'kev',
          lastName: 'Doew',
          age: 60,
          address: {
            street: '51 Main st',
            city: 'Boston',
            state: 'MA'
          }
        },
        {
          firstName: 'stev',
          lastName: 'Doen',
          age: 70,
          address: {
            street: '52 Main st',
            city: 'Boston',
            state: 'MA'
          }
        }
      ];

      this.loaded = true;
    // }, 2000)
    
    // this.showExtend = false;

    this.addUser({
      firstName: 'dived',
        lastName: 'Donal',
        // age: 75,
        // address: {
        //   street: '53 Main st',
        //   city: 'Boston',
        //   state: 'MA'
        // }
    })

   
    
  }

  addUser(user:User){
   
      this.users.push(user);
    
  }

}
