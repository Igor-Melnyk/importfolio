$('document').ready ( function (){
	$('.menu-btn').click(function () {
		var top_nav = $('.top-navigation');
		if ($(top_nav).css('display') == 'none') {
			$(top_nav).slideDown(200);
			$('.top-navigation a').click(function () {
				$(top_nav).slideUp(200);
			});
		} else {
			$(top_nav).slideUp(200);
		}
	});
	$('a[href*="#"]').click(function(){
		var el = $(this).attr('href');
		$('body').animate({
			scrollTop: $(el).offset().top
		}, 300);
		return false;
	});
});

