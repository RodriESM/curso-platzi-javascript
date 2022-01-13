const cuadrado = {
    constructor: function(tamañoLado) {
        this.tamañoLado = tamañoLado;
    },
    lado: 4,
    tamañoLado: 3,
    area: function () {
        return this.tamañoLado * this.tamañoLado;
    },
    perimetro: function () {
        return this.tamañoLado * 4;
    }
}
const triangulo = {
    base: 4,
    altura: 3,
    constructor: function(base, altura) {
        this.base = base;
        this.altura = altura;
    },
    area: function () {
        return this.base * this.altura / 2;
    },
    perimetro: function () {    
        return this.base * 3;
    }
}

const circulo = {
    radio: 4,
    constructor: function(radio) {
        this.radio = radio;
    },
    area: function () {
        return Math.PI * this.radio * this.radio;
    },
    perimetro: function () {
        return 2 * Math.PI * this.radio;
    },
    diametro: function () {
        return 2 * this.radio;
    }
} 

function calcularPerimetroCuadrado() {
     const input = document.getElementById("InputCuadrado");
     cuadrado.constructor(input.value);
     const valor = cuadrado.perimetro();
     return alert(valor);
}
function calcularAreaCuadrado(){
     const input = document.getElementById("InputCuadrado");
     cuadrado.constructor(input.value);
     const valor = cuadrado.area();
     return alert(valor);
}
function calcularPerimetroTriangulo() {
    const base = document.getElementById("InputBaseTriangulo");
    triangulo.constructor(base.value);
    const valor = triangulo.perimetro();
    return alert(valor);
}
function calcularAreaTriangulo(){
    const altura = document.getElementById("InputAlturaTriangulo");
    const base = document.getElementById("InputBaseTriangulo");
    triangulo.constructor(base.value,altura.value);
    const valor = triangulo.area();
    return alert(valor);
}
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    circulo.constructor(input.value);
    const valor = circulo.perimetro();
    return alert(valor);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    circulo.constructor(input.value);
    const valor = circulo.area();
    return alert(valor);
}

