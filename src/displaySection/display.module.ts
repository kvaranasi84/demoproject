import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DisplayRoutingModule } from './display-routing.module';
import { PushEventComponent } from 'src/push/push-event.component';
import { RecieveEventComponent } from 'src/recieve/recieve-event.component';

@NgModule({
    
  declarations: [
    PushEventComponent,
    RecieveEventComponent
  ],
  imports: [
    DisplayRoutingModule
  ],
  providers: []
})
export class DisplayModule { }
