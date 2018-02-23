import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() currentValueEmitter: EventEmitter<number> = new EventEmitter();
  emitNumber: any;
  currentValue = 0;

  constructor() { }

  startGame() {
    console.log('Game Started');
    this.emitNumber = setInterval(() => {
      this.currentValueEmitter.emit(this.currentValue);
      this.currentValue++;
    }, 1000);
  }

  stopGame() {
    console.log('Game Paused');
    clearInterval(this.emitNumber);
  }

  ngOnInit() {
    this.startGame();
  }

}
