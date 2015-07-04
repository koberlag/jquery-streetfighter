$(document).ready(function()
{
	var ryuContainer = $(".ryu"),
		ryuReady = $(".ryu-ready"),
		ryuStill = $(".ryu-still"),
		ryuCool = $(".ryu-cool"),
		ryuThrowing = $(".ryu-throwing"),
		hadouken = $(".hadouken"),
		audioElement = document.createElement('audio');
        
        audioElement.setAttribute('src', 'sound/hadouken.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');


	ryuContainer.hover(function ()
	{
		ryuReady.toggle();
		ryuStill.toggle();
	},	
	function ()
	{
		ryuReady.toggle();
		ryuStill.toggle();
	}).mousedown(function()
	{
		// play hadouken sound
		audioElement.play();

		ryuReady.toggle();
		ryuThrowing.toggle();
		hadouken.toggle();
		//animate hadouken to the right of the screen
    	
	}).mouseup(function()
	{
		console.log('mouseup');
		ryuReady.toggle();
		ryuThrowing.toggle();
		hadouken.toggle();
	});

	

})