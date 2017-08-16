/************* PUNTO 1 *******************/
window.onload=funcion_inicial;

function funcion_inicial(){

var titulosH5 = document.querySelectorAll("h5");
var titulo1 = titulosH5[0];
var titulo2 = titulosH5[1];

titulo1.innerHTML = "ARTICULOS DESTACADOS";
titulo2.innerHTML = "ULTIMOS ARTICULOS";

//Una forma mas abreviada de hacerlo:
//document.querySelectorAll("h5")[0].innerHTML="ARTICULOS DESTACADOS";

/************* PUNTO 2 *******************/
// 2 Asignarle al contenedor del título "ARTICULOS DESTACADOS" la clase ".top"
// titulo1.className += " top";
titulo1.classList.add("top");

// Modificar los botones "VER MÁS" de todos los productos para que digan "VER +" y que sean de color "#045fae"
botones = document.querySelectorAll(".verMas");

/* the old but always good way
for(var i =0; i < botones.length; i++){
	botones[i].style.backgroundColor = "#045fae";
}
*/

//with forEach
botones.forEach(cambiarBotones);

function cambiarBotones(boton){
	boton.style.backgroundColor = "#045fae";
	boton.innerHTML = "ver +";
}

}