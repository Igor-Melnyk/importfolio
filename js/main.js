$('document').ready ( function (){
	$('.menu-btn').click(function () {
		if ($('.top-navigation').css('display') == 'none') {
			$('.top-navigation').slideDown(200);
		} else {
			$('.top-navigation').slideUp(200);
		}
	});
});