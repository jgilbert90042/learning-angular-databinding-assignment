import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

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
    console.log(this.counter);
  }

}
