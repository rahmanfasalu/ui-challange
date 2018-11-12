import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';   

import { AppComponent } from './app.component';
import { McmaklerComponent } from './mcmakler/mcmakler.component';
import { routing } from './app-routing.module';
 
@NgModule({
  declarations: [
    AppComponent,
    McmaklerComponent,
   
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
