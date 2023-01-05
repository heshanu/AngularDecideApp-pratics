import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppValues } from '../shared/appValues';
import { Errors } from '../shared/errors';
@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
})
export class ThreeComponent implements OnInit {
  @Input() appValues!: AppValues;
  @Output() next = new EventEmitter<AppValues>();
  @Output() resultValues = new EventEmitter<AppValues>();
  @Output() hasErrors = new EventEmitter<Errors>();
  constructor() {}

  ngOnInit(): void {
    this.showResults();
  }

  showResults() {
    const appValueCopy = this.appValues;
    const answersArray = this.appValues.answers;
    const result: string =
      answersArray[Math.floor(Math.random() * answersArray.length)];
    appValueCopy.answer = result;
    //console.log(appValueCopy);
    this.next.emit(appValueCopy);
  }


  onStartOver() {

  this.resultValues.emit();

  }

  doItAgain() {
    this.showResults();
  }
}
