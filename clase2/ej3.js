

/*

dos triangulos son:
isosceles: tienen 2 lados iguales
escaleno: tienen los 3 lados distintos
equilatero: tienen los 3 lados iguales

*/
//Ingresar datos:
var lado1=prompt("Ingrese lado1");
var lado2=prompt("Ingrese lado2");
var lado3=prompt("Ingrese lado3");
var salida;

// lado1= parseInt(lado1);
// lado2= parseInt(lado2);
// lado3= parseInt(lado3);

	if(lado1==lado2 && lado2 == lado3){
		salida = "equilatero";
		}
		else
		{
			if((lado1== lado2)  || (lado2 == lado3) || (lado1==lado3)){
				salida= "isósceles";					
			}
			else{
				salida = "escaleno";
			}
		}
	document.writeln("triangulo ", salida);

	if(confirm("Desea salir?")){
		alert("saliste");
	}

	//switch

	