mui.init();
var url;
var scan;
mui.plusReady(function(url){
	var scan=new plus.barcode.Barcode(
		'bcode',
	    [
	     plus.barcode.QR,plus.barcode.AZTEC
	    ],
	    {
	    	frameColor:'#399a0e',
	    	scanbarColor:'#399a0e'
	    }
	    
	);
	//FrameColor:'#399a0e',
    //    ScanbarColor:'#399a0e'
	    //扫描成功后的回调函数(识别条码类型。返回文本结果)
	    scan.onmarked = function ( type, code, file ) {
	    console.info(type+code);
	     url= code;
	   mui.toast(url);
         }
	    //开始扫描
	    scan.start(); 
	    return url;
	    
});

document.getElementById('saoma').addEventListener('tap',function(){
	
	
	
	
	
	
	
	
	
	console.info(url+"0000000000000000000000");
	mui.openWindow({
		
		url:'http://cmbt.cn/AIanfZ',
		id:'saoma'
	});
});