/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario. */

const numeroIngresado = parseInt(prompt('Ingresa un numero entero:'))

function tablaMultiplicar(num) {
    for(let i=1; i <= 10; i++){
    let resultado = num * i;
    document.writeln(`${num} x ${i} = ${resultado}<br>`)
    }
}

tablaMultiplicar(numeroIngresado)