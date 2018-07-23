import { IPortfolio } from "../interfaces/portfolio";

export class Portfolio {
    public portfolioList:IPortfolio[] = [{
        link: 'fgc-ladder-ss.jpg',
        href: 'https://fgc-ladder-1261d.firebaseapp.com/home',
        route: 'fgc-ladder',
        title: 'FGC LADDER',
        description: 'An interactive ladder system designed for fighting game players to test their skills in various titles.'
    },
    {
        link: 'angular-ss.jpg',
        href: 'https://fleury14.github.io/angular-class/',
        route: 'angular',
        title: 'ANGULAR2 LESSONS',
        description: 'A series of companion lesson to the Angular2 course at Geekwise Academy'
    },
    {
        link: 'gw-rr-ss.jpg',
        href: 'https://gw-room-reserve.firebaseapp.com/landing',
        route: 'reserve',
        title: 'ROOM RESERVE',
        description: 'A sample room reservation manager for Bitwise meeting rooms'
    },
    {
        link: 'cyo-ss.jpg',
        href: 'https://fleury14.github.io/cyo/',
        route: 'cyo',
        title: 'CYO',
        description: 'A JavaScript class exercise to create a choose your own adventure game that I expanded upon...'
    },
    {
        link: 'word-fight-ss.jpg',
        href: 'https://fleury14.github.io/scrabble/',
        route: 'wordfight',
        title: 'WORDFIGHT',
        description: 'A tribute to an old 80s gameshow that I worked on as a side project during my JavaScript class'
    },
    {
        link: '',
        href: 'https://fleury14.github.io/matchQ/dashboard.html',
        route: 'matchq',
        title: 'MATCHQ',
        description: 'An application in development to assist tournament organizers and streamers to manage a stream queue.'
    }];
}