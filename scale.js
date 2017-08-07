//网页整体缩放

(function(window) {
	var scale = 1;
	var scrollFunc = function(e) {
		e = e || window.event;
		if(e.wheelDelta && event.ctrlKey) { //IE/Opera/Chrome 
			if(window.addEventListener){
				scalebody(e.wheelDelta);
				event.returnValue = false;
			}
		} else if(e.detail) { //Firefox 
			event.returnValue = false;
		}
	}
	/*注册事件*/ 
	window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome/Safari

	function scalebody(value){
		if (value == -120) {
			scale -= 0.01;
			document.getElementsByClassName("container")[0].style.transform = "scale("+scale+")";
		} else if(value == 120){
			scale += 0.01;
			document.getElementsByClassName("container")[0].style.transform = "scale("+scale+")";
		}
	}
})(window)