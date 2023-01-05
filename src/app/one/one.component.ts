import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AppValues } from '../shared/appValues';
import { Errors } from '../shared/errors';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
  @Input() appValues!: AppValues;
  @Output() next= new EventEmitter<AppValues>();
  @Output() hasErrors= new EventEmitter<Errors>();
  onAddQuestion(question: HTMLInputElement) {
    const appValueCopy: AppValues = this.appValues;
    if (question.value !=='') {
      appValueCopy.visiblePanel = 'two';
      appValueCopy.question = question.value;
      this.next.emit(appValueCopy);
    } else {
      let error={
        show: true,
        message: 'please enter value',
      }
      this.hasErrors.emit(error);
    }
  }
  constructor() {}
  ngOnInit(): void {}
}
