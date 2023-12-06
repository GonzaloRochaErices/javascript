// declaro nombre alumno

// let alumno = "Gonzalo"

// declaro y pido nombre del alumno

let alumno = prompt("Ingrese nombre del alumno")

// declaro notas del alumno

// let nota1 = 1
// let nota2 = 2
// let nota3 = 3

// declaro Y pido notas del alumno

let nota1 = Number(prompt("Ingrese nota 1 del alumno")) // es importante parsear los datos ingresados a number
let nota2 = Number(prompt("Ingrese nota 2 del alumno")) // ya que como se indica en la clase
let nota3 = Number(prompt("Ingrese nota 3 del alumno")) // los datos ingresados SIEMPRE son STRING

// saco promedio

let promedio = (nota1 + nota2 + nota3) / 3

//mostrar el mensaje en pagina

// alert("Soy el alert")

console.log("El promedio de " + alumno + " es " + promedio)




