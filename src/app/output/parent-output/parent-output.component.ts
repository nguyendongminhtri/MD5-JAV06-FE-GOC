import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-output',
  templateUrl: './parent-output.component.html',
  styleUrls: ['./parent-output.component.scss']
})
export class ParentOutputComponent implements OnInit {
listStudent = [];
  constructor() { }

  ngOnInit(): void {
  }

  showListStudent($event: any) {
    console.log('event', $event);
    this.listStudent = $event;
  }
}
