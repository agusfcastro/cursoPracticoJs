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
    if(sideA == sideB && sideA != base){
        return Math.sqrt((sideA**2) - ((base**2) / 4));
    } 
    else {
        return "Watch out! this isn't an insosceles triangle!";
    }
}


//codigo ciruclo
function circleDiameter(radius) {
    const diameter = radius * 2;
    return diameter;
}

function circlePerimeter(radius) {
    const perimeter = 2 * PI * radius;
    return perimeter;
}

function circleArea(radius) {
    const area = (radius * 2) * PI;
    return area;
}


//Interacción con HTML
function onClickButtonSquarePerimeter() {
    const input = document.getElementById("InputSquare");
    const sideValue = input.value;

    const perimeter = squarePerimeter(sideValue);
    alert(perimeter);
}

function onClickButtonSquareArea() {
    const input = document.getElementById("InputSquare");
    const sideValue = input.value;

    const area = squareArea(sideValue);
    alert(area);
}


function onClickButtonTrianglePerimeter() {
    const input = document.getElementById("InputTriangle");
    const sideAValue = Number(input.value);

    const input1 = document.getElementById("InputTriangle1");
    const sideBValue = Number(input1.value);

    const input2 = document.getElementById("InputTriangle2");
    const baseValue = Number(input2.value);

    const perimeter = trianglePerimeter(sideAValue, sideBValue, baseValue);
    alert(perimeter);
}

function onClickButtonTriangleArea() {
    const input = document.getElementById("InputTriangle2");
    const baseValue = Number(input.value);

    const input1 = document.getElementById("InputTriangle3");
    const heightValue = Number(input1.value);

    const area = triangleArea(baseValue, heightValue);
    alert(area);
}

function onClickButtonIsoscelesTriangleHeight() {
    const input = document.getElementById("InputTriangle");
    const sideAValue = input.value;

    const input1 = document.getElementById("InputTriangle1");
    const sideBValue = input1.value;

    const input2 = document.getElementById("InputTriangle2");
    const baseValue = input2.value;

    const height = isoscelesHeight(sideAValue, sideBValue, baseValue);
    alert(height);
}


function onClickButtonCircleDiameter() {
    const input = document.getElementById("InputCircle");
    const radiusValue = input.value;
    const diameter = circleDiameter(radiusValue);
    alert(diameter);
}

function onClickButtonCirclePerimeter() {
    const input = document.getElementById("InputCircle");
    const radiusValue = input.value;
    const perimeter = circlePerimeter(radiusValue);
    alert(perimeter)
}

function onClickButtonCircleArea(){
    const input = document.getElementById("InputCircle");
    const radiusValue = input.value;
    const area = circleArea(radiusValue);
    alert(area);
}