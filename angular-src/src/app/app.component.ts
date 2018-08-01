import { Component, OnInit } from '@angular/core';
import { PlayerService } from './services/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'app';

  constructor (private _player: PlayerService) {}

  ngOnInit(): void {
    this._player.initializePlayer();
    this._player.getEnemy();
  }

}
