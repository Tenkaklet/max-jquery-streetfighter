// StreetFigther
$(document).ready(function(){
	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function(){
		$('.ryu-still').show();
		$(".ryu-ready").hide();
	})
	//Play Hadouken sound + animate
	.mousedown(function(){
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show();
	})
	//Ryu returns to original state
	.mouseup(function(){
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});
});