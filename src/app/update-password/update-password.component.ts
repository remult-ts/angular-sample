import { Component, OnInit } from '@angular/core';
import { Context } from '@remult/core';
import { UpdatePasswordController } from './update-password.controller';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  constructor(private context:Context) { }
  controller = new UpdatePasswordController(this.context);
  async updatePassword() {
    await this.controller.SavePassword();
    alert("Password saved");
  }

  ngOnInit() {
  }

}
