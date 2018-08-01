import { Enemy } from "../interfaces/enemy";

export class EnemyList {
    public enemies:Enemy[] = [{
        name: 'Tech Job A',
        img: './../../../assets/img/enemies/job1.jpg',
        maxHP: 1000,
        currentHP: 1000,
        maxMP: 1000,
        currentMP: 1000
    }]
}