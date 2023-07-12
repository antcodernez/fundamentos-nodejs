//Si tenemos funciones que son promesas usamos async

async function hola(nombre) //Funcion asincrona declarada
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
async function bye(name)
    {
        
            await setTimeout(() => {
                console.log(`Adios ${name}`);
            }, 3000);
     };
async function hablar()
    {
        
        await setTimeout(() => {
                            console.log("bla bla bla!...");
                        }, 1000);
    }

async function main()
    {
        let nombre = await hola("Jesus");
        await hablar();
        await hablar();
        await hablar();
        await bye(nombre);
    }
console.log("Empezamos");
main();
console.log("Termimanos master");
