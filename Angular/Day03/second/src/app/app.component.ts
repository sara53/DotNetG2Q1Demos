import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  componentTitle: string = 'Login Component';
  flag: boolean = true;

  imgSrc: string = '4.jpg';

  imgSrc2: string = 'assets/imgs/3.jpg';

  show() {
    this.imgSrc = '3.jpg';
  }
}
