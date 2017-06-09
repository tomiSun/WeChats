mui.init();

mui.init({
			swipeBack:true //启用右滑关闭功能
		});
		mui('body').on('shown', '.mui-popover', function(e) {
			//console.log('shown', e.detail.id);//detail为当前popover元素
		});
		mui('body').on('hidden', '.mui-popover', function(e) {
			//console.log('hidden', e.detail.id);//detail为当前popover元素
		});
		var info = document.getElementById("info");
		mui('body').on('tap', '.mui-popover-action li>a', function() {
			var a = this,
				parent;
			//根据点击按钮，反推当前是哪个actionsheet
			for (parent = a.parentNode; parent != document.body; parent = parent.parentNode) {
				if (parent.classList.contains('mui-popover-action')) {
					break;
				}
			}
			//关闭actionsheet
			mui('#' + parent.id).popover('toggle');
			if (a.id==='loginout') {
				//退出，显示登录界面
				var loginWv=plus.webview.getLaunchWebview();
				loginWv.show();
				//清空用户数据
				localStorage.removeItem('sessionToken');
				localStorage.removeItem('username');
				plus.webview.close('main','none');
				plus.webview.close('setting','none');
			} else{
				
			}
		})