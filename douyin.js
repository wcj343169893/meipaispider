function initBind(){
	console.log("init success");
	//增加特定按钮
	setTimeout(function(){
		if($(".video-player").length>0){
			showText("--------------------------------");
			$(".video-player").click();
			setTimeout(function(){
				var link = $(".video-player .player").attr("src");
				var  imglink= $(".video-player .player").attr("poster");
				showText(imglink);
				showText(link);
			},100);
			var txt = $(".video-info .desc").html();
			showText(txt);
		}
	},500);
}
function showText(ele){
	$("#video_result").prepend($("<div>").html(escapeHTML(ele)));
}
$(function(){
	//增加样式表
	var style="<style type=\"text/css\">\
			#video_result{position:fixed;right:10px;bottom:10px;height:100px;width:700px;z-index:999;background:#fff;padding:10px;overflow-y: scroll;}\
			.get_video_info{position: absolute;top: 5px;left: 5px;z-index: 550;background: #fff;padding:5px 10px;border-radius: 5px;border:1px solid #ddd;}\
		</style>";
	$("head").append(style);
	$("body").append("<div id='video_result'></div>")
	initBind();
})

function escapeHTML(str) { return str.replace(/[&"'<>]/g, (m) => ({ "&": "&amp;", '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;" })[m]); }
