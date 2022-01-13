const salarios = require('./salarios.js');

salariosSpain = salarios.map(
    function(persona){
        return persona.salary;
    }
)
//Ordenamos los saslarios
const salariosOrdenados = salariosSpain.sort(
    function(salaryA,salaryB){
        return salaryA-salaryB;
    }
);

function calcularMedianaGeneral(salariosOrdenados){
    if (salariosOrdenados.length % 2 == 0){
        let mediana = (salariosOrdenados[(salariosOrdenados.length/2)-1] + salariosOrdenados[(salariosOrdenados.length/2)])/2;
        return mediana;
    }else{
        let mediana = salariosOrdenados[Math.floor(salariosOrdenados.length/2)];
        return mediana;
    }
}

function calcularMedianaDelXporciento(salariosOrdenados, porciento){
    let arrayPorciento = salariosOrdenados.splice(salariosOrdenados.length-Math.ceil((salariosOrdenados.length * 10 )/100),porciento);
    let medianaTopDiezPorc = calcularMedianaGeneral(arrayPorciento);
    return medianaTopDiezPorc;
}

console.log(calcularMedianaGeneral(salariosOrdenados));
console.log(calcularMedianaDelXporciento(salariosOrdenados,10));