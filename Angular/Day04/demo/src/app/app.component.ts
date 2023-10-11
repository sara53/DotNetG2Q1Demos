import { Component } from '@angular/core';
import { Iproduct } from './models/iproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  flag: boolean = false;
  dataFromContent: string = '';
  parentData: string = 'Data from Parent';

  products: Iproduct[] = [
    { id: 1, productName: 'Book' },
    { id: 2, productName: 'Pen' },
    { id: 3, productName: 'Watch' },
  ];
  getData(x: any) {
    this.dataFromContent = x;
  }
}
