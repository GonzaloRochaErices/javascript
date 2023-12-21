
// // EJEMPLO 1 CLASE 4 FUNCIONES!!!!!!!!!!!!

// function saludar() {
//     console.log ('Hola Gonzalo')
// }

// saludar()  // 'Hola Gonzalo'
// saludar()  // 'Hola Gonzalo'




// EJEMPLO 2 CLASE 4 !!!!!!!!!!!!!!!!!!!!!!

// function saludar() {
//     let nombre = prompt('Ingrese su nombre')
//     alert('Su nombre es ' + nombre)
//     //
//     //
//     //
//     //  código que se va a ejecutar
//     //  cuando se va a ejecutar el código?
//     //  cuando llame a la función saludar
//     //
//     //
//     //
//     //
// }

// saludar()   // me va a pedir el nombre y me va a mostrar el mensaje
// saludar()   // me va a pedir el nombre y me va a mostrar el mensaje
// saludar()   // me va a pedir el nombre y me va a mostrar el mensaje



// EJEMPLO 3 CLASE 4 EJERCICIO!!!!!!!!!!!!!!!!

// Armar un sistema para un profesor de matemáticas que quiere tomar examen a 3 alumnos diferentes
// Se pide el nombre del alumno
// Se le pregunta por el área de un cuadrado según el lado
// Se muestra si el alumno contestó bien



// let lado_1 = 10
// let lado_2 = 4.5
// let lado_3 = 8

// // Pregunta a alumno 1
// examen(lado_1)

// // Pregunta a alumno 2
// examen(lado_2)

// // Pregunta a alumno 3
// examen(lado_3)

// // Armar mismo programa pero con funciones
// function examen(lado) {
//     let alumno = prompt('Ingrese su nombre por favor')
//     let respuestaAlumno = prompt('Cual es el area de un cuadrado cuyo lado mide ' + lado)
//     let calculo = lado * lado

//     if (calculo == respuestaAlumno) {
//         console.log('Excelente ' + alumno + ', aprobaste!')
//     } else {
//         console.log('Para nada excelente ' + alumno + ', desaprobaste!')
//     }
// }



// EJEMPLO 4 CLASE 4 UTILIZANDO EL RETURN!!!!!!!!


// console.log(saludar('Gonzalo')) // Me va a pedir el nombre, y me va a mostrar el msj
// // saludar(123) // ...
// // saludar('Tobias') // ...


// // Declaro una función para pedir nombre y mostrarlo
// function saludar(nombre) {
// 	let edad = Number(prompt('Ingrese su edad'))
// 	alert('Su nombre es ' + nombre)
// 	console.log(nombre)

// 	// no definida == undefined
// 	// código que se va a ejecutar
// 	// Cuando se va a ejecutar el código?
// 	// Cuando yo llame a la función saludar
// 	// 
// 	return edad
// }

// console.log(edad)



// EJEMPLO 5 CLASE 4!!!!!!!!!!!!!!!!!!!!!!!


// Armamos un sistema perpetuo, donde entramos y el usuario elige cuando salir

// while (true) {
    
//     let cantidad = pedirNum('Ingrese la cantidad de areas a calcular')      // Preguntamos cuantos cálculos necesita hacer el profesor


//     for (let i = 0; i < cantidad; i++) {            
//         // Pedir lo datos
//         let base = pedirNum('Ingrese el valor de la base en cm')        // almacenamos la base
//         let altura = pedirNum('Ingrese el valor de la altura en cm')    // almacenamos la altura 
//         let unidad = prompt('En que unidad quiere la salida? inch o cm')    // preguntamos que unidad será usada en el return

//         // Calcular el area del rectángulo
//         let area = areaRectangulo(base,altura,unidad)

//         // Mostrar el resultado
//         console.log(area)
//     }

//     if(confirm('Para salir del programa haga click en aceptar')) {
//         break
//     }
// }


// // Función para calcular el area de un rectángulo ingresa (1 inch = 2.54cm)

