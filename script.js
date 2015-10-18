$(document).ready(function(){
	$('button').click(function(){
		$('img').toggleClass('hidden');
		$('button').toggleClass('hidden');
	});
	$('button').hover(function(){
		$(this).animate({fontSize:'1.35em'},200);
	},function(){
		$(this).animate({fontSize:'1.25em'},200)
	});
});

