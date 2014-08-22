$(document).ready(function() {
	$('.photopopup').on('mouseover', function(){
	$(this).find('.darkline').animate({
	bottom:'80px',
	height:'80px',
		},{"queue": false});
	$(this).find('#secondtext').animate({bottom:'15px'},{"queue": false});
	$(this).find('#secondtext').slideDown(300).delay(200);
	});
$('.photopopup').on('mouseleave', function(){
$(this).find('.darkline').animate({height:'50px', bottom:'50px'},{"queue": false});
$(this).find('#secondtext').animate({bottom:'0px'},{"queue": false})
$(this).find('#secondtext').slideUp(300).delay(200);
});
});