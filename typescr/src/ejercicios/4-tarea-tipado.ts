/* TAREA SOBRE OBJETOS E INTERFACES */
interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion,
        /* {
        calle: string,
        pais: string,           ESTE CODIGO SE PUEDE HACER PERO NO ES TAN BUENA PRACTICA
        ciudad: string
        }
        */
    mostrarDireccion: () => string;    
}

interface Direccion {
    calle: string,
    pais: string,
    ciudad: string
}


const superHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },

    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();

console.log(direccion);