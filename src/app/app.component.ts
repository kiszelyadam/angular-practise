import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cats';

  isCatsFirst = true;
  isCatsSecond = false;

  catType = 'british short';


  changeVisible(value: string): void {
    if(value === 'first') {
      this.isCatsFirst = true;
      this.isCatsSecond = false;
      
    } else {
      this.isCatsFirst = false;
      this.isCatsSecond = true;
    }
  }

  changeType(): void {
    this.catType = 'scotish';
  }
}
