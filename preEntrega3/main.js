
document.addEventListener('DOMContentLoaded', function () {
    const mensajeDiv = document.getElementById('mensaje')
    const numeroUsuarioInput = document.getElementById('numeroUsuario')
    const adivinarBtn = document.getElementById('adivinar')
    const historialDiv = document.getElementById('historial')

    let numeroAleatorio
    let intentos = 0
    const maxIntentos = 3
    const historialIntentos = []

    function generarNumeroAleatorio() {
        return Math.floor(Math.random() * 10) + 1
    }

    function iniciarJuego() {
        numeroAleatorio = generarNumeroAleatorio()
        intentos = 0
        historialIntentos.length = 0

        mensajeDiv.textContent = 'Bienvenido al juego de adivinanza de números!'
        historialDiv.textContent = ''

        adivinarBtn.disabled = false
    }

    function realizarIntento() {
        const numeroUsuario = parseInt(numeroUsuarioInput.value)

        if (isNaN(numeroUsuario)) {
            mensajeDiv.textContent = 'Por favor, ingresa un número válido'
            return
        }

        intentos++
        historialIntentos.push(numeroUsuario)

        if (numeroUsuario === numeroAleatorio) {
            mensajeDiv.textContent = `Adivinaste correctamente en ${intentos} intentos!`
            mostrarHistorial()
            adivinarBtn.disabled = true
            mostrarResultado()
        } else if (intentos < maxIntentos) {
            mensajeDiv.textContent = `Intento ${intentos}/${maxIntentos}: ${numeroUsuario > numeroAleatorio ? 'Pista: El número es demasiado alto' : 'Pista: El número es demasiado bajo'
                }`
        } else {
            mensajeDiv.textContent = `Se acabaron tus oportunidades. El número correcto era ${numeroAleatorio}. Lo siento, has perdido!`
            adivinarBtn.disabled = true
            mostrarResultado()
            mostrarHistorial()
        }
    }

    function mostrarHistorial() {
        historialDiv.textContent = 'Historial de intentos: ' + historialIntentos.join(', ')
    }

    function mostrarResultado() {
        const resultadoDiv = document.createElement('div')
        resultadoDiv.id = 'resultado'

        const mensajeResultado = document.createElement('p')
        mensajeResultado.textContent = intentos === maxIntentos ? 'Lo siento, has perdido!' : 'Felicidades, has ganado!'
        resultadoDiv.appendChild(mensajeResultado)

        const decisionJuego = document.createElement('p')
        decisionJuego.textContent = 'Quieres jugar de nuevo? (Sí/No)'
        resultadoDiv.appendChild(decisionJuego)

        const inputDecision = document.createElement('input')
        inputDecision.type = 'text'
        resultadoDiv.appendChild(inputDecision)

        const botonDecision = document.createElement('button')
        botonDecision.textContent = 'Confirmar'
        botonDecision.addEventListener('click', confirmarDecision)
        resultadoDiv.appendChild(botonDecision)

        document.body.appendChild(resultadoDiv)

        // permitir confirmar con la tecla Enter
        inputDecision.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                confirmarDecision()
            }
        })

        function confirmarDecision() {
            const decision = inputDecision.value.toLowerCase()
            if (decision === 'si') {
                resultadoDiv.remove()
                iniciarJuego()
            } else if (decision === 'no') {
                resultadoDiv.remove()
                mensajeDiv.textContent = 'Gracias por jugar!'
            } else {
                alert('Por favor, ingresa "si" o "no".')
            }
        }
    }

    // eventos
    adivinarBtn.addEventListener('click', realizarIntento)
    numeroUsuarioInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            realizarIntento()
        }
    })

    // iniciar juego al cargar la página
    iniciarJuego()
})
