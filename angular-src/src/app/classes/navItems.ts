import { INavItem } from "../interfaces/navItem";

export class NavItems {
    
    public navItems:INavItem[] = [
        {
          index: 0,
          route: 'portfolio',
          title: 'Portfolio'
        },
        {
          index: 1,
          route: 'skills',
          title: 'Skills'
        },
        {
          index: 2,
          route: 'about',
          title: 'About'
        },
        {
          index: 3,
          route: 'contact',
          title: 'Contact'
        },
        {
          index: 4,
          route: 'other',
          title: 'Other'
        },
        {
          index: 5,
          route: 'home',
          title: 'Main'
        }
      ]
}