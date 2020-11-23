import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Context } from '@remult/core';
import { Users } from '../users/users';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private context:Context,private router:Router) { }
  newUser = this.context.for(Users).create();
  ngOnInit() {
  }
  async addTheUser(){
    await this.newUser.save();
    this.router.navigateByUrl('/users');


  }

}
