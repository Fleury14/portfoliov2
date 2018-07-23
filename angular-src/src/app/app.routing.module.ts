import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component'
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { OtherComponent } from './components/other/other.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Route[] = [{
    path: 'home',
    component: HomeComponent
},
{
    path: 'portfolio',
    component: PortfolioComponent
},
{
    path: 'skills',
    component: SkillsComponent
},
{
    path: 'about',
    component: AboutComponent
},
{
    path: 'contact',
    component: ContactComponent
},
{
    path: 'other',
    component: OtherComponent
},
{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},
{
    path: '**',
    component: ErrorComponent
}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {enableTracing: true}), ],
    exports: [ RouterModule ],
    providers: [ ]

})

export class AppRoutingModule {

}

export const routingComponents = [ HomeComponent, PortfolioComponent, SkillsComponent, AboutComponent, ContactComponent, OtherComponent, ErrorComponent ];