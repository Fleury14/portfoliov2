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
  public victoryMessage = 'Job has been completed!'
  public skillBackground: string;
  private _beginAnimation: boolean = false;

  constructor(private _player: PlayerService) { }

  ngOnInit() {
    this._player.enemyObs().subscribe( (data:Enemy) => {
      this.enemy = data;
    })
    this._player.transmitEnemyInfo();
    console.log(this.commandSub);
    this._enemyAttackInterval = setInterval( () => { this._executeEnemyTurn(); }, 5000);
    this.commandSub = this._player.commandObs().subscribe( (cmd:Command) => {
      console.log('Command recieved in home');
      this.executeCommand(cmd);
    } );
    // if(!sessionStorage.getItem('intro')) {
    //   this._beginAnimation = true;
    //   sessionStorage.setItem('intro', 'true');
    // }
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
    this.skillBackground = command.skill.filename;
    this._timeouts.push(setTimeout( () => {document.getElementById('skillToAnimate').classList.add('get-smacked-by-a-skill')}, 500));
    console.log(document.getElementById('skillToAnimate'));

    this._timeouts.push(setTimeout( () => { this.displayEnemyDamage(); }, 1500 ));
    this._timeouts.push(setTimeout( () => { 
      commandBox.classList.add('invisible');
      if(this._player.damageEnemy(this.currentDamage) === true) {
        this.enemyDeathAnim();
        this.victory();
      } 
    }, 1000 ));

  }

  public enemyDeathAnim() {
    document.querySelector('.enemy-box').classList.add('enemy-death');
  }

  ngOnDestroy(): void {
    clearInterval(this._enemyAttackInterval);
    this.commandSub.unsubscribe();
    this._timeouts.forEach( timeout => clearTimeout(timeout));
  }

  public victory() {
    document.querySelector('.victory-box').classList.remove('invisible');
    this._timeouts.push( setTimeout( () => { this.victoryMessage = 'But a new job has appeared...'; }, 2000 ) );
    this._timeouts.push( setTimeout( () => {
      this._player.getEnemy();
      this._player.transmitEnemyInfo();
      document.querySelector('.victory-box').classList.add('invisible');
      document.querySelector('.enemy-box').classList.remove('enemy-death');
    }, 4000 ) );
  }

}