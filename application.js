$(document).ready(function(){
  $("nav").on('click', 'a', function(event) {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 700, function(){
    });
  });
});