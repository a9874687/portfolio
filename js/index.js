$( document ).ready(function() {

    //------------------------css3動畫過渡效果------------------------------//
      $(".about-img").smoove({
        offset  : '30%',
        moveX   : '-60%',
      });

      $(".about-artical").smoove({
        offset  : '30%',
        moveX   : '60%',
      });

      $("#skill>.container ul").smoove({
        offset  : '30%',
        moveY   : '60%',
      });

      $("#works>.container ul").smoove({
        offset  : '30%',
        moveY   : '60%',
      });

      $("#contact>.container").smoove({
        offset  : '30%',
        moveY   : '60%',
      });

      //------------------------選單滑動，滾動時增加紅底線------------------------------//
      $(".scrollTop").click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $("html,body").animate({scrollTop: targetPos}, 1000);
      });
      $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        $(".scrollTop").each(function(){
          var target = $(this).attr("href");
          var targetPos = $(target).offset().top;
          var targetHeight = $(target).outerHeight();
          if(targetPos -1 <= scrollPos &&(targetPos + targetHeight) > scrollPos){
            $(".scrollTop").removeClass("active")
            $(this).addClass("active");
          }else{
            $(this).removeClass("active");
          }
        });
      });

       //------------------------手機選單------------------------------//
       $(".menushow").click(function(){
         $(".menu ul").fadeToggle("slow");
       })  //打開選單
  });
  