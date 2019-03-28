// loading
 $(window).load(function () {
  	 $(".loading,.loading .sk-circle").fadeOut(3000);
   });
$(document).ready(function() {
	// nice scrollT
	$('body').niceScroll({
     cursorcolor:"#ff8b38",

	}
	);
	
	// nav opacity
var nav=$(".navbar").height();
$(window).scroll(function() {
if ($(window).scrollTop()>= nav) {
	$(".navbar").addClass("scrolled");
} else {
	$(".navbar").removeClass("scrolled");
}
});
// deal with tabs
$(".tabs-switch li").click(function(){
	// add class selected to active link
	$(this).addClass('selected').siblings().removeClass('selected');
	// hide all div
	$(".tabs .tab-content >div").hide();
	$($(this).data("class")).show();


	
});
// show button when scroll
$(window).scroll(function () {
	if ($(this).scrollTop()>= 700) {
		$(".scrolltop").show()

	} else {
		$(".scrolltop").hide()
	}
});
// click to scrollTop
	$(".scrolltop").click(function() {
		$('html,body').animate({scrollTop:0},600)
	});

});





















