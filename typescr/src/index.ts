/* ===== ENCADENAMIENTO OPCIONAL ===== */

interface Pasajero {
    nombre: string;
    hijos?: string[];

}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
} 

const pasajero2: Pasajero = {
    nombre: 'Natalia',
    hijos: ['Pau', 'Santi', 'Nico']
}

function imprimeHijos(pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    //Va a evaluar primero si hay hijos. En caso de ser cierto va a decir cuantos, en caso de ser incorrecto va a devolver 0
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1)
/*

function imprimeHijos(pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos.length;

    console.log(cuantosHijos);
}

imprimeHijos(pasajero1) Va a resultar en error porque 'Fernando no tiene hijos'

*/               





