$(function(){
	function goPAGE(mcurl) {
	    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
	        window.location.href = mcurl;  //跳转到wap端的网址
	    }
	}
	var curl = window.location.href;
	var mcurl = curl.replace('//www', '//wap');
	goPAGE(mcurl);
				function dateTime(){//设置头部时间
					let tn=new Date();
					let year=tn.getFullYear();
					let month=tn.getMonth()+1;
					let day=tn.getDate();
					let days=tn.getDay();
					switch(days){
						case 1:days="星期一";break;
						case 2:days="星期二";break;
						case 3:days="星期三";break;
						case 4:days="星期四";break;
						case 5:days="星期五";break;
						case 6:days="星期六";break;
						case 0:days="星期日";break;
					}
					let rq=year+"."+month+"."+day;
					$(".tTime").text(rq);
					$(".tWeek").text(days);
					$('.cont2 table:last').hide();
				}
				dateTime();
				function crumbs(){//添加地图箭头
					let len=$(".body .ditu a").length;
					for (let i=1;i<len;i++) {
						$(".body .ditu a").eq(i-1).after("<em>></em>");
					}
				}
				crumbs();
				function countDown(){//倒计时
					let stat=new Date().getTime();
					let end=new Date("2020/12/27").getTime();
					let day=Math.floor((end-stat)/1000/60/60/24);
					$("#time").text(day);
				}
				countDown();
			})