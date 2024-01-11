$(function ($) {
    "use strict";

    //veno-box js
    $('.venobox').venobox();

    var $window = $(window);
    var html_body = $('html, body')


    //for scroll bottom to top js here
    if ($('.service-box').length) {
        var scrollTrigger = 150, // px
            backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.service-box').addClass('show');
            } else {
                $('.service-box').removeClass('show');
            }
        };

        backToTop();
        $window.on('scroll', function () {
            backToTop();
            if ($window.scrollTop()) {
                $("#mainHeader").addClass('stiky');
            } else {
                $("#mainHeader").removeClass('stiky');
            }
        });

        $('#totop').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    // 数字自增动画
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });

  // banner slider
  var $mainSlider = $('.silder');

  $mainSlider.owlCarousel({
    loop: true,
    navText: ['<img src="./img/banner-left-1.png" alt="" class="banner-left"><img src="./img/banner-left-2.png" alt="" class="banner-left banner-left-2">', '<img src="./img/banner-right-1.png" alt="" class="banner-left"><img src="./img/banner-right-2.png" alt="" class="banner-left banner-left-2">'],
    nav: true,
    dots:false,
    autoplay: true,
    autoplayTimeout: 3000,
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    smartSpeed: 450,
    responsive: {
        0: {
            items: 1,
            nav:false
        },
        768: {
            items: 1,
            nav:false,
        },
        960: {
            items: 1,
            nav:false
        },
        1250: {
            items: 1
        },
        1920: {
            items: 1
        }
    }
    });

    // testimonialSlider
    $('.testimonialSlider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            576: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
	// 新闻动态 tab页切换
	$('#newsDynamic div.tabs').find('a:eq(0)').addClass('current');
	$('#newsDynamic .tab-content').find('.tabs_item:eq(0)').addClass('current');

	$('div.tabs a').click(function (g) { 
		var tab = $('#newsDynamic .tabs'); 
		var	index = $(this).index();
		tab.find('a').removeClass('current');
		$(this).addClass('current');
		$('#newsDynamic .tabs_item').removeClass('current');
        $('#newsDynamic .tab-content').find('div.tabs_item:eq(' + index + ')').addClass('current');
		g.preventDefault();
	});
	
	
    // 我们的服务 初始化 第一个 状态
    (function(){
        $('.accordionbox-item').eq(0).addClass('active');
        $('.accordionbox-item').eq(0).stop().animate({width: '5.66rem'}, 'none');
        $('.accordionbox-item').hover(function() {
            // 获取索引
            var _index = $(this).index();
            $(this).stop().animate({width: '5.66rem'}, 'none');
            $('.accordionbox-item').removeClass('active');
            $(this).addClass('active');
            $(this).siblings().stop().animate({width: '1.34rem'}, 'none');
            // $(this).addClass('curr').stop().animate({width: '5.66rem'}, 'slow')
            // 	.siblings()
            // 	.stop()
            // 	.animate({
            // 		width: '1.34rem'
            // 	}, 'slow')
            // 	.removeClass('curr');
        }, function() {
            //移出
        
        })
    })()
	 //我们的团队
	$('#ourTeam-carousel').owlCarousel({
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots:false,
		autoplayTimeout: 3000,
		smartSpeed: 450,
		responsive: {
		    0: {
		        items: 2,
		        nav:false
		    },
		    768: {
		        items: 2,
		        nav:false,
		    },
		    960: {
		        items: 4,
		    },
		    1250: {
		        items: 4
		    },
		    1920: {
		        items: 4
		    }
		}
	});

    //导师专题
	$('#tutorTopic-carousel').owlCarousel({
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots:true,
		autoplayTimeout: 3000,
		smartSpeed: 450,
		responsive: {
		    0: {
		        items: 2,
		        nav:false
		    },
		    768: {
		        items: 2,
		        nav:false,
		    },
		    960: {
		        items: 4,
		    },
		    1250: {
		        items: 4
		    },
		    1920: {
		        items: 4
		    }
		},
        scrollPage:true,
	});
    //税种
    $('#tax-carousel').owlCarousel({
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        dots:false,
        autoplayTimeout: 3000,
        smartSpeed: 450,
        items: 4
    });
    //地区
    $('#add-carousel').owlCarousel({
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        dots:false,
        autoplayTimeout: 3000,
        smartSpeed: 450,
        items: 6
    });
	// 关于我们
	(function(){
        // 获取url 参数
        var temData = new URLSearchParams(window.location.search);
        var url_index =temData.get('id') - 1;
		// 初始化按钮样式 开始
		$('.aboutUs-info-navbox').find('a:eq('+ url_index +')').addClass('active');
        $('.aboutUs-tab-centent .aboutUsTab_items').eq(url_index).fadeIn();
		// 初始化按钮样式 结束
		$('.aboutUs-info-navbox a').click(function(g){
			$('.aboutUs-info-navbox a').removeClass('active');
			$(this).addClass('active');
			
			var	index = $(this).index();
			$('.aboutUs-tab-centent .aboutUsTab_items').fadeOut();
			setTimeout(function(){
				$('.aboutUs-tab-centent .aboutUsTab_items').eq(index).fadeIn();
			},500)
			
			g.preventDefault();
		})
    })();
	// 新闻中心
	// (function(){
	// 	// nav tab
	// 	// 初始化按钮样式
	// 	$('.news-info-navbox').find('a:eq(0)').addClass('active');
	// 	$('.news-info-navbox a').click(function(g){
	// 		$('.news-info-navbox a').removeClass('active');
	// 		$(this).addClass('active');
	// 		var	index = $(this).index();
	// 		$('.news-tab-centent .newsTab_items').fadeOut();
	// 		setTimeout(function(){
	// 			$('.news-tab-centent .newsTab_items').eq(index).fadeIn();
	// 		},500)
	// 		g.preventDefault();
	// 	})
    // })();

    // 加入我们手风琴模式
	(function(){
		// 初始化按钮样式
        $('#recruitment').find('.tabs_items:eq(0)').addClass('active');
        $('#recruitment').find('a.tabs_items-title:eq(0)').addClass('active');
        $('#recruitment').find('.tabs_items-title .r-1:eq(0)').html('-');

		$('#recruitment a.tabs_items-title').click(function(g){
            if(!$(this).hasClass('active')){
                $('.aboutUs-info-navbox a').removeClass('active');
                $('#recruitment a.tabs_items-title').removeClass('active');
                $('#recruitment .tabs_items-title .r-1').html('+');
                $('#recruitment .tabs_items').removeClass('active');
                $(this).addClass('active');
                $(this).parent('.tabs_items').addClass('active');
                $(this).find('.r-1').html('-');
            }else{
                $(this).removeClass('active');
                $(this).parent('.tabs_items').removeClass('active');
                $(this).find('.r-1').html('+');
            }

            
			g.preventDefault();
		})
	})();

    // 法规左侧导航
	function init() {
		$('#sidebar-menu a').on('click', function(e) {
			if($(this).parent().hasClass('submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('subdrop')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('subdrop');
				$(this).next('ul').slideDown(350);
				$(this).addClass('subdrop');
			} else if($(this).hasClass('subdrop')) {
				$(this).removeClass('subdrop');
				$(this).next('ul').slideUp(350);
			}
		});
        $('#sidebar-menu ul li a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
		$('#sidebar-menu ul li a.active').parents('li.submenu').children('a:first').addClass('active').trigger('click');
    }
	// Sidebar Initiate
	init();
    // 折叠、打开导航栏
    $(document).on('click', '#sidebar-btn-i', function (e) {
        var leftBox = $('.left-tree-b');
        var $menuItem = $('#sidebar-menu a');
        var formBox = $('.form-box');
        if(!leftBox.hasClass('active')){
            leftBox.addClass('active');
            formBox.fadeOut();
        }else{
            leftBox.removeClass('active');
            formBox.fadeIn();
        }

		return false;
    });
    
    // 浮窗客服
    (function(){
        var consultNow = $('.consultNow');
        var closure_box = $('#closure-box');
        var chatBox = $('.chatBox');
        consultNow.click(function(event){
            if(!chatBox.hasClass('active')){
                chatBox.addClass('active');
                chatBox.fadeIn(350);
            }else{
                chatBox.removeClass('active');
                chatBox.fadeOut(350);
            }
        });
        closure_box.click(function(event){
            chatBox.removeClass('active');
            chatBox.fadeOut(350);
        });
    })();

    (function(){
        var ourTeamList = $('#ourTeam-carousel .ourTeam-title-box');
        for(var i = 0; i < ourTeamList.length; i++){
            var ourTeamP =  ourTeamList.eq(i).children('p');
            var p_arr = [];
            for(var j = 0; j< ourTeamP.length; j++){
                var p_text = ourTeamP.eq(j)[0].innerHTML;
                if(p_text.indexOf(',') != -1){
                    var s1 = p_text.split(',');
                    console.log(s1)
                    for(var k = 0; k<s1.length;k++){
                        if( k == 0 ){
                            ourTeamP.eq(j)[0].innerHTML = s1[0];
                        }else{
                            ourTeamP.eq(j).after("<p>"+ s1[k] +"</p>")
                        }
                    }
                }
            }
        }
    })()

}(jQuery));