$(document).ready(function() {
	$('.photopopup').on('mouseenter', function(){
	$(this).find('.darkline').animate({
	bottom:'80px',
	height:'80px',
		});
	$(this).find('#secondtext').slideDown();
	});
$('.photopopup').on('mouseout', function(){
$(this).find('.darkline').animate({height:'50px', bottom:'50px'});
$(this).find('#secondtext').slideUp();
});
});