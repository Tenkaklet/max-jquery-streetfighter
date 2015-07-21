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
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show().animate(
			{'left': '1027px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '527px');
			}
			);
	})
	//Ryu returns to original state
	.mouseup(function(){
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}