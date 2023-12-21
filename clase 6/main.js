// EJEMPLO 1 CLASE 6 VISUALIZANDO INDICES DEL ARRAY!!!!!!!!!!!!!!!!!!!!


// let nombres = ['Gonzalo','Alejandra','Agustin']


// podemos hacer que console.log muestre los valores del array de forma ordenada con el bucle WHILE

// let cont = 0
// // nombres.length = 3
// while (cont < nombres.length) {
// 	console.log(nombres[cont])
// 	cont++
// }

// // pero resulta mucho mas cómodo y fácil de acceder con el bucle FOR, ademas que FOR tiene un contador por defecto, aun mas, si agregamos mas valores al array, los incluirá fácilmente 

// for (let i = 0; i < nombres.length; i++) {
//  //   console.log(nombres[i])

// incluso podemos crear el código que queramos dentro de nuestro programa

    // if (nombres[i] == 'Gonzalo') {       // itera todos los nombres, y toma una decisión 
    //     console.log('Te llamas Gonzalo, eres hermoso')   // decisión
    // } else {
    //     console.log('No te llamas Gonzalo, no eres hermoso')     // decisión
    // }
// }


// EJEMPLO 2 CLASE 6 EJERCICIO PRÁCTICO!!!!!!!!!!!!!!!!!!!!!!

// Armar dos arrays, uno de nombres (alumnos) y otro con notas donde
// -    Las notas coinciden posicionalmente con los nombres
// -    Mostrar que alumno aprobó y que alumno desaprobó
// -    Obviamente, si se llama Gonzalo aprueba igual


// let nombres = ['Gonzalo','Alejandra','Agustin']
// let notas = [3, 10, 11]

// for (let i = 0; i < nombres.length; i++) {
//     if (notas[i] >= 6) {
//         console.log('Aprobaste ' + nombres[i]) 
//     } else {
//         console.log('Reprobaste ' + nombres[i])
//     }
// }



// EJEMPLO 3 CLASE 6 INGRESANDO DATOS AL ARRAY CON PUSH!!!!!!!!!!!!!!!!!!!!!


// let nombres = ['Rulo19','Alejandra','Agustin'] 
// let notas = []

// for (let i = 0; i < nombres.length; i++) {

// 	let nota = Number(prompt('Ingrese la nota del alumno ' + nombres[i]))
// 	notas.push(nota)
// }

// console.table(notas)
// console.log(notas)


// EJEMPLO 4 CLASE 6 QUITANDO ELEMENTOS CON SHIFT Y POP!!!!!!!!!!!!!!!!!!!!!!!!


// let nombres = ['Rulo19','Alejandra','Agustin', 'Lucas'] 
// console.log(nombres)


// let ultimo = nombres.pop() // Me quita el ultimo elemento --> Lucas
// console.log(nombres)

// let primero = nombres.shift() // Me quita el primer ELEMENTO --> Rulo19
// console.log(nombres) // Alejandra y Agustin

// // Método destructivo --> MODIFICA AL ARRAY ORIGINAL
// console.log(primero, ultimo)     // los métodos devuelven el elemento que hayamos quitado 



// PRACTICA CLASE 6!!!!!!!!!!!!!!!!!!!!!!!

// Nuestro profesor tiene una lista de alumnos, de dicha lista tiene que

// Evitar nombres duplicados
// Verificar si se encuentra Rulo19 en la lista
// Agregar 3 nuevos alumnos
// Ordenarlos por orden alfabético


// // Verificar si se encuentra rulo19 en la lista
// // if (alumnos.includes('Rulo19')) {
// // 	console.log('La lista de alumnos incluye a Rulo19')
// // } else {
// // 	console.log('La lista de alumnos no incluye a Rulo19')
// // }

// // Agregar 10 nuevos alumnos
// // Para meter elementos al array uso push

// // alumnos.push('Jorge')
// // alumnos.push('Francisco')
// // alumnos.push('Lucas')
// // ... y sigue con 10

