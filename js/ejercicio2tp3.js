/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones: 

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

//Script que solicita al usuario ingresar una ciudad
const ciudades = [];

while (true) {
  let indiceCiudades = prompt(
    "Escribe el nombre de una ciudad. Para finalizar presiona cancelar"
  );
  if (indiceCiudades === null) {
    break;
  }
  ciudades.push(indiceCiudades);
}

//Mostrar la longitud del array

document.writeln(`El array tiene ${ciudades.length} elementos`);

//Mostrar los items de las posiciones primera, tercera y ultima

document.writeln(`<ul>`);
document.writeln(`<li>Elemento 1er posicion: ${ciudades[0]}</li>
    <li>Elemento 3er posicion: ${ciudades[2]}</li>
    <li>Elemento ultima posicion: ${ciudades[9]}</li>`);
document.writeln(`</ul>`);

//Añadir en la ultima posicion del array la ciudad Paris

ciudades.push('Paris')

document.writeln(`<ul>`);
document.writeln(`<li>Elemento ultima posicion: ${ciudades[ciudades.length - 1]}</li>`)
document.writeln(`</ul>`);

//Escribir por pantalla el elemento de la seguna posicion y sustituir por la ciudad barcelona

ciudades[1] = 'Barcelona';

document.writeln(`<ul>`);
document.writeln(`<li>Elemento segunda posicion: ${ciudades[1]}</li>`);
document.writeln(`</ul>`);


//mostrar un ul del array de ciudades

document.writeln('<h2>Arreglo de ciudades</h2>')

document.writeln(`<ul>`);
for(let i=0; i < ciudades.length; i++){
document.writeln(`<li>Elemento 1er posicion: ${ciudades[i]}</li>`);
}
document.writeln(`</ul>`);

