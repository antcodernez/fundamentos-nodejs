function asincrona(callback)
    {
        setTimeout(() => {
            try
                {
                    let a = 3 + z;
                    callback(null, a);
                }
            catch (e)
                {
                    callback(e);
                }
        }, 1000);
    }


asincrona((error, dato) => {
        if(error)
                {
                    //No estamos lanzando un error sino lo estamos gestionando en abajo
                    console.log("tenemos un error master");
                    console.error(error);
                    // throw error; //otra manera de terminar el bloque de codigo si da un error, pero no sirve para el asincronismo y el errorFirst NO SIRVE
                    return false;
                }
            console.log("toda bien master su dato es: " + dato);
        });
