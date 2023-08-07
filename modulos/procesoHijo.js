//Ambas lineas sirven para lo mismo
const {exec, spawn} = require("child_process"); //Util para acceder a más de una propiedad de mi child process

// const exec = require("child_process").exec; traera un objeto con un monton de objetos dentro, pero de momento solo me importa el objeto exec

// Usando exec("comando", callback(error, stout, sterr) => {})

// exec("ls -la", (err, stdout, sterr) => {
//     if(err)
//         {
//             console.error(error);
//             return false;
//         }
//     console.log(stdout);
// });

// Creando un proceso hijo desde el proceso principal que seria procesoHjo.js
// exec("node consola.js", (err, stdout, sterr) => {
//     if(err)
//         {
//             console.error(error);
//             return false;
//         }
//     console.log(stdout);
// });

// Creando y eliminando una carpeta con exec()

// exec ("mkdir xd", (err, stdout, sterr) => {
//     if(err)
//         {
//             console.error(err);
//         }
//     console.log(stdout);
// });

// exec("rm -r xd", (err, stdout, stdin) =>
//     {
//         if(err)
//             {
//                 console.log(err);
//             }
//         console.log(stdout);
//     });

//Usando spaw

let proceso = spawn("ls", ["-la"]); // Si quiero parametros van dentro de un array 

console.log(proceso.pid); // .pid me da el id de mi proceso
console.log(proceso.connected) //Saber si esta conectado 

//Vamos a trabajar con una salida estándar .stdout
//.on() cuando pase algo que me interesa como datos ---->
proceso.stdout.on("data", dato => {
    console.log("¿Esta muerto?");
    console.log(proceso.killed);
    console.log(dato.toString()); // Vuelve la data un string sino me la da como fichero
});

proceso.on("exit", () => {
    console.log("El proceso termino");
    proceso.kill();
    console.log(proceso.killed);
});

proceso.kill(); //Mata el proceso
console.log(proceso.killed); //Retorna un boolean si ya muerio o no