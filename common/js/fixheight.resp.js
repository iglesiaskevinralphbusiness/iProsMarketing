/*===========================================================
高さ揃え　レスポンシブ対応
【使い方】
fixHeightResp(ターゲット,カラム数);
ターゲット　・・・　高さ揃えする要素をJqueryでラップした状態で渡す
カラム数　・・・　何個毎に高さ揃えするか指定、-1だと全部同じ高さに揃える
例）  fixHeightResp($('.list1 li'),3);
===========================================================*/
var fixHeightRespList = [];

function fixHeightResp($t,clm){
	var obj = {t:$t,c:clm};
	fixHeightRespList.push(obj);	
	fixHeightRespProp($t,clm);
}

function fixHeightRespProp($t,clm){
	var maxH = 0;
	var h = 0;
	var len = $t.size();
	if(clm <= 0){
		clm = len;
	}
	
	$t.css({'height':'auto'});
	$t.each(function(i,v){
		h = $(this).outerHeight();
		if(maxH < h){
			maxH = h;
		}
		if(((i+1)%clm==0 && i!=0)){
			$t.slice(i+1-clm,i+1).css({'height':maxH});
			maxH = 0;
		}else if((i+1) == len){
			var st = len - (len % clm);
			$t.slice(st,len+1).css({'height':maxH});	
		}
	});
	
		
}

var fixHeightRespTimer;
$(window).resize(function(e) {
	clearTimeout(fixHeightRespTimer);
	fixHeightRespTimer = setTimeout(function(){fixHeightRespWinResize();},100);
});	

function fixHeightRespWinResize(){
	$.each(fixHeightRespList,function(i,v){
		fixHeightRespProp(v.t,v.c);			
	});	
}

