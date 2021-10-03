import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  constructor() { }
  @Output() formOutput = new EventEmitter();
  @Input() formInput:any=[];
  firstName: any;
  lastName: any;



  ngOnInit(): void {
  }

  input() {
    // this.data=[this.firstName,this.lastName]
    // console.log(this.data)
    this.formInput.push(this.firstName,this.lastName);
    this.formOutput.emit(this.formInput)
    //this.formOutput.emit(this.formInput)
  }
  clear(){
   
  }


}
