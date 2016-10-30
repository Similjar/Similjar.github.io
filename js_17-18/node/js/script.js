'use strict';
//  Домашнее задание JavaScript №07-08

$(function() {
    $('.carousel').carousel();
    
    templater();
    
    function templater(){
        var html = $('#htmlTemplater').html();
        var data = {
            titleH1:'Бендер Остап',
            titleImg: 'img/maxresdefault.jpg',
            items:{
                div1:{
                    title: ['Хочу учить фронтенд, потому что:'],
                    text: ['Фронтенд - игра, и кто ж тому виной, что я увлёкся этою игрой.', 
                        'И разве мой талант, и мой душевный жар не заслужили скромный гонорар', 
                        'Белеет мой парус такой одинокий, на фоне стальных кораблей'],
                },
                div2:{
                    title: ['Мой контактный телефон:', 'Мой e-mail:'],
                    text: ['+38-050-xxx-xxxx', 'ostap@gmail.com'],
                },
                div3:{
                    title: ['Мой фидбэк:'],
                    text: ['Жизнь - игра'],
                },
            },
        };
        
      var content = tmpl(html, data);
      $('body').append(content);
    }
    
});

