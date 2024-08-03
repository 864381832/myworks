$(function() {
    // 切换搜索框
    (function() {
        var aLi = $('#menu li');
        var oText = $('#search').find('.form .text');
        var arrText = ['例如：100块都不给我', '例如：cocos2d-x教程','例如：2048浪漫版', '例如：学技术，到传智博客', '例如：游戏开发引擎哪家强？', '例如：一起散步慢慢到老···','例如：unity3d技术'];
        var iNow = 0;

        oText.val(arrText[iNow]);

        aLi.each(function(index) {
            $(this).hover(function() {
                aLi.attr('class', 'gradient');
                $(this).attr('class', 'active');
                iNow = index;
                oText.val(arrText[iNow]);
                oText.blur();
            });
        });

        oText.focus(function() {
            if ($(this).val() == arrText[iNow]) {
                $(this).val('');
            }
        });
        oText.blur(function() {
            if ($(this).val() == '') {
                oText.val(arrText[iNow]);
            }
        });
    })();

    // update文字弹性滑动
    (function() {
        var oDiv = $('.update');
        var oUl = oDiv.find('ul');
        var iH = 0;
        var arrData = [{
            'name' : '广东省',
            'time' : 4,
            'title' : '政协主席朱明国接受组织调查',
            'url' : 'http://news.sina.com.cn/c/2014-11-28/152131218157.shtml'
        }, {
            'name' : '山东',
            'time' : 5,
            'title' : '山东招远涉邪教故意杀人案二审宣判:维持原判',
            'url' : 'http://news.sohu.com/20141128/n406472812.shtml'
        }, {
            'name' : '青海省',
            'time' : 6,
            'title' : '藏区干部的苦与乐 --青海省囊谦县干部工作',
            'url' : 'http://www.legaldaily.com.cn/index/content/2014-11/28/content_5865285.htm'
        }, {
            'name' : '河南',
            'time' : 7,
            'title' : '驻马店回应民警妻子被抓嫖:确实涉嫌卖淫',
            'url' : 'http://news.sina.com.cn/c/2014-11-28/083731216253.shtml'
        }, {
            'name' : '山西',
            'time' : 8,
            'title' : '大同三县主官同日倒下被王儒林点名批评腐败严重',
            'url' : 'http://news.163.com/14/1128/11/AC4Q82R500014SEH.html?360lm'
        }, {
            'name' : '山西',
            'time' : 9,
            'title' : '4名县处级官员今日被宣布调查 2名为女县领导',
            'url' : 'http://politics.people.com.cn/ywkx/n/2014/1128/c363767-26111336.html'
        }];
        var str = '';
        var oBtnUp = $('#updateUpBtn');
        var oBtnDown = $('#updateDownBtn');
        var iNow = 0;
        var timer = null;

        for (var i = 0; i < arrData.length; i++) {
            str += '<li><a target="_blank" href="' + arrData[i].url + '" ><strong>' + arrData[i].name + '</strong> <span>' + arrData[i].time + '分钟前</span>：' + arrData[i].title + '</a></li>';
        }
        oUl.html(str);

        iH = oUl.find('li').height();

        oBtnUp.click(function() {
            doMove(-1);
            return false;
        });
        oBtnDown.click(function() {
            doMove(1);
            return false;
        });

        oDiv.hover(function() {
            clearInterval(timer);
        }, autoPlay);

        function autoPlay() {
            timer = setInterval(function() {
                doMove(-1);
            }, 3500);
        }

        autoPlay();

        function doMove(num) {
            iNow += num;
            if (Math.abs(iNow) > arrData.length - 1) {
                iNow = 0;
            }
            if (iNow > 0) {
                iNow = -(arrData.length - 1);
            }
            oUl.stop().animate({
                'top' : iH * iNow
            }, 500);
        }

    })();

    // 网址选项卡切换
    (function() {
        fnTab($('.webTabNav'), $('.list_section'), 'mouseover');
        function fnTab(oNav, aCon, sEvent) {
            var aElem = oNav.children();
            addOnclick(0);
            aElem.each(function(index) {
                $(this).on(sEvent, function() {
                    addOnclick(index);
                });
            });
            function addOnclick(index) {
                aElem.removeClass('active').addClass('gradient');
                aElem.eq(index).removeClass('gradient').addClass('active');
                aElem.find('a').attr('class', 'triangle_down_gray');
                aElem.eq(index).find('a').attr('class', 'triangle_down_red');
                if (aCon.eq(index).html().trim() == '') {
                    addHtml(index);
                }
                aCon.hide().eq(index).show();
            }
            function addHtml(index) {
            	var data0 = [{website:"http://www.baidu.com",webname:"百度"},
            				 {website:"http://www.163.com",webname:"网易"},
            				 {website:"http://www.qq.com/",webname:"腾讯网"},
            				 {website:"http://www.sohu.com",webname:"搜狐"},
            				 {website:"http://www.sina.com.cn/",webname:"新浪网"},
            				 {website:"http://www.douban.com",webname:"豆瓣"}
            	];
            	var data1 = [{website:"http://news.sina.com.cn/",webname:"新浪新闻"},
            				 {website:"http://news.qq.com/",webname:"腾讯新闻"},
            				 {website:"http://news.ifeng.com/",webname:"凤凰新闻"},
            	];
            	var data2 = [{website:"http://tv.sohu.com/",webname:"搜狐视频"},
            				 {website:"http://v.qq.com",webname:"腾讯视频"}
            	];
            	var data3 = [{website:"http://www.ctrip.com/",webname:"携程旅行"},
            				 {website:"http://hotel.qunar.com/",webname:"去哪儿酒店"}
            	];
            	var data4 = [{website:"https://ju.taobao.com/",webname:"聚划算"},
            				 {website:"http://www.jd.com/",webname:"京东"}
            	];
            	var htmlDataArray = [data0,data1,data2,data3,data4];
                var webHtml = '';
                for (var i = 0; i < htmlDataArray[index].length; i++) {
                    webHtml = webHtml + "<li><a target='_blank' href='" + htmlDataArray[index][i].website + "' title='" + htmlDataArray[index][i].webname + "'>" + htmlDataArray[index][i].webname + "</a></li>";
                }
                aCon.eq(index).html(webHtml);
                webAHover();
            }
        }

    })();

    $('#search').find('.form .btn').click(function() {
        var searchType = $('#menu').find('.active').html();
        var searchText = $('#search').find('.form .text').val();
        if (searchType == '百度') {
            window.open("http://www.baidu.com/s?wd=" + searchText);
        } else if (searchType == 'Google') {
            window.open("http://www.google.com.hk/search?q=" + searchText);
        } else if (searchType == '360搜索') {
            window.open("http://www.so.com/s?q=" + searchText);
        } else if (searchType == '搜狗') {
            window.open("http://www.sogou.com/sogou?query=" + searchText);
        } else if (searchType == '必应') {
            window.open("http://cn.bing.com/search?q=" + searchText);
        } else if (searchType == '有道') {
            window.open("http://www.youdao.com/search?q=" + searchText);
        }else if (searchType == 'soso搜搜') {
            window.open("http://www.soso.com/q?w=" + searchText);
        }
        return false;
    });
    function webAHover() {
        $('.list_section li a').hover(function() {
        	var operUrl = $(this).attr("href");
            art.dialog.open(operUrl, {
                id : operUrl,
                title : $(this).html(),
                width : '50%',
                height : '50%',
                follow : this
            });
            var list = art.dialog.list;
            for (var i in list) {
                if (operUrl != i) {
                    list[i].close();
                }
            };
        }, function() {
            var list = art.dialog.list[$(this).attr('href')];
//             list.close();
        });
    }
});
