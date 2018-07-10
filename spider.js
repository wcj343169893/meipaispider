var MF = {
		getHex: function(a) {
			return {
				str: a.substring(4),
				hex: a.substring(0, 4).split("").reverse().join("")
			}
		},
		getDec: function(a) {
			var d = parseInt(a, 16).toString();
			return {
				pre: d.substring(0, 2).split(""),
				tail: d.substring(2).split("")
			}
		},
		substr: function(a, c) {
			var f = a.substring(0, c[0]),
				g = a.substr(c[0], c[1]);
			return f + a.substring(c[0]).replace(g, "")
		},
		getPos: function(a, b) {
			return b[0] = a.length - b[0] - b[1], b
		},
		decode: function(a) {
			var b = this.getHex(a),
				c = this.getDec(b.hex),
				d = this.substr(b.str, c.pre);
			return window.atob(this.substr(d, this.getPos(d, c.tail)))
		}
	};
function initBind(){
	//console.log("init success");
	//增加特定按钮
	//home/square page
	$(".content-l-video:not(.exists)").each(function(){
		var vinfo=$("<div class='get_video_info'>GET LINK</div>");
		var video = $(this).attr("data-video");
		try{
			video=MF.decode(video);
		}catch(e){
			video="";
		}
		//前一个元素是图片
		var img = $(this).prev();
		var src = $(img).attr("src");
		src=src.substring(0,src.indexOf("!"));
		var desc = $(img).attr("alt");
		//判断是否有#或者@
		var endIndex=desc.length;
		desc=desc.substring(desc.indexOf("】")+1,endIndex);
		endIndex=desc.length;
		if(desc.indexOf("#") > 0){
			endIndex=desc.indexOf("#");
		}
		if(desc.indexOf("@") > 0){
			var index2=desc.indexOf("@");
			if(index2<endIndex){endIndex=index2;}
		}
		desc=desc.substring(0,endIndex);
		
		$(vinfo).data("video",video);
		$(vinfo).data("img",src);
		$(vinfo).data("title",desc);
		$(this).before(vinfo);
		$(this).addClass("exists");
		showText(vinfo)
	});
	$(".feed-item:not(.exists)").each(function(){
		var _this=$(this).find(".feed-video");
		var vinfo=$("<div class='get_video_info'>GET LINK</div>");
		var video = $(_this).attr("data-video");
		try{
			video=MF.decode(video);
		}catch(e){
			video="";
		}
		//前一个元素是图片
		var img = $(_this).parent().prev();
		var src = $(img).attr("src");
		if(src){
			src=src.substring(0,src.indexOf("!"));
			var desc = $(img).attr("alt");
			//判断是否有#或者@
			var endIndex=desc.length;
			desc=desc.substring(desc.indexOf("】")+1,endIndex);
			endIndex=desc.length;
			if(desc.indexOf("#") > 0){
				endIndex=desc.indexOf("#");
			}
			if(desc.indexOf("@") > 0){
				var index2=desc.indexOf("@");
				if(index2<endIndex){endIndex=index2;}
			}
			desc=desc.substring(0,endIndex);
		
			$(vinfo).data("video",video);
			$(vinfo).data("img",src);
			$(vinfo).data("title",desc);
			$(_this).before(vinfo);
			$(this).addClass("exists");
			showText(vinfo)
		}
	});
	$(".feed-video-old:not(.exists)").each(function(){
		var vinfo=$("<div class='get_video_info'>GET LINK</div>");
		var video = $(this).attr("data-video");
		try{
			video=MF.decode(video);
		}catch(e){
			video="";
		}
		//前一个元素是图片
		var img = $(this).parent().prev();
		var src = $(img).attr("src");
		src=src.substring(0,src.indexOf("!"));
		var desc = $(img).attr("alt");
		//判断是否有#或者@
		var endIndex=desc.length;
		desc=desc.substring(desc.indexOf("】")+1,endIndex);
		endIndex=desc.length;
		if(desc.indexOf("#") > 0){
			endIndex=desc.indexOf("#");
		}
		if(desc.indexOf("@") > 0){
			var index2=desc.indexOf("@");
			if(index2<endIndex){endIndex=index2;}
		}
		desc=desc.substring(0,endIndex);
		$(vinfo).data("video",video);
		$(vinfo).data("img",src);
		$(vinfo).data("title",desc);
		$(this).before(vinfo);
		$(this).addClass("exists");
		showText(vinfo)
		return false;
	});
	//detail page  
	$(".detail-media-wrap:not(.exists)").each(function(){
		var vinfo=$("<div class='get_video_info'>GET LINK</div>");
		var video = $(this).attr("data-video");
		try{
			video=MF.decode(video);
		}catch(e){
			video="";
		}
		//前一个元素是图片
		var img = $(this).find("img").eq(0);
		var src = $(img).attr("src");
		src=src.substring(0,src.indexOf("!"));
		var desc = $(img).attr("alt");
		//判断是否有#或者@
		var endIndex=desc.length;
		desc=desc.substring(desc.indexOf("】")+1,endIndex);
		endIndex=desc.length;
		if(desc.indexOf("#") > 0){
			endIndex=desc.indexOf("#");
		}
		if(desc.indexOf("@") > 0){
			var index2=desc.indexOf("@");
			if(index2<endIndex){endIndex=index2;}
		}
		desc=desc.substring(0,endIndex);
		
		$(vinfo).data("video",video);
		$(vinfo).data("img",src);
		$(vinfo).data("title",desc);
		$(this).before(vinfo);
		$(this).addClass("exists");
		showText(vinfo)
		return false;
	});
	setTimeout(function(){initBind();},3000);
}
function showText(ele){
	$(ele).mouseover(function(){
		//console.log($(this).data());
		var data=$(this).data();
		$("#video_result").prepend("<div>------------------------------</div>");
		$.each(data, function(ind,ele1) {
			$("#video_result").prepend($("<div>").html(escapeHTML(ele1)));
		});
		return false;
	});
}
$(function(){
	//增加样式表
	var style="<style type=\"text/css\">\
			#video_result{position:fixed;right:10px;top:50px;height:500px;width:300px;z-index:999;background:#fff;padding:10px;overflow-y: scroll;}\
			.get_video_info{position: absolute;top: 5px;left: 5px;z-index: 550;background: #fff;padding:5px 10px;border-radius: 5px;border:1px solid #ddd;}\
		</style>";
	$("head").append(style);
	$("body").append("<div id='video_result'></div>")
	initBind();
})

function escapeHTML(str) { return str.replace(/[&"'<>]/g, (m) => ({ "&": "&amp;", '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;" })[m]); }
