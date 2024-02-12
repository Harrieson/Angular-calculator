import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  calValue: number = 0;
  funcT: any = '?'
  calNumber: string = 'noValue';

  onClick(val: string, type: any ) {
    if(type == 'number') {
      this.onNumberClick(val)
    } else if ( type == 'function') {
      this.onFunctionClick(val)
    }
  }
  onFunctionClick(val: string){

  }
  onNumberClick(val: string){
    if(this.calNumber !== 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }

    this.calValue = parseFloat(this.calNumber);
  }
}

