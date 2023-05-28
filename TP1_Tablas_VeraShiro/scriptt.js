//function Mult(numbr){for(let i=1; i<=10; i++){console.log(numbr+"x"+i+"="+numbr*i)}}
//Mult(7)

//for(var nmbr=1; nmbr<=10; nmbr++){document.write("<h3>Tabla del "+nmbr+"</h3>");for(var j=1; j<=10; j++){document.write(nmbr+"x"+j+"="+(nmbr*j)+"<br>")}};

function showTbl() {
    var multiplo = document.getElementById("multiplo").value;

    var tbl = "<tr><th>Multiplicando.</th><th>Resultado.</th></tr>";
    for (
        var i = 1; i <= 10; i++
    ) {
        tbl += "<tr><td>" + i + "</td><td>" + (i * multiplo) + "</td></tr>"
    }

    document.getElementById("tbl").innerHTML = tbl;
}