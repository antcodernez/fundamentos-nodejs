//No se debe hacer en produccion!!!

// console.log(global); describe el objeto global
// resultado ----------->
// <ref *1> Object [global] { 
//   global: [Circular *1], (objeto global con dependecia circular asi mismo; dependecia circular es un concepto de programacion)
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   structuredClone: [Function: structuredClone],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 25.680606000008993,
//       nodeStart: 1.8465450000949204,
//       v8Start: 4.114713000017218,
//       bootstrapComplete: 21.367339999997057,
//       environment: 10.748622000101022,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1689166027901.761
//   },
//   fetch: [AsyncFunction: fetch]
// }

//Util por si quiero conectarme a una bd y despues terminar el proceso, se usa muchisimo
let i  = 0;
let intervalo = setInterval(() => {
        console.log("Hola papi");
    if(i === 3)
        {
            clearInterval(intervalo)
        }
    i++;
}, 2000);

//Ejecuta de manera inmediata
setImmediate(() => console.log("Hola"));

//sistema de modulos asi podemos acceder a los modulos
// require();

// acceder al proceso 
console.log(process)

//Acceder a el lugar donde estoy, especificamente el directorio
console.log(__dirname);

//Saber como se llama este fichero de globales
console.log(__filename); //Devuelve el nombre del archivo

//Si puedo no usar variables globales no usar variables globales porque son un foco de problemas enorme 

//Variables globales
global.miVariable = "Hola perro soy una variable global";
console.log(miVariable);