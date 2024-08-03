$(function() {
	$('#followUsA').click(function() {
		art.dialog.open("yunteng!follow_us", {
			title : "欢迎关注我们的微信公众号",
			left : '50%',
			top : '100',
			width:320,
			height:400,
			lock : true
		});
		return false;
	});

	// $('#favoritesA').click(function() {
	// window.external.AddFavorite('http://www.hdmobi.cn/', '云腾科技有限公司');
	// art.dialog.alert('已加入收藏夹，谢谢关注！').time(2);
	// return false;
	// });
});
