const  fs = require("fs"); 
const stream = require("stream"); // stream
const util = require("util"); //Trabajar herencia util

let data = "";


// Streams de lectura
let readableStream = fs.createReadStream(__dirname + "/cositas.txt");
readableStream.setEncoding("UTF-8"); //Estoy indicando que son strings en utf-8 
//Si mi texto tiene tildes o caracteres especiales de deberian mostras aqui
//UTF-8 estandar internacional para usar tildes, ñ, emojis y asi

readableStream.on("data", function (chuck) {
    console.log(chuck.toUpperCase());
    data += chuck; //Si es un archivo enorme, más de 1 gb o así, lo trabajaremos asi, vamos a ir recogiendo piezas de informacion he irla guardando en la variable data
});

readableStream.on("end", () => {
    console.log(data);
    //No hay diferencia visual pero en custiones de memoria si hay cambios, lo vere cuando trabaje con archivos grandes

    //Cuando sean peticiones http que no sepa su tamaño dado que va a venir en trozos es muy buena idea usar los streams
});

//.on() es una funcion del modulo fyle system documentacion de fylesystem ------------> https://nodejs.org/api/fs.html
//Tiene dos parametros hasta donde se que son on("evento", funcion) en el evento van cosas que van a sucederle al stream en este caso estoy obteniendo datos y cuando se terminan de ejecutar

// Streams de escritura

process.stdout.write(`Hola perros
`) // estoy directamente escribiendo en la salida estandar del sistema, tiene un salto de linea
//stdout es un buffer de escritura

// Crear un buffer de transformacion: vamos a recibir datos, modificarlos y escribirlos 

//Vamos a traer del fichero, hacerlo mayusculas y escribir en la stdout

const Transform = stream.Transform;
 
function Mayus()
    {
        Transform.call(this);
    }

util.inherits(Mayus, Transform); //Mayus trae todo lo que necesita de transform 

Mayus.prototype._transform = function(chuck, codificacion, callback) {
    chuckMayus = chuck.toString().toLowerCase();
    this.push(chuckMayus);
    callback();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout) 



//.pipe() funcion que se utiliza para mandar de un sitio a otro 