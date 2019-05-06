// Front-end logic
$(document).ready(function(){
	$("#work1").hover(function() {
		$(this).animate({opacity: 0.5}, 500);
	}, function() {
		$(this).animate({opacity: 1.0}, 500);
	});
	$("#work2").hover(function() {
		$(this).animate({opacity: 0.5}, 500);
	}, function() {
		$(this).animate({opacity: 1.0}, 500);
	});
	$("#work3").hover(function() {
		$(this).animate({opacity: 0.5}, 500);
	}, function() {
		$(this).animate({opacity: 1.0}, 500);
	});
	$("#work4").hover(function() {
		$(this).animate({opacity: 0.5}, 500);
	}, function() {
		$(this).animate({opacity: 1.0}, 500);
	});
	$("#work5").hover(function() {
		$(this).animate({opacity: 0.5}, 500);
	}, function() {
		$(this).animate({opacity: 1.0}, 500);
	});
	$("#work6").hover(function() {
		$(this).animate({opacity: 0.5}, 500);
	}, function() {
		$(this).animate({opacity: 1.0}, 500);
	});
	$("#work7").hover(function() {
		$(this).animate({opacity: 0.5}, 500);
	}, function() {
		$(this).animate({opacity: 1.0}, 500);
	});
	$("#work8").hover(function() {
		$(this).animate({opacity: 0.5}, 500);
	}, function() {
		$(this).animate({opacity: 1.0}, 500);
	});
	// mouseOver display hidden div
	$('.description-wwd').mouseover(function() {
		$(this).children(".icon-wwd").hide();
		$(this).children(".textwwd").show();
	}).mouseout(function() {
		$(this).children(".icon-wwd").show();
		$(this).children(".textwwd").hide();
	});

	



});


