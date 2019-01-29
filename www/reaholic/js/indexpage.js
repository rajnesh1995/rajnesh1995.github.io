window.onload = function(){
	$("#poetryshareright").click(function(){
		$("#poetryshareleft").toggle();
	});
	
	$("#fictionshareright").click(function(){
		$("#fictionshareleft").toggle();
	});
	
	$("#nanotaleshareright").click(function(){
		$("#nanotaleshareleft").toggle();
	});
	
	$("#shayarishareright").click(function(){
		$("#shayarishareleft").toggle();
	});
	
	
	
	$(".share").mouseleave(function(){
		$(".shareleft").hide();
	
	
	
	
	
	});
	
	
	$("#uparrow").click(function() {
    $('html,body').animate({
        scrollTop: $("#header").offset().top},
        800);
	});
	
	
	
	
}