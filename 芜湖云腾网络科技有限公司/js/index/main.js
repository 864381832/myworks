$(function(){
    if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i)=="7." ||navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8."||navigator.appName == "Microsoft Internet Explorer") 
    { 
        $("body").append("<div style='width:100%; height:30px; line-height:30px; background:red; color:#fff; position:fixed; top:0; z-index:200; text-align:center'><span style='float:right; width:30px; height:30px; text-align:center; line-height:30px; cursor: pointer;' class='close_banben'>×</span>您当前浏览器版本过低，请您升级至IE9以上版本，以达到最佳体验，谢谢！</div>");
        $(".header").css("top","30px");
    } 
    $(".close_banben").on("click",function(){
        $(this).closest("div").hide();
        $(".header").css("top","0");
        $(".header").css("top","0");
    });
});
//数字翻滚
    function szFg() {
        var options = {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
            prefix: '',
            suffix: ''
        };
        var demo = new CountUp("p4Num01", 0, 13490, 0, 2.5, options);
        demo.start();
        var demo1 = new CountUp("p4Num02", 0, 581, 0, 2.5, options);
        demo1.start();
        var demo2 = new CountUp("p4Num03", 0, 85, 0, 2.5, options);
        demo2.start();
        var demo3 = new CountUp("p4Num04", 0, 195, 0, 2.5, options);
        demo3.start();
    }
//动画展现
//showPageTop(对象,上下左右,结束位置,动画时间,延迟时间,透明度)
function showPage(showObj,pos,end,showTime,delayTime,opactityShow){
    if(pos=="top"){
        $(showObj).delay(delayTime).stop().animate({top:end,opacity:opactityShow},{easing:"swing", duration :showTime});
    }
    if(pos=="bottom"){
        $(showObj).delay(2000).stop().animate({bottom:end,opacity:opactityShow},{easing:"swing", duration :showTime});
    }
}

$(function(){
    //计算设置banner高度整屏
    var winHeight = document.body.clientHeight;
    if(winHeight>800){
        $(".ywb_banner,.yjy_banner").height(document.body.clientHeight);
    }else{
        $(".ywb_banner,.yjy_banner").height(800);
    };
    //设置内容页标题动画
    $(".yjy_banner .yt_banner_tit,.ywb_banner .yt_banner_tit").animate({top:"15%",opacity:1},{asing:"swing", duration:500});
    $(".gywm_banner .yt_banner_tit,.xwdt_banner .yt_banner_tit").animate({top:"25%",opacity:1},{asing:"swing", duration:500});
    //云外包图标动画
    $(".ywb_cont01_lie li,.yjy_cont01_lie li").mouseenter(function(){
        $(this).find("i").animate({top:"-100%",opacity:0},200,function(){
            $(this).css("top","100%").animate({
                top:[0,"easeInOutCubic"],
                opacity:1
            },300);
        });
    });
});