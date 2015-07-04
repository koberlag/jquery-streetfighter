$(document).ready(function()
{
	var ryuContainer = $(".ryu-container"),
		ryuReady = $(".ryu-ready"),
		ryuStill = $(".ryu-still"),
		ryuCool = $(".ryu-cool"),
		ryuThrowing = $(".ryu-throwing"),
		hadouken = $(".hadouken");


	ryuContainer.hover(handlerIn, handlerOut);

	ryuContainer.mousedown(function()
	{
		ryuReady.toggle();
		ryuThrowing.toggle();
		hadouken.toggle();
		hadouken.animate({left: "+=1000"}, 1000);
    	
	}).mouseup(function()
	{
		ryuReady.toggle();
		ryuThrowing.toggle();
		hadouken.toggle();
	});

	function handlerIn()
	{
		ryuReady.toggle();
		ryuStill.toggle();
	}

	function handlerOut()
	{
		ryuReady.toggle();
		ryuStill.toggle();
	}

})