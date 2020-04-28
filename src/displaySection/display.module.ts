import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DisplayRoutingModule } from './display-routing.module';
import { MetricComponent } from 'src/metric/metric.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    
  declarations: [
    MetricComponent
  ],
  imports: [
    DisplayRoutingModule
  ],
  providers: []
})
export class DisplayModule { }
