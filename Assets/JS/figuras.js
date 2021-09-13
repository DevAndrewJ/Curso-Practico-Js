//Codigo Cuadrado

function perimetroCuadrado(lado){

 return lado * 4;
}


function areaCuadrado(lado){
    return lado * lado;
} 

// Codigo triangulo
function perimetroTriangulo(lado1,lado2,base){
    perimetro = lado1 + lado2 + base;
    return perimetro;
}

function areaTriangulo(base,altura){
    return (base * altura)/2;
}

//Codigo circulo

function diametroCirculo(radio){


    return radio * 2;
}

function areaCirculo(radio){


    return (radio * radio)*Math.PI;
}



function calcPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcAreaCuadrado(){

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


function calcPerimetroTriangulo(){
     
    const inputLado1 = document.getElementById("lado1");
    const inputLado2 = document.getElementById("lado2");
    const inputBase = document.getElementById("base");

    const lado1 = Number(inputLado1.value); 
    const lado2 = Number (inputLado2.value);
    const base  = Number (inputBase.value);

    const perimetroTri = perimetroTriangulo(lado1,lado2,base);
    console.log(perimetroTri);
}


perimetroCuadrado();
areaCuadrado();
perimetroTriangulo();