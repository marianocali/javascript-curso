//var eleccion = prompt("");



a=1;
b=1;
c=3, 
d="1";

a == b; // true
a == c; //false
a == d; //true  son iguales semanticamente pero no en tipo
a === d; //falso son semanticamente iguales y del mismo tipo

//Comparaciones
document.write("<br> Comparaciones <br>");
document.writeln("a: ", a);
document.writeln("b: ", b , "<br>");
document.writeln("c: ", c , "<br>");
document.writeln("d: ", "\"d\"", "<br>");

document.write("a == d: ", a  == d, "<br>");
document.write("a === d: ", a === d, "<br>");

//Distintos
document.writeln("<b> Distintos </b> <br> ");

document.writeln("a != b: ", a != b, "<br>");
document.writeln("a !== b: ", a !== b, "<br>");

document.writeln("a != c: ", a != c, "<br>");
document.writeln("a !== c: ", a !== c, "<br>");

document.writeln("a != d: ", a != d, "<br>");
document.write("a !== d: ", a !== d, "<br>");


// el if se hace de la siguiente forma
var eleccion = prompt("ingrese eleccion");
if(eleccion=="A"){
	alert("elegiste A");
}
else{
	alert("elegiste distinto de A");
}
