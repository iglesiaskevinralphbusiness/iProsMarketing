var _ua = {};
$(document).ready(function(e) {
/*------------------------------------------------------------------------------
	UA判別
------------------------------------------------------------------------------*/
	_ua.name = window.navigator.userAgent.toLowerCase();
	 
	_ua.isIE = (_ua.name.indexOf('msie') >= 0 || _ua.name.indexOf('trident') >= 0);
	_ua.isiPhone = _ua.name.indexOf('iphone') >= 0;
	_ua.isiPod = _ua.name.indexOf('ipod') >= 0;
	_ua.isiPad = _ua.name.indexOf('ipad') >= 0;
	_ua.isiOS = (_ua.isiPhone || _ua.isiPod || _ua.isiPad);
	_ua.isAndroid = _ua.name.indexOf('android') >= 0;
	_ua.isTablet = (_ua.isiPad || (_ua.isAndroid && _ua.name.indexOf('mobile') < 0));
	_ua.isSP = (_ua.isiPhone || _ua.isAndroid);
	 
	if (_ua.isIE) {
		_ua.verArray = /(msie|rv:?)\s?([0-9]{1,})([\.0-9]{1,})/.exec(_ua.name);
		if (_ua.verArray) {
			_ua.ver = parseInt(_ua.verArray[2], 10);
		}
	}
	if (_ua.isiOS) {
		_ua.verArray = /(os)\s([0-9]{1,})([\_0-9]{1,})/.exec(_ua.name);
		if (_ua.verArray) {
			_ua.ver = parseInt(_ua.verArray[2], 10);
		}
	}
	if (_ua.isAndroid) {
		_ua.verArray = /(android)\s([0-9]{1,})([\.0-9]{1,})/.exec(_ua.name);
		if (_ua.verArray) {
			_ua.ver = parseInt(_ua.verArray[2], 10);
		}
	}
	
	
	if(_ua.isSP){
		$('body').addClass('sp_device');	
	}


/*------------------------------------------------------------------------------
	デバックウインドウ
------------------------------------------------------------------------------*/
	function console_win(){
		$('body').append('<div id="console_win" style="position:fixed;top:0;left:0;z-index:99999;background:#000;color:#fff;padding:10px;"></div>');
	}
	//console_win();
	//var debugtxt = '';
	//debugtxt += 'winw:' + winw + '<br>';
	//$('#console_win').html(debugtxt);


/*------------------------------------------------------------------------------
	画像のデバイス別読み込み
------------------------------------------------------------------------------*/

	$('img')
	.each(function() {
		if($(this).attr('data-pc-src')){
			
			var type;
			
			if($(this).attr('data-pc-src').indexOf('.png') >= 0){
				type = 'png';
			}
			else if($(this).attr('data-pc-src').indexOf('.jpg') >= 0){
				type = 'jpg';
			}
			else if($(this).attr('data-pc-src').indexOf('.gif') >= 0){
				type = 'gif';
			}
			
			var path = (!_ua.isSP) ? $(this).attr('data-pc-src'): $(this).attr('data-pc-src').replace('.'+ type ,'_sp.'+type);
			
			$(this)
			.attr('src', path)
			.removeAttr('data-pc-src');
		}
	});
	
	
/*------------------------------------------------------------------------------
	画像のロールオーバー
------------------------------------------------------------------------------*/
	$('.rollover').hover(function(){
		$(this).attr("src",$(this).attr("src").replace(/(\.gif|\.jpg|\.png)/g,'_on$1'));
	}, function(){
		$(this).attr("src",$(this).attr("src").replace(/_on(\.gif|\.jpg|\.png)/g,'$1'));
	});
	

/*------------------------------------------------------------------------------
	スムーズスクロール
------------------------------------------------------------------------------*/
	$('a[href^=#]').not('.ns').click(function(){
		var href= $(this).attr("href");
		var speed = 500;
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		setTimeout(function(){
			location.hash = href;
		},speed);
		return false;
	});
	
	$('a.ns').click(function(){
		var href= $(this).attr("href");
		location.hash = href;
	});
	
/*------------------------------------------------------------------------------
	ウインドウの高さ取得
------------------------------------------------------------------------------*/
	var winH;
	var docH;
	function windowResize(){
		winH = $(window).height();
		docH = $(document).height();
	}
	$(window).resize(function(){
		windowResize();
	});
	
/*------------------------------------------------------------------------------
	最後の<li>に.lastを付ける
------------------------------------------------------------------------------*/
	$('ul').find("li:last").addClass('last');
	
/*------------------------------------------------------------------------------
	グローバルナビ
------------------------------------------------------------------------------*/
	var $gNavMenu = $('.g-nav-menu');
	var $gNavBox = $('#g-nav-box-area .g-nav-box');
	var actno = -1;
	
	//マウスオーバーした時
	$gNavMenu.mouseenter(function(){
		var n = $gNavMenu.index(this);
			actno = n;
			showNav(n);
	});
	$gNavMenu.mouseleave(function(){
		hideNav();
	});
	
	$gNavBox.mouseenter(function(){
		var n = $gNavBox.index(this);
			actno = n;
	});
	
	$gNavBox.mouseleave(function(){
		hideNav();
	});
	
	function showNav(n){
		$gNavBox.hide();
		$gNavBox.eq(n).stop().slideDown(300);
	}
	
	function hideNav(n){
		actno = -1;
		setTimeout(function(){
			if(actno == -1){
				$gNavBox.hide();
			}
		},300);
	}

	var myurl = location.pathname;
	
	if(myurl.indexOf('case-list')){
		myurl = myurl.replace('case-list','case');
	}
	
	//ナビゲーションのactive表示
	$('#g-nav  li a').each(function(i,v){
		
		var myhref =  $(this).attr('href');
		
		//ホームの時
		if(i==0){
			if ( myurl == '/' || myurl =='/index.html') {
				$(this).addClass('active');
			}
			return true;	
		}
		
		if ( myurl.indexOf(myhref) != -1) {
			$(this).addClass('active');
		}
				
	});
	
	$('.g-nav-cont li a').each(function(){
		
		var myhref = $(this).attr('href');
		
		if ( myurl.indexOf(myhref) != -1) {
			$(this).addClass('active');
		}
				
	});
	
	if($('#side-nav').is('*')){
		
		$('#side-nav')
		.find('.side-nav-list')
		.find('a')
		.each(function(){
		
			var myhref =  $(this).attr('href');
			if ( myurl.indexOf(myhref) != -1) {
				$(this).addClass('active');
			}
					
		});
		
	}
	
	
/*------------------------------------------------------------------------------
	SPメニュー
------------------------------------------------------------------------------*/
	
	$('#sp-g-nav-area,#sp-g-nav-area-bg').hide();
	$('#sp_header .menu').click(function(){
			$(this).toggleClass('open');
			if($(this).hasClass('open')){
				$('#sp-g-nav-area-bg').show();
		
			}else
			{
				$('#sp-g-nav-area-bg').hide();
			}
			
			$('#sp-g-nav-area').slideToggle(300);
	});
	$('#sp-g-nav-area-bg').click(function(){
			$('#sp-g-nav-area-bg').hide();
			$('#sp-g-nav-area').slideUp(300);
			$('#sp_header .menu').removeClass('open');
	});
	
	$('.acr dd').hide();
	$('.acr dt').click(function(){
			$(this).toggleClass('open');
			$(this).next('dd').slideToggle(300);
	});
	
	windowResize();
	$('#sp-g-nav-area-bg').css({'height':docH});
	
	
	//ナビゲーションのactive表示
	$('#sp-g-nav-area dl').each(function(i,v){
		
		var myhref =  $(this).find('a').eq(0).attr('href');
				
		if ( myurl.indexOf(myhref) != -1) {
			$(this).find('dt').addClass('open');
			$(this).find('dd').show();
		}
				
	});
	
/*------------------------------------------------------------------------------
	動画モーダルウィンドウ
------------------------------------------------------------------------------*/
	if($(".youtube").size()>0){
		if(_ua.isSP){
			
		}else{
			$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:361});
		}
	}
