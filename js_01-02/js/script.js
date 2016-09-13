'use strict';
//Домашнее задание JavaScript №1
function power(){ 
    var base = insertInt('Введите ПЕРЕМЕННУЮ');
    var exp = insertInt('Введите СТЕПЕНЬ ЧИСЛА');
    console.log(base, "=base", exp, "=exp");
    powerCheck(base,exp);
}
    
function insertInt(str){
    var newInt;
    while (newInt == undefined) {
        newInt = prompt(str+' (целое число): ');
        if ((newInt === null) || (newInt === '')){
            return 0;
        }
        newInt = (ifInteger(newInt)) ? newInt : undefined;
    }
    return newInt;
}
 
function ifInteger(a){
    return (parseInt(a) != a) ? false : true;
}

function powerCheck(base,exp){
    if (base === 0) {
    console.log(base, '^', exp, ' = ', 0);
    } else if (exp == 0) {
      console.log(base, '^', exp, ' = ', 1);
      } else if (exp < 0) {
        console.log(base, '^', exp, ' = ', 1/pow(base, -exp) );
        } else {
            console.log(base, '^', exp, ' = ', pow(base, exp) );
          }
}

function pow(base,exp){
  return (exp == 1) ? base : base * pow(base, exp-1);
}

//Домашнее задание JavaScript №2
function isThatYou(){ 
    var arrInput = insertNames();
    if (arrInput === 0) {
        return 0;
    } 
    var yourName = insertOneName();
    if (yourName === 0) {
        return 0;
    }
    isThereYourName(arrInput, yourName);
}

function insertNames(){
    var lenInput = 5;
    //var arrInputNames = new Array(lenInput);
    var arrInputNames = new Array();
    
    alert ('Введите последовательно 5 имен:');
    for (var i = 0; i < lenInput; i++){
        arrInputNames[i] = prompt();
        if (arrInputNames[i] === null) {
            return 0;
        }
        if (arrInputNames[i] == undefined) {
            alert ('Неверное значение, попробуйте еще раз:');
            i--;
        }
    }

    return insertNamesCheck(arrInputNames, lenInput);
}

function insertNamesCheck (fullArr, num){
    fullArr = fullArr.filter(function(nameItem) {
        return nameItem > "";
    });
    
    console.log(fullArr, fullArr.length);
    if (fullArr.length === 0) {
        alert ("Массив имен пуст");
        return 0;
    } else if (fullArr.length < num) {
        alert ("Недостаточное количество имен. Введено: "+ fullArr.length +", при необходимых: " + num);
        console.log("Введенные имена: ", fullArr);
        return 0;
        }
    console.log("Введенные имена: ", fullArr);
    return fullArr;
}

function insertOneName(){
    var oneName = prompt('Введите СВОЕ ИМЯ:');
    if ((oneName === null) || (oneName === '')){
        return 0;
    } else {
        while (oneName.length <= 0) {
            oneName = prompt('Неверное значение, попробуйте еще раз. Введите свое имя:');
        }
    }
    if (oneName === 0) {
        alert ("Имя не введено");
        return 0;
    }
    return oneName;
}

function isThereYourName(arrNames, Name){
    var indicator = 0;
    for (var i=0; i < arrNames.length; i++){
        if (isInclude(arrNames[i],Name)) {
            indicator = 1;
            break;
        }
    }
    
    (indicator === 1) ? console.log(Name,', вы успешно вошли') : console.log(Name,'не существует в списке');
}

function isInclude(str, substr) {
  return (str == substr) ? true : false;
}
