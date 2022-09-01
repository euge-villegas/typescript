/* ===== GENERICOS ===== */

function queTipoSoy<T>(argumento: T) { //<T> esto hace que el argumento sea de tipo generico. 
    return argumento;                  //No necesita ser T pero así se usa
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArray = queTipoSoy([1, 6, 66, 7, 3]);


