$(document).ready(function() {
	
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
	$(".detailCarousel").each(function() {
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

});