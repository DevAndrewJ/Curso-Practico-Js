const usuario = {
    Nombre: "Jeff" ,
    Apellido: "Suarez",
    PlatziName: "AndrewDev",
    Edad: 28,
    Email: "prueba@gmail.com",
    MayorEdad: true,
    DineroAhorrado: 28000,
    DeudasAcumuladas: 5000
}

let contador = 0;

function hola () {
 console.log(usuario.Nombre + " " + usuario.Apellido);
 console.log (usuario.DineroAhorrado - usuario.DeudasAcumuladas);

}

function dineroReal () {
    let Resul = 0;
    return Resul = usuario.DineroAhorrado - usuario.DeudasAcumuladas;
    console.log( Resul);
}

function Contar (){
    while (contador < 5) {
        contador = contador + 1;
        console.log(contador);
    }

}

hola();
Contar();