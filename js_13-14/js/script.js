'use strict';
//  Домашнее задание JavaScript №07-08

$(function() {
    var $modal;
    var $overlay;
    var nullArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    var dataTest = {
            question: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],
            answer:   [['Вариант ответа №11', 'Вариант ответа №12', 'Вариант ответа №13'],
                      ['Вариант ответа №21', 'Вариант ответа №22', 'Вариант ответа №23'],
                      ['Вариант ответа №31', 'Вариант ответа №32', 'Вариант ответа №33']],
            test:     [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
            check:    [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    };
    var userAnswer = {
        check: nullArr,
    }
    var result = {
        result: [],
    }

    startInsert();
    templater();

    $('.button').on('click', buttonClick);
    $('.button').modalWindowShow();

    $('.list-item__label').on("mousedown", changeCheck);

    function startInsert(){
      if (localStorage.getItem('userAnswer')){
        userAnswer = JSON.parse(localStorage.getItem('userAnswer'));
      }
      dataTest.check = userAnswer.check;
      setLocalStorage('dataTestStart', dataTest);
    }

    function setLocalStorage(storageName, storageData){
      localStorage.setItem(storageName, JSON.stringify(storageData));
    };

    function templater(){
      var dataInsert = 'dataTestStart';
      var html = $('#htmlTemplater').html();
      var data = JSON.parse(localStorage.getItem(dataInsert));

      var content = tmpl(html, data);
      $('.test').append(content);
    }

    function changeCheck(){
        var elementChange = $(this).prev().attr('id');
        var j = elementChange % 10;
        var i = (elementChange - j) / 10;

          if(!$(this).prev().prop("checked")){
            userAnswer.check[i-1][j-1] = 1;
          } else {
            userAnswer.check[i-1][j-1] = 0;
          }

        setLocalStorage('userAnswer', userAnswer);
    }

    function clearCheck(){
        $('.test').find('.checkbox--item').removeAttr("checked");
        console.log($('.test').find('.checkbox--item'));
        dataTest.check = nullArr;
        userAnswer.check = nullArr;
        result.result = [];
    }

    function buttonClick(e){
        e.preventDefault();
        result.result = [];
        for (var i = 0; i < dataTest.question.length; i++){
            var countResult = 0;
            var count = userAnswer.check[i].length;
            for (var j = 0; j < count; j++){
                if (dataTest.test[i][j] === userAnswer.check[i][j]) {
                    countResult++;
                }
            }
            if (countResult === count){
                result.result.push(1);
            } else {
                result.result.push(0);
            }
        }

        setLocalStorage('result', result);

        clearCheck();
    }

});
