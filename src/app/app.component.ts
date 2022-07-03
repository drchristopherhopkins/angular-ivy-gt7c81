import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  carousel1: string = "/assets/img/carousel-1.jpg";
}
