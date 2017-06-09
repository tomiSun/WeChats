mui.init();

mui.plusReady(function(){

	var parentVw=plus.webview.currentWebview();
	var pageList=[
	{
		url:'../message/message.html',
		id:'message'
	},
	{
		url:'../address-book/address-book.html',
		id:'address-book'
	},
	{
		url:'../discover/discover.html',
		id:'discover'
	},
	{
		url:'../mine/mine.html',
		id:'mine'
	}
	];
	for (var i =0,l=pageList.length;i<l;i++) {
		var url=pageList[i].url;
		var id=pageList[i].id;
		console.info(url+"................."+id);
		if(plus.webview.getWebviewById(id)){
			continue;
		}
		var newWv=plus.webview.create(url,id,{
			bottom:'50px',
			top:'0px',
			popGesture:'none'
		});
		if (i===0) {
		newWv.show();
	}else{
		newWv.hide();
	}
	parentVw.append(newWv);
	}
	//默认显示的id
	var showWv='message';

	mui('.mui-bar').on('tap','.mui-tab-item',function(e){
		var	showId=this.dataset.id;
		console.info("*********"+showId);
		if (showWv===showId) {
			return;
		}
		//隐藏 当前正显示的Wv
		plus.webview.getWebviewById(showWv).hide();
		//显示即将被点击的webview
		
		var willShowWv=plus.webview.getWebviewById(showId);
		//willShowWv.show();
		willShowWv.show('none',0,function(){
			mui.fire(willShowWv,'showpage');
		});
		showWv=showId;
	});

});
