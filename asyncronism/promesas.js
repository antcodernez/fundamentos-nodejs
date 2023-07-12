//A las funciones en lugar de ejecutar cosas cuando sean, devuelva una promesa y quien las llame pueda tener la promesa y estar pendiente de lo que pasa, del estado y asi

function hola(nombre)
    {
        return new Promise((resolve, reject) =>
            {
                setTimeout(function ()
                    {
                        console.log(`Hola ${nombre}`);
                        resolve(nombre);
                    }, 2000);
            });        
    }
function bye(name)
    {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`Adios ${name}`);
                resolve();
            }, 3000);
        });
    }
function hablar(nombre)
    {
        return new Promise((reject, resolve) => 
                {
                    setTimeout(() => 
                        {
                            console.log("bla bla bla!...");
                            resolve();
                            reject("Hay un error");
                        }, 2000);
                });
    }

console.log("Iniciando el proceso");
hola("Yisus")
    .then(hablar)
    .finally(() => console.log("Ya terminamos master"))
    .catch((error) => console.error(`Hay un error que es: ${error}`))