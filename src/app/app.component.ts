import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  gameElements = [];

  onGameEvent(gameData: {counter: number}) {

    this.gameElements.push({
      type: gameData.counter % 2 ? 'Odd' : 'Even',
      counter: gameData.counter
    });

  }
}
