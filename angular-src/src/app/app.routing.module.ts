import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component'
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Route[] = [{
    path: 'home',
    component: HomeComponent
},
{
    path: 'portfolio',
    component: PortfolioComponent
},
{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [ ]

})

export class AppRoutingModule {

}

export const routingComponents = [ HomeComponent, PortfolioComponent ];