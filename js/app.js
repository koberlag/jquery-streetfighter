$(document).ready(function()
{
	var ryuContainer = $(".ryu"),
		ryuReady = $(".ryu-ready"),
		ryuStill = $(".ryu-still"),
		ryuCool = $(".ryu-cool"),
		ryuThrowing = $(".ryu-throwing"),
		hadouken = $(".hadouken");


	ryuContainer.hover(function ()
	{
		ryuReady.show();
		ryuStill.hide();
	},	
	function ()
	{
		ryuReady.hide();
		ryuStill.show();
	}).mousedown(function()
	{
		playHadouken();
		ryuReady.hide();
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
		ryuReady.show();
		ryuThrowing.hide();
	});
})
	function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}