import { Component } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
@Component({
  selector: 'display-area',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  title = 'displaySection';

  listMetrics(){
    
      return ["New Lead", "New Opportunities"]

  }
  
}
