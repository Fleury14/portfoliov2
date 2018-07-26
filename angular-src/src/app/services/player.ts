import { Injectable } from '@angular/core';
import { Actor } from '../interfaces/actor';
import { Enemy } from '../interfaces/enemy';
import { EnemyList } from '../classes/enemylist';

@Injectable()

export class PlayerService {
    player: Actor;
    enemy: Enemy;
    enemyClass:EnemyList = new EnemyList()

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