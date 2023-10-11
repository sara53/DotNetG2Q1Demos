import { Component, Input, OnDestroy, OnInit, OnChanges } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy, OnChanges {
  @Input() myFlag: boolean = false;
  componentTitle: string = 'Login Component';
  constructor() {
    console.log('1-ctor');
  }

  ngOnChanges() {
    if (this.myFlag) {
      this.componentTitle = 'Register Component';
    } else {
      this.componentTitle = 'Login Component';
    }
  }
  ngOnDestroy(): void {}
  ngOnInit(): void {
    console.log('2-onInit fired');
  }
  @Input() loginData: string = '';
  @Input() list: Iproduct[] = [];
}
