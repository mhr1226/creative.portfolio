// // ナビゲーションのクリック時の関数まとめ
// const animateSet = () =>{
//   $(() =>{
//     // 背景の表示
//   $('.nav-back,nav').css('display','flex');
//    // バツ印の作成
//   $('.menu-bar div').css({
//     'border':'1px solid white',
//     'top':'50%'});
//   $('.menu-bar div:nth-of-type(2)').css({
//     'bottom':'auto',
//     'transform':'rotate(-45deg)'});
//   ;
//   // バツ印にアニメーションをつける
//   $('.menu-bar div:nth-of-type(1)').css('transform','rotate(45deg)');
// });
// }

$('.menu-bar').on('click',() =>{
  $('nav,.nav-back').toggleClass('nav-open');
  $('.menu-bar div').toggleClass('nav-close');
  $('.menu-bar div:nth-of-type(1)').toggleClass('nav-close-1');
  $('.menu-bar div:nth-of-type(2)').toggleClass('nav-close-2');
});
