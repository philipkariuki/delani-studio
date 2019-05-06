$(document).ready(function(){
$("#work1").hover(function() {
	$(this).animate({opacity: 0.5}, 500);
}, function() {
	$(this).animate({opacity: 1.0}, 500);
});
});


