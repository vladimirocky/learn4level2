/*
 ДОПИШИТЕ КОД ФУНКЦИЙ И ИСПРАВЬТЕ ФУНКЦИЮ plus
 */

function  plus(){
    // Для корректной работы
    // Исправьте строку, и приведите значения к числам
    let result = Number(value1.value) +  Number(value2.value);
    document.getElementById("res1").innerHTML = result;
}
function  minus(){
    let result = Number(value1.value) -  Number(value2.value);
    document.getElementById("res1").innerHTML = result;
}
function  multiplication(){
    let result = Number(value1.value) *  Number(value2.value);
    document.getElementById("res1").innerHTML = result;
}
function  division(){
    let result = Number(value1.value) /  Number(value2.value);
    if(result == 'Infinity'){
        result = 'Бесконечно малая величина';
    }
    document.getElementById("res1").innerHTML = result;
}
// используйте операторы if и else
function my_compare(){
    let result = '';
    if(value1.value == value2.value){
        result = "Выполняется нестрогое равенство";
    }else{
        result = "Не выполняется нестрогое равенство";
    }
    
    // ваш код тут
    document.getElementById("res1").innerHTML = result;
}
function my_strong(){
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
function logic_operators(){
    let result = ""
    let first = val1.value
    let second = val2.value
    let third = val3.value
    let fourth = val4.value

    if(fourth){
        result = fourth;
    }

    if(third){
        result = third;
    }

    if(second){
        result = second;
    }

    if(first){
        result = first;
    }
    document.getElementById("res2").innerHTML = result;
}