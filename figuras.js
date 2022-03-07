//codigo del cuadrado
console.group('Cuadrado')

// const ladoCuadrado = 5;
// console.log('los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

// const perimetroCuadrado = ladoCuadrado * 4
// console.log('El perimetro del cuadrado es de: ' + perimetroCuadrado + 'cm');

// console.log('El area del cuadrado es de: ' + areaCuadrado + 'cm2');

function perimetroCuadrado(lado) {
    return lado * 4;
}


function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//codigo del triangulo
console.group('Tirangulo');
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     'los lados del triangulo miden: ' 
//     + ladoTriangulo1 
//     + 'cms, mientras que la base mide: '
//     + baseTriangulo
//      );

// const alturaTriangulo = 5.5;
// console.log('La altura del triangulo es de:' + alturaTriangulo + 'cms');

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
// console.log('El area del triangulo es de: ' + areaTriangulo + 'cm2')

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura) {
    return base * altura;
}

console.groupEnd();

//codigo ciruclo
console.group('Ciruclo');

// const radioCirculo = 4
// console.log('el radio del ciruclo es de: ' + radioCirculo + 'cms')

// const diametroCirculo = radioCirculo * 2
// console.log('diametro del dicurlo es de: ' + diametroCirculo + 'cms')

// const pi = Math.PI

// const circunsferenciaCiruclo = diametroCirculo * pi
// console.log('la circunsferencia del ciruclo es de: ' + circunsferenciaCiruclo + 'cm');

// const areaCiruclo = (radioCirculo * radioCirculo) * pi
// console.log('el area del circulo es de: ' + areaCiruclo + 'cm2')

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCiruclo(radio) {
    pi = Math.PI;
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio) {
    pi = Math.PI;
    return (radio * radio) * pi;
}

console.groupEnd();



