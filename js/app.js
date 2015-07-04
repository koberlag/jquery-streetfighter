$(document).ready(function()
{
	var ryuContainer = $(".ryu"),
		ryuReady = $(".ryu-ready"),
		ryuStill = $(".ryu-still"),
		ryuCool = $(".ryu-cool"),
		ryuThrowing = $(".ryu-throwing"),
		hadouken = $(".hadouken"),
		ryuAction = $(".ryu-action");


	ryuContainer.hover(function ()
	{
		ryuAction.hide();
		ryuReady.show();
	},	
	function ()
	{
		ryuAction.hide();
		ryuStill.show();
	}).mousedown(function()
	{
		playHadouken();
		ryuAction.hide();
		ryuThrowing.show();
		hadouken.finish().show().animate(
		  {'left': '1020px'},
		  500,
		  function() {
		    $(this).hide();
		    $(this).css('left', '-212px');
		  }
		);
    	
	}).mouseup(function()
	{
		ryuAction.hide();
		ryuReady.show();
	});

	$(document).keydown(function()
	{
	 if ( event.which == 88 ) {
	    ryuAction.hide();
	   	ryuCool.show();
	  }
	}).keyup(function()
	{
		if ( event.which == 88 ) {
	    	ryuAction.hide();
	    	ryuStill.show();
	  	}
	});
})
	function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}