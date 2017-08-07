(function($){
	$.fn.rotate = function(obj){
		var rotate = $(this);
		var item = $(this).find(".rotate").length;
		var x = parseInt($(this).find(".rotate").css("width"))/2;
		var y = parseInt($(this).find(".rotate").css("height"))/2;
		var o_x = obj.x+obj.r;
		var o_y = obj.y;
		var deg = 0;
		var timer = setInterval(function(){
			for (var i=0; i<item; i++) {
				$(rotate).find(".rotate").eq(i).css("top",obj.y-Math.sin(((360/item)*i+deg)*Math.PI/180)*obj.r-y);
				$(rotate).find(".rotate").eq(i).css("left",obj.x+Math.cos(((360/item)*i+deg)*Math.PI/180)*obj.r-x);
			}
			deg += 1;
		},obj.fps);
		$(this).mouseenter(function(){
			clearInterval(timer);
		})
		$(this).find(".rotate").mouseleave(function(){
			timer = setInterval(function(){
				for (var i=0; i<item; i++) {
					$(rotate).find(".rotate").eq(i).css("top",obj.y-Math.sin(((360/item)*i+deg)*Math.PI/180)*obj.r-y);
					$(rotate).find(".rotate").eq(i).css("left",obj.x+Math.cos(((360/item)*i+deg)*Math.PI/180)*obj.r-x);
				}
				deg += 1;
			},obj.fps);
		})
	}
})(jQuery)