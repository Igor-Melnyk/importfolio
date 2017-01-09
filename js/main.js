$('document').ready ( function (){
	$('.menu-btn').click(function () {
		if ($('.top-navigation').css('display') == 'none') {
			$('.top-navigation').slideDown(200);
		} else {
			$('.top-navigation').slideUp(200);
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

