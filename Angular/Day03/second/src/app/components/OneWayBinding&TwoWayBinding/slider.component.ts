import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  imgList: string[] = [
    'assets/imgs/1.jpg',
    'assets/imgs/2.jpg',
    'assets/imgs/3.jpg',
    'assets/imgs/4.jpg',
  ];

  i: number = 0;
  imgSrc: string = 'assets/imgs/1.jpg';

  show() {
    this.i++;
    if (this.i == this.imgList.length) {
      this.i = 0;
    }
    this.imgSrc = this.imgList[this.i];
  }
}
