/* ===== CLASES BASICAS ===== */
class PersonaNormal {
    constructor(
        public nombre: string, 
        public direccion: string
    )   {}

}

class Heroe extends PersonaNormal {
    //alterEgo: string;       //puedo definir si son privadas (la prop solo es visible dentro de la misma clase),
    //edad: number;           //public (afuera de la clase se puede ver) - Cuando no se especifica, es publica
    //nombreReal: number;     //static (puedo acceder al valor de esa propiedad sin necesidad de sin crear una instancia)

    //La mejor forma de definir es la de abajo 
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal?: string //El "?" significa que este es opcional
    ) {
        super(nombreReal, 'New York, USA')
        }
}

/*Las clases sirven para cargan instancias como la de abajo - Las interfaces no me permiten implementar funciones pero si definirlars*/
const ironman = new Heroe('Ironman', 47, 'Tony Stark');

console.log(ironman);
