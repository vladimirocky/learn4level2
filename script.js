function  plus(){
    // Для корректной работы
    // Исправьте строку, и приведите значения к числам
    let result = Number(value1.value) +  Number(value2.value);
    document.getElementById("res1").innerHTML = result;
}
function minus(){
    // ваш код тут
    let result = Number(value1.value) -  Number(value2.value)
    // ваш код тут
    document.getElementById("res1").innerHTML = result;
}
function multiplication(){
    // ваш код тут
    let result = Number(value1.value) *  Number(value2.value)
    // ваш код тут
    document.getElementById("res1").innerHTML = result;
}
function division(){
    // ваш код тут
    let result = Number(value1.value) /  Number(value2.value)
    // ваш код тут
    document.getElementById("res1").innerHTML = result;
}
// используйте операторы if и else
function my_compare(){
    // ваш код тут
    let x = Number(value1.value) && String(value1.value)
    let y = Number(value2.value) && String(value2.value)
    let result = ""
    if(x!= y){
        /** ---------------------------------------------------------------
         * Как раз наоборот
         *  ---------------------------------------------------------------
         */
        result = "Выполняется не строгое равенство "
    }else{
        result = "Не выполняется не строгое равенство "
    };
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
    // ваш код тут
    /**  ---------------------------------------------------------------
     * Тут можно решить одной строкой (в разборе показано)
     *  ---------------------------------------------------------------
     */
    let result = val1.value || val2.value || val3.value || val4.value;
//     if(val1.value !=''){
//         result = val1.value
//     }
//     else if(val2.value !=''){
//         result = val2.value
//     }
//     else if(val3.value !=''){
//         result = val3.value
//     }
//     else if(val4.value !=''){
//         result = val4.value
//     }
    // ваш код тут
    document.getElementById("res2").innerHTML = result;
}
