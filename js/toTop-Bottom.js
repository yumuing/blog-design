// 设置回到顶部底部
$(document).ready(function(){
	var isTopClick = true;
	$('#toTop').bind("click", function () {
		if (isTopClick) {
			isTopClick = false;
			$("html,body").animate({scrollTop:0},800);
		}
		setTimeout(function () {isTopClick = true;}, 1000);
	});
	var isBottomClick = true;
	$('#toBottom').bind("click", function () {
		if (isBottomClick) {
			isBottomClick = false;
			$("html,body").animate({scrollTop:$(document).height()},800);
		}
		setTimeout(function () {isBottomClick = true;},1000);
	});
	$(window).scroll(function(){
		var topp = $(document).scrollTop();
		if(topp < 300){
			$("#toTop").hide();
			$("#toBottom").show();
		}
		else{
			$("#toTop").show();
			$("#toBottom").hide();
		}
		
	});
});
