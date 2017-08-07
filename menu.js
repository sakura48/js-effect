(function($){
	$.fn.menuToggle = function(){
		$(this).children().each(function(){
			if ($(this).has("ul").length) {
				$(this).find("a").click(function(){
					if ($(this).next().css("display") == "none") {
						$(this).find(".glyphicon").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-down");
					} else{
						$(this).find(".glyphicon").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right");
					}
					$(this).next().slideToggle();
				})
			}		
		})
	}
})(jQuery)


