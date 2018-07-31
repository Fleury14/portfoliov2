import { Injectable } from '@angular/core';
import { Actor } from '../interfaces/actor';
import { Enemy } from '../interfaces/enemy';
import { EnemyList } from '../classes/enemylist';
import { Subject, Observable } from 'rxjs';
import { Command } from '../interfaces/command';

@Injectable()

export class PlayerService {
    player: Actor;
    enemy: Enemy;
    enemyClass:EnemyList = new EnemyList();
    playerSubject: Subject<Actor> = new Subject();
    commandSubject: Subject<Command> = new Subject();

    public playerObs():Observable<Actor> {
        return this.playerSubject.asObservable();
    }

    public commandObs():Observable<Command> {
        return this.commandSubject.asObservable();
    }

    public healCommand(num: number) {
        this.commandSubject.next({
            command: 'heal',
            type: 1
        });
    }

    public transmitInfo() {
        this.playerSubject.next(this.player);
    }

    public damagePlayer(damage:number) {
        this.player.currentHP -= damage;
        if (this.player.currentHP < 0) this.player.currentHP = 0;
        this.transmitInfo();
    }

    public initializePlayer() {
        this.player = {
            maxHP: 850,
            currentHP: 850,
            maxMP: 90,
            currentMP: 90
        }

        console.log('Player initialized');
    }

    public getEnemy() {
        let randIndex = Math.floor( Math.random() * this.enemyClass.enemies.length );
        this.enemy = this.enemyClass.enemies[randIndex];
        console.log('Enemy initialized');
    }
}