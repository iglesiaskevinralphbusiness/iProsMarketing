$(document).ready(function($){
	/* --------------------
		imgChange
	----------------------- */
	var timer = false;
	$(function(){
		if($('.imgChange').css('display') == 'block'){
			$('.imgChange').each(function(){
				$(this).attr("src",$(this).attr("src").replace('_pc', '_sp'));
			});
		}
	});
	$(window).resize(function() {
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			if($('.imgChange').css('display') == 'block'){
				$('.imgChange').each(function(){
					$(this).attr("src",$(this).attr("src").replace('_pc', '_sp'));
				});
			} else {
				$('.imgChange').each(function(){
					$(this).attr("src",$(this).attr("src").replace('_sp', '_pc'));
				});
			}
		});
	});
});

	$(document).ready(function () {
		var settings = function() {
			var settings1 = {
				minSlides: 1,
				maxSlides: 1,
				moveSlides: 1,
				startSlide: 0,
				pager: true,
			};
			var settings2 = {
				minSlides: 3,
				maxSlides: 3,
				moveSlides: 1,
				slideWidth: 300,
				startSlide: 0,
				slideMargin: 13,
				responsive: false,
			};
			return ($(window).width()<630) ? settings1 : settings2;
		}

		var mySlider;

		function tourLandingScript() {
			mySlider.reloadSlider(settings());
		}

		mySlider = $('.bxslider').bxSlider(settings());
		$(window).resize(tourLandingScript);
	});
	$(document).ready(function () {
	});
	
$(window).load(function(){
		$(".mainVisual").bgswitcher({
		images: ["/img/mv_bg_01_pc.jpg", "/img/mv_bg_02_pc.jpg", "/img/mv_bg_03_pc.jpg"],
		interval: 5000
	});
	$(".mv_copy_sp").bgswitcher({
		images: ["/img/mv_bg_01_sp.jpg", "/img/mv_bg_02_sp.jpg", "/img/mv_bg_03_sp.jpg"],
		interval: 5000
	});
});
	