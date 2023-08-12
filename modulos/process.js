// const process = require("process"); esta vez no vamos a importar el modulo porque lo tenemos en global

// El objeto process es una instancia de EventEmitter, podemos escuchar eventos en node



//Vamos a atacar el process que esta en global, no es necesario importarlo

//Exit Se ejecuta cuando node detiene el eventLoop y cierra su proceso principal
process.on("exit", () => {
    console.log("El proceso acabo, aparezco cuando el programa acabo con el comando exit");
    setTimeout(() => console.log("Esto no se va a ver nunca"), 2000);
    //Cualquier cosa fuera del eventLoop como este setTimeout() no se va a ejecutar
     
}); //process.on() Detectar cuando vaya a salir el programa

//Exit es el comando, cuando quiera salir va a hacer n
//Cuando funciona exit te desconectas del eventLoop y no se va a mostrar el console.log se la funcion setTimeout()    

console.log(5 + 9); //Se va a ejecutar primero y luego el process.on()


//beforeExit se ejecuta para antes de salir como lo dice
process.on("beforeExit", () => console.log("El proceso va a terminar, aparezcon en segundo lugar porque es beforeExit mi comando"));

//Campurar exepciones que nadie ha hecho


//uncaughtException permite capturar cualquier error que no fue capturado previamente, esot evita que node cierre todos los hijos al encontrar un error no manejado 
process.on("uncaughtException", (err, origin) => {
    console.log("Se nos ha olvidado capturar un error");
    console.error(err);
}); //util para monetorizar un proceso


// funcionQuenoEXiste(); //Se uso de ejemplo para capturar un error en el proceso
// process.on("uncaughtRejection"); 

