'use strict';
alert('Домашнее задание JavaScript №2');
var lenInput = 5;
var arrInput = new Array(lenInput);

alert ('Введите последовательно 5 имен:');
for (var i=0; i < arrInput.length; i++){
  arrInput[i] = prompt();
  if (arrInput[i] == undefined) {
    alert ('Неверное значение, попробуйте еще раз:');
    i--;
  }
}

var yourName = prompt('Введите СВОЕ ИМЯ:');
while (yourName.length <= 0) {
  yourName = prompt('Неверное значение, попробуйте еще раз. Введите свое имя:');
}

var indicator = 0;
for (var i=0; i < arrInput.length; i++){
  if (isInclude(arrInput[i],yourName)) {
    indicator = 1;
    break;
  }
}
(indicator === 1) ? console.log(yourName,', вы успешно вошли') : console.log(yourName,'не существует в списке');

function isInclude(str, substr) {
  return (str == substr) ? true : false;
}