// function areaRectangulo(base,altura,unidad) {
//     let resultado = base*altura

//     if (unidad == 'cm') {
//         return resultado
//     } else if (unidad == 'inch') {
//         return resultado / 2.54
//     } else {
//         return 'Por favor ingrese una unidad correcta'
//     }
// }

// // Función para pedir por un numero (la función usa prompt para pedir y verifica que sea numérico)

// function pedirNum(str) {
//     let num = Number(prompt(str)) // nos aseguramos que sea numérico

//     // Si ingresa cualquier cosa --> num va a tener el valor NaN
//     // Para verificar si es NaN usábamos UNA FUNCIÓN!!! isNaN(...)

//     while (isNaN(num)) {
//         num = Number(prompt(str))
//     }

//     return num

// }




// EJEMPLOS 6 CLASE 4!!!!!!!!!!!!!!!!!



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~ Ejemplo 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// // Declaramos una variable global
// // Sabemos que es global porque no esta dentro de ningún par de llaves

// let global = 'Soy una variable global y estoy en todos lados'

// // Este par de llaves puede ser de un if, un while, un for, una función, etc
// // El par de llaves {...} me demarca un ámbito de ejecución

// {
//     console.log('%c\n\nEntrando a las llaves (local scope)\n\n', 'color:#F1EB90')        // \n es salto de línea
    
//     // Declaramos una variable local, sabemos que es local porque esta dentro de un par de llaves

//     let local = 'Soy una variable local, si me sacas de las llaves no existo 😞'
    
//     console.log(global)
//     console.log(local)
    
//     console.log('%c\n\nSaliendo a las llaves (local scope)\n\n', 'color:#F1EB90')
// }

// // Comprobamos si se pueden usar las variables fuera del scope anterior

// console.log(global)      // se ejecuta, ya que es la variable global 
// console.log(local)       // no se ejecuta, ya que está dentro de la variable loca, y el console.log, está por fuera


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~ Ejemplo 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// // Que pasa con una función cuando usamos el mismo nombre de una variable global en un parámetro?

// let saludo = 'Hola Rulo19, como va la vida?' // variable global
// saludar('Hola Rulo19, como esta el mejor usuario de github?')

// // Declaramos una función pero que tiene como parámetro el mismo nombre que una variable global

// function saludar(saludo) {
//     console.log(saludo)

// 	// Dentro de la función js va a usar el valor del parámetro
// 	// Los parámetros son variables del scope local de la función

// }

// // Podemos comprobar que fuera de la función sigue siendo la misma variable

// console.log(saludo)



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~ Ejemplo 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// // ¿Que pasa si DECLARO una variable con el mismo nombre que una variable global dentro del scope?

// let global = 'Soy global muajaja'

// // puede ser un if, un while, un for, una función, lo que sea

// {
//     console.log('%c\n\nEntrando a las llaves (local scope)\n\n', 'color:#F1EB90')
    
//     let global = 'No soy global, pero la variable se llama global!!'
//     // Que mensaje aparece si hago un console.log de global?
//     console.log(global) // No soy global


//     console.log('%c\n\nSaliendo a las llaves (local scope)\n\n', 'color:#F1EB90')
// }

// // Y que mensaje sale por fuera?

// console.log(global) // Soy global muajaja


// EN ESTE CASO NO HAY ERROR, YA QUE LAS VARIABLES ESTÁN DECLARADAS DENTRO DE DIFERENTES SCOPE, POR LO QUE LAS TOMA 
// COMO VARIABLES DIFERENTES

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~ Ejemplo 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let base = 10
// let altura = 20
// let area

// function areaRectangulo() {
//     area = base*altura
//     console.log('El area del rectángulo de \nAltura:' + altura + '\nBase: ' + base + '\nEs -->' + area)
    
//     // Evaluar lo de abajo 👇👇👇👇

//     // area = area 

// }

// areaRectangulo()

// console.log('Area declarada por fuera ' + area)