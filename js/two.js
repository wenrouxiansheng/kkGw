$(function(){
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
				}
				dateTime();
				function leftHeight(){//当列表数小于10，容器的高度应为列表数*189固定高度
					let len=$(".contentText").length;
					if(len<10){
						$(".contentBox").css({"height":len*189+"px"});
					}
				}
				leftHeight();
				$(window).scroll(function(){
					 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
					 let len=$(".contentText").length;
					 let hei=$(".contentBox").css("height").split("px")[0];
					 console.log(len)
					 if(len>10&&len<=20){//当列表数大于10小于20，容器的高度可触发一次展开，展开高度为列表数-10*189固定高度
						 let h=(len-10)*189+1890;
						if(scrollTop>1600){
							$(".contentBox").css({"height":h+"px"});
						}
					 }
					 if(len>20){//当列表数大于20，列表容器的高度可触发一次展开，展开高度为列表数-20*189固定高度
						 if(hei>3780)return false;//如果列表容器已经完全展开，该事件返回false，防止滚轮上移时触发事件会导致列表容器收回
						 if(scrollTop>1600){
						 	$(".contentBox").css({"height":1890*2+"px"});
						 }
						 if(scrollTop>3400){ 
							 let num=(len-20)*189+(1890*2);
							 $(".contentBox").css({"height":num+"px"});
							 if(len==30){
								 $(".paging").show();
							 }
						 }
						 
					 }
				})
				
			})