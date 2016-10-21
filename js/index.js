/*
if (window.Event) 
document.captureEvents(Event.MOUSEUP); 
function nocontextmenu() 
{ 
event.cancelBubble = true 
event.returnValue = false; 
return false; 
} 

function norightclick(e) 
{ 
if (window.Event) 
{ 
if (e.which == 2 || e.which == 3) 
return false; 
} 
else 
if (event.button == 2 || event.button == 3) 
{ 
event.cancelBubble = true 
event.returnValue = false; 
return false; 
} 
} 
document.oncontextmenu = nocontextmenu; // for IE5+ 
document.onmousedown = norightclick; // for all others 
*/
jQuery(document).ready(function($){
			 $('#sy1').click(function(){
			  	$('html,body').animate({scrollTop: '0px'}, 800);
			 });
			 $('#gy1').click(function(){
			 	 $('html,body').animate({scrollTop:$('#gy').offset().top-90}, 800);
			 });
			 $('#lx1').click(function(){
			  	$('html,body').animate({scrollTop:$('#lx').offset().top-90}, 800);
			 });
			 $('#jr1').click(function(){
			  	$('html,body').animate({scrollTop:$('#jr').offset().top-90}, 800);
			 });
});
//获取屏幕宽
		var windWidth=$("body").width();
		if (windWidth<=768) {
			$("#text-gy").css("width","80%");
			$("#text-lx").css("width","80%")
			$("#toolR").show();
			$("#toolR").on("click",function(){
				$("#navbar").toggle()
			})
			//alert(windWidth)
			$("#bgjr").css("height","200")
			$($("#bgjr").children("p")[0]).css("padding-top","40px")
			$($($("#bgjr").children("p")[0]).children("img")[0]).css("height","100")
			$($($("#bgjr").children("p")[1]).children("img")[0]).css("height","30")
		} else {}
		
		$("#myCarousel").carousel('cycle');
		$("#videoPage").css("height",$("body").height())
		$("#videoPage1").css("height",$("body").height())
		//视频显示隐藏
		function videoTog(obj){
			console.log(obj)
			if (obj=="AR") {
				$("#videoPage1").toggle();
			} else {
				$("#videoPage").toggle();
			}
			
		}
		
		//$("#cli").on("click",function () {
		//	$("#videoPage").show();
		//})
		//视频播放
		function playPause(obj,name){ 
			
			var myVideo=document.getElementById(name);
			 
			if (myVideo.paused) {
				$(obj).attr("class","ub-con zind999")
				myVideo.play(); 
			}else {
				console.log(1235)
				$(obj).attr("class","ub-con start zind999")
				myVideo.pause(); 
			}
				  
		} 
