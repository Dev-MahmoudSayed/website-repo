/*global $, alert, console*/

$(function(){
 'use strict';
  $('html').niceScroll();
  //change header height
  $('.header').height($(window).height());
  //scroll to feature

  $('.header .arrow i').click(function () {
      $('html, body').animate({
          scrollTop: $('.features').offset().top

      }, 1000);
  });
  //show hidden item
$('.show-more').click(function(){
 $('.our-work .hidden').fadeIn(2000);
});
});
