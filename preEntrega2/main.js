
// objeto juego adivinanza

const juegoAdivinanza = {
    numeroAleatorio: 0,
    intentos: 0,
    maxIntentos: 3,
    historialIntentos: [],

    // función para generar un número al azar entre 1 y 10

    generarNumeroAleatorio: function () {
        return Math.floor(Math.random() * 10) + 1
    },

    // función para el juego

    jugar: function () {
        this.numeroAleatorio = this.generarNumeroAleatorio()
        this.intentos = 0
        this.historialIntentos = []

        console.log('Bienvenido al programa de adivinanza de números!')

        while (this.intentos < this.maxIntentos) {
            let numeroUsuario = this.obtenerNumeroUsuario()

            if (isNaN(numeroUsuario)) {
                console.log('Por favor, ingresa un número válido')
            } else {
                this.verificarNumero(numeroUsuario)
            }

            if (numeroUsuario === this.numeroAleatorio) {
                break
            }
        }

        this.mostrarDespedida()
    },

    // función para obtener el número del usuario

    obtenerNumeroUsuario: function () {
        return parseInt(prompt(`Intento ${this.intentos + 1}/${this.maxIntentos}: Adivina el número del 1 al 10:`))
    },

    // función para verificar el número del usuario

    verificarNumero: function (numeroUsuario) {
        this.intentos++

        switch (true) {
            case numeroUsuario === this.numeroAleatorio:
                console.log('Adivinaste correctamente!')
                break
            case numeroUsuario > this.numeroAleatorio:
                console.log('Pista: El número es demasiado alto')
                break
            case numeroUsuario < this.numeroAleatorio:
                console.log('Pista: El número es demasiado bajo')
                break
        }

        this.registrarIntento(numeroUsuario)
    },

    // función para registrar el intento en el historial

    registrarIntento: function (numero) {
        this.historialIntentos.push(numero)
    },

    // función para mostrar el historial de intentos

    mostrarHistorialIntentos: function () {
        console.log('Historial de intentos:', this.historialIntentos.join(', '))
    },

    // función para mostrar el mensaje de despedida

    mostrarDespedida: function () {
        if (this.intentos === this.maxIntentos) {
            console.log(`Se acabaron tus oportunidades! El número correcto era ${this.numeroAleatorio}`)
        }
    },
}

// bucle principal para permitir reiniciar el programa

let opcion;

do {
    juegoAdivinanza.jugar()

    opcion = prompt('Quieres jugar de nuevo? (Sí/No)').toLowerCase()
} while (opcion === 'si')

console.log('Gracias por jugar!')
