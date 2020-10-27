$(function() {
	var swiper = new Swiper('.center .swiper-container', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		slidesPerView: 1,
		paginationClickable: true,
		spaceBetween: 30,
		autoplay: 2500,
		loop: true
	});
	var swiper = new Swiper('.lb .swiper-container', {
	        pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
	        slidesPerView: 3,
			centeredSlides: true,
			paginationClickable: true,
			spaceBetween: 30,
			autoplay: 2500,
			loop: true
	    });
	function dateTime() { //设置头部时间
		let tn = new Date();
		let year = tn.getFullYear();
		let month = tn.getMonth() + 1;
		let day = tn.getDate();
		let days = tn.getDay();
		switch (days) {
			case 1:
				days = "星期一";
				break;
			case 2:
				days = "星期二";
				break;
			case 3:
				days = "星期三";
				break;
			case 4:
				days = "星期四";
				break;
			case 5:
				days = "星期五";
				break;
			case 6:
				days = "星期六";
				break;
			case 0:
				days = "星期日";
				break;
		}
		let rq = year + "." + month + "." + day;
		$(".tTime").text(rq);
		$(".tWeek").text(days);
	}
	dateTime();

	function countDown() {/* 考研年份及倒计时 */
		var stat = new Date().getTime();
		var end = new Date("2020/12/27").getTime();
		var day = Math.floor((end - stat) / 1000 / 60 / 60 / 24);
		$("#time").text(day);
		$("#year-span").text("2021");
	}
	countDown();
	function submitJumpF(){/* 历年分数线查询 */
		var p1=$(".aside-fsBox form p").eq(0).find("select").val()||0;
		var p2=$(".aside-fsBox form p").eq(1).find("select").val()||"0-0";
		var p3=$(".aside-fsBox form div").eq(0).find("input").attr("flag")||0;
		var p4=$(".aside-fsBox form p").eq(2).find("input").val();
		window.open("https://juece.kuakao.com/s/fsx-0-"+p1+"-"+p2+"-"+p3+"-0-0-0-1.html?name="+p4+"");
		console.log(p1,p2,p3,p4)
	}
	function writeInput (e) {/* 院校名称输入触发事件 */
			var v=$(e.target).val();
			var str='';
			$("#loadingImg").show();
			$("#schoolName").show();
			Object.keys(schoolList).forEach(function(k){
				if(schoolList[k].indexOf(v)!=-1){
					str+='<li flag="'+k+'">'+schoolList[k]+'</li>';		
				}
			})
			$("#schoolName li").remove();
			$("#schoolName").append(str);
			$("#loadingImg").hide();
		
	}
	$("#schoolInput").bind("input",writeInput);
	function updataInput(e){
		if(e.target.tagName=="LI"){
			var t=$(e.target).text();
			var f=$(e.target).attr("flag");
			$("#schoolInput").val(t).attr("flag",f);
			$("#schoolName").hide();
		}
	}
	$("#schoolName").bind("click",updataInput);
	function updataUl(){/* 更改院校下拉选项值 */
		var str='';
		Object.keys(schoolList).forEach(function(k){
			str+='<li flag="'+k+'">'+schoolList[k]+'</li>';
		});
		$("#schoolName li").remove();
		$("#schoolName").append(str);
	}
	updataUl();
	$("#submitJump").bind("click",submitJumpF);
	function schoolSt() { /* 跨考分校，集训基地切换 */
		if ($(event.target)[0].tagName == "SPAN") {
			$(".content1 .right .schoolBox p span").removeClass();
			$(event.target).addClass("ac");
			$(".schoolBox ul").css("display", "none");
			var num = $(event.target).attr("flag");
			$(".schoolBox" + num).css("display", "block");
		}
	}
	$(".content1 .right .schoolBox p").bind("click", schoolSt);

	function spanClick() { /* 日历点击切换 */
		$(".content1 .right .title span").removeClass();
		$(event.target).addClass("ac");
		$(".rlInfo table").css("display", "none");
		var num = $(event.target).attr("flag");
		$(".rlInfo .rlInfo" + num + "Table").css("display", "table");
	}
	$(".content1 .right .title span").bind("click", spanClick);

	function allContent1Switch() { /* 右边栏盒子1切换 */
		if ($(event.target)[0].tagName == "SPAN") {
			$(".cont1-iconBtn span").removeClass();
			$(event.target).addClass("ac");
			var num = $(event.target).attr("flag");
			$(".allContent1>div").css("display", "none");
			$(".allContent1-box" + num).css("display", "block");
		}
	}
	var articleCont3Num=0;
	$(".cont1-iconBtn").bind("click", allContent1Switch);
	function articleCont3More(e){/* 导航左右切换 */
		var f=$(e.target).attr("flag");
		if(f==="0"){
			if(articleCont3Num>6){
				return false;
			}
			articleCont3Num++;
			$(".article-cont3-navBox ul").css("margin-left","-"+articleCont3Num*100+"px");
		}
		if(f==="1"){
			if(articleCont3Num<=0){
				return false;
			}
			articleCont3Num--;
			$(".article-cont3-navBox ul").css("margin-left","-"+articleCont3Num*100+"px");
		}
		if(articleCont3Num!=0){
			$(".article-cont3 nav img").eq(0).css("visibility","initial");
		}else{
			$(".article-cont3 nav img").eq(0).css("visibility","hidden");
		}
	}
	$(".article-cont3 .top nav img").bind("click",articleCont3More);
	function navAdd(){
		var dom1='<li flag="4"><a href="javascript:void(0)">成绩查询</a></li><li flag="5"><a href="javascript:void(0)">院校分数线</a></li><li flag="6"><a href="javascript:void(0)">复试信息</a></li><li flag="7"><a href="javascript:void(0)">调剂信息</a></li><li  flag="8"><a href="javascript:void(0)">招生简章</a></li><li  flag="9"><a href="javascript:void(0)">招生目录</a></li><li  flag="10"><a href="javascript:void(0)">参考书目</a></li><li flag="11"><a href="javascript:void(0)">考试大纲</a></li><li flag="12"><a href="javascript:void(0)">院校推免</a></li><li flag="1"><a href="javascript:void(0)" class="ac">现场确认</a></li><li flag="2"><a href="javascript:void(0)">考场安排</a></li><li  flag="3"><a href="javascript:void(0)">考研真题</a></li>';
		var dom6='<li  flag="8"><a href="javascript:void(0)">招生简章</a></li><li  flag="9"><a href="javascript:void(0)">招生目录</a></li><li  flag="10"><a href="javascript:void(0)">参考书目</a></li><li flag="11"><a href="javascript:void(0)">考试大纲</a></li><li flag="12"><a href="javascript:void(0)">院校推免</a></li><li flag="1"><a href="javascript:void(0)" class="ac">现场确认</a></li><li flag="2"><a href="javascript:void(0)">考场安排</a></li><li  flag="3"><a href="javascript:void(0)">考研真题</a></li><li flag="4"><a href="javascript:void(0)">成绩查询</a></li><li flag="5"><a href="javascript:void(0)">院校分数线</a></li><li flag="6"><a href="javascript:void(0)">复试信息</a></li><li flag="7"><a href="javascript:void(0)">调剂信息</a></li>';
		var dom10='<li flag="1"><a href="javascript:void(0)" class="ac">现场确认</a></li><li flag="2"><a href="javascript:void(0)">考场安排</a></li><li  flag="3"><a href="javascript:void(0)">考研真题</a></li><li flag="4"><a href="javascript:void(0)">成绩查询</a></li><li flag="5"><a href="javascript:void(0)">院校分数线</a></li><li flag="6"><a href="javascript:void(0)">复试信息</a></li><li flag="7"><a href="javascript:void(0)">调剂信息</a></li><li  flag="8"><a href="javascript:void(0)">招生简章</a></li><li  flag="9"><a href="javascript:void(0)">招生目录</a></li><li  flag="10"><a href="javascript:void(0)">参考书目</a></li><li flag="11"><a href="javascript:void(0)">考试大纲</a></li><li flag="12"><a href="javascript:void(0)">院校推免</a></li>';
		var t=new Date().getMonth()+1;
		$(".article-cont3-navBox ul").remove();
		if(t>=10){
			$(".article-cont3-navBox").append("<ul>"+dom10+"</ul>");
			$(".contentText-box1").css("display","block")
		}
		if(t>=1&&t<=5){
			$(".article-cont3-navBox").append("<ul>"+dom1+"</ul>");
			$(".contentText-box4").css("display","block")
		}
		if(t>=6&&t<=9){
			$(".article-cont3-navBox").append("<ul>"+dom6+"</ul>");
			$(".contentText-box8").css("display","block")
		}
	}
	navAdd();
	function articleCont3(){/* 院校更新最后加上>> */
		var len=$(".detail p",".article-cont3").eq(1).find("a").length;
	}
	articleCont3();
	function search(){//边栏搜索
		var text=$(".aside-searchBox input").val();
		console.log(text);
	}
	$(".aside-searchBox img").bind("click",search);
	function theTime(){/* 考研月历切换 */
		var time=new Date();
		var m=time.getMonth()+1;
		if(m>6){
			$(".rlInfo table").css("display","none");
			$(".rlInfo table").eq(1).css("display","table");
			$(".content1 .right .title span").removeClass();
			$(".content1 .right .title span").eq(1).addClass("ac");
		}
	}
	theTime();
	function leftTop(){
	var len2=$(".leftTop div").eq(2).find("li").length;
		for(let i=0; i<len2; i++){
			$(".leftTop div").eq(2).find("li").eq(i).clone().appendTo(".leftTop div ul");
		}
		var len=$(".leftTop div").eq(2).find("li").length;
		var num=0;
		if(len>2){
			setInterval(function(){
				num++
				$(".leftTop div").eq(2).find("ul").css({"transform":"translateY(-"+(num*30)+"px)","transition":".3s"})
				
				if(num>len-len2){
					var dom=$(".leftTop div").eq(2).find("ul");
					dom.css({"transform":"translateY(0px)","transition":"initial"});
					var str=dom.css("transform").replace(/[^0-9\-,]/g,'').split(",")[5];
					console.log(str)
					if(str == 0){
						dom.css({"transform":"translateY(-30px)","transition":".3s"})
					}
					num=1;
				}
			},1500)
		}
	}
	leftTop();
	function articleCont5(e){/* 集训营切换 */
		if(e.target.tagName=="SPAN"){
			var f=$(e.target).attr("flag");
			$(".article-cont5 .nav span").removeClass("ac");
			$(e.target).addClass("ac");
			$(".article-cont5 .cont5-content").css("display","none");
			$(".article-cont5 .cont5"+f).css("display","flex");
		}
	}
	$(".article-cont5 .nav").bind("click",articleCont5);
	function articleCont6(e){/* 分校切换 */
		if(e.target.tagName=="SPAN"){
			var f=$(e.target).attr("flag");
			$(".article-cont6 .nav span").removeClass("ac");
			$(e.target).addClass("ac");
			$(".article-cont6 .cont6-content").css("display","none");
			$(".article-cont6 .cont6"+f).css("display","block");
		}
	}
	$(".article-cont6 .nav").bind("click",articleCont6);
	function articleCont1(e){/* 复习指导切换 */
		if(e.target.tagName=="A"){
			var f=$(e.target).attr("flag");
			$(".section-cont-box").css("display","none");
			$(".section-cont"+f).css("display","block");
			$(".article-cont1 nav a").removeClass();
			$(e.target).addClass("ac");
		}
	}
	$(".article-cont1 .top nav").bind("click",articleCont1);
	function articleCont3Nav(e){/* 学院专业切换 */
		if(e.target.tagName=="A"){
			$(".article-cont3 nav a").removeClass();
			$(e.target).addClass("ac");
			var num=$(e.target).parents("li").attr("flag");
			$(".contentText-all").css("display","none");
			$(".contentText-box"+num).css("display","block");
		}
	}
	$(".article-cont3 .top nav").bind("click",articleCont3Nav);
	function articleCont4Nav(e){/* 点击切换老师 */
		if(e.target.tagName=="A"){
			$(".article-cont4 .top nav a").removeClass();
			$(e.target).addClass("ac");
			var f=$(e.target).attr("flag");
			$(".article-cont4-lbBox .lb").css("display","none");
			$(".article-cont4-lbBox .lbBox"+f).css("display","block");
			var swiper = new Swiper('.lb .swiper-container', {
			        pagination: '.swiper-pagination',
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
			        slidesPerView: 3,
					centeredSlides: true,
					paginationClickable: true,
					spaceBetween: 30,
					autoplay: 2500,
					loop: true
			    });
		}
	}
	$(".article-cont4 .top nav").bind("click",articleCont4Nav)
	function asideSpBox(e){
		if(e.target.tagName=="LI"){
			var f=$(e.target).attr("flag");
			$(".aside-spBox li").removeClass();
			$(e.target).addClass("ac");
			$(".aside-spBox>div").css("display","none");
			$(".aside-spBox>div.video"+f).css("display","block");
		}
	}
	$(".aside-spBox ul").bind("click",asideSpBox);
	function nav2Click(e){/* 导航切换 */
		var f=$(e.target).parent("li").attr("flag");
		if(f){
			$(".nav2 .nabBackg").removeClass("ac");
			$(e.target).parent("li").addClass("ac");
			$(".bodyHidex").css("display","none");
			$(".body ."+f).css("display","flex")
		}
	}
	$(".nav2 ul").bind("mouseover",nav2Click);
	function sectionCont5Box(e){/* 定制化课程 */
		var f=$(e.target).attr("flag");
		$(".section-cont5-boxAll").css("display","none");
		$(".section-cont5-box"+f).css("display","block");
	}
	$(".section-cont5-box li").bind("click",sectionCont5Box);
	function articleCont2Click(e){
		var f=$(e.target).attr("flag")||$(e.target).parents("li").attr("flag");
		$(".articleCont2Click").removeClass("ac");
		$(e.target).parents("li").addClass("ac");
		$(".article-cont2 .listBox").css("display","none");
		$("."+f).css("display","block");
	}
	$(".articleCont2Click").bind("click",articleCont2Click);
	$(".aside-content2 p").hover(function(){
		$(".aside-content2 .aside-content2-hidebox").stop().css("display","flex");
	}
	,function(){
		$(".aside-content2 .aside-content2-hidebox").stop().css("display","none");
	})
	$(".aside-content3 p").hover(function(){
		$(".aside-content3 .aside-content2-hidebox").css("display","flex");
	}
	,function(){
		$(".aside-content3 .aside-content2-hidebox").css("display","none");
	})
})
