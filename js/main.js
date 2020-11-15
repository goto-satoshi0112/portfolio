$(function() {
  var topHeight = $('.top').outerHeight(); //fvの高さを取得。
  var headerHeight = $('.header').height(); //ヘッダーの高さを取得。
  var spHeight = 30; //スマホサイズの余白の高さを取得。
  var pcHeight = 80; //pcサイズの余白の高さを取得。
  var headerNavMenu = $('.nav__menu'); //ヘッダーコンテンツ

  if ($(window).width() > 767) {
    $(window).on('load scroll', function() {
      if ($(window).scrollTop() < (topHeight - pcHeight)) {
      //メインビジュアル内にいるので、クラスを外す。
      headerNavMenu.removeClass('headerColor-default');
      } else {
        //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
        headerNavMenu.addClass('headerColor-default');
      } 
    });
  } else {
    $(window).on('load scroll', function() {
      if ($(window).scrollTop() < (headerHeight + spHeight)) {
      //メインビジュアル内にいるので、クラスを外す。
      headerNavMenu.removeClass('headerColor-default');
      } else {
        //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
        headerNavMenu.addClass('headerColor-default');
      }
    });
  }
});