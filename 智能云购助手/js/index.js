$(function() {
	$("#test").click(function() {
		alert("点击了");
//		$.get("http://cart.1yyg.com/JPData?action=shopCartNew&codeID=5635137&num=1", {}, function(data) {
//			alert(data);
//		});
		$.ajax({
        url: "http://cart.1yyg.com/JPData?action=shopCartNew&codeID=5635137&num=1",
        type: 'GET',
        dataType: 'JSONP',//here
        success: function (data) {
        	alert(data);
        }
    });
		return false;
	});
});