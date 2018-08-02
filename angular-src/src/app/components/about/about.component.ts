import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor( private _player: PlayerService ) { }

  ngOnInit() {
  }

  public computerEnter() {
    document.getElementById('healButton').classList.remove('invisible');
  }

  public computerLeave() {
    document.getElementById('healButton').classList.add('invisible');
  }

  public MPHeal() {
    this._player.restoreMP();
  }

}