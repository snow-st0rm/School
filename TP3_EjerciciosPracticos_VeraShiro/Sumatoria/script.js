function sumattion(number) {
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    return sum;
}

//Ejemplos de resultado (de parte del práctico)
console.log(sumattion(3))
console.log(sumattion(8))

//Ejemplos de resultado (personales)
console.log(sumattion(19)) //Resultado: "190"
console.log(sumattion(4)) //Resultado: "10"
