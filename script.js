/*
 ДОПИШИТЕ КОД ФУНКЦИЙ И ИСПРАВЬТЕ ФУНКЦИЮ plus
 */

function plus() {
  // Для корректной работы
  // Исправьте строку, и приведите значения к числам

  let result = +value1.value + +value2.value;

  document.getElementById("res1").innerHTML = result;
}
function minus() {
  // ваш код тут
  let result = Number(value1.value) - Number(value2.value);
  // ваш код тут
  document.getElementById("res1").innerHTML = result;
}
function multiplication() {
  // ваш код тут
  let result = +value1.value * +value2.value;
  // ваш код тут
  document.getElementById("res1").innerHTML = result;
}
function division() {
  // ваш код тут
  let result = +value1.value / +value2.value;
  // ваш код тут
  document.getElementById("res1").innerHTML = result;
}
// используйте операторы if и else
function my_compare() {
  // ваш код тут
  let result;
  if (+value1.value > +value2.value) {
    result = `${+value1.value} больше ${+value2.value}`;
  } else if (+value1.value == +value2.value) {
    result = `${+value1.value} равно ${+value2.value}`;
  } else {
    result = `${+value1.value} меньше ${+value2.value}`;
  }

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

  x !== y
    ? (result = " не выполняется строгое равенство ")
    : (result = "выполняется строгое равенство");

  document.getElementById("res1").innerHTML = result;
}
function logic_operators() {
  // ваш код тут

  //Простите, пожалуйста,  я -тупака и не понимаю, как тут применить логические операторы :( 

  const comparedInputs = document.querySelectorAll(".compare");
  const searchArr=Array.from(comparedInputs);
  const result = searchArr.find((element) => element.value);
  // ваш код тут
  document.getElementById("res2").innerHTML = `${result.value}, ${searchArr.indexOf(result)+1} строка`;
}
