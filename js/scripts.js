$(function() {
	$("nav li a").click(function(event) {
		event.preventDefault();
		var target = $(this).attr("href");
		var targetST = $(target).offset().top;
		easyScroll(targetST, 7);
	});
});

function easyScroll(targetST, stepScroll, nowST) {
	var nowST = $(document).scrollTop();
	if(targetST > nowST) {
		setTimeout(function(){
			$(document).scrollTop(nowST + stepScroll);
			nowST = nowST + stepScroll;
			if(targetST - nowST < stepScroll) {
				stepScroll = targetST - nowST
			}
			easyScroll(targetST, stepScroll, nowST);
		}, 10);
	}
	if(targetST < nowST) {
		setTimeout(function(){
			$(document).scrollTop(nowST - stepScroll);
			nowST = nowST - stepScroll;
			if(nowST - targetST < stepScroll) {
				stepScroll = nowST - targetST
			}
			easyScroll(targetST, stepScroll, nowST);
		}, 10);
	}
}