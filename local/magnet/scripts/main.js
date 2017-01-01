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
	$(".js-form-submit").click(function() {
		var errors = 0;
		$(".form-line input[required]").each(function() {;
			if($(this).val() == "") {
				$(this).addClass("error").siblings(".error").show();
				errors++;
			}
		});
		if(errors == 0) {
			// $(".contact-form").submit();
			$(".popup-success").fadeIn();
			$(".contact-form")[0].reset();
		}
		else {
			var form = $(".contact-form");
			var formH = form.outerHeight();
			var formT = form.offset().top;
			var formMT = parseInt(form.css("marginTop"));
			var scrlTop = $(window).scrollTop();
			var formT = form.offset().top;
			if(formT + formH < scrlTop) {
				$("html, body").animate({ scrollTop: formT - 40 }, 500);
			}
		}
	});
	$(".form-line input[required]").focus(function() {
		$(this).removeClass("error").siblings(".error").hide();
	});
	$(".popup-success .icon-close").click(function() {
		$(this).closest(".popup-success").fadeOut();
	});
});