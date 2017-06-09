	mui.init();
document.getElementById('login').addEventListener('tap',function(){
	
	var name=document.querySelector('input[name="name"]').value;
	var pass=document.querySelector('input[name="pass"]').value;
	console.info("名："+name+"密码"+pass);
	if (!name||!pass) {
		//alert("不能为空");
		mui.toast("用户名和密码不能为空");
		return;
	}
//	if (name==="s"&&pass==="t") {
//		mui.openWindow('../main/main.html','main');
//	} else{
//		mui.toast("用户名密码错误！请从新输入！")
//	}

//ajax()
//	mui.ajax({
//		url:'',
//		data:{},
//		success:function(resp){},
//		error:function(error){
//			
//		}
//	});
		mui.ajax({
		url:'https://api.leancloud.cn/1.1/login',
		type:'post',
		data:{
			'username':name,
			'password':pass
		},
		headers:{
			'X-LC-Id':'IpDJJ6gjGYWx3ymhVOCp73T2-gzGzoHsz',
			'X-LC-Key':'w5dUiQec2kM5iFlrxqCsOsMb'
		},
		success:function(resp){
			mui.toast("登录成功！");
			localStorage.setItem('sessionToken',resp.sessionToken);
			localStorage.setItem('username',resp.username);
			mui.later(function(){
				mui.openWindow({
					url:'../main/main.html',
					id:'main',
					show:{
						aniShow:'none'
					},
					style:{
						hardwareAccelerated:'true'
					}
				});
			},1500);
		},
		error:function(error){
				mui.toast('账号或者密码错误');
		}
	});
	console.info("wwwwwwww");
});
