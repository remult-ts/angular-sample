import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Context } from '@remult/core';
import { CookieAuthorizationService } from '../common/authorization-service';
import { Users } from '../users/users';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private auth:CookieAuthorizationService,private context:Context,private router:Router) { }

  ngOnInit() {
  }
  name = "";
  async signIn() {
    const token = await Users.signIn(this.name);
    this.auth.afterSignIn(token);
    alert("Hello " + this.context.user.name);
    this.router.navigateByUrl('/users');
    
  }

}
