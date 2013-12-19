$(function(){
	$('.loadDate').on('click', function(){
		$('.date').append('<p>'+new Date()+'</p>');
	});
	
	$('.reset').on('click', function(){
		$('.date').html('');
	});
});
