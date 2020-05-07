import { Component,OnInit } from '@angular/core';
declare const clevertap : any;
@Component({
  selector: 'recieve',
  templateUrl: './recieve-event.component.html',
  styleUrls: ['./recieve-event.component.css']
})


export class RecieveEventComponent implements OnInit {
  title = 'RecieveEvent';

  constructor() {}

  ngOnInit(){
    //this.clevertap.account.push({"id": "TEST-988-Z8K-785Z"});
    //this.clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
    //this.clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data
    //this.cleverTap();
    this.pushEvent();
  }

  pushEvent(){
    /*this.cleverTapService.pushProfile({
      "Site": {
        "Name": "Kiran Varanas", // User's name
        "Email": "kvaranas@progress.com"
      }
     });

     this.cleverTapService.publishEvent("Product Viewed test1 Kiran")*/
    clevertap.profile.push({
      "Site": {
        "Name": "Kiran Varanas", // User's name
        "Email": "kvaranas@progress.com"
      }
     });
    clevertap.event.push("Product Viewed");

      return ["New Lead", "New Opportunities"]
  }

  
}
