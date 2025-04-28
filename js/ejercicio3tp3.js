/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación. */

let resultados = new Array(13).fill(0);

//Funcion para lanzar dados
function lanzarDados() {
    return Math.floor(Math.random() * 6) + 1;
}

//Repetir 50 lanzamientos

for(let i = 0; i < 50; i++){
    let dado1 = lanzarDados();
    let dado2 = lanzarDados();
    let suma = dado1 + dado2;
    resultados[suma]++;
}


//Mostrar los resultados

document.writeln('<h2>Simulación de Lanzamiento de Dados 🎲🎲</h2>');
document.writeln('<table>');
document.writeln('<thead>');
document.writeln('<tr><th>Suma 🎲🎲</th><th>Apariciones</th></tr>');
document.writeln('</thead>');
document.writeln('<tbody>');

for (let suma = 2; suma <= 12; suma++) {
    document.writeln('<tr>');
    document.writeln(`<td>${suma}</td>`);
    document.writeln(`<td>${resultados[suma]}</td>`);
    document.writeln('</tr>');
}

document.writeln('</tbody>');
document.writeln('</table>');

