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