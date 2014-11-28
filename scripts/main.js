$(document).ready(function() {

var $doc = $(document),
	$window = $(window),
	homepage = $("body").hasClass("home"),
	mobile = false,
	ajaxSupported = false;

if ($doc.width() <= 600) {
	mobile = true;
}

if (window.XMLHttpRequest) {
	ajaxSupported = true;
} else if (window.ActiveXObject) {
	try {
		ajaxSupported = true;
	}
	catch (e) {
		try {
			ajaxSupported = true;
		}
		catch (e) { }
	}
}


//
// owl carousel
//
(function() {
	$(".carousel").owlCarousel({
		navigation : false,
		singleItem : true,
		transitionStyle : "fade",
		autoPlay: 5000
	});
	
	$(".detailCarousel").owlCarousel({
		navigation : true,
		pagination: false,
		navigationText: false,
		items: 6,
		itemsCustom: [
//			[0, 1],
//			[0, 2],
//			[0, 3],
//			[0, 4],
			[0, 5],
			[952, 6]
		]
	});
}());

//
// magnific popup
//
(function() {
	$(".magnific").each(function() {
		$(this).magnificPopup({
			delegate: "a",
			type: "image",
			showCloseBtn: true,
			gallery: {
				enabled: true
			}
		});
	});
}());

//
// mobile menu
//
(function() {
	var $opener = $(".menuOpener"),
		$menu = $(".pageMenu"),
		mobile = false,
		wasMobile = false;
	
	$window.resize(function() {
		if ($(window).width() <= 880) {
			mobile = true;
		} else {
			mobile = false;
		}
		
		if (mobile !== wasMobile) {
			if (mobile) {
				$menu.hide();
			} else {
				$menu.show();
			}
			
			wasMobile = mobile;
		}
	});
	
	$opener.click(function() {
		if ($menu.is(":visible")) {
			$menu.slideUp(200);
		} else {
			$menu.slideDown(200);
		}
	});
}());


});