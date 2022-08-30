/* ===== FUNCIONES BASICAS ===== */
function sumar(a, b) { /*Puedo definir el tipo de los parametros, si no los defino va a ser igual a "any"*/
    return a + b;
}

const resultado = sumar('Euge', ' Villegas');

console.log(resultado);

const sumarFlecha = (a: number, b: number): number => { /*(): number con eso defino de que tipo va a ser el retorno*/
    return a + b;
}

function multiplicar(num, otroNum, base?: number) { /*Esto significa que la base es opcional*/
    return num * base; 
}

const resultadoMulti = multiplicar(10, 20) 

console.log(resultadoMulti); /*Nan*/

function multiplicar2(numero, otroNum?: number, base = 2) { /*Esto significa que otroNum es opcional pero base esta definido en 2*/
    return numero * base; 
}

const resultadoMulti2 = multiplicar2(5, 20);

console.log(resultadoMulti2); /*10*/


/* ===== FUNCIONES CON OBJETOS ===== */
export {} 

interface personajePokemon {
    nombre: string,
    pv: number,
    mostrarPv: () => void;
}

function curar(personaje: personajePokemon, curarVida: number): void { /*No regresa nada*/
    personaje.pv += curarVida;
}

const nuevoPersonaje: personajePokemon = {
    nombre: 'Pikachu',
    pv: 100,
    mostrarPv() {
        console.log('Puntos de vida: ' + this.pv);
    }
}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarPv();








