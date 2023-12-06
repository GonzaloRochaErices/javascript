// prueba juego adivinar un número



function jugarAdivinanza() {    // función lógica que inicia el juego, y permite reiniciarlo si el usuario lo desea

    // declaración de variables

    let numeroAleatorio = Math.floor(Math.random() * 10) + 1        // genera un número al azar del 1 al 10
    let intentos = 0        // variable que contiene los intentos del usuario
    const maxIntentos = 3       // variable que indica el máximo de intentos disponibles

    // mensaje de bienvenida

    console.log('Bienvenido al programa de adivinanza de números!')

    // bucle principal con límite de 3 intentos

    for (; intentos < maxIntentos; intentos++) {        // compara los intentos actuales con los intentos máximos. ademas, notar que al principio de la declaración FOR, se pone un ;. esto es para ahorrar código, ya que las variables que se usan, ya estaban declaradas
        let numeroUsuario = parseInt(prompt('Intento ' + (intentos + 1) + '/' + maxIntentos + ': Adivina el número del 1 al 10:'));
        // validación y lógica del juego

        if (isNaN(numeroUsuario)) {     // validación del input
            console.log('Por favor, ingresa un número válido')
        } else {        // en caso de que el input sea correcto, se entra al bucle del juego
            switch (true) {
                case numeroUsuario === numeroAleatorio:     // el input es el correcto
                    console.log('Adivinaste correctamente!')
                    break
                case numeroUsuario > numeroAleatorio:       // el input es mayor al correcto
                    console.log('Pista: El número es demasiado alto')
                    break
                case numeroUsuario < numeroAleatorio:       // el input es menor al correcto
                    console.log('Pista: El número es demasiado bajo')
                    break
            }
        }

        // para salir del bucle si el número fue adivinado

        if (numeroUsuario === numeroAleatorio) {
            break
        }
    }

    // mensaje de despedida

    if (intentos === maxIntentos) {     // si se acaban los intentos, mostramos el número correcto
        console.log('Se acabaron tus oportunidades! El número correcto era ' + numeroAleatorio);
    }
}

// para permitir reiniciar el programa. debe estar fuera del bucle del juego para que se enlace con la función lógica (jugarAdivinanza)

let opcion      // declaramos la opción para elegir si seguir jugando o no

do {
    jugarAdivinanza() // llama a la función que contiene la lógica del juego (jugarAdivinanza), creado al principio del código

    opcion = prompt('Quieres jugar de nuevo? (Sí/No)').toLowerCase()       // el input es normalizado para que la opción siempre sea SI o NO
} while (opcion === 'si')       // mientra la opción sea SI, el programa reiniciará el bucle de juego. de caso contrario, entregará la despedida y finalizará 

console.log('Gracias por jugar!')       // despedida en caso de que la opción sea NO
