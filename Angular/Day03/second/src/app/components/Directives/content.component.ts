import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  flag: boolean = false;
  color: string = 'white';
  names: string[] = ['ahmed', 'ali', 'alaa'];
  products: { id: number; productName: string }[] = [
    { id: 1, productName: 'Book' },
    { id: 2, productName: 'Pen' },
    { id: 3, productName: 'Watch' },
  ];

  toggle() {
    this.flag = !this.flag;
  }
}
