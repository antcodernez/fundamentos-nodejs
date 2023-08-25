console.time("todo el programa dura:")
console.group("Bucle 1: suma de un numero");
let suma = 0;
console.time("bucle desgraciado")
for(let i = 0; i < 10; i++)
    {
        suma += 1;
        console.log(suma)
    }
console.timeEnd("bucle desgraciado");
//forma de saber cuanto tiempo empieza y dura algo console.time()
console.groupEnd();

//Funciona con funciones asincronas
console.log("Comienza el asincronismo");
console.time("asincronismo");
asincrona()
.then(() => console.timeEnd("asincronismo"));


console.group("Bucle 2: suma a 2 numeros");
let suma2 = 2;
console.time("bucle en suma de 2 numero")
for(let i = 0; i < 10; i++)
    {
        suma2 += 2;
        console.log(suma2)
    }
console.timeEnd("bucle en suma de 2 numero");
console.groupEnd();
console.timeEnd("todo el programa dura:");


function asincrona ()
    {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("termina el proceso asincrono")
                resolve()}, 4000);
        });
    }