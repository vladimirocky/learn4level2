/*
 ДОПИШИТЕ КОД ФУНКЦИЙ И ИСПРАВЬТЕ ФУНКЦИЮ plus
 */

function plus(){
    // Для корректной работы
    // Исправьте строку, и приведите значения к числам
    let result = Number(a.value) +  Number(b.value);
    document.getElementById("res1").innerHTML = result;
}
function minus(){
    // ваш код тут
    let result = a.value - b.value
    // ваш код тут
    document.getElementById("res1").innerHTML = result;
}
function multiplication(){
    // ваш код тут
    let result = a.value * b.value
    // ваш код тут
    document.getElementById("res1").innerHTML = result;
}
function division(){
    // ваш код тут
    let result = a.value / b.value
    // ваш код тут
    document.getElementById("res1").innerHTML = result;
}
// используйте операторы if и else
function my_compare(){
    // ваш код тут
    /**
     *
     * а зачем тут '!!' ?
     * это преобразовывает к булевому типу значение, так мы не сможем их сравнить потом :D
     * советую просто убрать !!
     */
    let result = !!a.value == !!b.value ? true : false;
    // ваш код тут
    document.getElementById("res1").innerHTML = result;
}
function my_strong(){
    /* Сначала поптыаемся получить число,
     Явно приводим значение инпута к числу
     если ввод не число - заберем строку*/
    let x = Number(a.value) || String(a.value);
    let y = Number(b.value) || String(b.value);
    let result = x === y;

    (x !== y) ?
        result = " не выполняется строгое равенство " : result = "выполняется строгое равенство";

    document.getElementById("res1").innerHTML = result;
}
function logic_operators(){
    // ваш код тут

    // Долго пытался решить через if не получилось
    // let result = (val1.value != "") ? val1.value : (val2.value != "") ? val3.value : (val4.value != "") ? val4.value;

    // Посмотрел разбор ДЗ

    let result = val1.value || val2.value || val3.value || val4.value || 'не определено';

        
    // ваш код тут
    document.getElementById("res2").innerHTML = result;
}