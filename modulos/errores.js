function otraFuncion()
    {
        roto();
    }
function roto()
    {
        return 3 + z;
    }
function asincRoto(cb)
    {
        setTimeout(() => {
            try
                {
                    return 3 + z
                }
            catch(err)
                {
                    console.error("Error en mi funcion asincrona :(");
                    cb(err.message);
                }
        });
    }
try
    {
        //otraFuncion();
        asincRoto(() => console.log("Hay un error master"));
    }
catch(error)
    {
        console.error("Se rompio algo :(");
        //console.error(error.message); //.message muestra solo una linea de código 
        console.error(error)
        console.log("Don't worry lo hemos atrapado al cabrón")
    }
console.log("Algo más se ejecuta en el hilo principal :D");