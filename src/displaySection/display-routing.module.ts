import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PushEventComponent } from 'src/push/push-event.component';
import { RecieveEventComponent } from 'src/recieve/recieve-event.component';
import { ToasterComponent } from 'src/toaster/toaster.component';


const routes: Routes = [{ path: 'push', component: PushEventComponent },
{ path: 'recieve', component: RecieveEventComponent },{ path: 'toaster', component: ToasterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DisplayRoutingModule { }
