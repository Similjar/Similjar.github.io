'use strict';
alert('Домашнее задание JavaScript №1');

var base;
var exp;

while (base == undefined) {
  base = prompt('Введите ПЕРЕМЕННУЮ (целое число): ');
  base = (ifInteger(base)) ? base : undefined;
}

while (exp == undefined) {
  exp = prompt('Введите СТЕПЕНЬ ЧИСЛА (целое число): ');
  exp = (ifInteger(exp)) ? base : undefined;
}

if (base === 0) {
  console.log(base, '^', exp, ' = ', 0);
} else if (exp === 0) {
  console.log(base, '^', exp, ' = ', 'деление на ноль');
} else if (exp < 0) {
  console.log(base, '^', exp, ' = ', 1/pow(base, -exp) );
} else {
  console.log(base, '^', exp, ' = ', pow(base, exp) );
}

function ifInteger(a){
  return (parseInt(a) != a) ? false : true;
}

function pow(base,exp){
  return (exp===1) ? base : base * pow(base, exp-1);
}
