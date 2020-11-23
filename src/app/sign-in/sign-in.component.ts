import { Component, OnInit } from '@angular/core';
import { Users } from '../users/users';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name = "";
  async signIn() {
    const user = await Users.signIn(this.name);
    alert("Hello " + user.name);
  }

}
