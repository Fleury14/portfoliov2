import { Component, OnInit, AfterViewInit } from '@angular/core';
import { INavItem } from '../../interfaces/navItem';
import { NavItems } from '../../classes/navItems';
import { isNgTemplate } from '../../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  public navList = new NavItems()
  public navItems = this.navList.navItems
  private _menuIndex = 0;

  constructor() { }

  ngOnInit() {
    // this._drawCheckbox();
  }

  ngAfterViewInit() {
    this._drawCheckbox();
  }

  private _drawCheckbox() {
    this.navItems.forEach( (item, index) => {
      console.log(document.getElementById('opt-0'));
      document.getElementById('opt-' + index ).innerHTML = index === this._menuIndex ? '<i class="far fa-hand-point-right"></i>' : null;
    })
  }

}
