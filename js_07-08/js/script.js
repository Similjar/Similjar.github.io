'use strict';
//  Домашнее задание JavaScript №07-08

$(function() {

  $('.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active');
    var indexTabContent = $(this).index();
    var $tabsContent = $(this).closest('div.tabs').find('.tabs__content');
    $tabsContent.removeClass('active');
    $tabsContent.eq(indexTabContent).addClass('active');     
  });
    
    $('.item__text').on("mouseenter mouseleave", function(){
      $(this).next().toggleClass("hidden");
    });   
    
    $('#butHelp').on('click', function() {
      $(this).closest('ul.item__container').find('.form__item').find('.item__help').toggleClass("hidden");    
        
    });

});

