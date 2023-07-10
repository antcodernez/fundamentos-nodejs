function hola(nombre, callback)
    {
        setTimeout(function ()
            {
                console.log(`Hola ${nombre}`);
                setTimeout(callback, 1000);
            }, 2000);
    }
function bye(name, myCallback)
    {
        setTimeout(function () {
            console.log(`Adios ${name}`);
            myCallback();
        }, 3000);

    }
console.log("Iniciando proceso");
hola("Jesus", () => 
    {
        bye("Jesus", () => 
            {
                setTimeout(() => console.log("Termiando proceso"), 2000);
            });
    });