function nuevoArreglo(num) {
    var arreglo = [];
    for (var i = 1; i <= num; i++) {
        arreglo.push(i);
    }

    return arreglo;
}

//Ejemplos de resultado (de parte del práctico)
console.log(nuevoArreglo(5));
console.log(nuevoArreglo(10));

//Ejemplos de resultado (personales)
console.log(nuevoArreglo(16)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
console.log(nuevoArreglo(8)); // [1, 2, 3, 4, 5, 6, 7, 8]