import { Component } from '@angular/core';
import { Context } from '@remult/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'remult-angular-sample';
  constructor(context: Context) { }
}
