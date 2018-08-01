import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerService } from '../../services/player';
import { Enemy } from '../../interfaces/enemy';
import { Command } from '../../interfaces/command';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  public enemy:Enemy;
  private _enemyAttackInterval;
  public currentDamage: number;
  public commandSub: Subscription;
  public commandText:string;
  private _timeouts: any[] = [];

  constructor(private _player: PlayerService) { }

  ngOnInit() {
    this.enemy = this._player.enemy;
    console.log(this.commandSub);
    this._enemyAttackInterval = setInterval( () => { this._executeEnemyTurn(); }, 5000);
    this.commandSub = this._player.commandObs().subscribe( (cmd:Command) => {
      console.log('Command recieved in home');
      this.executeCommand(cmd);
    } )
  }

  private _executeEnemyTurn() {
    this.enemyAttackFlash();
    this._timeouts.push(setTimeout( () => {
      this.currentDamage = this.calculateDamage();
      this.displayPlayerDamage();
      this._player.damagePlayer(this.currentDamage);
    }, 1000)); 
  }

  public displayPlayerDamage() {
    document.getElementById('playerDmg').classList.toggle('get-ready-to-bounce');
    this._timeouts.push(setTimeout( () => { document.getElementById('playerDmg').classList.toggle('get-ready-to-bounce'); }, 600));
  }

  public displayEnemyDamage() {
    document.getElementById('enemyDmg').classList.toggle('get-ready-to-bounce');
    this._timeouts.push(setTimeout( () => { document.getElementById('enemyDmg').classList.toggle('get-ready-to-bounce'); }, 600));
  }

  public calculateDamage(): number {
    const damage = Math.floor( Math.random() * 5) + 19;
    return damage;
  }

  public enemyAttackFlash() {
    this._timeouts.push(setTimeout( () => { document.getElementById('enemyPic').classList.toggle('invert'); }, 1));
    this._timeouts.push(setTimeout( () => { document.getElementById('enemyPic').classList.toggle('invert'); }, 200));
    this._timeouts.push(setTimeout( () => { document.getElementById('enemyPic').classList.toggle('invert'); }, 400));
    this._timeouts.push(setTimeout( () => { document.getElementById('enemyPic').classList.toggle('invert'); }, 600));
  }

  public async executeCommand(command: Command) {
    clearInterval(this._enemyAttackInterval);
    console.log('running command', command);

    try {
      switch (command.type) {
        case 'heal':
          console.log('executing heal command');
          await this._healCommand(command);
          break;
        case 'skill':
          console.log('executing skill command');
          await this._skillCommand(command);
          break;
      }
    } catch (err) {
      console.log('error in executeCommand...', err)
    }
    this._enemyAttackInterval = setInterval( () => { this._executeEnemyTurn(); }, 5000);
  }

  private _healCommand(command: Command) {
    this.commandText = command.command;
    const commandBox = document.getElementById('commandBox');
    const dmgBox = document.getElementById('playerDmg');
    commandBox.classList.remove('invisible');
    dmgBox.classList.add('heal-text');
    this.currentDamage = command.value;
    
    this._timeouts.push(setTimeout( () => { this.displayPlayerDamage(); }, 500 ));
    this._timeouts.push(setTimeout( () => { 
      commandBox.classList.add('invisible');
      this._player.healPlayer(this.currentDamage); 
    }, 1000 ));
    this._timeouts.push(setTimeout( () => { dmgBox.classList.remove('heal-text'); }, 2000 ));

  }

  private _skillCommand(command: Command) {
    this.commandText = command.command;
    const commandBox = document.getElementById('commandBox');
    const dmgBox = document.getElementById('enemyDmg');
    commandBox.classList.remove('invisible');
    this.currentDamage = command.value;

    this._timeouts.push(setTimeout( () => { this.displayEnemyDamage(); }, 500 ));
    this._timeouts.push(setTimeout( () => { 
      commandBox.classList.add('invisible');
      this._player.healPlayer(this.currentDamage); 
    }, 1000 ));

  }

  ngOnDestroy(): void {
    clearInterval(this._enemyAttackInterval);
    this.commandSub.unsubscribe();
    this._timeouts.forEach( timeout => clearTimeout(timeout));
  }

}