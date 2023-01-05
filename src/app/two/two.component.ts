import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { AppValues } from '../shared/appValues';
import { Errors } from '../shared/errors';
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent {
  @ViewChild('custom') custom!: ElementRef<HTMLInputElement>;
  @Input() appValues!: AppValues;
  @Output() next = new EventEmitter<AppValues>();
  @Output() hasErrors = new EventEmitter<Errors>();
  constructor() {}

  validateResults() {
    if (this.appValues.mode) {
      if (this.appValues.custom.length > 1) {
        return true;
      }
      return false;
    } else {
      return true;
    }
  }

  changeMode() {
    const copyappValue: AppValues = this.appValues;
    copyappValue.mode = true;
    this.next.emit(copyappValue);
  }

  addCustomAnswer() {
    if (this.custom.nativeElement.value !== '') {
      let copyappValues = this.appValues;
      console.log(this.custom.nativeElement.value);
      copyappValues.custom.push(this.custom.nativeElement.value);
      this.next.emit(copyappValues);
      console.log(copyappValues.custom);
    } else {
      let error = {
        show: true,
        message: 'please enter value',
      };
      this.hasErrors.emit(error);
    }
    //this.next.emit(n);
  }

  getResults() {
    if (this.validateResults()) {
      const copyappValue = this.appValues;
      copyappValue.visiblePanel = 'three';
      this.next.emit(copyappValue);
    } else {
      let error = {
        show: true,
        message: 'u nedd at least two answers',
      };
      this.hasErrors.emit(error);
    }

    // let error = {
    //   show: true,
    //   message: 'please enter value',
    // };
    // this.hasErrors.emit(error);
  }
}
