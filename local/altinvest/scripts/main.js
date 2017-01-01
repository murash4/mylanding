// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
	(function() {
		var noop = function() {};
		var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
		var length = methods.length;
		var console = window.console = {};
		while (length--) {
			console[methods[length]] = noop;
		}
	}());
}

$(function() {
	// animate popup
	$(document).on("click", ".js-download", function() {
		$(".popup-download").fadeIn(300).removeClass("success");
	});
	$(document).on("click", ".js-ask", function() {
		$(".popup-feedback").fadeIn(300).removeClass("success");
	});
	$(document).on("click", ".js-popup-close", function() {
		$(this).closest(".js-popup").fadeOut(300);
		$(".popup-download-form, .popup-feedback-form, .feedback-form").trigger("reset");
	});
	// submit popup
	$(document).on("submit", ".popup-download-form, .popup-feedback-form, .feedback-form", function(e) {
		var form = $(this);
		e.preventDefault();
		var errorsCount = 0;
		form.find("input[required]").each(function() {
			if($(this).val() == "") {
				errorsCount++;
				$(this).addClass("error").closest(".input-wrap").addClass("error");
			}
		});
		if(errorsCount == 0) {
			if(!form.find(".btn.js-feedback-submit").length) {
				form.trigger("reset").closest(".js-popup").addClass("success");
			}
			else {
				$(".popup-feedback").addClass("success").fadeIn(300);
			}
		}
	});
	$(document).on("focus", "input, textarea", function() {
		$(this).removeClass("error").closest(".input-wrap").removeClass("error");
	});
	setMenuMobileFixed();
	$(window).scroll(function() {
		setMenuMobileFixed();
	});
	$(window).resize(function() {
		setMenuMobileFixed();
	});
	// animate menu mobile
	$(".side__butter").click(function() {
		if(!$(this).hasClass("active")) {
			$(".mobile-menu").show(200);
		}
		else {
			$(".mobile-menu").hide(200);
		}
		$(this).toggleClass("active");
	});
	$(".mobile-menu__li").click(function() {
		$(".side__butter").toggleClass("active");
		$(".mobile-menu").hide(200);
	});
	$(document).mouseup(function(e) {
		if(!$(e.target).closest(".side__butter").length && !$(e.target).closest(".mobile-menu-wrap").length) {
			$(".mobile-menu").hide(200);
			$(".side__butter").removeClass("active");
		}
	});
	$(".js-scroll-to-objects").click(function() {
		var fixHeight = parseInt($(".mobile-menu").css("marginTop"));
		var targetPos = $("#objects").offset().top;
		$("html, body").animate({ scrollTop: (targetPos - fixHeight) }, 600);
		return false;
	});
	$(".js-scroll-down").click(function() {
		var fixHeight = parseInt($(".mobile-menu").css("marginTop"));
		var targetPos = $(".feedback-form").offset().top;
		console.log(targetPos);
		$("html, body").animate({ scrollTop: (targetPos - fixHeight) }, 600);
		return false;
	});
});

function setMenuMobileFixed() {
	var winScrl = $(window).scrollTop();
	var menu = $(".mobile-menu-wrap");
	var headerH = $("header").outerHeight();
	var butter = $(".side__butter");
	if(winScrl > headerH) {
		menu.addClass("fixed");
		butter.addClass("fixed");
	}
	else {
		menu.removeClass("fixed");
		butter.removeClass("fixed");
	}
}