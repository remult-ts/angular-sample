import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Context } from '@remult/core';
import { CookieAuthorizationService } from './common/authorization-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'remult-angular-sample';
  constructor(public context: Context, private auth: CookieAuthorizationService,private router:Router) {

  }
  SignOut(){
    this.auth.signOut();
    this.router.navigateByUrl('/sign-in');
    
  }
}
