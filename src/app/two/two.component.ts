import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppValues } from '../shared/appValues';
import { Errors } from '../shared/errors';
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent {
  @Input() appValues!: AppValues;
  @Output() next = new EventEmitter<AppValues>();
  @Output() hasErrors = new EventEmitter<Errors>();
  constructor() {}

  getResults() {
    const copyappValue = this.appValues;
    copyappValue.visiblePanel = 'three';
    this.next.emit(copyappValue);

    // let error = {
    //   show: true,
    //   message: 'please enter value',
    // };
    // this.hasErrors.emit(error);
  }
}
