import { ISkill } from "../interfaces/skill";

export class Skills {

    public skillList:ISkill[] = [{
        title: 'Angular',
        name: 'angular-xp',
        pct: 85,
        filename: 'Angular.png',
        level: 35,
        description: 'Most of my projects, either for work, or my side projects are written using either angular 4, 5, or 6. I have also co-taught classes at Geekwise Academy instructing people getting in to Angular.' 
    },
    {
        title: 'JavaScript',
        name: 'js-xp',
        pct: 80,
        filename: 'JavaScript.png',
        level: 32,
        description: 'JavaScript form the base for which most of my work is done, whether its working in TypeScript, or vanilla JS. I also have co-taught an introductory class at Geekwise Academy.'
    },
    {
        title: 'HTML',
        name: 'html-xp',
        pct: 85,
        filename: 'HTML.png',
        level: 33,
        description: 'Since my very first class, I have been builing pages ultizing HTML5.'
    },
    {
        title: 'CSS',
        name: 'css-xp',
        pct: 70,
        filename: 'CSS.png',
        level: 28,
        description: 'While I am still somewhat new with CSS animations, I have built websites that feature some of the newest CSS techniques such as CSS Grid and Flexbox.'
    },
    {
        title: 'Bootstrap',
        name: 'boot-xp',
        pct: 75,
        filename: 'Bootstrap.png',
        level: 29,
        description: 'A fantastic CSS framework for building reponsive, professional looking sites quickly and easily. Most of my work has been using Bootstrap 3.3.7.'
    },
    {
        title: 'NodeJS',
        name: 'node-xp',
        pct: 60,
        filename: 'node.png',
        level: 24,
        description: "I've written a couple of back end applications in NodeJS that involve several different node modules and incorporating their features into the app."
    },
    {
        title: 'Docker',
        name: 'docker-xp',
        pct: 50,
        filename: 'docker.png',
        level: 20,
        description: 'Most recently, I have been involved in containerizing applications and even deploying them on AWS. I have also written small companion applications utilizing the Docker API.'
    },
    {
        title: 'SASS',
        name: 'sass-xp',
        pct: 60,
        filename: 'SASS.png',
        level: 25,
        description: 'One of my favorites, SCSS has made writing styles much more intiuitive and object oriented.'
    },
    {
        title: 'PSQL',
        name: 'psql-xp',
        pct: 50,
        filename: 'PostgreSQL.png',
        level: 21,
        description: 'Our main project for the Geekwise Cohort over the past 6 months has involved querying a Postgres database inside a docker container.'
    },
    {
        title: 'Git',
        name: 'git-xp',
        pct: 60,
        filename: 'Git.png',
        level: 25,
        description: 'Git and Github has been the main source of version control during my time at Geekwise Academy.'
    },
    {
        title: 'MongoDB',
        name: 'mongo-xp',
        pct: 40,
        filename: 'mongoDB.png',
        level: 18,
        description: 'A couple of small projects including our no-instructor course involved creating a MEAN stack app that uses MongoDB as its primary database.'
    }];
}