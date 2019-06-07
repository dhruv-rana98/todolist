$(document).ready(function(){
	$("ul").on("click","li",function(){ 
	$(this).toggleClass("completed");
});


// while clicking on the span and removing the item
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function()
		{
			$(this).remove();
		});
	event.stopPropagation();
});

$(".fa-plus").on("click",function(){
	$("input[type='text']").fadeToggle();
});


//add new todos when enter key is pressed
$("input[type='text']").keypress(function(event)
	{
		if(event.which===13)
		{
			//grabbing new todo text
			var todos=$(this).val();
			$(this).val("");
			$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+todos+"</li>")
		}
	});
// $(".fa-plus").on("click",function(){
// 	$("input[type='text']").fadeToggle();
// });


});
//while clicking
