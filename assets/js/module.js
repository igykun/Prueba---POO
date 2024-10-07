//module, donde creamos los modulos a exportar, esto nos permite ordenar facilmente el proyecto y permite facil actualizacion
//Creamos una superclase Animal con 5 parametros y 5 getters
class Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        let _nombre = nombre;
        let _edad = edad;
        let _img = img;
        let _comentarios = comentarios;
        let _sonido = sonido;

        this.getNombre = () => _nombre;
        this.getEdad = () => _edad;
        this.getImg = () => _img;
        this.getComentarios = () => _comentarios;

        this.setComentarios = (nuevo_comentario) => {
            _comentarios = nuevo_comentario;
        };
        this.getSonido = () => _sonido;
    }

    // Getters para obetener el valor de las variables y 1 setter en comentario para agregar nuevos comentarios
    get nombre() {
        return this.getNombre();
    }

    get edad() { 
        return this.getEdad();
    }

    get img() {
        return this.getImg();
    }

    get comentarios() {
        return this.getComentarios();
    }

    set comentarios(nuevo_comentario) {
        this.setComentarios(nuevo_comentario);
    }

    get sonido() {
        return this.getSonido();
    }
}
//Creamos 5 clase hijas Leon - Lobo - Oso - Serpiente - Aguila cada una con su propia funcion segun el sonido del animal
class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    rugir() {
        return this.sonido;
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    aullar() {
        return this.sonido;
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    grunir() {
        return this.sonido;
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    sisear() {
        return this.sonido;
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    chillar() {
        return this.sonido;
    }
}
//exportamos las 5 clases hijas para poder utilizarlas en el script principal
export { Aguila, Serpiente, Oso, Lobo, Leon };