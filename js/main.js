$(function() {
  var topHeight = $('.top').outerHeight(); //fvの高さを取得。
  var headerHeight = $('.header').height(); //ヘッダーの高さを取得。
  var spHeight = 30; //スマホサイズの余白の高さを取得。
  var pcHeight = 80; //pcサイズの余白の高さを取得。
  var headerNavMenu = $('.middle__nav-menu'); //ヘッダーコンテンツ

  if ($(window).width() > 767) {
    $(window).on('load scroll', function() {
      if ($(window).scrollTop() < (topHeight - pcHeight)) {
      //メインビジュアル内にいるので、フェードイン。
      $('.middle').fadeOut();
    } else {
      //メインビジュアルより下までスクロールしたので、フェードアウト
      $('.middle').fadeIn();
    } 
  });
} else {
  $(window).on('load scroll', function() {
    if ($(window).scrollTop() < (headerHeight + spHeight)) {
      //メインビジュアル内にいるので、フェードイン
      $('.middle').fadeOut();
    } else {
      //メインビジュアルより下までスクロールしたので、フェードアウト
      $('.middle').fadeIn();
      }
    });
  }


});