/*------------------------------------------------------------------------------
	モーダルウィンドウ
------------------------------------------------------------------------------*/
	if($(".modal").size()>0){
		if(_ua.isSP){
			
		}else{
			$(".modal").colorbox({});
		}
	}

/*------------------------------------------------------------------------------
	モーダルウィンドウHTML
------------------------------------------------------------------------------*/
	if($(".modalHtml").size()>0){
		if(_ua.isSP){
			
		}else{
			$(".modalHtml").colorbox({iframe:true, innerWidth:880, innerHeight:530});
		}
	}

});//document.ready

$(window).load(function(e) {
	
/*------------------------------------------------------------------------------
	検索ボタンクリック時、インプットフォーカス
------------------------------------------------------------------------------*/
	if(_ua.isSP){
		$('.spBtn .search').click(function(){
		  $('.keyword').css('lineHeight',$('#header').height()+'px');
		  $('.keyword').focus();
		  
		  $(".keyword").keypress( function( event ) {
			if( event.which === 13 ){
				$('#search-input').val($(".keyword").val());
				$('#searchForm').submit();
			}
    	});
		  return false;
		});	
	}else{
		$('#gnavi .searchBtn').click(function(){
		  $('#magaBox_search').show();
		  $('.keyword').focus();
		  return false;
		});	
		
		$('#gnavi .searchBtn').mouseleave(function(){
			 $('#magaBox_search').hide();	
		});
		
		$("#magaBox_search").keypress( function( event ) {
			if( event.which === 13 ){
				$('#search-input').val($("#magaBox_search .keyword").val());
				$('#searchForm').submit();
			}
    	});
	}

/*------------------------------------------------------------------------------
	ハッシュがあるときにスクロール
------------------------------------------------------------------------------*/
	var location_hash = location.hash;
	if(location_hash != ''){
	if($(location_hash).size()>0){
		var position = $(location_hash).offset().top - $('#header').outerHeight();
		$("html, body").animate({scrollTop:position}, 100, "swing");
	}
	}
	
	
});

