const listaValores = [
    100,
    200,
    300,
    200,
    500,
    200,
    500,
    300,
    10000,
    500,
    500,
];

function calcularModa(listaValores){
    const listaCount = {};

    //Agrupar elementos de la lista
    listaValores.map(valor => {
        if(listaCount[valor]){
            listaCount[valor]++;
        } else {
            listaCount[valor] = 1;
        }
    });

    //Nos permite crear un array de arrays
    listaValoresArray = Object.entries(listaCount).sort(function(valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
        }
    );

    return moda = listaValoresArray[listaValoresArray.length - 1][0];
}


function calcularPromedio(listaValores) {
    //let suma = 0;
    /* for (let i = 0; i < listaValores.length; i++) {
         suma = suma + listaValores[i];
     }*/
    const sumaLista = listaValores.reduce((valorAcumulado, valorActual) => {
        return valorAcumulado + valorActual;
        }, 0);
    
    return sumaLista / listaValores.length;
}

function calcularMediana(listaValores){
    if(listaValores.length % 2 === 0){
        const mediana = (listaValores[listaValores.length / 2] + listaValores[listaValores.length / 2 - 1]) / 2;
        return mediana;
    } else {
        return listaValores[Math.floor(listaValores.length / 2)];
    }
}

document.getElementById("calcularPromedio").addEventListener("click", () => {
    document.getElementById("resultado").innerText = `El promedio es: ${calcularPromedio(listaValores)}`;
});

document.getElementById("calcularMediana").addEventListener("click", () => {
    document.getElementById("resultado").innerText = `La mediana es: ${calcularMediana(listaValores)}`;
});

document.getElementById("calcularModa").addEventListener("click", () => {
    document.getElementById("resultado").innerText = `La moda es: ${calcularModa(listaValores)}`;
});