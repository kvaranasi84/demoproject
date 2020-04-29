const { app, BrowserWindow} = require("electron")
const path = require('path')
const url = require('url')
const NotificationCenter = require('node-notifier').NotificationCenter;

let win;

function isDev(){
    return process.mainModule.filename.indexOf('app.asar') === -1;
};

function createWindow(){
    win= new BrowserWindow({width:800, height: 600})
    win.loadURL('http://localhost:4200');

    /*win.loadURL(url.format(
        {
            pathname : path.join(__dirname, '../dist/index.html'),
            protocol: 'file',
            slashes: true
        }
    ));*/

    win.on('closed',()=> {
        win=null
    })
}

app.on('ready',createWindow)
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})
app.on('activate', ()=> {
    if(win === null){
        createWindow()
    }
})

 
var notifier = new NotificationCenter({
  withFallback: false, // Use Growl Fallback if <= 10.8 
  customPath: void 0 // Relative path if you want to use your fork of terminal-notifier 
});
 
notifier.notify({
  'title': "Hello world",
  'subtitle': void 0,
  'message': void 0,
  'sound': false, // Case Sensitive string for location of sound file, or use one of OS X's native sounds (see below) 
  'icon': 'Terminal Icon', // Absolute Path to Triggering Icon 
  'contentImage': void 0, // Absolute Path to Attached Image (Content Image) 
  'open': void 0, // URL to open on Click 
  'wait': false // Wait for User Action against Notification 
}, function(error, response) {
   console.log(response);
});


var trueAnswer = 'Most def.';

notifier.notify(
  {
    title: 'Notifications',
    message: 'Are they cool?',
    sound: 'Funk',
    // case sensitive
    closeLabel: 'Absolutely not',
    actions: trueAnswer
  },
  function(err, response, metadata) {
    if (err) throw err;
    console.log(metadata);

    if (metadata.activationValue !== trueAnswer) {
      return; // No need to continue
    }

    notifier.notify(
      {
        title: 'Notifications',
        message: 'Do you want to reply to them?',
        sound: 'Funk',
        // case sensitive
        reply: true
      },
      function(err, response, metadata) {
        if (err) throw err;
        console.log(metadata);
      }
    );
  }
);

notifier.on('replied', function(obj, options, metadata) {
  console.log('User replied', metadata);
});

