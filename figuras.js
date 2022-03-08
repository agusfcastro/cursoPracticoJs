const PI = Math.PI

//codigo del cuadrado
function squarePerimeter(side) {
    const perimeter = side * 4;
    return perimeter;
}

function squareArea(side) {
    const area = side * side;
    return area;
}


//codigo del triangulo
function trianglePerimeter(sideA, sideB, base) {
    const perimeter = sideA + sideB + base;
    return perimeter;

}

function triangleArea(base, height) {
    const area = base * height;
    return area;
}

    // triangulo isoseles
function isoscelesHeight(sideA, sideB, base) {
    if(sideB == sideB && sideA != base){
        return Math.sqrt((sideA**2) - ((base**2) / 4))
    } 
    else {
        return "Watch out! this isn't an insosceles triangle!"
    }
}


//codigo ciruclo
function circleDiameter(radius) {
    const diameter = radius * 2;
    return diameter;
}

function circlePerimeter(radius) {
    const diameter = circleDiameter(radius);
    const perimeter = diameter * PI;
    return perimeter;
}

function circleArea(radius) {
    const area = (radius * 2) * PI;
    return area;
}


//Interacción con HTML
function onClickButtonSquarePerimeter() {
    const input = document.getElementById("inputCuadrado");
    const sideValue = input.value;

    const perimeter = perimetroCuadrado(sideValue);
    alert(perimeter);
}

function onClickButtonSquareArea() {
    const input = document.getElementById("inputCuadrado");
    const sideValue = input.value;

    const area = squareArea(sideValue);
    alert(area);
}


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

function calcularAlturaIsosceles() {
    const input = document.getElementById("inputTriangulo");
    const value = input.value;

    const input1 = document.getElementById("inputTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("inputTriangulo2")
    const value2 = input2.value;

    const altura = alturaIsosceles(value, value1, value2);
    alert(altura);
}


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