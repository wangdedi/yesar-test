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
