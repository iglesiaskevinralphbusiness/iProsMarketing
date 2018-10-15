$(document).ready(function(){
	var uaName = navigator.userAgent.toLowerCase();
	
	var winW = $(window).width();
	var _scrollerW = 17;
	
    var _w = 640 - _scrollerW;
    
    if(uaName.indexOf("android") != -1 || uaName.indexOf("iphone") != -1 || uaName.indexOf("ipod") != -1){
        _w = 640;
    }
    else{
        _w = 640 - _scrollerW;
    }
	
	$(window).resize(function(){
        winW = $(window).width();
		
		if($('.case-list .more-btn').hasClass('open')){
		}
		else{
			//PC
			if(winW > 640){
				$('.case-list li').show();
				$('.case-list li:gt(3)').hide();

			}
			//SP
			else{
				$('.case-list li').show();
				$('.case-list li:gt(7)').hide();
			}
		}
    });

	//もっと見る
	$('.case-list .more-btn').click(function(){
		
		if($(this).hasClass('open')){
			//閉じるとき
			var target = $('.case-list').eq(0).offset().top;
			$("html, body").animate({scrollTop:target}, 300, "swing",
			function(){
				if( $(window).width() > 640){
					//PCのとき
					$('.case-list li:gt(3)').slideUp('fast');	
				}
				else{
					//SPのとき
					$('.case-list li:gt(7)').slideUp('fast');	
				}
			});			
			
		}else{
			//開くとき
			$('.case-list li').slideDown('fast');
		}
		
		$(this).toggleClass('open');
		
	});
	
});

