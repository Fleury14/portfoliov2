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
            command: 'Lucky Heal',
            type: 'heal',
            value: Math.floor( Math.random() + 30 ) + 149
        });
    }

    public skillCommand(command: Command) {
        this.commandSubject.next({
            command: command.command,
            type: command.type,
            value: command.value
        });
    }

    public hasEnoughMP(cost: number) {
        return this.player.currentMP >= cost;
    }

    public consumeMp(cost: number) {
        this.player.currentMP = this.player.currentMP - cost >= 0 ? this.player.currentMP - cost : 0;
        this.transmitInfo();
    }

    public restoreMP() {
        this.player.currentMP = this.player.maxMP;
        this.transmitInfo();
    }

    public transmitInfo() {
        this.playerSubject.next(this.player);
    }

    public damagePlayer(damage:number) {
        this.player.currentHP -= damage;
        if (this.player.currentHP < 0) this.player.currentHP = 0;
        this.transmitInfo();
    }

    public healPlayer(damage:number) {
        this.player.currentHP = Math.min(this.player.maxHP, this.player.currentHP + damage);
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

    public damageEnemy(damage: number): boolean {
        this.enemy.currentHP -= damage;
        if (this.enemy.currentHP <= 0) {
            this.enemy.currentHP = 0;
            return true;
        } else {
            return false;
        }
    }
}