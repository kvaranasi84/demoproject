import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from '../displaySection/display.component';
import { DisplayModule } from 'src/displaySection/display.module';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DisplayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
