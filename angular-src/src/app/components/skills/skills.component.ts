import { Component, OnInit } from '@angular/core';
import { ISkill } from '../../interfaces/skill';
import { Skills } from '../../classes/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    public maxWidth = 100;
    public maxUnit = 'px';
    public skillz = new Skills();
    public xp = this.skillz.skillList;
    

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