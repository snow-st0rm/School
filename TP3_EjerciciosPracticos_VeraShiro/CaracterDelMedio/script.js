function middleCharacter(string) {
    var length = string.length;
    var middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        return string.substring(middleIndex - 1, middleIndex + 1);
    } else {
        return string.charAt(middleIndex);
    }
}

//Ejemplos de resultado (de parte del práctico)
console.log(middleCharacter("plataforma5"))
console.log(middleCharacter("hola"))
console.log(middleCharacter("cosas"))

//Ejemplos de resultado (personales)
console.log(middleCharacter("Zandik")) //Resultado: "nd"
console.log(middleCharacter("Cryptic")) //Resultado: "p"
console.log(middleCharacter("Balls")) //Resultado: "l"
