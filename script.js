//Calc functions

function plus() {
    // Для корректной работы
    // Исправьте строку, и приведите значения к числам
    let result = parseFloat(value1.value) + parseFloat(value2.value);
    document.getElementById("res1").innerHTML = result;
}

function minus() {
    // ваш код тут
    let result = parseFloat(value1.value) - parseFloat(value2.value);
    // ваш код тут
    document.getElementById("res1").innerHTML = result;
}

function multiplication() {
    // ваш код тут
    let result = parseFloat(value1.value) * parseFloat(value2.value);
    // ваш код тут
    document.getElementById("res1").innerHTML = result;
}

function division() {
    // ваш код тут
    let result = parseFloat(value1.value) / parseFloat(value2.value);
    // ваш код тут
    document.getElementById("res1").innerHTML = result;
}

// Сomparison functions

function my_compare() {
    // ваш код тут
    // поля ввести "А" и "а"
    let x = Number(value1.value) || String(value1.value);
    let y = Number(value2.value) || String(value2.value);
    //let x = value1.value;
    //let y = value2.value;
    let result = "";
    (x != y) ?
    result = "выполняется не строгое равенство ": result = "не выполняется равенство";
    console.log(x);
    console.log(y);
    document.getElementById("res1").innerHTML = result;
}

function my_strong() {
    /* Сначала поптыаемся получить число,
     Явно приводим значение инпута к числу
     если ввод не число - заберем строку*/

    // поля ввести "А" и "А"
    let x = Number(value1.value) || String(value1.value);
    let y = Number(value2.value) || String(value2.value);
    let result = "";

    (x !== y) ?
    result = " не выполняется строгое равенство ": result = "выполняется строгое равенство";

    document.getElementById("res1").innerHTML = result;
}

//Logic operators

function logic_operators() {
    let result = "";
    let inputVal1 = val1.value;
    let inputVal2 = val2.value;
    let inputVal3 = val3.value;
    let inputVal4 = val4.value;

    if (inputVal1) {
        result = inputVal1;
    } else if (inputVal2) {
        result = inputVal2;
    } else if (inputVal3) {
        result = inputVal3;
    } else if (inputVal4) {
        result = inputVal4;
    } else {
        result = "Undefine";
    }


    // ваш код тут
    document.getElementById("res2").innerHTML = result;
}