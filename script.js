$(document).ready(function(){

  $(".buddy").on("swiperight",function(){
    $(this).addClass('rotate-left').delay(800).fadeOut(1);
    $('.buddy').find('.status').remove();

    $(this).append('<div class="status like">Like!</div>');      
    if ( $(this).is(':last-child') ) {
      $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(500);
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(600);
     }
  });  

 $(".buddy").on("swipeleft",function(){
  $(this).addClass('rotate-right').delay(700).fadeOut(1);
  $('.buddy').find('.status').remove();
  $(this).append('<div class="status dislike">Dislike!</div>');

  if ( $(this).is(':last-child') ) {
   $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(500);
    alert('OUPS');
   } else {
      $(this).next().removeClass('rotate-left rotate-right').fadeIn(600);
  } 
});

});