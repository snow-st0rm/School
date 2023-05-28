function loopDePares(num){
    for (var i =0; i<=100; i++){
        var suma=i+num;
        if (suma%2===0) {
            console.log ("El número "+suma+" es par")
        }
    }
}

// Ejemplo de uso
loopDePares(1);