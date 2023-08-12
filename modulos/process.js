// const process = require("process"); esta vez no vamos a importar el modulo porque lo tenemos en global

//Vamos a atacar el process que esta en global
process.on("exit", () => {
    console.log("El proceso acabo, aparezco cuando el programa acabo con el comando exit");
    setTimeout(() => console.log("Esto no se va a ver nunca"), 2000); 
}); //process.on() Detectar cuando vaya a salir el programa

//Exit es el comando, cuando quiera salir va a hacer n
//Cuando funciona exit te desconectas del eventLoop y no se va a mostrar el console.log se la funcion setTimeout()    

console.log(5 + 9); //Se va a ejecutar primero y luego el process.on()

process.on("beforeExit", () => console.log("El proceso va a terminar, aparezcon en segundo lugar porque es beforeExit mi comando"));

//Campurar exepciones que nadie ha hecho

process.on("uncaughtException", (err, origin) => {
    console.log("Se nos ha olvidado capturar un error");
    console.error(err);
}); //util para monetorizar un proceso


// funcionQuenoEXiste(); //Se uso de ejemplo para capturar un error en el proceso
// process.on("uncaughtRejection"); 

