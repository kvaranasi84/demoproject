//<script type="text/javascript">
	var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[]};
		//  replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
	clevertap.account.push({"id": "TEST-988-Z8K-785Z"});
	clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
	clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data
	
	(function () {
			var wzrk = document.createElement('script');
			wzrk.type = 'text/javascript';
			wzrk.async = true;
			wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(wzrk, s);
	})();


	clevertap.notificationCallback = function(msg){
		//raise the notification viewed and clicked events in the callback
		clevertap.raiseNotificationViewed();
		window.parent.document.getElementById('wizParDiv0').innerHTML=msg.msgContent.html;
		console.log(JSON.stringify(msg.msgContent.html));//your custom rendering implementation here
		var $button = jQuery("<button></button>");//element on whose click you want to raise the notification clicked event
		$button.click(function(){
		   clevertap.raiseNotificationClicked();
		});
	};

	function recieveCleverTapData(data){
		console.log(data)
	}
//</script>
