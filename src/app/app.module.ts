import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Context } from '@remult/core';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { DisplayAlertErrorErrorHandler } from './common/error-handler';
import { AddUserComponent } from './add-user/add-user.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { CookieAuthorizationService } from './common/authorization-service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{ provide: Context, useClass: Context },
  { provide: ErrorHandler, useClass: DisplayAlertErrorErrorHandler },CookieAuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
