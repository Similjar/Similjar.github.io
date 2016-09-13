'use strict';
//alert('Домашнее задание JavaScript №03');
(function () {
    var programTest = {
        genDiv: function (parentElem, divClass) {
            var Div = document.createElement('div');
            Div.className = divClass;
            parentElem.appendChild(Div);
            return Div;
        },
        genOl: function (parentElem) {
            var olInBlock = document.createElement('ol');
            parentElem.appendChild(olInBlock);
            return olInBlock;
        },
        genUl: function (parentElem) {
            var ulInBlock = document.createElement('ul');
            parentElem.appendChild(ulInBlock);
            return ulInBlock;
        },
        
        blockTitle: function (parentElem) {
            var title = this.genDiv(parentElem, "h1");
            title.innerHTML = "Тест по программированию";
        },
        
        questionNum: Number,
        questionText: 'Вопрос №',
        blockQuestion: function (parentElem) {
            var question = document.createElement('li');
            question.className = "list-item";
            question.innerHTML = this.questionText + this.questionNum;
            parentElem.appendChild(question);
        },
        
        answerNum: Number,
        answerText: 'Вариант ответа №',
        blockAnswer: function (parentElem) {
            var answerLi = document.createElement('li');
            parentElem.appendChild(answerLi);
            var answerCheck = document.createElement('input');
            answerCheck.type = "checkbox";
            answerCheck.id = "ques" + this.questionNum + "answ" + this.answerNum;
            answerLi.appendChild(answerCheck);
            var answerLab = document.createElement('label');
            answerLab.className = "list-item__label";
            answerLab.innerHTML = this.answerText + this.answerNum;
            answerLab.setAttribute('for','ques' + this.questionNum + 'answ' + this.answerNum);
            answerLi.appendChild(answerLab);
        },
        
        blockButton: function (parentElem) {
            var button = document.createElement('button');
            button.innerHTML = "Проверить мои результаты";
            parentElem.appendChild(button);
        }
    }

    var amountQuestion = 3;
    var amountAnswer = 3;
    var wrapper = programTest.genDiv (document.body, "wrapper");
    programTest.blockTitle(wrapper);

    var questOl = programTest.genOl(wrapper);
    for (var i = 0; i < amountQuestion; i++){
        programTest.questionNum = i+1;
        programTest.blockQuestion(questOl);

        var answerUl = programTest.genUl(questOl);
        for (var j = 0; j < amountAnswer; j++){
            programTest.answerNum = j+1;
            programTest.blockAnswer(answerUl);
        }
    }
    
    programTest.blockButton(wrapper);
    
})();