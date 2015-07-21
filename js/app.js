

// Sound
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
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

	//Keydown
	$(document).keydown(function(keypressed){
		if (keypressed.keyCode === 88) {
			$(".ryu-ready").hide();
			$(".ryu-still").hide();
			$(".ryu-throwing").hide();
			$(".ryu-cool").show();
			$(".main").addClass('main-x');
		}	
	});
	$(document).keyup(function(){
		$(".ryu-cool").hide();
		$(".ryu-ready").show();
		$(".main").removeClass('main-x');
	});
});
