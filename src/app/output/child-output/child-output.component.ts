import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.scss']
})
export class ChildOutputComponent implements OnInit {
  listStudent = [
    {id: 1, name: 'Hùng'}, {id: 2, name: 'Vô Địch RaCode'}
    ]
  @Output()
  dataFromChild = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.dataFromChild.emit(this.listStudent);
  }

}
