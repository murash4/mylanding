$(function() {
	// обработка листания страницы
	$("nav li a").click(function(event) {
		event.preventDefault();
		if($(this).closest("nav").hasClass("mobile")) {
			$(this).closest("ul").removeClass("show");
			$(this).closest("ul").animate({
				height: 0
				}, 500
			);
		}
		var target = $(this).attr("href");
		var targetST = $(target).offset().top;
		if(!$("body").hasClass("scroll")) {
			easyScroll(targetST, 7);
		}
		
	});
	$("nav.mobile .menu").click(function() {
		if($(this).next().hasClass("show")) {
			$(this).next().removeClass("show");
			$(this).next().animate({
				height: 0
				}, 500
			);
		}
		else {
			$(this).next().addClass("show");
			$(this).next().animate({
				height: 252
				}, 500
			);
		}
	});
	$(document).mouseup (function(e) {
		if (($(e.target).closest("nav.mobile .menu").length === 0) && ($(e.target).closest("nav.mobile li a").length === 0)) {
			$("nav.mobile ul").removeClass("show").animate({
				height: 0
				}, 500
			);
		};
	});
	// обработка формы
	$("#phone").mask("+7 (999) 999-99-99");
	$("input, textarea").focus(function() {
		if($(this).hasClass("error")) {
			$(this).removeClass("error");
		}
	});
	$("form").submit(function(event) {
		event.preventDefault();
		$("input, textarea").each(function() {
			if($(this).val() == "") {
				$(this).addClass("error");
			}
		});
		validateName($("#name"));
		validateEmail($("#email"));
		var errorCount = $(".error").length;
		if(errorCount == 0) {
			var name = $("#name");
			var email = $("#email");
			var phone = $("#phone");
			var message = $("#message");
			var nameVal = name.val();
			var emailVal = email.val();
			var phoneVal = phone.val();
			var messageVal = message.val();
			var submit = "submit";
			var rq = $.ajax({
				type: "POST",
				url: "mail.php",
				data: {"name":nameVal, "email":emailVal, "phone":phoneVal, "message":messageVal, "submit":submit},
				dataType: 'html',
				success: function(data)
					{

					}
			});
			$("form").trigger("reset").find(".send").css({"opacity": 1});
		}
	});
});

function easyScroll(targetST, stepScroll, nowST) {
	$("body").addClass("scroll");
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
	if(targetST == nowST) {
		$("body").removeClass("scroll");
	}
}

function validateName(element){
	var value = $(element).val();
	var re = /^[a-zA-Zа-яА-Я]+[\s]*[a-zA-Zа-яА-Я]+$/;
	if(!re.test(value)) {
		$(element).addClass('error');
	}
}

function validateEmail(element){
	var value = $(element).val();
	var re=/^\w+[-a-zA-Z_\.0-9\*\+'!$#%&=\?\^\{}~\|]{0,}@[-a-zA-Z_0-9]+?\.[a-zA-Z]{2,10}$/;
	if(!re.test(value)) {
		$(element).addClass('error');
	}
}