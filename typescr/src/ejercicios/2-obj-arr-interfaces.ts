/* ===== VARIABLES ===== */

let habilidades = ['Euge', 'Ari', 'Cham'];

//habilidades.push(4)  No me lo va a permitir porque ts esta asumiendo el array 
//                     es de tipo string

let habilidades2 = ['Euge', 'Ari', 'Cham', 100];

//habilidades.push(4)  Si me lo va a permitir porque ts esta asumiendo el array 
//                     es de tipo string y de tipo number

let habilidades3: (string | number)[] = ['Euge', 'Ari', 'Cham'];

//habilidades.push(4)  Si me lo va a permitir porque ts estoy especificando que  
//                     el array es de tipo string y de tipo number


/* ===== OBJETOS ===== */
//Para trabajar con objetos es ideal definir interfaces

interface Personaje {
    nombre: string,
    level: number,
    skills: string[],
    lugarNac?: string
}

const personaje: Personaje = {
    nombre: 'Euge',
    level: 1,
    skills: ['js', 'html', 'css']
}

console.log(personaje);