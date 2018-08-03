import { Component, OnInit, AfterViewInit } from '@angular/core';
import { INavItem } from '../../interfaces/navItem';
import { NavItems } from '../../classes/navItems';
import { isNgTemplate } from '../../../../node_modules/@angular/compiler';
import { Router } from '../../../../node_modules/@angular/router';
import { PlayerService } from '../../services/player';
import { Actor } from '../../interfaces/actor';
import { Enemy } from '../../interfaces/enemy';
import { Subscription } from 'rxjs';
import { Command } from 'src/app/interfaces/command';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  public navList = new NavItems()
  public navItems = this.navList.navItems
  private _menuIndex = 0;
  public player: Actor;
  public enemy: Enemy;
  private commandSub: Subscription;
  public ool = false;
  private _timeouts: any[] = [];
  private _beginAnimation: boolean = false;

  constructor(private _router: Router, private _player: PlayerService) { }

  ngOnInit() {
    this._player.playerObs().subscribe( (data:Actor) => {
      this.player = data;
      if (this.player.currentHP === 0) {
        this.ool = true;
        this.outOfLife();
      } else this.ool = false;
    });

    this._player.enemyObs().subscribe( (data:Enemy) => {
      this.enemy = data;
    })
    this._player.transmitInfo();
    this._player.transmitEnemyInfo();
    this._player.commandObs().subscribe( (data:Command) => {
      console.log('Command receieved', data);
    } );
    this._beginAnimation = true;
  }

  ngAfterViewInit() {
    this._drawCheckbox();
    document.addEventListener('keydown', event => this._keyPress(event));
  }

  private _keyPress(event) {
    if (event.key === 'ArrowDown') this._menuIndex = this._menuIndex === this.navItems.length - 1 ? 0 : this._menuIndex + 1;
    if (event.key === 'ArrowUp') this._menuIndex = this._menuIndex === 0 ? this.navItems.length - 1 : this._menuIndex - 1;
    if (event.key === 'Enter') {
      console.log('enter!', this.navItems[this._menuIndex].route, this._router);
      this._router.navigateByUrl( this.navItems[this._menuIndex].route ).then(res => console.log('nav promise', res));
    }

    this._drawCheckbox();
  }

  private _drawCheckbox() {
    this.navItems.forEach( (item, index) => {
      document.getElementById('opt-' + index ).innerHTML = index === this._menuIndex ? '<i class="far fa-hand-point-right"></i>' : null;
    })
  }

  refreshStats() {
    this.player = {
      currentHP: this._player.player.currentHP,
      maxHP: this._player.player.maxHP,
      currentMP: this._player.player.currentMP,
      maxMP: this._player.player.currentMP
    }
  }

  public outOfLife() {
    this._timeouts.push( setTimeout( () => {
      this._player.healPlayer(700);
    }, 1000 ) )
  }

}
