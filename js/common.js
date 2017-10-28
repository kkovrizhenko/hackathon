$(function() {
	$('.tabs-wrap').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
		.parents('.tabs-wrap').find('.tabs__content').hide().eq($(this).index()).fadeIn(350);
	})

});



