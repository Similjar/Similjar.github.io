'use strict';
//  Домашнее задание JavaScript №07-08

$(function() {
    var dataTest = {
            question: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],
            answer:   [['Вариант ответа №11', 'Вариант ответа №12', 'Вариант ответа №13'],
                      ['Вариант ответа №21', 'Вариант ответа №22', 'Вариант ответа №23'],
                      ['Вариант ответа №31', 'Вариант ответа №32', 'Вариант ответа №33']],
            test:     [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
            choice:   [[]]
    };

    var userAnswer = {
          choice: [[]],
          result: []
        };
    var countQuestion = dataTest.question.length,
        $buttonSubmit = $('.button'),
        $insetrTest = $('.test'),
        checkboxItem='.checkbox--item',
        userChoice = '.list-item__label',
        html = $('#htmlTemplater').html();

    startInsert();
    templater('dataTestStart');
    $buttonSubmit.on('click', buttonClick);
    $buttonSubmit.modalWindowShow();

    $(userChoice).on("mousedown", changeCheck);

    function startInsert(){
      if (localStorage.getItem('userAnswer')){
        userAnswer = getFromLocalStorage('userAnswer');
      } else {
          fillNullInArr(userAnswer.choice, countQuestion, dataTest.answer);
      }

      dataTest.choice = userAnswer.choice;
      setLocalStorage('dataTestStart', dataTest);
    }

    function setLocalStorage(storageName, storageData){
      localStorage.setItem(storageName, JSON.stringify(storageData));
    };

    function getFromLocalStorage(item){
      return JSON.parse(localStorage.getItem(item));
    };

    function fillNullInArr(ArrIn, N, ArrFrom){
      for (var i = 0; i < N; i++){
        ArrIn[i] = new Array(ArrFrom[i].length);
      }
    }

    function templater(dataInsert){
      var dataInsert = getFromLocalStorage(dataInsert);
      var content = tmpl(html, dataInsert);
      $insetrTest.append(content);
    }

    function changeCheck(){
        var elementChange = $(this).prev().attr('id');
        var j = elementChange % 10;
        var i = (elementChange - j) / 10;

        fillInChoice.call($(this), userAnswer, i-1, j-1);
        setLocalStorage('userAnswer', userAnswer);
    }

    function fillInChoice(container, i, j){
        if($(this).prev().prop("checked")){
          container.choice[i][j] = 0;
        } else {
          container.choice[i][j] = 1;
        }
    }

    function clearCheck(){
        $insetrTest.find(checkboxItem).removeAttr("checked");
        fillNullInArr(dataTest.choice, countQuestion, dataTest.test);
        fillNullInArr(userAnswer.choice, countQuestion, dataTest.test);;
        userAnswer.result = [];
    }

    function buttonClick(){
        userAnswer.result = [];
        for (var i = 0; i < countQuestion; i++){
            var countResult = 0;
            var count = dataTest.test[i].length;
            for (var j = 0; j < count; j++){
                if (userAnswer.choice[i][j] == undefined) {
                  userAnswer.choice[i][j] = 0;
                }
                if (dataTest.test[i][j] == userAnswer.choice[i][j]) {
                    countResult++;
                }
            }

            if (countResult === count){
                userAnswer.result.push(1);
            } else {
                userAnswer.result.push(0);
            }
        }

        setLocalStorage('userAnswer', userAnswer);

        clearCheck();
    }

});
