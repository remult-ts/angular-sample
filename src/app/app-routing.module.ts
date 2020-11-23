import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'update-password', component: UpdatePasswordComponent },
  { path: 'add-user', component: AddUserComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
