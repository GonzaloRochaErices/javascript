// EJEMPLO 1 CLASE 3!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Este es un ejemplo de código estructurado de forma ordenada
// for (...) {
//     // bloque de código que se ejecuta
// }

// if (true) {
//     // ...
// } else if (true) {
//     // ...
// } else {
//     // ...
// }


// for (let i = 0; i < 10; i++) {     // reemplazaremos iterador por i
//     alert(i);               // llamamos i a nuestro iterador
// }

// Pasos que sigue el código:

// primero se declara la variable iteradora (generalmente se le llama i). iterador tendrá el valor de 0
// se verifica la condición. en este caso, si iterador es menor a 10, entonces ejecutamos lo que haya dentro del {}
// se ejecuta lo que hay en {} --> alert(0)
// se aumenta el valor del iterador. pasamos de 0 a 1
// comprobamos la condición. 1 < 10
// se ejecuta lo que hay en el {} --> alert(1)
// se aumenta el valor del iterador. pasamos de 1 a 2
// comprobamos la condición 2 < 10
// se ejecuta lo que hay en {} --> alert(2)
// se aumenta el valor del iterador. pasamos de 2 a 3
// ...
// comprobamos la condición 10 < 10
// se termina el ciclo


// EJEMPLO 2 CLASE 3!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Solicitamos un número al usuario
// let num = parseInt(prompt("Ingrese un número"));

// // Por cada ciclo, multiplicamos el iterador por este número
// for (let i = 1; i <= 10; i++) {
//     let resultado = num * i;
//     alert(num + " X " + i + " = " + resultado);
//}


// EJEMPLO 3 CLASE 3!!!!!!!!!!!!!!!!!!!!!!

// // Pedir nombre del usuario

// let alumno = prompt('Por favor ingrese el nombre del alumno').toUpperCase()      // se usa .toUpperCase() para normalizar el nombre ingresado por el usuario. de este modo, da lo mismo si lo ingresa con mayúsculas o minúsculas
// let cantidadNotas = Number(prompt('Por favor ingrese la cantidad de notas'))     // ingresamos la cantidad de notas que queremos promediar

// let sumador = 0      // declaramos la variable ANTES, para que cada vez que se use, parta desde 0


// // Declaro y pido las notas del alumno

// for (let i = 0; i < cantidadNotas; i++) {         // declaramos nuestro iterador (i) y lo comparamos con la cantidad de notas que el usuario quiere promediar, por lo que el ciclo se repite mientras i sea menor a lo ingresado
// 	let nota = Number(prompt('Ingrese la nota Nº ' + (i+1)))        // solicitamos la nota nº (i+1), lo cual va sumando +1 desde 0. de este modo el programa pedirá las notas en orden 
// 	sumador += nota         // sumador = sumador + nota 
// 	
// }

// // Calculo el promedio

// let promedio = sumador / cantidadNotas       // acá el programa promedia el sumador por la cantidad de notas que ingresó el usuario

// // Aprobamos directamente a Gonzalo

// if (alumno == 'GONZALO') {       // el programa verifica si el nombre del usuario es Gonzalo. ademas, como en la declaración se utilizo .toUpperCase, el programa normaliza el nombre, indistinto si se puso con mayúsculas o minúsculas
// 	alert('Ya estas aprobado')      // si el nombre del usuario es Gonzalo, este aprueba, da lo mismo su promedio
// } else {
// 	alert('El promedio de ' + alumno + ' es ' + promedio)       
// }


// EJEMPLO 4 CLASE 3!!!!!!!!!!!!!!!!!!!

// Se hacen 5 preguntas
// Las operaciones matemáticas vienen de la variable iteradora por un número random
// Tenemos que calcular 
// 	La cantidad de veces que se responde bien
// 	La racha de veces que se responde bien
// Si se falla 2 veces seguidas entonces se termina y mostramos un mensaje de ‘haber estudiado’

// Variables de uso general
// let contador = 0     // cuenta las preguntas respondidas
// let racha = 0        // cuenta la racha actual
// let rachaMax = 0     // cuenta la racha máxima
// let malas = 0        // cuenta las respuestas erróneas
// const PREG = 5       // asigna la cantidad de preguntas que hará el programa

// // El test matemático

// for (let i = 1; i <= PREG; i++) {
// let random = Math.round(Math.random()*10)        // aleatorio entre 1 y 10
// let respuesta = i * random
	
// let respuestaUsuario = prompt('Cuanto es ' + i + ' X ' + random + ' ?')

// 	// Analizamos la racha y si falla mas de dos veces

// if (respuesta == respuestaUsuario) {
// 		contador++
// 		racha++
// 		malas = 0
// 		if (racha > rachaMax) {
// 			rachaMax = racha
// 		}
// 	} else {
// 		racha = 0
// 		malas++
// 		if (malas == 2) {
// 			alert('Haber estudiado, fuera del examen')
// 			break
// 		}
// 	}
// }

// // Aquí deberían ir los alerts mostrando los conteos de rachaMax y contador