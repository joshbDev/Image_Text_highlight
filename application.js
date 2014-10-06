$(document).ready(function() {
	$('.photopopup').on('mouseover', function(){
		$(this).find('#secondtext').dequeue();
	$(this).find('.darkline').animate({
	bottom:'80px',
	height:'80px'
		},{"queue": false});
    		$(this).find('#secondtext').slideDown(200);
	$(this).find('#secondtext').animate({bottom:'15px'},{"queue": false}, 500);
	});
$('.photopopup').on('mouseleave', function(){
	$(this).find('#secondtext').dequeue();
$(this).find('.darkline').animate({height:'50px', bottom:'50px'},{"queue": false});
$(this).find('#secondtext').animate({bottom:'-15px'},{"queue": false}, 300);
$(this).find('#secondtext').slideUp(300).delay(200);
});
});