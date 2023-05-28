const ventas = [
    { id: 1, nroFactura: "0000-00001200", fecha: "2023-01-05", importe: 1200.50, suc: 1 },
    { id: 2, nroFactura: "0000-00001201", fecha: "2023-01-10", importe: 543.20, suc: 2 },
    { id: 3, nroFactura: "0000-00001202", fecha: "2023-02-15", importe: 250.00, suc: 3 },
    { id: 4, nroFactura: "0000-00001203", fecha: "2023-02-20", importe: 870.60, suc: 4 },
    { id: 5, nroFactura: "0000-00001204", fecha: "2023-03-01", importe: 4300.75, suc: 5 },
    { id: 6, nroFactura: "0000-00001205", fecha: "2023-03-05", importe: 632.90, suc: 1 },
    { id: 7, nroFactura: "0000-00001206", fecha: "2023-03-10", importe: 125.50, suc: 2 },
    { id: 8, nroFactura: "0000-00001207", fecha: "2023-04-02", importe: 932.00, suc: 3 },
    { id: 9, nroFactura: "0000-00001208", fecha: "2023-04-05", importe: 756.80, suc: 4 },
    { id: 10, nroFactura: "0000-00001209", fecha: "2023-05-01", importe: 2840.25, suc: 5 },
    { id: 11, nroFactura: "0000-00001210", fecha: "2023-05-05", importe: 920.00, suc: 1 },
    { id: 12, nroFactura: "0000-00001211", fecha: "2023-05-10", importe: 732.50, suc: 2 },
    { id: 13, nroFactura: "0000-00001212", fecha: "2023-06-02", importe: 1110.00, suc: 3 },
    { id: 14, nroFactura: "0000-00001213", fecha: "2023-06-05", importe: 610.30, suc: 4 },
    { id: 15, nroFactura: "0000-00001214", fecha: "2023-07-01", importe: 3700.00, suc: 5 },
    { id: 16, nroFactura: "0000-00001215", fecha: "2023-07-05", importe: 2040.80, suc: 1 },
    { id: 17, nroFactura: "0000-00001216", fecha: "2023-07-10", importe: 450.75, suc: 2 },
    { id: 18, nroFactura: "0000-00001217", fecha: "2023-08-02", importe: 980.00, suc: 3 },
    { id: 19, nroFactura: "0000-00001218", fecha: "2023-08-05", importe: 1675.30, suc: 4 },
    { id: 20, nroFactura: "0000-00001219", fecha: "2023-09-01", importe: 5500.00, suc: 5 }
]

// Crear una función que reciba las ventas y calcule cual sucursal facturó más en total.
function maxFact(ventas) {
    const factSuc = {};

    for (const sell of ventas) {
        const sucursal = sell.suc;
        const importe = sell.importe;

        if (factSuc[sucursal]) {
            factSuc[sucursal] += importe;
        } else {
            factSuc[sucursal] = importe;
        }
    }

    let maxSuc = null;
    let facturacionMax = 0;

    for (const sucursal in factSuc) {
        if (factSuc[sucursal] > facturacionMax) {
            maxSuc = sucursal;
            facturacionMax = factSuc[sucursal];
        }
    }

    return { sucursal: maxSuc, facturacion: facturacionMax };
}

const result1 = maxFact(ventas);
console.log(result1);

// Crear una función que reciba las ventas y calcule qué sucursal facturó menos en el mes de mayo de 2023.
function minFactMay(ventas) {
    const factSuc = {};

    for (const sell of ventas) {
        const fecha = new Date(sell.fecha);
        const mes = fecha.getMonth() + 1;

        if (mes === 5) {
            const sucursal = sell.suc;
            const importe = sell.importe;

            if (factSuc[sucursal]) {
                factSuc[sucursal] += importe;
            } else {
                factSuc[sucursal] = importe;
            }
        }
    }

    let minSuc = null;
    let minFact = Infinity;

    for (const sucursal in factSuc) {
        if (factSuc[sucursal] < minFact) {
            minSuc = sucursal;
            minFact = factSuc[sucursal];
        }
    }

    return { sucursal: minSuc, facturacion: minFact };
}

const result2 = minFactMay(ventas);
console.log(result2)

// Crear una función que liste las ventas ordenadamente por fechas pero agrupadas por sucursal.
function dateNDsuc(ventas) {
    const sales = {};

    for (const sell of ventas) {
        const sucursal = sell.suc;

        if (sales[sucursal]) {
            sales[sucursal].push(sell);
        } else {
            sales[sucursal] = [sell];
        }
    }

    for (const sucursal in sales) {
        sales[sucursal].sort((a, b) => {
            const dateA = new Date(a.fecha);
            const dateB = new Date(b.fecha);

            return dateA - dateB;
        });
    }

    return sales;
}

const result3 = dateNDsuc(ventas);
console.log(result3);

// Crear una función que devuelva el importe total facturado durante el año que se pase por parámetro.
function salesYear(ventas, year) {
    let totFact = 0;

    for (const sell of ventas) {
        const fecha = new Date(sell.fecha);
        const yearSale = fecha.getFullYear();

        if (yearSale === year) {
            totFact += sell.importe;
        }
    }

    return { año: year, totalFacturado: totFact };
}

const result4 = salesYear(ventas, 2023);
console.log(result4)