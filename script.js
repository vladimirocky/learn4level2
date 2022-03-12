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
  let result = value1.value - value2.value;
  // ваш код тут
  document.getElementById("res1").innerHTML = result;
}
function multiplication() {
  // ваш код тут
  let result = value1.value * value2.value;
  // ваш код тут
  document.getElementById("res1").innerHTML = result;
}
function division() {
  // ваш код тут
  let result = value1.value / value2.value;
  console.log("value1.value: ", value1.value);
  // ваш код тут
  document.getElementById("res1").innerHTML = result;
}
//используйте операторы if и else
function my_compare() {
  let x = value1.value;
  let y = value2.value;
  let result;
  if (x == y) {
    result = "два числа равны";
  } else {
    result = "два числа не равны";
  }

  document.getElementById("res1").innerHTML = result;
}

function my_strong() {
  let x = Number(value1.value);
  let y = Number(value2.value);
  if (x == NaN || y == NaN) {
    x = String(value1.value);
    y = String(value2.value);
  }

  x = Number(value1.value) || String(value1.value);
  y = Number(value2.value) || String(value2.value);
  let result = "";

  x !== y
    ? (result = " не выполняется строгое равенство ")
    : (result = "выполняется строгое равенство");

  document.getElementById("res1").innerHTML = result;
}
function logic_operators() {
  let result;
  console.log("val1: ", val1.value);
  console.log("val2.value: ", val2.value);
  console.log("val3.value: ", val3.value);
  console.log("val4.value: ", val4.value);
  if (val1.value != "") {
    result = 1;
  } else if (val2.value != "") {
    result = 2;
  } else if (val3.value != "") {
    result = 3;
  } else if (val4.value != "") {
    result = 4;
  }

  document.getElementById("res2").innerHTML = result;
}
