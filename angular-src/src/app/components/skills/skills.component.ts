import { Component, OnInit } from '@angular/core';
import { Skill } from '../../interfaces/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    public maxWidth = 100;
    public maxUnit = 'px';
    
    public xp:Skill[] = [{
        title: 'Angular',
        name: 'angular-xp',
        pct: 85,
        filename: 'Angular.png',
        level: 35
    },
    {
        title: 'JavaScript',
        name: 'js-xp',
        pct: 80,
        filename: 'JavaScript.png',
        level: 32
    },
    {
        title: 'HTML',
        name: 'html-xp',
        pct: 85,
        filename: 'HTML.png',
        level: 33
    },
    {
        title: 'CSS',
        name: 'css-xp',
        pct: 70,
        filename: 'CSS.png',
        level: 28
    },
    {
        title: 'Bootstrap',
        name: 'boot-xp',
        pct: 75,
        filename: 'Bootstrap.png',
        level: 29
    },
    {
        title: 'NodeJS',
        name: 'node-xp',
        pct: 60,
        filename: 'node.png',
        level: 24
    },
    {
        title: 'Docker',
        name: 'docker-xp',
        pct: 50,
        filename: 'docker.png',
        level: 20
    },
    {
        title: 'SASS',
        name: 'sass-xp',
        pct: 60,
        filename: 'SASS.png',
        level: 25
    },
    {
        title: 'PSQL',
        name: 'psql-xp',
        pct: 50,
        filename: 'PostgreSQL.png',
        level: 21
    },
    {
        title: 'Git',
        name: 'git-xp',
        pct: 60,
        filename: 'Git.png',
        level: 25
    },
    {
        title: 'MongoDB',
        name: 'mongo-xp',
        pct: 40,
        filename: 'mongoDB.png',
        level: 18
    }]
    
    

  constructor() { }

  ngOnInit() {
    // xp.forEach(skill => {
    //     let element = document.getElementById(skill.name);
    //     console.log('element:', element);
    //     console.log('sub element', document.querySelector(`#${skill.name} .xp-bar`) )
    //     if (element) {
    //         const subElement = document.querySelector(`#${skill.name} .xp-bar`);
    //         subElement.style.width = skill.pct.toString() + maxUnit;
    //     }
    //     if (element) document.querySelector(`#${skill.name} .xp-bar`).style.width = skill.xp + maxUnit;
    // })
  }

}