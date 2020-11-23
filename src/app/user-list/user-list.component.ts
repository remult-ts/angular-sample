import { Component, OnInit } from '@angular/core';
import { Context } from '@remult/core';
import { Users } from '../users/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private context: Context) { }
  users: Users[] = [];
   ngOnInit() {
   this.loadUsers();
  }
  async loadUsers(){
    this.users = await this.context.for(Users).find({
      orderBy: u => u.name
    });
  }
  async deleteUser(user:Users){
    await user.delete();
    this.loadUsers();
}

}
