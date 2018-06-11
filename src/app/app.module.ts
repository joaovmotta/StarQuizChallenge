import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './app/components/card/card.component';
import { RoutingModule } from "./app/router/app.router";
import { HomeComponent } from './app/components/home-component/home.component';
import { TimerComponent } from './app/components/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
