import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameEvent = new EventEmitter<{counter: number}>();

  interval;
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    console.log('Start game clicked');
    this.interval = setInterval(() => { this.intervalFunc(); }, 1000);
  }

  onStopGame() {
    console.log('Stop game clicked');
    clearInterval(this.interval);
  }

  intervalFunc() {
    this.counter += 1;
    this.gameEvent.emit({ counter: this.counter });
  }

}
