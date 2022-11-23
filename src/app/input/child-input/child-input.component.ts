import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.scss']
})
export class ChildInputComponent implements OnInit {
@Input()
dataFromParent: any;
  constructor() { }

  ngOnInit(): void {
  }

}
