import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ISkill } from '../../interfaces/skill';
import { Skills } from '../../classes/skills';
import { PlayerService } from '../../services/player';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {


    public maxWidth = 100;
    public maxUnit = 'px';
    public skillz = new Skills();
    public xp:ISkill[] = this.skillz.skillList;
    public activeSkill:ISkill = this.xp[0];
    public showWarning: boolean = false;
    private _timeouts: any[] = [];

  constructor(private _player: PlayerService, private _router: Router) { }

  ngOnInit() {

  }

  public switchSkill(title: string) {
    this.activeSkill = this.xp.find( (skill: ISkill) => skill.title === title);
  }

  public executeSkill(skill: ISkill) {
    let mpCost = Math.floor( skill.level * 0.2);
    if (this._player.hasEnoughMP(mpCost)) {
      let damage = ( skill.level * 20 ) + Math.floor( Math.random() * 50); 
      this._player.consumeMp(mpCost);
      this._router.navigateByUrl('home');
      setTimeout( () => {
        this._player.skillCommand({
          command: skill.title,
          type: 'skill',
          value: damage,
          skill: skill
        });
      } );
    } else {
      this.showWarning = true;
      this._timeouts.push( () => { this.showWarning = false; }, 2000);
    }
    
  }

  ngOnDestroy(): void {
    for (let timeout of this._timeouts) clearTimeout(timeout);
  }

}