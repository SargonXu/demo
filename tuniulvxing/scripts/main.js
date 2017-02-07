/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-26 21:07:47
 * @version $Id$
 */
$(function(){
	$('a[href="#"]').click(function(event){
		event.preventDefault();
	});
	/*找到所有nav项*/
	var $nav_ali = $(".header_bottom .has_drapdown");
	$nav_ali.mouseover(function(){
		var p = $(this).offset();
		$(this).find(".drapdown_box").show().css({"width":$(document).width()})
					.children(".icon_bigtriangle_green").css("left",p.left+$(this).width()/2-$(this).find(".icon_bigtriangle_green").width()/2)
					.next().css("left",p.left+$(this).width()/2-$(this).find(".drapdown_content").width()/2);
		if($(this).is($($nav_ali).eq(0))){
			$(this).find(".drapdown_content").css("left","35px");
		}
		if($(this).is($($nav_ali).last())){
			$(this).find(".drapdown_content").css("right","0px");
		}
	}).mouseout(function(){
		$(this).find(".drapdown_box").hide();
	});
	/*找到banner_center---轮播图的中间部分*/
	var i = $(".slide_controller ul").find(".current").index();
	var $slide_ali = $(".slide ul li");
	var timerSlide = null;
	function fn(){
		if(i === $slide_ali.length){
			i = 0;
		}else if(i === -1){
			i = $slide_ali.length-1;
		}
		$slide_ali.eq(i).siblings().fadeOut();
		$(".slide_controller ul li").removeClass("current");
		$slide_ali.eq(i).fadeIn();
		$(".slide_controller ul li").eq(i).addClass("current");
	}
	function slide_animate(){
		clearInterval(timerSlide);
		timerSlide = setInterval(function(){
			i++;
			fn();
		},3000);
	}
	slide_animate();

	$(".banner_center")
		.mouseenter(function(){
			clearInterval(timerSlide);
			$(this).find(".slide_btn").fadeTo("slow",0.7);
		})
		.mouseleave(function(){
			slide_animate();
			$(this).find(".slide_btn").fadeOut();
		})
		.find(".slide_controller ul li")
			.mouseenter(function(){
				clearInterval(timerSlide);
			})
			.mouseover(function(){
				// $(this).siblings(".current").removeClass("current");
				// $(this).addClass("current");
				// $(".slide ul li").filter("[style='display:block']").animate({"top":+40},50,function(){$(this).hide();})
				// 																									 .siblings().index($(this).index()).css({"display":"block","height":0}).animate({"height":+40},50);
				i = $(this).index();
				fn();
				slide_animate();
			});
		$(".slide_btn").click(function(){
			if($(this).hasClass("btn_right")){
				i++;
			}else{
				i--;
			}
			fn();
		});

		/*手风琴效果*/
		var $oDiv = $("#slide");
		var $aLi  = $oDiv.find("li");
		var minW = 99999;
		$aLi.each(function(){
			minW = Math.min(minW,$(this).width());
			$(this).mouseover(function(){
				$(this).siblings(".current").removeClass("current");
				$(this).addClass("current");
				slider($(this).index());
			})
		});

		function slider(_index){
			clearInterval($oDiv.timer);
			$oDiv.timer = setInterval(function(){
				var iW = $oDiv.width();
				var jud = true;
				for(var i = 0; i<$aLi.length; i++){
					if(i === _index){
						continue;
					}else if(minW === $aLi.eq(i).width()){
						iW -= minW;
						continue;
					}
					jud = false
					var speed = Math.ceil(($aLi.eq(i).width() - minW)/10);
					var w = $aLi.eq(i).width() - speed;
					if(w <= minW){
						w = minW;
					}
					$aLi.eq(i).width(w);
					iW -= w;
				}
				$aLi.eq(_index).width(iW);
				if(jud){
					clearInterval($oDiv.timer);
					$oDiv.timer = null;
				}
			},30);
		}
		
		/*选项卡效果*/
		var $aLayer = $(".layer");
		$aLayer.each(function(){
			var $aLink = $(this).find(".tab li");
			var $aItem = $(this).find(".body_right_item");
			$aLink.each(function(){
				$(this).click(function(){
					$aItem.eq($(this).siblings(".current").index()).hide(300);
					$(this).siblings(".current").removeClass("current");
					$aItem.eq($(this).index()).show(300);
					$(this).addClass("current");
				})
			});
		});
});
