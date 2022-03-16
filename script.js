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
    let x = Number(value1.value) || String(value1.value);
    let y = Number(value2.value) || String(value2.value);
    let result = "";
    console.log((typeof x) +'&'+(typeof y));
    (x != y) ?
    result = "выполняется не строгое равенство ": result = "выполняется равенство";
    console.log(x);
    console.log(y);
    document.getElementById("res1").innerHTML = result;
}

function my_strong() {
    let x = Number(value1.value) || String(value1.value);
    let y = Number(value2.value) || String(value2.value);
    let result = "";

    (x !== y) ?
    result = " не выполняется строгое равенство ": result = "выполняется строгое равенство";

    document.getElementById("res1").innerHTML = result;
}

//Logic operators

function logic_operators() {
    let result = val1.value || val2.value|| val3.value || val4.value;
    document.getElementById("res2").innerHTML = result;
}