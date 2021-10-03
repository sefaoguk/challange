import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Output() listOutput = new EventEmitter();
  @Input() listInput:any;

  ngOnInit(): void {
  }


  addItem() {

    this.listOutput.emit()
   // console.log(this.listInput)
  }


}
