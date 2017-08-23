/************* PUNTO 1 *******************/
window.onload=funcion_inicial;

function funcion_inicial(){
	cambiarH5Articulos();
	cambiarClaseTitulo();
	modificarBotones();
}

function cambiarH5Articulos(){

var titulosH5 = document.querySelectorAll("h5");
var titulo1 = titulosH5[0];
var titulo2 = titulosH5[1];

titulo1.innerHTML = "ARTICULOS DESTACADOS";
titulo2.innerHTML = "ULTIMOS ARTICULOS";

//Una forma mas abreviada de hacerlo:
//document.querySelectorAll("h5")[0].innerHTML="ARTICULOS DESTACADOS";
}

/************* PUNTO 2 *******************/
function cambiarClaseTitulo(){

	// 2 Asignarle al contenedor del título "ARTICULOS DESTACADOS" la clase ".top"
	// titulo1.className += " top";
	var titulosH5 = document.querySelectorAll("h5");
	var titulo1 = titulosH5[0];
	titulo1.classList.add("top");
}

/************* PUNTO 3 MODIFICAR Botones *******************/
function modificarBotones(){
	botones = obtenerBotones();
	//with forEach
	botones.forEach(cambiarBoton);

	/* the old but always good way
	for(var i =0; i < botones.length; i++){
		botones[i].style.backgroundColor = "#045fae";
	}*/
}

//retorna un array con todos los botones
function obtenerBotones(){
	botones = document.querySelectorAll(".verMas");
	return botones;
}


function cambiarBoton(boton){
	boton.style.backgroundColor = "#045fae";
	boton.innerHTML = "ver +";
	}

/************* PUNTO 4 CAMBIAR IMAGENES *******************/
function modificarImagenes(){
	imagenes = getImagenes();
	for(var i = 0; i < imagenes.length; i++){
		imagenes[i].
	}
}

function getImagenes(){
	return document.querySelectorAll("a .img-responsive");
}