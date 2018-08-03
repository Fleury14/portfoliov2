import { Component, OnInit } from '@angular/core';
import { PlayerService } from './services/player';
import { ActivatedRoute, Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'app';
  public hideMenu = false;

  constructor (private _player: PlayerService, private _router: Router) {}

  ngOnInit(): void {
    this._player.initializePlayer();
    this._player.getEnemy();
    this.checkRoute();
  }

  public checkRoute() {
    this._router.events.subscribe( event => {
      if(event['url'] && event['url'] === '/encounter') {
        this.hideMenu = true;
      } else {
        this.hideMenu = false;
      }
    } );
  }
}
