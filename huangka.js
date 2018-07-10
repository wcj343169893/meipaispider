function initBind() {
	console.log("init success");
	//如果能请求json数据，直接通过这个接口获取图片，视频，介绍
	//http://api.xiaokaxiu.com/video/web/get_play_video?scid=~6pmLoJg~s00cKWNdYWSOB7JsJpdoJhT
	//增加特定按钮
	var href = window.location.href;
	//http://v.huangka.xiaokaxiu.com/v/jCUCTUAvmJJ8ESdqGBLUOplsM97EUZSc.html
	var hargs = href.split("/");
	id_str = (hargs[hargs.length - 1]).split(".")[0];
	console.log(id_str);
	setTimeout(function() {
		//验证图片是否正确
		var img="http://gslb.miaopai.com/stream/"+id_str+"_m.jpg";
		var mp4="http://gslb.miaopai.com/stream/"+id_str+".mp4";
		showText(img);
		showText(mp4);
		if($(".___music_box").length>0){
			showText($(".___music_box").html());
		}
		console.log("huangka");
		if($("#pc_content_box__desc .___music_box").length>0){
			var dd=$("<dd>");
			dd.append($("<img>").attr("src",img).addClass("preview_img"))
			.append($("<video>").attr("autoplay","autoplay").attr("src",mp4).addClass("preview_video"));
			$("#pc_content_box__desc .___music_box").after(dd);
		}
		//如果是小咖秀、touxiang2
		console.log("xiaoka");
		if($(".touxiang2").length>0){
			var dd=$("<div>");
			dd.append($("<img>").attr("src",img).addClass("preview_img"))
			.append($("<video>").attr("autoplay","autoplay").attr("src",mp4).addClass("preview_video"));
			$(".touxiang2").after(dd);
		}
	}, 100);
}

function showText(ele) {
	$("#video_result").prepend($("<div>").html(escapeHTML(ele)));
}
var id_str = "";
$(function() {
	//增加样式表
	var style = "<style type=\"text/css\">\
			#video_result{position:fixed;right:10px;bottom:10px;height:100px;width:700px;z-index:999;background:#fff;padding:10px;overflow-y: scroll;color:#000;}\
			.get_video_info{position: absolute;top: 5px;left: 5px;z-index: 550;background: #fff;padding:5px 10px;border-radius: 5px;border:1px solid #ddd;}\
			body, html{user-select:text;-webkit-user-select:text;}\
			.preview_img{height:200px;margin-right: 10px;margin-top: 0px;vertical-align: top;border:1px solid #fff;min-width:50px;}\
			.preview_video{height:200px;vertical-align: top;border:1px solid #fff;min-width:50px;}\
		</style>";
	$("head").append(style);
	$("body").append("<div id='video_result'></div>")
	initBind();
})

function escapeHTML(str) {
	return str.replace(/[&"'<>]/g, (m) => ({
		"&": "&amp;",
		'"': "&quot;",
		"'": "&#39;",
		"<": "&lt;",
		">": "&gt;"
	})[m]);
}