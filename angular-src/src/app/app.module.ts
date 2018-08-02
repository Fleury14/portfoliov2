import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule, routingComponents } from './app.routing.module';
import { PlayerService } from './services/player';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    routingComponents
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule
  ],
  providers: [ PlayerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
