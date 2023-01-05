import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { AppValues } from '../shared/appValues';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
})
export class ThreeComponent implements OnInit {
  @Input() appValues!: AppValues;
  constructor() {}

  ngOnInit(): void {}
}
