window.divdraggable = window.divdraggable ? window.divdraggable + 1 : 1;
if(window.divdraggable % 2 == 1){
	$("*").css("outline","1px solid lightgreen")
	$("div").css("outline","1px solid black").draggable();
	$("a").css("outline","1px solid red").draggable();;
	$("li").css("outline","1px solid lightblue").draggable();;
	console.log("div black, a red, li blue, other green");
}
if(divdraggable % 2 == 0)$("*").css("outline","none").draggable("destory");