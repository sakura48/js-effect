//js获取文件路径

function getpath(obj) {
	if(window.navigator.userAgent.indexOf("MSIE") >= 1) {
		obj.select();
		return document.selection.createRange().text;
	} else {
		return window.URL.createObjectURL(obj.files[0]);
	}
}