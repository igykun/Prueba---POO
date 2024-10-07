//se importan las clases hijas de Animal del module.js
import {Aguila, Leon, Lobo, Oso, Serpiente} from './module.js';
//se importa la funcion mandar datos de informaciones, de este modo se cargan automaticamente
//los datos del json animales
import {mandarDatos} from './informaciones.js';
//se crea un array vacio llamado animales, en el se guardaran los datos de los animales extraidos del json
let animales = [];
let img = document.getElementById('preview');
let audio = document.getElementById('player');
const registrar = document.getElementById('btnRegistrar');
let nombre = document.getElementById('animal');

// Evento que registra un nuevo animal al hacer click
registrar.addEventListener('click', async () => {
let edad = document.getElementById('edad');
let comentario = document.getElementById('comentarios');
let animal;

//Se utliza un switch para determinar cual de las 5 opciones de animales se selecciono y un if para
//revisar si todos los campos contienen datos
if (nombre.value && edad.value && comentario.value) {
    let datos = await mandarDatos.mostrar;
    switch (nombre.value) {
        case 'Leon':
            animal = new Leon(nombre.value, edad.value, datos.animales[0].imagen, comentario.value, datos.animales[0].sonido);
            break;
        case 'Lobo':
            animal = new Lobo(nombre.value, edad.value, datos.animales[1].imagen, comentario.value, datos.animales[1].sonido);
            break;
        case 'Oso':
            animal = new Oso(nombre.value, edad.value, datos.animales[2].imagen, comentario.value, datos.animales[2].sonido);
            break;
        case 'Serpiente':
            animal = new Serpiente(nombre.value, edad.value, datos.animales[3].imagen, comentario.value, datos.animales[3].sonido);
            break;
        case 'Aguila':
            animal = new Aguila(nombre.value, edad.value, datos.animales[4].imagen, comentario.value, datos.animales[4].sonido);
            break;
    }

    
    nombre.selectedIndex = 0;
    edad.selectedIndex = 0;
    comentario.value = "";
    img.innerHTML = `<img src="">`;

    //se hace un push para agregar el animal
    animales.push(animal);
    showTable();
} else {
    alert('Se deben completar todos los campos!');
}
});

//Utilizamos una arrow function para generar un codigo HTML capaz de mostrar los animales existentes
const showTable = () => {
let animalesTemplate = document.getElementById('Animales');
animalesTemplate.innerHTML = ""; 
//Se usa el for each para acceder a todos los datos, tras eso en una card se muestre el nombre, la imagen
//el comentario hecho por el usuario y un boton para escuchar el sonido
animales.forEach((a, i) => {
    animalesTemplate.innerHTML += `
    <div class="col-6">
        <div class="px-3 pb-2 animales" data-fighter="${a.getNombre()}">
            <div class="card-deck ml-1">
                <div class="card" style="width: 15rem;">
                    <img src="assets/imgs/${a.getImg()}" alt="${a.getNombre()}" onclick="verDatos(${i})" data-toggle="modal" data-target="#datos" class="card-img-top" width="200px" height="200px" />
                    <div class="card-body">
                        <p>Edad: ${a.edad}</p>
                        <p>Comentarios: ${a.comentarios}</p>
                        <button class="btn btn-secondary" onclick="sonido(${i})">
                            <i class="fas fa-volume-up"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
});
}


window.sonido = (i) => {
let animal = animales[i];
let sonido = animal.getSonido();
audio.src = `assets/sounds/${sonido}`;
audio.play();
}


document.getElementById('animal').addEventListener('change', function cambiarImg() {
let animalSeleccionado = document.getElementById('animal').value;
const imagenes = {
    'Leon': 'Leon.png',
    'Lobo': 'Lobo.jpg',
    'Oso': 'Oso.jpg',
    'Serpiente': 'Serpiente.jpg',
    'Aguila': 'Aguila.png'
};

img.innerHTML = `<img src="assets/imgs/${imagenes[animalSeleccionado]}" width="200">`;
});