mui.init();
document.addEventListener('showpage',function(){
	//alert("我被点击了");
	var header = document.querySelector('header.mui-bar');
	var list = document.getElementById('list');
	list.style.height = (document.body.offsetHeight - header.offsetHeight) + 'px';
	window.indexedList = new mui.IndexedList(list);
	
	
});
//mui.ready(function c(){
//	
//	var header = document.querySelector('header.mui-bar');
//				var list = document.getElementById('list');
//				//calc hieght
//				list.style.height = (document.body.offsetHeight - header.offsetHeight) + 'px';
//				//create
//				window.indexedList = new mui.IndexedList(list);
//});
document.getElementById('zhangsan').addEventListener('tap',function(){
	console.info("33333333");
	mui.openWindow({
		url:'../chatDemo2/chat-zhangsan-to-lisi.html',
		id:'zhangsan'
	});
});
document.getElementById('lisi').addEventListener('tap',function(){
	console.info("33333333");
	mui.openWindow({
		url:'../chatDemo2/chat-lisi-to-zhangsan.html',
		id:'lisi'
	});
});
