/*
 ДОПИШИТЕ КОД ФУНКЦИЙ И ИСПРАВЬТЕ ФУНКЦИЮ plus
 */
/**
 * Оставил комментарии в my_compare и logic_operators
 */

let value1;
let value2;

function  plus() {
    // Для корректной работы
    // Исправьте строку, и приведите значения к числам

    let value1 = Number(document.getElementById("value1").value);
    let value2 = Number(document.getElementById("value2").value);
    let result = value1 + value2;
    document.getElementById("res1").innerHTML = result;
}
function minus(){
    let value1 = Number(document.getElementById("value1").value);
    let value2 = Number(document.getElementById("value2").value);
    let result = value1 - value2;
    document.getElementById("res1").innerHTML = result;
}
function multiplication(){
    let value1 = Number(document.getElementById("value1").value);
    let value2 = Number(document.getElementById("value2").value);
    let result = value1 * value2;// ваш код тут
    document.getElementById("res1").innerHTML = result;
}
function division(){
    let value1 = Number(document.getElementById("value1").value);
    let value2 = Number(document.getElementById("value2").value);
    let result = value1 / value2;
    document.getElementById("res1").innerHTML = result;
}
// используйте операторы if и else
function my_compare(){

    let value1 = Number(document.getElementById("value1").value);
    let value2 = Number(document.getElementById("value2").value);
    let result;

    if (value1 > value2) {
        result = ("Число 1 больше числа 2");
    }
    else {
        result = ("Число 2 больше числа 1");
    }
    /**
     * А если равны?
     */
    document.getElementById("res1").innerHTML = result;
}
function my_strong(){
    /* Сначала поптыаемся получить число,
     Явно приводим значение инпута к числу
     если ввод не число - заберем строку*/
    let x = Number(document.getElementById("value1").value) || String(document.getElementById("value1").value);
    let y = Number(document.getElementById("value2").value) || String(document.getElementById( "value2").value);
    let result = "";

    (x !== y) ?
        result = " не выполняется строгое равенство " : result = "выполняется строгое равенство";

    document.getElementById("res1").innerHTML = result;
}
function logic_operators(){
    // ваш код тут
    let k = Number(document.getElementById("val1").value) || null;
    let l = Number(document.getElementById("val2").value) || null;
    let m = Number(document.getElementById("val3").value) || null;
    let n = Number(document.getElementById("val4").value) || null;
    /**
     * А зачем приводить к number ?
     * Ведь тогда если мы строку вводим запишется null
     */
    let result = k || l || m || n || null;
    document.getElementById("res2").innerHTML = result;

}