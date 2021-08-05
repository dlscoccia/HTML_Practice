/* HORIZONTAL SCROLL NAVBAR */

$scrollMenu = $('.scrollmenu');

$('.btn-left').click(function() {
  $scrollMenu.animate({
    scrollLeft: '-=200px'
  }, 'slow');
});

$('.btn-right').click(function() {
  $scrollMenu.animate({
    scrollLeft: '+=200px'
  }, 'slow');
});

/* BURGUER MENU */
