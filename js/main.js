$(function(){
	$('#pages__tab--1').click(function(){
		$('#main-item--1, #pages__tab--1').addClass('active');
		$('#main-item--2, #main-item--3, #main-item--4, #pages__tab--2, #pages__tab--3, #pages__tab--4').removeClass('active');
	});
	$('#pages__tab--2').click(function(){
		$('#main-item--2, #pages__tab--2').addClass('active');
		$('#main-item--1, #main-item--3, #main-item--4, #pages__tab--1, #pages__tab--3, #pages__tab--4').removeClass('active');
	});
	$('#pages__tab--3').click(function(){
		$('#main-item--3, #pages__tab--3').addClass('active');
		$('#main-item--1, #main-item--2, #main-item--4, #pages__tab--1, #pages__tab--2, #pages__tab--4').removeClass('active');
	});
	$('#pages__tab--4').click(function(){
		$('#main-item--4, #pages__tab--4').addClass('active');
		$('#main-item--1, #main-item--2, #main-item--3, #pages__tab--1, #pages__tab--2, #pages__tab--3').removeClass('active');
	});
	$('.dayinphoto-pages__next').click(function(){
		if($("#pages__tab--1").hasClass('active')){
			$('#pages__tab--1, #main-item--1').removeClass('active');
			$('#pages__tab--2, #main-item--2').addClass('active');
		}else{
			if($("#pages__tab--2").hasClass('active')){
				$('#pages__tab--2, #main-item--2').removeClass('active');
				$('#pages__tab--3, #main-item--3').addClass('active');
			}else{
				if($("#pages__tab--3").hasClass('active')){
					$('#pages__tab--3, #main-item--3').removeClass('active');
					$('#pages__tab--4, #main-item--4').addClass('active');
				}
			}
		}
	});
	$('.dayinphoto-pages__next').click(function(){
		
	});
	$('.dayinphoto-pages__next').click(function(){
		
	});
})