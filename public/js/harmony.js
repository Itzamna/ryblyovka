$(document).ready(function(){
	
	$(".accordion h3:first").addClass("active");
	$(".accordion .ac-text:not(:first)").hide();

	$(".accordion h3").click(function(){
		$(this).next(".ac-text").slideToggle("slow")
		.siblings(".ac-text:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});

});
