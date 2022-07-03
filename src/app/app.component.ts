import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ '../css/bootstrap.min.css',
  '../css/style.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
