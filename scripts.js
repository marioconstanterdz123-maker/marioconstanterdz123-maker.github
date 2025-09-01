const boton = document.getElementById('botonSiguiente');
const luz = document.getElementById('luz');
const estado = document.getElementById('estado');

const colores = ['verde', 'amarillo', 'rojo'];
const textos = ['Avanza', 'Precaución', 'Alto'];

let indice = 0;

boton.addEventListener('click', () => {
  indice = (indice + 1) % colores.length;
  luz.className = colores[indice];
  estado.textContent = textos[indice];
});

