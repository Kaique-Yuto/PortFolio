$(document).ready(function() {
    $('nav a').click(function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      var offset = $(target).offset().top;
  
      var headerHeight = $('header').outerHeight(); // Obter a altura do header fixo
  
      $('html, body').animate({
        scrollTop: offset - headerHeight
      }, 500);
    });
  });
  