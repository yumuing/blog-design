// 设置回到顶部底部
$(document).ready(function(){
	if($(document).scrollTop() < 300){
		$("#toBottom").show();
		$("#toTop").hide();
	}
	var isBottomClick = true;
	$('#toBottom').bind("click", function () {
		if (isBottomClick) {
			isBottomClick = false;
			$("html,body").animate({scrollTop:$(document).height()},800);
		}
		setTimeout(function () {isBottomClick = true;},1000);
	});
	var isTopClick = true;
	$('#toTop').bind("click", function () {
		if (isTopClick) {
			isTopClick = false;
			$("html,body").animate({scrollTop:0},800);
		}
		setTimeout(function () {isTopClick = true;}, 1000);
	});
	$(window).scroll(function(){
		var topp = $(document).scrollTop();
		if(topp < 300){
			$("#toBottom").show();
			$("#toTop").hide();
		}
		else{
			$("#toTop").show();
			$("#toBottom").hide();
		}
		
	});
});
