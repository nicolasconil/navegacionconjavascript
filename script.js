import { barcelona, roma, paris, londres } from './ciudades.js'

// obtener los elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// agregar un evento CLICK a cada enlace
enlaces.forEach ( function(enlace) {
    enlace.addEventListener('click', function() {
        enlaces.forEach (function (enlace) {
            enlace.classList.remove('active')
        });

        this.classList.add ('active')

        let contenido = obtenerContenido (this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    });  
});

// función para traer la info. correcta de ciudades.js
function obtenerContenido (enlace) {
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    }
    return contenido [enlace];
}