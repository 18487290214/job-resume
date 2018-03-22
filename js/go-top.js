$(document).ready(function() {
    $("#go_top").hide();
    $(function() {
        //检测屏幕高度  
        //var height=$(window).height();  
        //$("#test").html(height);//测试输出屏幕高度
        //scroll() 方法为滚动事件  
        $(window).scroll(function() {
            if ($(window).scrollTop() > 60) { //滚动高度大于60触发事件
                $("#go_top").fadeIn(500);
            } else {
                $("#go_top").fadeOut(500);
            }
        });
        // 点击事件
        $("#go_top").click(function() {
            $('body,html').animate({ scrollTop: 0 }, 300); // 返回动画时间 
            return false;
        });
    });
});
