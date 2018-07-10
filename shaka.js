function initBind() {
	console.log("init success");
	//增加特定按钮
	var href = window.location.href;
	setTimeout(function() {
		if(href.indexOf("page-index.html") >0){
			//首页
			//homeVideo();
		}else if(href.indexOf("page-topic-details.html") >0){
			//话题列表页面
		}else if(href.indexOf("page-feed.html") >0){
			//详细页面
			detailVideo();
		}
	}, 1000);
}
//定时加按钮
function homeVideo(){
	$(".j-feed-item:not(.exists)").each(function(){
		var vinfo=$("<div class='get_video_info'>GET LINK</div>");
		var href=$(this).find("a").eq(0).attr("href");
		vinfo.data("link",href);
		$(this).append(vinfo);
		
		showText2(vinfo);
		$(this).addClass("exists");
	});
}
function detailVideo(){
	if($("#my-video").length>0){
		showText("--------------------");
		showText($("#my-video").attr("src"));
		var bcimg = $(".vjs-poster").css("background-image");
		//url("http://xp.qpic.cn/oscar_pic/0/1047_316316b5a65c483d99f5a04fc04cpict/0")
		bcimg=bcimg.substr(5);
		bcimg=bcimg.substring(0,bcimg.indexOf("\""));
		
		
		var title = $(".j-materialName").html();
		showText(bcimg);
		showText(title);
	}else{
		showText("not found");
	}
}
function showText2(ele){
	$(ele).mouseover(function(){
		//console.log($(this).data());
		var data=$(this).data();
		$("#video_result").prepend("<div>------------------------------</div>");
		/*$.each(data, function(ind,ele1) {
			$("#video_result").prepend($("<div>").html(escapeHTML(ele1)));
		});*/
		return false;
	});
}
function showText(ele) {
	$("#video_result").prepend($("<div>").html(escapeHTML(ele)));
}
$(function() {
	//增加样式表
	var style = "<style type=\"text/css\">\
			#video_result{position:fixed;right:10px;bottom:10px;height:200px;width:700px;z-index:999;background:#fff;padding:10px;overflow-y: scroll;color:#000;}\
			.get_video_info{position: absolute;top: 5px;left: 5px;z-index: 550;background: #fff;padding:5px 10px;border-radius: 5px;border:1px solid #ddd;color:#000;}\
			.mod-figure-list .figure-item{position: relative;}\
		</style>";
	$("head").append(style);
	$("body").append("<div id='video_result'></div>")
	initBind();
});

function escapeHTML(str) {
	return str.replace(/[&"'<>]/g, (m) => ({
		"&": "&amp;",
		'"': "&quot;",
		"'": "&#39;",
		"<": "&lt;",
		">": "&gt;"
	})[m]);
}