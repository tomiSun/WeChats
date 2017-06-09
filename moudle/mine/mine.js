mui.init();
mui.ready(function(){
	document.getElementById('setting').addEventListener('tap',function(){
		mui.openWindow({
			url:'../setting/setting.html',
			id:'setting'
		});
	})
})
//点击二维码显示
function displayImg(){
	document.getElementById("bigimg").style.display="block";
}
//图片二维码隐藏
function displayImg_n(){
	document.getElementById("bigimg").style.display="none";
}
