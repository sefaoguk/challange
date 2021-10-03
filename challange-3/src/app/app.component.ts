import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'challange3';

  formData: any;




  addItem() {
    //console.log('AddItem: ' + datas)
    //console.log(this.formData)
  }
  formValue(value:any)
  {
    console.log(value)
    this.formData=value
  }

}
