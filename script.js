/*
 ДОПИШИТЕ КОД ФУНКЦИЙ И ИСПРАВЬТЕ ФУНКЦИЮ plus
 */

function  plus(){
    // Для корректной работы
    // Исправьте строку, и приведите значения к числам
    let result = Number(value1.value) + Number(value2.value);
    document.getElementById("res1").innerHTML = result;
}
function minus(){
    // Добавила Number и поставила нужный знак для вычисления
    let result = Number(value1.value) - Number(value2.value);
    // ваш код тут
    document.getElementById("res1").innerHTML = result;
}
function multiplication(){
    // ваш код тут
    let result = Number(value1.value) * Number(value2.value);
    // ваш код тут
    document.getElementById("res1").innerHTML = result;
}
function division(){
    // ваш код тут
    let result = Number(value1.value) / Number(value2.value);
    // ваш код тут
    document.getElementById("res1").innerHTML = result;
}
// используйте операторы if и else
function my_compare(){
    // ваш код тут
    let x = Number(value1.value);
    let y = Number(value2.value);
       (x != y) ?
        result = "не выполняется равенство" : result = "выполняется равенство";
    // ваш код тут
    document.getElementById("res1").innerHTML = result;
}
function my_strong(){
    /* Сначала поптыаемся получить число,
     Явно приводим значение инпута к числу
     если ввод не число - заберем строку*/
    // let x = Number(value1.value) || String(value1.value);
    // let y = Number(value2.value) || String(value2.value);
    let x = Number(value1.value);
    let y = Number(value2.value);

    (x !== y) ?
        result = " не выполняется строгое равенство " : result = "выполняется строгое равенство";

    document.getElementById("res1").innerHTML = result;
}
function logic_operators(){
    // ваш код тут
       let result = val1.value || val2.value || val3.value || val4.value || "неопределено";
    // ваш код тут
    document.getElementById("res2").innerHTML = result;
}