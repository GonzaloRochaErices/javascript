// EJEMPLO 1 CLASE 5 DECLARANDO OBJETO Y SUS PROPIEDADES!!!!!!!!!!!!!!!!

// let auto1 = {
// 	color: 'azul',
// 	marca: 'Renault',
// 	modelo: 'Twingo',
// 	potencia: 75,
// 	precio: 25000
// }

// // auto2 es una constante
// // Las propiedades pueden cambiar de valor
// // Puedo agregarle nuevas propiedades

// const auto2 = {
// 	color: 'rojo',
// 	marca: 'Ferrari',
// 	modelo: 'Roma',
// 	potencia: 650,
// 	precio: 15
// }


// console.log('El auto1 tiene las siguientes propiedades')
// for (let prop in auto1) {            // declaramos la variable iteradora (prop) del objeto auto1
// 	console.log(prop + ': ' + auto1[prop])       // listamos las propiedades con sus respectivos valores   
// 	// console.log(prop + ': ' + auto1.prop)    // no funciona, ya que no tenemos acceso a la propiedad
// }




// EJEMPLO 2 CLASE 5 UTILIZANDO ACCESO A LAS PROPIEDADES CON [] !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Somos un tremendo detective que tiene que interrogar a un posible sospechoso de usar var en su código

// let sospechoso = {
//     nombre: 'Fulanito',
//     edad: 42,
//     dni: 390843092,
//     grupo_sanguineo: 'A-',

//     contacto: {
//         mail: 'fulanito19xd@codermail.com',
//         telefono: 49815
//     },  // Ojo con esta coma!

//     usa_var: true,
//     hijos: 10
// }


// // Armamos un sistema perpetuo
// console.log('Le traemos al sospechoso llamado: ' + sospechoso.nombre)
// while (true) {
//     // ('Edad'.toLowerCase()) --> 'edad'
//     let pregunta = prompt('Que quiere preguntarle al sospechoso?','edad, nombre, dni, etc').toLowerCase()

//     //              sospechoso['edad']
//     //              sospechoso['nacionalidad'] -- > respuesta == undefined
//     let respuesta = sospechoso[pregunta]
//     // let respuesta = sospechoso.pregunta
    
    
//     if (respuesta) {
//         console.log('La respuesta a esa pregunta es ',respuesta)
//     } else {
//         console.log('No tenemos datos para esa pregunta')
//     }

//     // Recordemos que confirm devuelve un booleano
//     // Si se da a aceptar da true
//     // Si se da a cancelar da false
//     // Si quiere seguir preguntando va a dar a aceptar --> true, entonces niego el valor para seguir preguntando
//     if (!confirm('Quiere seguir preguntando?')) {           // confirm es un operador lógico que se usa para elegir aceptar o cancelar
//         break
//     }
// }



// EJEMPLO 3 CLASE 5 DEMOSTRANDO QUE NO SE PUEDEN COPIAR OBJETOS!!!!!!!!!!!!!!!


// Armamos un objeto notebook

// let notebook_original = {
//     marca: 'Lenovo',
//     color: 'negro',
//     OS: 'Windows 10',
//     funciona: true,
//     procesador: 'Intel I7'
// }

// // Queremos armar otro objeto idéntico en propiedades (estructura)
// // pero . . . . nos da pereza copiar y pegar lineas asi que

// let otra_notebook = notebook_original

// otra_notebook.OS = 'Linux'
// otra_notebook.color = 'gris'

// console.table(otra_notebook)    

// console.table(notebook_original)

// en este ejemplo, vemos que a pesar de que tenemos dos objetos, el hecho de tratar de copiar las propiedades 
// sin crearlas nuevamente para otro objeto, básicamente estamos trabajando sobre el mismo objeto
// es por eso que al hacer un console.log, nos entregará los mismos resultados, a pesar de que en teoría
// tenemos dos objetos



// EJEMPLO 4 CLASE 5 APLICANDO UNA CLASE Y MÉTODOS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// class Auto {            // creamos la clase, en este caso, Auto

// 	// Función constructora

// 	constructor(marca, modelo, color, gasolina) {       // definimos parámetros
// 		this.color = color
// 		this.marca = marca
// 		this.modelo = modelo
// 		this.gasolina = gasolina

// 		this.distancia_max = this.gasolina * 8.3
// 		this.explotado = false

// 		this.duenio = prompt('Indique el nombre del dueño')     // incluso podemos agregar mas propiedades, y aún mas, agregarlas con un prompt para que el usuario agregue dicha propiedad

//         // podemos evaluar el valor de una propiedad, y le asigna una nueva propiedad según el resultado de esa evaluación

// 		if (this.color == 'Azul') {     // evaluación
// 			this.facha = 'Muy facha'    // nueva propiedad
// 		} else {
// 			this.facha = '0 Facha'      // nueva propiedad
// 		}
// 	}


// 	cambiar_color() {       // método
// 		let nuevo_color = prompt('A que color quiere cambiar el auto?')     // se pide el nuevo color, se guarda en la variable nuevo_color
// 		// Cambiar el color de ESTE auto
// 		this.color = nuevo_color        // se asigna el nuevo color
// 	}

// 	turbo() {
// 		this.distancia // Afecta a la distancia en 10% bajo una probabilidad del 30%

// 		// Bajo un 3% de probabilidad de usar el turbo, el coche explota
// 		this.explotado = true
		
// 	}
// }


// let auto1 = new Auto('Renault','Twingo','Azul')

// console.log('El color de auto1 es ' + auto1.color)
// auto1.cambiar_color()       // método
// console.log('El nuevo color de auto1 es ' + auto1.color)     // mostramos el nuevo color