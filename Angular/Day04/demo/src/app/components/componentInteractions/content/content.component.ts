import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  contentData: string = 'Data From content Component';

  @Output() myEvent = new EventEmitter();

  ngOnInit(): void {
    this.myEvent.emit(this.contentData);
  }
}
