import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from '../displaySection/display.component';
import { DisplayModule } from 'src/displaySection/display.module';
import { ToasterComponent } from 'src/toaster/toaster.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ToasterComponent
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
