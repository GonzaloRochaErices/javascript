//console.log("HOLA CTM")
// COMENTAR EL CODIGO QUE NO SE USARA


// EJEMPLO 1 CLASE 2!!!!!!!!!!!!!! 


// let estudiaste = true // aca si ponemos FALSE, solo aparece el console.log 'Fin del programa', ya que no se cumple el IF


// if (estudiaste) {
//     console.log('Aprobaste')
// }

// console.log('Fin del programa')


// // EJEMPLO 2 CLASE 2!!!!!!!!!!!!!


// const GANADOR = 49815                     // Se declara la constante del numero ganador

// let numUsuario = Number(prompt("Ingrese su ticket"))     // se le pide al usuario ingresar su numero de ticket

// if (numUsuario == GANADOR) {             // se compara el numero del usuario, con el numero ganador

//     alert("Usted es el ganador")         // se informa al usuario que es el ganador

//     let usuario = prompt("Ingrese su verdadero nombre")     // se pide el nombre del usuario

//     if (usuario == "ROCHA") {       // se compara el nombre del usuario, con el nombre ganador

//         alert("Eres el ganador")      // se informa al usuario si tiene el nombre ganador

//     }

//     if (usuario != "ROCHA") {         // se compara el nombre del usuario, pero de forma negativa

//         alert("PEEEEENCAAAA")
//     }

// }


// EJEMPLO 2 CLASE 2 CON ELSE!!!!!!!!!!!


// const GANADOR = 49815                     // Se declara la constante del numero ganador

// let numUsuario = Number(prompt("Ingrese su ticket"))     // se le pide al usuario ingresar su numero de ticket

// if (numUsuario == GANADOR) {             // se compara el numero del usuario, con el numero ganador

//     alert("Usted es el ganador")         // se informa al usuario que es el ganador

//     let usuario = prompt("Ingrese su verdadero nombre")     // se pide el nombre del usuario

//     if (usuario == "ROCHA") {       // se compara el nombre del usuario, con el nombre ganador

//         alert("Eres el ganador")      // se informa al usuario si tiene el nombre ganador

//     } else {         // se indica que de caso contrario de lo anterior, se obtiene lo siguiente

//         alert("PEEEEENCAAAA")
//     }

// }


// EJEMPLO 3 CLASE 2 CONDICIONALES ANIDADOS!!!!!!!!!!!!!!!!


// Sistema para verificar si podemos entrar al baile

// let edad = Number(prompt('Que edad tienes?'))        // Consulta la edad al usuario


// Entra o no entra

// if (edad >= 18) {            // si la edad es mayor o igual a 18, se ejecuta el resto del programa

// 	let saldo = Number(prompt('Cual es tu saldo'))          // consulta el saldo del usuario

// 	if (saldo >= 80000) {           // desde aquí, el programa evalúa las opciones del usuario
// 		console.log('Te compras un blue label')
// 	} else if (saldo >= 10000) {
// 		console.log('Te compras un fernet')
// 	} else if (saldo >= 500) {
// 		console.log('Te compras una cervecita')
// 	} else {
// 		console.log('A pedir agua a la barra')
// 	}
// } else {                     // el programa entra acá cuando el usuario no tiene una edad mayor o igual a 18
// 	if (isNaN(edad)) {          // el programa revisa si el dato ingresado no es numérico  
// 		console.log('No entraste por poner strings')
// 	} else if (edad < 0) {      // el programa revisa si la edad del usuario es menor a 0
// 		console.log('como es eso de tener edad negativa')
// 	} else {                    // opción por defecto
// 		console.log('No entras por menor de edad')
// 	}
// }


// EJEMPLO 4 CLASE 2 AND Y OR!!!!!!!!!!!!!!!!!!!!!

// Ejemplo AND

// let nombre = prompt("Ingresar nombre");
// let pass = prompt("Ingresar pass");

// if ((nombre == "Gonzalo") && (pass == "1234")) {
//     alert("Accediste al sistema"); 
// } else{
//     alert("Credenciales erróneas");
// }

// Ejemplo OR

// let nombre = prompt("Ingresar nombre");
// let apellido = prompt("Ingresar apellido");

// if ((nombre == "") || (apellido == "")) {
//     alert("Ingrese los datos requeridos"); 
// } else{
//     alert("Bienvenido");
// }


// EJERCICIO PRACTICO QUIZZ CLASE 2!!!!!!!!!!!!!!!!!!!!!!!!


// Definimos inicializadores
// let usuario = prompt('Ingrese su nombre')
// let contador = 0            // contador para el conteo de las respuestas correctas

// // Zona de preguntas y respuestas
// let pregunta1 = 'Que bebida es un elisir?'
// let respuesta1 = 'Blue Label'

// let pregunta2 = 'Te gusta el jamón?'
// let respuesta2 = 'Si'

// let pregunta3 = 'Cuanto es 100/25'
// let respuesta3 = 4

// Arranca el quizz
// let respuesta = prompt(pregunta1)       // en la variable respuesta, se almacena la respuesta ingresada 

// if (respuesta == respuesta1) {
//     // Responde bien la primer pregunta
//     contador++                          // el contador aumenta en 1
//     // Paso a la segunda pregunta
//     respuesta = prompt(pregunta2)

//     if (respuesta == respuesta2) {
//         // Responde bien la segunda pregunta
//         contador++
//         // Paso a la tercer pregunta

//         respuesta = prompt(pregunta3)

//         if ((respuesta == respuesta3) || (usuario == 'Gonzalo')) {  // acá si la respuesta es errónea pero el usuario se llama 'Gonzalo', igual gana un punto

//             // Responde bien la segunda pregunta
//             contador++
//         }
//     }
// }

// if (contador == 1) {
//     alert('Lograste 1 punto')
// } else if (contador == 2) {
//     alert('Lograste 2 puntos')
// } else if(contador == 3){
//     alert('Felicidades, lograste 3 puntos, o tu nombre es Gonzalo')
// } else {
//     alert('Lograste ' + contador + ' puntos')
// }

// NO FUNCIONA

// let opcion = Number(prompt('Ingrese una opción numérica'))
// while (isNaN(opcion) && opcion > 0) {
//     opcion = Number(prompt('Por favor ingrese un numero'))  
// }