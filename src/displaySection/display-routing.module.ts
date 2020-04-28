import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetricComponent } from 'src/metric/metric.component';


const routes: Routes = [{ path: 'metric', component: MetricComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DisplayRoutingModule { }
