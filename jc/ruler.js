if(!window.ruler){
window.ruler = 1;
$('<div id="ruler" style="position:absolute;left:0;top:0;width:10000px;height:10000px;"></div>').appendTo($("body"));
for(var i = 0 ; i < 1e4 ; i ++){
	
	if(i%10 == 0) $("#ruler").append('<div class="ruler_h" style="position:absolute;width:0px; height:30px;left:'+i+'px;border-left:1px solid blue;border-right:1px solid white;"></div>');
	else if(i%2 == 0) $("#ruler").append('<div class="ruler_h" style="position:absolute;width:0px; height:20px;left:'+i+'px;border-left:1px solid grey;border-right:1px solid white;"></div>');
	if(i%100 == 0) $("#ruler").append('<div class="ruler_h" style="position:absolute;width:20px; height:20px;left:'+i+'px;border-left:1px solid red;padding:35px 0 0 0;">'+i+'</div>');
	
	if(i%10 == 0) $("#ruler").append('<div class="ruler_h" style="position:absolute;width:30px; height:0px;top:'+i+'px;border-top:1px solid blue;border-bottom:1px solid white;"></div>');
	else if(i%2 == 0) $("#ruler").append('<div class="ruler_h" style="position:absolute;width:20px; height:0px;top:'+i+'px;border-top:1px solid grey;border-bottom:1px solid white;"></div>');
	if(i%100 == 0) $("#ruler").append('<div class="ruler_h" style="position:absolute;width:20px; height:20px;top:'+i+'px;border-top:1px solid red;padding:0 0 0 35px;">'+i+'</div>');
	
	}
if($ && $.ui) $("#ruler").draggable();
}
else{
	window.ruler+=1;
	if(window.ruler%2 == 0) $("#ruler").hide();
	else $("#ruler").show();
}