import { Component, OnInit,Input,EventEmitter } from '@angular/core';
import { AppValues } from '../shared/appValues';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  @Input() appValues!:AppValues;
  constructor() { }

  ngOnInit(): void {
  }

}
