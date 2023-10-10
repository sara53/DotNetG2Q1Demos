import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  studentName: string = '';
  selectValue: string = '';
  // getInputValue(e: any) {
  //   this.studentName = e.target.value;

  //   console.log(e.target.value);
  // }

  test(ele: any) {
    console.log(ele);
  }
}
