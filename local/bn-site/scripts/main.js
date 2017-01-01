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
	// create custom selest
	creatCustomSelect();
	// create custom scroll
	createCustomScroll();
	// show object-popup
	$(document).on("click", ".js-oblects-list__item-btn", function(e) {
		e.preventDefault();
		$("#preloader").show();
		$.ajax({
			type: "POST",
			url: "object-info.php",
			success: function(data){
				$(".object-popup__content").html(data);
				$(".object-popup-wrap").fadeIn(300).delay(300).each(function() {
					creatObjectSlider();
					$("#preloader").hide(300);
				});
			}
		});
	});
	// hide object-popup
	$(document).on("click", ".object-popup-wrap .icon-close", function() {
		$(this).closest(".object-popup-wrap").fadeOut(300);
	});
	// animate select metro
	$(document).on("click", ".metro-stations-block__add", function() {
		if(!isTouch()) {
			var add = $(this);
			var wrap = add.closest(".metro-stations-block__add-wrap");
			wrap.addClass('active');
			wrap.find(".input-wrap").show();
		}
	});
	// create smart select on mobile
	if(!isTouch()) {
		$(document).on("click", ".metro-stations-block__add-wrap .selectBox-options a", function() {
			var link = $(this);
			var select = link.closest(".selectBox-options");
			var wrap = link.closest(".metro-stations-block__add-wrap");
			var selectedMetro = wrap.find(".selected-metro");
			selectedMetro.html("");
			select.find(".selectBox-selected").each(function() {
				var itemSelected = $(this); 
				var itemClass = itemSelected.attr("class");
				var itemText = itemSelected.find("a").text();
				var itemVal = itemSelected.find("a").attr("rel");
				var addItem = $("<div class='selected-metro__item " + itemClass + "' rel='" + itemVal + "'>" + itemText +  "<span class='icon-close'></span></div>");
				selectedMetro.append(addItem);
			});
		});
	}
	else {
		$(document).on("change", ".metro-stations-block__add-wrap select", function() {
			var select = $(this);
			var wrap = select.closest(".metro-stations-block__add-wrap");
			var selectedMetro = wrap.find(".selected-metro");
			selectedMetro.html("");
			select.find("option").each(function() {
				var option = $(this);
				if(option.prop("selected")) {
					var itemClass = option.attr("class");
					var itemText = option.text();
					var itemVal = option.val();
					var addItem = $("<div class='selected-metro__item " + itemClass + "' rel='" + itemVal + "'>" + itemText +  "<span class='icon-close'></span></div>");
					selectedMetro.append(addItem);
				}
			});
		});
		$(document).on("change", "select.select-type-1, select.select-type-2", function() {
			var select = $(this);
			select.find("option").each(function() {
				if($(this).prop("selected")) {
					var text = $(this).text();
					select.siblings(".mobile-select-label").find(".selectBox-label").text(text);
				}
			});
		});
	}
	$(document).mouseup(function(e) {
		if(!$(e.target).closest(".metro-stations-block__add-wrap").length) {
			$(".metro-stations-block__add-wrap").removeClass("active").find(".input-wrap").hide();
		}
	});
	$(document).on("click", ".selected-metro__item .icon-close", function() {
		var item = $(this).closest(".selected-metro__item");
		var itemRel = item.attr("rel");
		var wrap = item.closest(".metro-stations-block__add-wrap");
		var selectBoxLink = wrap.find(".selectBox-options a[rel='" + itemRel + "']");
		selectBoxLink.closest("li").removeClass("selectBox-selected");
		wrap.find("option[value='" + itemRel + "']").prop("selected", false);
		item.remove();
	});
	$(document).on("click", ".js-reset-form", function() {
		$("#preloader").show();
		$.ajax({
			type: "POST",
			url: "default-form.php",
			success: function(data){
				$(".search-object-form").html(data);
				$("#preloader").hide(300);
				creatCustomSelect();
				createCustomScroll();
			}
		});
	});
	$(document).on("click", ".js-search-objects", function(e) {
		e.preventDefault();
		$("#preloader").show();
		$.ajax({
			type: "POST",
			url: "objects.php",
			success: function(data){
				$(".oblects-list").html(data);
				$("#preloader").hide(300);
				creatCustomSelect();
				createCustomScroll();
			}
		});
	});
	// animate feedback form
	$(document).on("click", ".js-feedback", function(e) {
		e.preventDefault();
		$(".popup-feedback-form .feedback-form").removeClass("success");
		$(".popup-feedback-form").fadeIn(300);
	});
	$(document).on("click", ".popup-feedback-form .icon-close", function() {
		$(this).closest(".popup-feedback-form").fadeOut(300);
	});
	$(document).on("click", ".js-feedback-submit", function(e) {
		var error = 0;
		if($("#name").val() == "") {
			error++;
			$("#name").addClass("error").siblings(".error-text").show();
		}
		if($("#email").val() == "") {
			error++;
			$("#email").addClass("error").siblings(".error-text").show();
		}
		if(error) {
			e.preventDefault();
		}
		else {
			e.preventDefault();
			$(this).closest(".feedback-form").trigger('reset').addClass("success");
		}
	});
	$(document).on("focus", ".popup-feedback-form input", function() {
		$(this).removeClass("error").siblings(".error-text").hide();
	});
	if(isTouch()) {
		$(".wrapper").addClass("touch-device");
	}
});

function isTouch() {
	try {
		document.createEvent("TouchEvent");
		return true;
	}
	catch (e) { return false; }
}
function creatObjectSlider() {
	if($(".object-slider-for").length) {
		if($(".object-slider-for").hasClass("slick-initialized")) {
			$(".object-slider-for").slick("unslick");
			$(".object-slider-nav").slick("unslick");
		}
		$(".object-slider-for").slick({
			autoplay: false,
			autoplaySpeed: 3000,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			asNavFor: '.object-slider-nav',
			arrows: true,
			prevArrow: '<span class="icon-arr-l"></span>',
			nextArrow: '<span class="icon-arr-r"></span>'
		});
		$(".object-slider-nav").slick({
			autoplay: false,
			autoplaySpeed: 3000,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: false,
			asNavFor: '.object-slider-for',
			arrows: false,
			focusOnSelect: true
		});
	}
	fixBugObjectSlider();
}
function creatCustomSelect() {
	if(!isTouch()) {
		$(".select-type-1").selectBox({mobile: true});
		$(".select-type-2").selectBox({mobile: true});
		$(".select-type-3").selectBox({mobile: true});
	}
}
function createCustomScroll() {
	if(!isTouch()) {
		$(".object-popup, .selectBox-dropdown-menu, .selectBox-options").niceScroll({cursorcolor:"#969696"});
	}
}
function fixBugObjectSlider() {
	var previewItemsCount = $(".object-slider-nav .object-slider-nav__item-wrap").length;
	if(previewItemsCount <= 4) {
		$('.object-slider-for').on('afterChange', function(event, slick, currentSlide){
			var item = $(this).find(".object-slider-for__item.slick-current").data('slick-index');
			$(this).closest(".object-slider-wrap").find(".object-slider-nav__item-wrap.slick-current").removeClass("slick-current");
			$(this).closest(".object-slider-wrap").find(".object-slider-nav__item-wrap").eq(item).addClass("slick-current");
		});
	}
}