/*
 ДОПИШИТЕ КОД ФУНКЦИЙ И ИСПРАВЬТЕ ФУНКЦИЮ plus
 */

function plus() {
  // Для корректной работы
  // Исправьте строку, и приведите значения к числам
  let result = Number(value1.value) + Number(value2.value);
  document.getElementById("res1").innerHTML = result;
}
function minus() {
  // ваш код тут
  let result = ""
  // ваш код тут
  document.getElementById("res1").innerHTML = result;
}
function multiplication() {
  // ваш код тут
  let result = ""
  // ваш код тут
  document.getElementById("res1").innerHTML = result;
}
function division() {
  // ваш код тут
  let result = ""
  // ваш код тут
  document.getElementById("res1").innerHTML = result;
}
// используйте операторы if и else
function my_compare() {
  // ваш код тут
  let result = ""
  // ваш код тут
  document.getElementById("res1").innerHTML = result;
}
function my_strong() {
  /* Сначала поптыаемся получить число,
   Явно приводим значение инпута к числу
   если ввод не число - заберем строку*/
  let x = Number(value1.value) || String(value1.value);
  let y = Number(value2.value) || String(value2.value);
  let result = "";

  (x !== y) ?
    result = " не выполняется строгое равенство " : result = "выполняется строгое равенство";

  document.getElementById("res1").innerHTML = result;
}
function logic_operators() {
  // ваш код тут
  let result = ""
  // ваш код тут
  document.getElementById("res2").innerHTML = result;
}