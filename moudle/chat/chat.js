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
						'<img class="chat-avatar" src="you.png" />'+
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
				
});

