/*------------------------------------------------------------------------------
	高さ揃え
------------------------------------------------------------------------------*/
$(document).ready(function(){

	function autoHeightLine(target) {
		//高さの計算を行ってから非表示に
		var pcGt = ":gt(2)";
		var spGt = ":gt(7)";
		target.heightLine();
		if( $(window).width() > 640){
			//PCのとき
			target.parents('li' + pcGt).css('display', 'none');
		}
		else{
			//SPのとき
			target.parents('li' + spGt).css('display', 'none');
		}
	}
	$('.case-list .ttl').heightLine();
	$('.case-list .txt-area').heightLine();
	$('.case-list2 .txt-area').heightLine();
	$('.col4-list .txt-area').heightLine();
	$('.knowhow-col4-list .txt-area').heightLine();
//	autoHeightLine($('.case-list .ttl'));
//	autoHeightLine($('.case-list .txt-area'));
//	autoHeightLine($('.case-list2 .txt-area'));
//	autoHeightLine($('.col4-list .txt-area'));

});
/*------------------------------------------------------------------------------
	ライトボックス
------------------------------------------------------------------------------*/

$(function () {
	//サムネイルをクリックしてポップアップ
	$(".light-box").click(function () {
		var showImg = $(this).next(".show-img");
		//ウィンドウ幅、高さを取得
		var w = $(window).width();
		var h = $(window).height();
		//大きい写真の幅、高さを取得
		var pw = showImg.outerWidth();
		var ph = showImg.outerHeight();
		//中央寄せの計算
		showImg.css({
			"left": ((w - pw) / 2) + "px",
			"top": ((h - ph) / 2) + "px",
			"display": "block"
		});
		//オーバーレイを表示
		$("body").append('<div class="back-layer"></div>');
		$(".back-layer").fadeIn("fast");
		//写真を表示
		showImg.fadeIn("fast")

		//閉じるボタン処理
		//ボタンクリック、周りクリックで関数を削除
		$(".back-layer,.btn-close").unbind().click(function () {
			//写真をフェードアウト
			showImg.fadeOut("fast", function () {
				//フェードアウトしたらオーバーレイをフェードアウト
				$(".back-layer").fadeOut("fast", function () {
					//フェードアウトしたらオーバレイを消す
					$(".back-layer").remove();
				});
			});
		});
	});
});
	
