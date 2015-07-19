var RaspiCam = require("raspicam");

var camera = new RaspiCam({ 
  mode: "photo",
  output: "image%d.jpg",
  timeout: 100000
});

//listen for the "start" event triggered when the start method has been successfully initiated
camera.on("start", function(){
  console.log("Camera started");
});

//listen for the "read" event triggered when each new photo/video is saved
camera.on("read", function(err, timestamp, filename){ 
  if(err) {
    console.err(err);
  }
  console.log(timestamp + " Got image: " + filename);
  camera.start();
});

//listen for the "stop" event triggered when the stop method was called
camera.on("stop", function(){
  console.log("Camera stopped");
});

//listen for the process to exit when the timeout has been reached
camera.on("exit", function(){
    console.log("Camera exit");
});

//to take a snapshot, start a timelapse or video recording
camera.start( );

//to stop a timelapse or video recording
//camera.stop( );