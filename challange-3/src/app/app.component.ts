import { Component, Input } from '@angular/core';
import { iif } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'challange3';

  listData: any;


  formData(value: any) {

    if (value == null) {
      this.listData = '';
 
    }
    this.listData=value
    // if (value[2] == 'right') {
    //   this.listDataRight = value
    // }
    // if (value[2] == 'left') {
    //   this.listDataLeft = value
    // }
    console.log(value)
  }

  addItem() {
    //console.log('AddItem: ' + datas)
    //console.log(this.formData)
    // console.log(this.formData)
  }


}
