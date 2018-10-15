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

  /*============================
  .slider-area
  ============================*/
  var slider = $('.slider-area');
  
  slider.each(function(){
    var sliderContainer =  $(this).find('.slider-container');
    var sliderContent =  $(this).find('.slider-content');
    var sliderBullet =  $(this).find('.slider-bullet');
    var slides = sliderContent.find('li');
    var leftArw = $(this).find('.slide-left');
    var rightArw = $(this).find('.slide-right');
    var bullet = '';
    var btnState = true;
    var slideSpeed = 500; //millisecond
    
    //set slider width
    sliderContent.width(sliderContainer.width() * slides.length);
    
    //set slides width
    slides.width(sliderContainer.width());
    
    for (var x = 1; x<= slides.length; x++){
      bullet += '<li></li>';
    }
    
    //add bullet
    sliderBullet.append(bullet);
    
    //set active bullet base on slides
    sliderBullet.find('li').eq(sliderContent.find('li.active').index()).addClass('active').siblings('li').removeClass('active');
    
    //right arrow click function
    rightArw.click(function(){
      animateSlide(sliderContent.find('li.active').next().index());
    });
    
    //left arrow click function
    leftArw.click(function(){
      animateSlide(sliderContent.find('li.active').prev().index());
    });
    
    //bullet click function
    sliderBullet.find('li').click(function(){
      animateSlide($(this).index());
    });
    
    //function for sliding the slides
    function animateSlide(i){
      //check if last or first slide
      if (i != -1){
        //prevent multiple clicking if the slide is animating
        if (btnState == true){
          btnState = false;
          
          //change active state
          sliderContent.find('li').eq(i).addClass('active').siblings('li').removeClass('active');
          //change bullete active state
          sliderBullet.find('li').eq(i).addClass('active').siblings('li').removeClass('active');

          //animate slide
          sliderContent.animate({
            'left': -(sliderContainer.width() * i)
          }, slideSpeed, function(){
            btnState = true;
          });
        }
      }

    }
  });
	
	//accordion SP
	$('.acc .acc-head a').click(function(e){
		e.preventDefault();

		if( winW < 640) {
			if($(this).parent().hasClass('active') == true){
				$(this).parent().removeClass('active');
				$(this).parent().next().slideUp('fast');
			}
			else {
				$(this).parent().addClass('active');
				$(this).parent().next().slideDown('fast');
			}
		}
	});
  
});

