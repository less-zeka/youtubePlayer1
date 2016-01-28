$( document ).ready(function() {
  // Handler for .ready() called.
	console.log("youtubeVideoLoad.js document ready");
	startButton(event);
});

function showValue(newValue)
{
	document.getElementById("lblBackTime").innerHTML=newValue;
}