import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatInput } from '@angular/material/input';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  constructor() { }

  @Output() listData = new EventEmitter;

  firstName: any;
  lastName: any;




  ngOnInit(): void {

  }


  listAdd() {

    //let data = [this.firstName, this.lastName,'right']
    let data = [this.firstName, this.lastName]
    this.listData.emit(data)
  }
  listDelete() {
    this.listData.emit()
  }
}
