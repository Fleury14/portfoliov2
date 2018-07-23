import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule, routingComponents } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    routingComponents
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
