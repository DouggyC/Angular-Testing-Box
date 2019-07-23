import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.css']
})
export class InteractionsComponent implements OnInit {
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  fireEvent() {
    this.childEvent.emit('Hello Parent');
  }
}
