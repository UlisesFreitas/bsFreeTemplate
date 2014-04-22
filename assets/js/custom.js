$(function () {
	
	if ($('html').hasClass('csstransforms3d')) {	
	
		$('.thumb').removeClass('scroll').addClass('flip');		
		$('.thumb.flip').hover(
			function () {
				$(this).find('.thumb-wrapper').addClass('flipIt');
			},
			function () {
				$(this).find('.thumb-wrapper').removeClass('flipIt');			
			}
		);
		
	} else {

		$('.thumb').hover(
			function () {
				$(this).find('.thumb-detail').stop().animate({bottom:0}, 500, 'easeOutCubic');
			},
			function () {
				$(this).find('.thumb-detail').stop().animate({bottom: ($(this).height() * -1) }, 500, 'easeOutCubic');			
			}
		);

	}

});
$(function() {
	$('ul.hover_block li').hover(function(){
		$(this).find('img').animate({top:'182px'},{queue:false,duration:500});
	}, function(){
		$(this).find('img').animate({top:'0px'},{queue:false,duration:500});
	});
});
$(function(){
    $(document).bind("contextmenu",function(e){
        return false;
     });
});