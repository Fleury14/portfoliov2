import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerService } from '../../services/player';
import { Enemy } from '../../interfaces/enemy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  public enemy:Enemy;
  private _enemyAttackInterval;
  public currentDamage: number;

  constructor(private _player: PlayerService) { }

  ngOnInit() {
    this.enemy = this._player.enemy;
    this._enemyAttackInterval = setInterval( () => { this._executeEnemyTurn(); }, 5000);
  }

  private _executeEnemyTurn() {
    this.enemyAttackFlash();
    setTimeout( () => {
      this.currentDamage = this.calculateDamage();
      this.displayPlayerDamage();
      this._player.damagePlayer(this.currentDamage);
    }, 1000); 
  }

  public displayPlayerDamage() {
    document.getElementById('playerDmg').classList.toggle('get-ready-to-bounce');
    setTimeout( () => { document.getElementById('playerDmg').classList.toggle('get-ready-to-bounce'); }, 600);
  }

  public calculateDamage(): number {
    const damage = Math.floor( Math.random() * 5) + 19;
    return damage;
  }

  public enemyAttackFlash() {
    setTimeout( () => { document.getElementById('enemyPic').classList.toggle('invert'); }, 1);
    setTimeout( () => { document.getElementById('enemyPic').classList.toggle('invert'); }, 200);
    setTimeout( () => { document.getElementById('enemyPic').classList.toggle('invert'); }, 400);
    setTimeout( () => { document.getElementById('enemyPic').classList.toggle('invert'); }, 600);
  }

  ngOnDestroy(): void {
    clearInterval(this._enemyAttackInterval);
  }

}