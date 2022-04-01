/*
 ДОПИШИТЕ КОД ФУНКЦИЙ И ИСПРАВЬТЕ ФУНКЦИЮ plus
 */

function  plus(){
    // Использую явное привидение типов, потому что при попытке сложить число и
    //строку число конвертится в строку и 2 строки склеиваются
    
    let result = Number(value1.value) +  Number(value2.value);
    document.getElementById("res1").innerHTML = result;
}

//При вычитании, делении, умножении автоматическое привидение типов в int
function minus(){
    
    let result = (value1.value) - (value2.value);
   
    document.getElementById("res1").innerHTML = result;
}
function multiplication(){
    
    let result = (value1.value) * (value2.value);
// ваш код тут
    document.getElementById("res1").innerHTML = result;
}
function division(){
    
    let result = (value1.value) / (value2.value);
   
    document.getElementById("res1").innerHTML = result;
}

function my_compare(){
    // Выполняется не строгое сравнение типов
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
    
    //Выполняем не строгое сравнение потому что при сравнивание числа со строкой,
    //обе переменные приводятся к одинаковому типу динамической типизацией
    /**
     * результат внешний конечно будет одинаковый
     * однако под капотом при строгом равнении необходимо писать
     * !== а не !=
     */
    (x != y) ?
        result = " не выполняется строгое равенство " : result = "выполняется строгое равенство";

    document.getElementById("res1").innerHTML = result;
}
function logic_operators(){
    // ваш код тут
    //переменной result присваивется только значение true 
    //из пяти доступных вариантов 100% будет значение true даже если пользователь оставил строку пустой
    let result = val1.value || val2.value || val3.value || val4.value || "не индефецировано";
    // ваш код тут
    document.getElementById("res2").innerHTML = result;
    
}