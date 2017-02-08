$(document).foundation()

// code to make the items appear when you click a menu item
var $content = $('.item');

function showContent(item) {
  $content.hide().filter('.' + item).show();
}

$('.menu').on('click', '.menu-btn', function(e) {
  showContent(e.currentTarget.hash.slice(1));
  e.preventDefault();
})
