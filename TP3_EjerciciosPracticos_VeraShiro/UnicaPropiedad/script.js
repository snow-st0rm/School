function oneProperty(arr, prop) {
    return arr.map(obj => {
        const newObj = {} ;
        newObj[prop]=obj[prop];
        return newObj;
    });
}

//Ejemplos de resultado (de parte del práctico)
var arreglo=[{ name: "lucas", edad: 20 },
{ name: "santi", edad: 22 }]

console.log(oneProperty(arreglo, "edad"));
console.log(oneProperty(arreglo, "name"));

//Ejemplos de resultado (personales)
var arreglo=[{ name: "shiro", edad: 16 },
{ name: "zandik", edad: 19 }]

console.log(oneProperty(arreglo, "edad")); // Resultado: [ { edad: 16 }, { edad: 19 } ]
console.log(oneProperty(arreglo, "name")); // Resultado: [ { name: "shiro" }, { name: "zandik" } ]