// // for (let i = 0; i < 5; i++) {
// // 	alumnos.push(prompt('Ingrese el nombre del alumno'))
// // }

// // console.log(alumnos)
// // La lista de alumnos es la siguiente

// //					0		  1			2       3       4       5         6
// let alumnos = ['Gabriela','Agustin','Daniela','Facu','Tomas','Rulo19']


// // // Verificar si hay nombres duplicados
// let flag = false
// for (let i = 0; i < alumnos.length; i++) {
// 	let nombre = alumnos[i]

// 	for (let j = i + 1; j < alumnos.length; j++) {

// 		if (nombre == alumnos[j]) {
// 			console.log('Hay nombres repetidos')
// 			flag = true
// 			break
// 		}
// 	}


// 	// Verificamos si el flag esta levantdo
// 	if (flag) {
// 		break
// 	}

// }

// // Primer iteracion de *i*
// // i vale 0 --> alumnos[i] --> 'Gabriela' --> nombre = 'Gabriela'
// 	// Primer iteracion de *j*
// 	// j vale 1 --> alumnos[j] --> 'Agustin' --> Comparo Gabriela con Agustin
// 	// j vale 2 --> alumnos[j] --> 'Daniela' --> Comparo Gabriela con Daniela
// 	// j vale 3 --> alumnos[j] --> 'Facu' --> Comparo Gabriela con Facu
// 	// .. Hasta que j llega al final hasta que j vale 6
// // Segunda iteracion de *i*
// // i vale 1 --> alumnos[i] --> 'Agustin' --> nombre = 'Agustin'
// 	// Primer iteracion de *j*
// 	// j vale 2 --> alumnos[j] --> 'Daniela' --> Comparo Agustin con Daniela


// // let alumnos = ['Gabriela','Agustin','Daniela','Facu','Tomas','Rulo19', 'Facu']



// let nombre1 = 'Rulo19'
// let nombre2 = 'Agustin'
// let nombre3 = 'Daniela'
// let nombre4 = 'Jorge'
// let nombre5 = 'Jazmin'

// let nombres = []

// nombres.push('Rulo19')
// nombres.push('Rulo19')
// nombres.push('Rulo19')
// nombres.push('Rulo19')
// nombres.push('Rulo19')

// nombres.push('')



// EJEMPLO 5 CLASE 6 FOR OF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let alumnos = ['Gabriela','Agustin','Daniela','Facu','Tomas','Rulo19', 'Facu']


// for (let alumno of alumnos) {
// 	console.log(alumno)
// }



// PRACTICA 2 CLASE 6!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// En nuestro sistema de productos, queremos 
// Verificar si los productos están en stock
// Si no tienen stock, entonces eliminarlos del sistema
// Redondear los precios (hacia arriba)
// Agregar X productos nuevos


// let id = 0

// // Tenemos la siguiente clase Producto para instanciar objetos del tipo Producto

// class Producto {
//     constructor(nombre,precio,stock) {
//         this.nombre = nombre
//         this.precio = precio
//         this.stock = stock

//         this.id = id++
//     }

//     redondear() {
//         this.precio = Math.round(this.precio)
//     }
// }

// // inicialmente vacío

// let productos = []

// // Voy metiendo objetos

// productos.push(new Producto('Azucar' ,555.55,  10))
// productos.push(new Producto('Fideos' ,980.65,  0))
// productos.push(new Producto('Flores' ,1030.56,  20))


// // Verificar si los productos tienen stock

// for (let producto of productos) {
//     console.log(producto)
//     // Por cada producto (elemento del array) voy a hacer algo
//     if (producto.stock > 0) {
//         console.log(producto.nombre + ' tiene stock')
//     } else {
//         console.log(producto.nombre + ' no tiene stock')
//     }
// }

// // Redondear los precios de los productos




// // Agregar X productos nuevos al sistema (el usuario elige cuando deja de agregar productos)

// let cantidad = Number(prompt('Cuantos productos quiere agregar?'))


// for (let i = 0; i < cantidad; i++) {

//     // Agregar productos al array de productos


// }