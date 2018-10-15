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

	/* tab-area
	================================*/
	var tab = $('.tab-area');
	var tabHeader = $('.tab-header')
	var tabBody = $('.tab-body')

	//check if tab header has active state.
	//if tab has active state show tab container on load
	//if dont have active state show first container
	if (tabHeader.find('li').hasClass('active')){
		tabBody.find('.tab-content').eq(tabHeader.find('li.active').index()).fadeIn(300).siblings('li').hide();
	}
	else{
		tabBody.find('.tab-content').first().fadeIn(300).siblings('li').hide();
		tabHeader.find('li').first().addClass('active');
	}

	//click function for tab header
	tabHeader.find('a').click(function(e){
		e.preventDefault;
		tabBody.find('.tab-content').eq($(this).parent().index()).fadeIn(300).siblings('li').hide();
		$(this).parent().addClass('active').siblings('li').removeClass('active');
	});

	/* Auto height membership
	================================*/
	var max = -1;
	$(".membership-area .desc").each(function() {
		var h = $(this).height();
		max = h > max ? h : max;
	}).height(max);
});

