import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  odds = [];
  evens = [];

  addNumber(eventData: number) {
    if ( eventData % 2 === 0 ) {
      this.evens.push(eventData);
    } else {
      this.odds.push(eventData);
    }
  }

}
