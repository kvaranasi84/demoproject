import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT } from '@angular/common'; 
import { Inject }  from '@angular/core';

declare const clevertap:any;
declare const jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent implements AfterViewInit{
    title = 'appBootstrap';
    
    closeResult: string;
    @ViewChild('myModal') myDiv: ElementRef;

    constructor(private modalService: NgbModal ,@Inject(DOCUMENT) document) {
     //this.open("test")
    }
      
    ngAfterViewInit() {
      //console.log(this.myDiv.nativeElement.innerHTML);
    }

    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    notificationCallback =(msg) => {
      //raise the notification viewed and clicked events in the callback
      clevertap.raiseNotificationViewed();
      //In case of javascript
      //var modal = document.getElementById("myModal");
      //modal.style.display = "block";
      this.open(msg.kv.event);
      //window.parent.document.getElementById('wizParDiv0').innerText=msg.kv.event;
      console.log(JSON.stringify(msg.msgContent.html));//your custom rendering implementation here
      var $button = jQuery("<button></button>");//element on whose click you want to raise the notification clicked event
      $button.click(function(){
         clevertap.raiseNotificationClicked();
      });
    };

    //clevertap.notificationCallback=this.notificationCallback;

    closeModal(){
      let modal=this.myDiv.nativeElement;
      console.log(modal)
      modal.hidden = true;
    }
}
