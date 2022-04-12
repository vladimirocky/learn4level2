/*
 ДОПИШИТЕ КОД ФУНКЦИЙ И ИСПРАВЬТЕ ФУНКЦИЮ plus
 */

function plus() {
  // Для корректной работы
  // Исправьте строку, и приведите значения к числам
  let number1 = Number(value1.value);
  let number2 = Number(value2.value);
  let result = number1 + number2;
  document.getElementById('res1').innerHTML = result;
}
function minus() {
  // ваш код тут
  let number1 = Number(value1.value);
  let number2 = Number(value2.value);
  let result = number1 - number2;
  // ваш код тут
  document.getElementById('res1').innerHTML = result;
}
function multiplication() {
  // ваш код тут
  let number1 = Number(value1.value);
  let number2 = Number(value2.value);
  let result = number1 * number2;
  // ваш код тут
  document.getElementById('res1').innerHTML = result;
}
function division() {
  let number1 = Number(value1.value);
  let number2 = Number(value2.value);
  let result = number1 / number2;
  // ваш код тут
  document.getElementById('res1').innerHTML = result;
}
// используйте операторы if и else
function my_compare() {
  let number1 = value1.value;
  let number2 = value2.value;
  let result;
  if (number1 != number2) {
    result = 'не равны';
  } else {
    result = 'равны';
  }
  // ваш код тут
  document.getElementById('res1').innerHTML = result;
}
function my_strong() {
  /* Сначала поптыаемся получить число,
     Явно приводим значение инпута к числу
     если ввод не число - заберем строку*/
  let x = Number(value1.value) || String(value1.value);
  let y = Number(value2.value) || String(value2.value);
  let result = '';

  x !== y
    ? (result = ' не выполняется строгое равенство ')
    : (result = 'выполняется строгое равенство');

  document.getElementById('res1').innerHTML = result;
}
function logic_operators() {
  // ваш код тут
  let result = val1.value || val2.value || val3.value || val4.value;
  // ваш код тут
  document.getElementById('res2').innerHTML = result;
}
