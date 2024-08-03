$(function() {
	$('#fullPageWrap').fullpage({
		sectionsColor: ['#16AC9F', '#25A6DF', '#3972A7', '#5361AF', '#1A82A2'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
		menu: '#menu',
		afterLoad: function(anchorLink, index) {
			if (index == 6) {
				szFg();
			}
		},
		onLeave: function(index, nextIndex, direction) {
			// 标题动画
			showPage('.page_tit', 'top', '0', 400, 0, 0);
			showPage('.active .page_tit', 'top', '17%', 1000, 0, 1);

			// 2屏展开动画
			if (index == 4) {
				$(".page2_ico").animate({
					width: "110px",
					opacity: 0,
					marginLeft: "-55px"
				}, {
					easing: "swing",
					duration: 1000
				});
			}
			if (nextIndex == 4) {
				$(".page2_ico").animate({
					width: 1100,
					opacity: 1,
					marginLeft: -550
				}, {
					easing: "swing",
					duration: 1500
				});
			}
			// 三屏动画
			if (index == 6) {
				showPage('.p3_bot', 'bottom', '0', 200, 0, 0);
				showPage('.p3_shan', 'bottom', '0', 200, 0, 0);
			};
			if (nextIndex == 6) {
				showPage('.active .p3_bot', 'bottom', '0', 600, 0, 1);
				showPage('.active .p3_shan', 'bottom', '0', 1200, 0, 1);
			}
		}
	});
	showPage('.active .page_tit', 'top', '17%', 1600, 0, 1);

	$("#joinUs").click(function() {
		art.dialog.alert('亲爱的朋友，注册功能暂未开放，请联系我们的QQ：1599294563，感谢您对我们的支持！！').time(2);
		return false;
	});
});