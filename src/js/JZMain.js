/***********************************************************************************
 ** 功能模塊描述:
 **=================================================================================
 ** 功能內容描述:
 ** 
 ** 聯繫方式：Jeason_zhang888@163.com      Tel:13641638693
 ** 修改時間：
 ** 加法函数，用来得到精确的加法结果
 ** 调用：
 ** 返回值：
 **=================================================================================
 ************************************************************************************/
//打印机动态效果
 (function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
						progress = str.indexOf('>', progress) + 1;
					} else {
						progress++;
					}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
						clearInterval(timer);
					}
			}, 75);
		});
		return this;
	};
})(jQuery);
$('#comment').typewriter();

var selectedIndex = 0;
var tempCount = $('#imageBox img').length;
setInterval(function(){
	var tempIndex =selectedIndex;
	selectedIndex++;
	selectedIndex = selectedIndex%tempCount;
	/*$('#imageBox img').eq(tempIndex).hide().eq(selectedIndex).show();*/
	$('#imageBox').find('img').eq(tempIndex).fadeOut(100);
	$('#imageBox').find('img').eq(selectedIndex).fadeIn(100);
	
},3000);




