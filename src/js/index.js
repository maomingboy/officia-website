/**
 * Created by Administrator on 2017/10/17 0017.
 */
$(function(){
    /*导航栏*/
    $(".subnav li").click(function(){
        $(".subnav li").removeClass("on");
        $(this).addClass("on");
    })
    /*锚点滑动效果*/
   $(".subnav a").click(function(){
   		$("html, body").animate({scrollTop: $($(this).attr("href")).offset().top},1000);
	    return false;
   })
    /*跳转顶部*/
    $('.totop').click(function(){
    	$('html,body').animate({scrollTop: '0px'}, 1000);
    	return false;
    });
    /*跳转底部*/
    $('.tobottom').click(function(){
    	$('html,body').animate({scrollTop: $('.index-footer').offset().top},1000);
    	return false;
    });
    /*视频播放*/
    $(".play").click(function(){
        $(this).hide();
        $(this).prev().fadeOut(600);
        $("video").trigger("play");
    })
})