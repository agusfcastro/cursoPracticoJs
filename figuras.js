

//codigo del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}


    // Interacción con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;

    const perimetro = perimetroCuadrado(lado);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;

    const area = areaCuadrado(lado);
    alert(area);
}


//codigo del triangulo
function perimetroTriangulo(lado, lado1, base) {
    return lado + lado1 + base;
}

function areaTriangulo(base, altura) {
    return base * altura;
}


    // interacción con HTML
function calcularPerimetroTriangulo() {
    const input = document.getElementById("inputTriangulo");
    const lado = Number(input.value);

    const input1 = document.getElementById("inputTriangulo1");
    const lado1 = Number(input1.value);

    const input2 = document.getElementById("inputTriangulo2");
    const base = Number(input2.value);

    const perimetro = perimetroTriangulo(lado, lado1, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("inputTriangulo2")
    const base = Number(input.value);

    const input1 = document.getElementById("inputTriangulo3")
    const altura = Number(input1.value);

    const area = areaTriangulo(base, altura);
    alert(area);
}

//codigo ciruclo
const PI = Math.PI

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCiruclo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}


    //Intearcción con HTML
function calcularDiametroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert(diametro)
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo")
    const radio = input.value;
    const perimetro = perimetroCiruclo(radio)
    alert(perimetro)
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}