const ladoCuadrado = 5;
console.log ("Los lados del cuadro miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log ("Los perimetros del cuadrado son: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log ("El area del cuadrado es: " + areaCuadrado + "cm^2");


// Codigo triangulo
const ladoIzq = 6;
const ladoDer = 6;
const baseTri = 4;
const alturaTri = 5.5;
console.group("Triangulo");
console.log ("Los lados del triangulo miden: " + ladoIzq +  "cm, " + ladoDer + "cm," + "la base es: " + baseTri);
console.log ("La altura del triangulo es: " + alturaTri );

const perimetroTri = ladoIzq + ladoDer +baseTri;
console.log ("El perimetro del triangulo es: " + perimetroTri);

const areaTri = (baseTri * alturaTri) / 2;
console.log ("El area del triangulo es: " + areaTri);


console.groupEnd();


//Codigo circulo

console.group("Circulo")

const radioCir = 4;


const diametroCir = radioCir * 2;
const PI = Math.PI;

const perimetroCir = diametroCir * PI;
const areaCir = (radioCir * radioCir) * PI;

console.groupEnd();