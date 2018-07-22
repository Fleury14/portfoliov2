const maxWidth = 100;
const maxUnit = 'px';

const xp = [{
    name: 'angular-xp',
    pct: 85
},
{
    name: 'js-xp',
    pct: 80
},
{
    name: 'html-xp',
    pct: 85
},
{
    name: 'css-xp',
    pct: 70
},
{
    name: 'boot-xp',
    pct: 75
},
{
    name: 'node-xp',
    pct: 60
},
{
    name: 'docker-xp',
    pct: 50
},
{
    name: 'sass-xp',
    pct: 60
},
{
    name: 'psql-xp',
    pct: 50
},
{
    name: 'git-xp',
    pct: 60
},
{
    name: 'mongo-xp',
    pct: 40
}]

xp.forEach(skill => {
    let element = document.getElementById(skill.name);
    console.log('element:', element);
    console.log('sub element', document.querySelector(`#${skill.name} .xp-bar`) )
    if (element) {
        const subElement = document.querySelector(`#${skill.name} .xp-bar`);
        subElement.style.width = skill.pct.toString() + maxUnit;
    }
    if (element) document.querySelector(`#${skill.name} .xp-bar`).style.width = skill.xp + maxUnit;
})