mui.init();
//消息输入框
var sendBtn=document.getElementById('send');
var emoticons=document.getElementById('emoticons');
var more=document.getElementById('more');
var msg=document.getElementById('msg-input');
document.getElementById('msg-input').addEventListener('input',function(){
	
	console.info(this.value);
	if (this.value.trim().length>0) {
		//发送按钮显示，表情按钮隐藏
		sendBtn.style.display='block';
		emoticons.style.display='none';
		more.style.display='none';
	}else{
		//表情按钮显示，发送按钮隐藏
		sendBtn.style.display='none';
		emoticons.style.display='block';
		more.style.display='block';
	}
});
document.getElementById('send').addEventListener('tap',function(){
	
	var msgValue=msg.value;
	
	var willSendmsg='<div class="chat-box chat-box-right mui-content-padded">'+
						'<img class="chat-avatar" src="candy.png" />'+
					'<div class="chat-content">'+
						'<div class="chat-content-inner">'+
						msgValue+
						'</div>'+
						'<div class="chat-content-arrow"></div>'+
					'</div><div class="clear-float"></div>'+
				'</div>';
				
	var newDom=document.createElement('div');	
	newDom.innerHTML=willSendmsg;
	var msgList=document.querySelector('.chat-list');
	msgList.appendChild(newDom);
	//清空文本输入
	msg.value='';
	//隐藏发送按钮
	sendBtn.style.display='';
	emoticons.style.display='';
	more.style.display='';
	msgList.scrollTop=msgList.scrollHeight-msgList.offsetHeight;
	//开始发送消息
	// Tom 用自己的名字作为 clientId，获取 IMClient 对象实例
realtime.createIMClient('lisi').then(function(lisi) {
  // 创建与Jerry之间的对话
  return lisi.createConversation({
    members: ['zhangsan'],
    name: 'lisi & zhangsan',
  });
}).then(function(conversation) {
  // 发送消息
  return conversation.send(new AV.TextMessage(msgValue));
}).then(function(message) {
  console.log('lisi& zhangsan', '发送成功！');
}).catch(console.error);
});



//初始化 点对点聊天
var Realtime = AV.Realtime;
var TextMessage = AV.TextMessage;
var realtime = new Realtime({
  appId:'IpDJJ6gjGYWx3ymhVOCp73T2-gzGzoHsz',
  region: 'cn', //美国节点为 "us"
});


realtime.createIMClient('lisi').then(function(lisi) {
  lisi.on('message', function(message, conversation) {
    console.log('Message received: ' + message.text);
    
    
    var willSendmsg='<div class="chat-box chat-box-left mui-content-padded">'+
						'<img class="chat-avatar" src="nv.png" />'+
					'<div class="chat-content">'+
						'<div class="chat-content-inner">'+
						message.text+
						'</div>'+
						'<div class="chat-content-arrow"></div>'+
					'</div><div class="clear-float"></div>'+
				'</div>';
				
	var newDom=document.createElement('div');	
	newDom.innerHTML=willSendmsg;
	var msgList=document.querySelector('.chat-list');
	msgList.appendChild(newDom);
    
   
  });
}).catch(console.error);


















