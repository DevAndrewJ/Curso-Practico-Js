//Codigo Cuadrado

function perimetroCuadrado(lado){


 return lado * 4;

}

perimetroCuadrado();


function areaCuadrado(lado){


    return lado * lado;
} 

areaCuadrado();

function perimetroTriangulo(lado1,lado2,lado3,base){

    return lado1 + lado2 + base;
}

// Codigo triangulo
perimetroTriangulo();

function areaTriangulo(base,altura){

    return (base * altura)/2;
}

areaTriangulo();



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