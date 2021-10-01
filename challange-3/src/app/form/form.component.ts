import { Component, OnInit , Output, EventEmitter, Input} from '@angular/core';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  @Output() data= new EventEmitter();
  constructor() { }

  
  valueFirst:any;
  valueLast:any;

  ngOnInit(): void {
  }
  get(){
    
    this.data.emit()
  }
  deleteAll(){
    console.log(this.valueFirst,this.valueLast)
  }


}
