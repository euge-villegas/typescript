/* ===== DESESTRUCTURACION DE OBJETOS ===== */
// La desestructuracion es extraer directamente ciertas propiedades que nos interesen de un obj y crear variables
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    año: number;
}

const reproductor: Reproductor = {
    volumen: 57,
    segundo: 89,
    cancion: 'House of Gold',
    detalles: {
        autor: 'Twenty One Pilots',
        año: 2011
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, año } = detalles;


console.log('El volumen actual es de: ', volumen);
console.log('El segundo actual es de: ', segundo);
console.log('La cancion actual es de: ', cancion);
console.log('El autor es: ', autor);
console.log('El año de la cancion es: ', año );


/* ===== DESESTRUCTURACION DE ARREGLOS ===== */

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ personaje1, personaje2, personaje3 ] = dbz;

// const [ , , personaje3 ] = dbz; Puedo hacer esto para solo extraer el personaje 3.

console.log('Personaje 1: ', personaje1);
console.log('Personaje 2: ', personaje2);
console.log('Personaje 3: ', personaje3);


/* ===== DESESTRUCTURACION DE ARGUMENTOS ===== */

export interface Producto {
    desc: string;
    precio: number;
}

const tel: Producto = {
    desc: 'Iphone 8',
    precio: 350
}

const tablet: Producto = {
    desc: 'Samsung Galaxy',
    precio: 400
}

export function calculaISV( prod: Producto[]) {
    let total = 0;

    prod.forEach(({precio}) => {
        total += precio;
    });

    return [total, total * 0.21];
}

const articulos = [tel, tablet];
const [total, isv] = calculaISV(articulos);

console.log('ISV: ', isv);
console.log('Total: ', total);
