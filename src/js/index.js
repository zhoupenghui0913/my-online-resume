/**
 * 功能部分
 * @authors Phelps Chou
 * @date    2016-11-14 07:55:30
 * @version $Id$
 */

$(function(){
	//fullPage动画效果
	$('#full-page').fullpage({
		scrollingSpeed: 800,  //页面滚动的时间，默认700ms
		css3: true,
		verticalCentered: false,  //每页的内容是否垂直居中
		anchors:['首页', '关于我', '专业技能', '我的经历', '联系我'],  //定义锚链接
		afterRender: function(){  //页面结构生成后调用的回调函数
			$("#home .content-wrap").css('display', 'block');
			$("#home").addClass("home-bg-show");
			$("#header").before("<div id='header-bg'></div>");
			$(".active").height();
			$("#home .home-img").css({"margin-top":0});
			$("#header").animate({opacity:'1'}, 2000, function(){
				$("#header-bg").css({"opacity":"0.3"});
				$(".home-title").fadeIn(1000,function(){
					$(this).next().animate({width:"800px"},1000,function(){
						$(".home-p1").fadeIn(600,function(){
							$(this).next().fadeIn(600,function(){
								$(this).next().fadeIn(600,function(){
									$(this).next().fadeIn(600,function(){
										$("#aside").fadeIn(1000);
										$(".tools").fadeIn(1000);
									});
								});
							});
						});
					});
				});
			});
			$("#aside ul li").eq(0).find(".circular").addClass("selected");
			$("#aside ul li").eq(0).siblings().find(".circular").removeClass("selected");
		},
		afterLoad: function(anchorLink, index){  //滚动到某个section完成后执行的回调
			if(index>=2){
				$(".tools a.go-top").css("display","block");
			}
			if(index==1){
				$("#aside ul li").eq(0).find(".circular").addClass("selected");
				$("#aside ul li").eq(0).siblings().find(".circular").removeClass("selected");
				$(".tools a.go-top").css("display","none");
			}
			if(index==2){
				$("#aside ul li").eq(1).find(".circular").addClass("selected");
				$("#aside ul li").eq(1).siblings().find(".circular").removeClass("selected");
				$("#about .all-title h1").after("<div class='title-eng'><h2>· ABOUT ME ·</h2></div>");
				$(".title-eng").animate({width:"130px"},1000,function(){
					$(".title-eng h2").slideDown(500);
				});
				$(".about-info").animate({width:"800px",marginTop:"0",marginBottom:"0"},1000,'easeOutElastic',function(){
					$(".about-info p").eq(0).animate({top:"0"},1000,function(){
						$(".about-info p").eq(1).animate({top:"0"},1000,function(){
							$(".about-info p").eq(2).animate({top:"0"},1000,function(){
								$(".about-info p").eq(3).animate({top:"0"},1000);
							});
						});
					});
				});
			}
			if(index==3){
				$("#aside ul li").eq(2).find(".circular").addClass("selected");
				$("#aside ul li").eq(2).siblings().find(".circular").removeClass("selected");
				$("#skill .all-title h1").after("<div class='title-eng'><h2>· SKILL ·</h2></div>");
				$(".title-eng").animate({width:"130px"},1000,function(){
					$(".title-eng h2").slideDown(500);
				});
				$("#skill .skill-list>ul>li").addClass("skill-scale");
			}
			// if(index==4){
			// 	$("#aside ul li").eq(3).find(".circular").addClass("selected");
			// 	$("#aside ul li").eq(3).siblings().find(".circular").removeClass("selected");
			// 	// $("#work .all-title h1").after("<div class='title-eng'><h2>· MY WORK ·</h2></div>");
			// 	$(".title-eng").animate({width:"130px"},1000,function(){
			// 		$(".title-eng h2").slideDown(500);
			// 	});
			// }
			if(index==4){
				$("#aside ul li").eq(3).find(".circular").addClass("selected");
				$("#aside ul li").eq(3).siblings().find(".circular").removeClass("selected");
				$("#experience .all-title h1").after("<div class='title-eng'><h2>· EXPERIENCE ·</h2></div>");
				$(".title-eng").animate({width:"130px"},1000,function(){
					$(".title-eng h2").slideDown(500);
				});
				var i=-1;
				$(".experience-scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("slow-show")){
						i++;
						setTimeout(function(){
					   		$this.addClass("slow-show");
					   },200*i);
					}
                });
			}
			if(index==5){
				$("#aside ul li").eq(4).find(".circular").addClass("selected");
				$("#aside ul li").eq(4).siblings().find(".circular").removeClass("selected");
				$("#contact .all-title h1").after("<div class='title-eng'><h2>· CONTACT ME ·</h2></div>");
				$(".title-eng").animate({width:"130px"},1000,function(){
					$(".title-eng h2").slideDown(500);
				});
				$(".contact-head1").addClass("slow-show");
				var j=-1;
				$(".contact-head2 span").each(function(){
					var $this=$(this);
					if(!$this.hasClass("fade-in")){
						j++;
						setTimeout(function(){
					   		$this.addClass("fade-in");
					   	},200*j);
					}
				});
				var k=-1;
				setTimeout(function(){
					$(".contact-scale").each(function(){
						var $this=$(this);
						if(!$this.hasClass("fade-in")){
							k++;
							setTimeout(function(){
				   				$this.addClass("fade-in");
				   			},400*k);
						}
					});
				},800);
			}
		},
		onLeave: function(index, nextIndex, direction ){  //离开一个section执行回调
			if(index==2||index==3||index==4||index==5){
				$(".title-eng").remove();	
			}
		}
	});


	// 头部标题文字切换
	$("#header .header-logo .header-p").on('mouseover', function(){
		$(this).parent().find(".header-p").removeClass("active");
		$(this).parent().find(".header-p").eq(1).addClass("active");
	});
	$("#header .header-logo .header-p").on('mouseout', function(){
		$(this).parent().find(".header-p").removeClass("active");
		$(this).parent().find(".header-p").eq(0).addClass("active");
	});

	// 主页头像切换
	$("#home .home-img .img2").hover(  //同时绑定 mouseenter和 mouseleave事件
		function(){
			$(this).stop().fadeTo(1000,1);		
		},	
		function(){
			$(this).stop().fadeTo(1000,0);
		}
	);

	// 技能明细显示隐藏
	$("#skill .skill-list .skill-list-title").on('click', function(){
		$("#skill .skill-list .detail-wrap").each(function(){
			if($(this).is(":visible")){
				$(this).slideUp(200);
				$(this).parent().find(".iconfont").removeClass("flag");
			}
		});  //当点击的时候遍历所有的detail-wrap，初始化，把内容隐藏三角向上
		if($(this).siblings(".detail-wrap").is(":hidden")){
			$(this).siblings(".detail-wrap").slideDown(600);
			$(this).parent().find(".iconfont").addClass("flag");
		}
	});

	// 鼠标移入轮播时翻页箭头显示
	$(".experience-carousel").hover(
		function(){
			$(".experience-carousel .arrow").stop().fadeTo(1000,1);		
		},	
		function(){
			$(".experience-carousel .arrow").stop().fadeTo(1000,0.1);		
		}
	);

	//侧边导航点击切换
	$("#aside ul li").on('click', function(){
		var idx = $(this).index();
		$(this).find(".circular").addClass("selected");
		$("#aside ul li").eq(idx).siblings().find(".circular").removeClass("selected");
	});

	// 微信二维码显示隐藏
	$(".tools .qr-sm").hover(
		function(){
			$(".tools img").fadeTo(1000,1);		
		},	
		function(){
			$(".tools img").fadeTo(1000,0);		
		}
	);
});
