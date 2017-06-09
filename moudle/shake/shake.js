mui.init();
var p=null;
mui.plusReady(function(){
	var MAX=20;
	var up=document.querySelector('.up');
	var down=document.querySelector('.down');
	plus.accelerometer.watchAcceleration(function(a){
		console.info(JSON.stringify(a));
		
		if(!p&&Math.abs(a.xAxis)+Math.abs(a.yAxis)+Math.abs(a.zAxis)>MAX){
			//mui.alert("我被摇动了");
			p=plus.audio.createPlayer('_www/moudle/shake/shake.wav');
			p.play();
			//2秒停止播放
			setTimeout(function(){
				p.stop();
				p=null;
			},5000);
			//开始图片特效
			up.style.webkitTransform='translateY(-'+(up.offsetHeight/2)+'px)';
			down.style.webkitTransform='translateY('+(down.offsetHeight/4)+'px)';
			
			setTimeout(function(){
				up.style.webkitTransform='';
				down.style.webkitTransform='';
				
				mui.later(function(){
					mui.toast("正在搜索同一时间摇晃手机的人");
				});
			},2000);
			
		}
	},function(){
		alert("监听失败了")
	},{
		frequency:1000
	});
});
//mui.init();
//mui.plusReady(function(){
//	var MAX=20;
//	var up=document.querySelector('.up');
//	var down=document.querySelector('.down');
//	plus.accelerometer.watchAcceleration(function(a){
//		
//		
//		
//		
//		console.info(JSON.stringify(a));
//	if(Math.abs(a.xAxis)+Math.abs(a.yAxis)+Math.abs(a.zAxis)>MAX){
//			alert("我被摇动了");
//		}
//	
//	
//	
//	},function(){alert("监听失败了")},{frequency:1000})
//	
//
//})