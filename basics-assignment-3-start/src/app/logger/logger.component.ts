import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  showDetails = false;
  timesClicked = 0;
  eachClick = [];

  getTime() {
    const time = new Date();
    return time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
  }
  onToggleDetails(){
    this.showDetails = !this.showDetails;
    this.timesClicked++;
    this.eachClick.push( this.getTime() );
  }

  constructor() { }

  ngOnInit() {
  }

}
