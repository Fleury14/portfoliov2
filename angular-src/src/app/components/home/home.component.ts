import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player';
import { Enemy } from '../../interfaces/enemy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public enemy:Enemy;

  constructor(private _player: PlayerService) { }

  ngOnInit() {
    this.enemy = this._player.enemy;
  }

}