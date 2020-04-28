import { Injectable, Inject } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CleverTapService {

    clevertap ={event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[]};
    constructor(){            //  replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
        this.clevertap.account.push({"id": "TEST-988-Z8K-785Z"});
        this.clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
        this.clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data
        this.cleverTap();
    }
    
    cleverTap() {
        var wzrk = document.createElement('script');
        wzrk.type = 'text/javascript';
        wzrk.async = false;
        wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wzrk, s);
      }

    
      pushProfile(data){
        this.clevertap.profile.push(data);
      }

      publishEvent(data){
        this.clevertap.event.push(data)
      }


}