$( document ).ready(function() {
  // Handler for .ready() called.
	console.log("youtubeVideoLoad.js document ready");
	startButton(event);
});

function showValue(newValue)
{
	document.getElementById("lblBackTime").innerHTML=newValue;
}

function playSong(songId){
	console.log("playSong: "+songId);
	player.loadVideoById(songId, 0, "large")
}

