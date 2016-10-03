'use strict';
//  Домашнее задание JavaScript №07-08

$(function() {

  function tabChange() {
        $(this).addClass('active').siblings().removeClass('active');
        var indexTabContent = $(this).index();
        var $tabsContent = $(this).closest('div.tabs').find('.tabs__content');
        $tabsContent.removeClass('active');
        $tabsContent.eq(indexTabContent).addClass('active'); 
    }
    
    function textChange(e) {
        $(this).next().toggleClass("hidden");
    }
    
    function promt() {
        $(this).closest('ul.item__container').find('.form__item').find('.item__help').toggleClass("hidden");    
        
    }
    
    $('.tabs__caption').on('click', 'li:not(.active)', tabChange);
    $('.item__text').on("mouseenter mouseleave", textChange);   
    $('#butHelp').on('click', promt);
});

