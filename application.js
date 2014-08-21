$(document).ready(function() {
	$('.photopopup').on('mouseenter', function(){
	$(this).find('span').animate({
		fontSize:"2.2em",
		lineHeight: '50px',
		});
	});
$('.photopopup').on('mouseout', function(){
$(this).find('span').animate({fontSize:"2em"});
});
});