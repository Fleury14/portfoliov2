import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  constructor(private _router: Router, private _player: PlayerService) { }

  ngOnInit() {
  }

  public luckyEnter() {
    document.getElementById('healButton').classList.remove('invisible');
  }

  public luckyLeave() {
    document.getElementById('healButton').classList.add('invisible');
  }

  public luckyHeal() {
    this._router.navigateByUrl('home');
    this._player.healCommand(1);
  }

}