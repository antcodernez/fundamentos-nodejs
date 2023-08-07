console.log("console.log() Perrmite ver algo ");

console.info("Soy un cosole.info()");

console.error("Soy un console.error()");

console.warn("Soy un console.warn()");

const table = [
        {
            a: 2,
            b: 4
        },
        {
            a: 6,
            b: 7
        },
        {
            a: 1,
            b: 5
        }
    ]
console.table(table);


console.group("Soy un nuevo grupo");
console.log("Informacion");
console.log("Muy util");
console.groupEnd();
console.log("Soy un nuevo proceso");


function funcionOne()
    {
        console.group("Funcion 1")
        console.log("Soy de la funcion 1");
        console.log("Yo también");
        console.log("Y yo");
        funcionTwo();
        console.log("He vuelto a la funcion 1")
        console.groupEnd("Funcion 1");
    }
function funcionTwo()
    {
        console.group("Funcion 2");
        console.log("Estoy en la función 2 xd");
        console.groupEnd("Funcion 2");
    }
console.log("Empezamos")
funcionOne();

//Console.count() cuenta las veces que se ejecuto
console.count("veces");
console.count("veces");
console.count("perro");
console.count("veces");
console.countReset("veces"); //Reinicia el conteo de veces
console.count("veces");
console.count("veces");
console.count("veces");