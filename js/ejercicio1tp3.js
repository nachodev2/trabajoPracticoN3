/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.*/

document.writeln('<h1>Lista de Meses</h1>')


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

document.writeln(`<ul>`)
for(let indiceMeses=0; indiceMeses < meses.length; indiceMeses++)
document.writeln(`<li>${meses[indiceMeses]}</li>`)
document.writeln(`</ul>`)