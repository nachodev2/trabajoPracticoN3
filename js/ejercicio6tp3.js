/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b) */


//Funcion que calcula el permimetro

function calcularPerimetro(a, b){
    return 2 * (a + b)
}

const ladoA = parseFloat(prompt('Ingresa el valor del lado A del rectangulo:'));
const ladoB = parseFloat(prompt('Ingresa el valor del lado B del rectangulo:'));

const perimetro = calcularPerimetro(ladoA, ladoB);

document.writeln(`El perimetro del rectangulo es ${perimetro}`)
