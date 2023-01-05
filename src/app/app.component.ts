import { Component, OnInit } from '@angular/core';
import answersValues from './shared/answers.json';
import { AppValues } from './shared/appValues';
import { Errors } from './shared/errors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  error!: Errors;
  show!: boolean;
  message!: string;
  appValues: AppValues = {
    visiblePanel: 'one',
    question: '',
    mode: false,
    answers: answersValues.answers,
    custom: [],
    answer: 'null',
  };

  handleNext(value: AppValues) {
    this.appValues = value;
    console.log(this.appValues);
  }

  handleErrors(error: any) {
    this.show = error.show;
    this.message = error.message;

    console.log(this.message);
  }
}
