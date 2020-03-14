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

      $(".skill>.container ul").smoove({
        offset  : '30%',
        moveY   : '60%',
      });

      $(".works>.container ul").smoove({
        offset  : '30%',
        moveY   : '60%',
      });

      $(".contact>.container").smoove({
        offset  : '30%',
        moveY   : '60%',
      });
  });
  