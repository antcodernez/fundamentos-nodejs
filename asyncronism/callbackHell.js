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
function hablar(callbackHablar)
    {
        setTimeout(() => {
            console.log("bla bla bla!...");
            callbackHablar();
        }, 2000);
    }
//recursividad: llamar a la misma función con información ligeramente distinta
function conversation(nombre, veces, callback) //Parametros de mi funcion
    {
        if(veces > 0)
            {
                hablar(() => {
                    conversation(nombre, --veces, callback);
                });     
            }
        else
            {
                bye(nombre, callback);
            }
    }

// --
// Codigo mas perro usando recursividad
console.log("Iniciando proceso");
hola("Jesus", () =>
    {
        conversation("Jesus", 6, () => console.log("proceso terminado"));
    });


//Callback hell
//Se comento el código para refactorizar
// hola("Jesus", () => 
//     {
//         hablar(() => {
//             hablar(() =>
//                 {
//                     hablar(() => {
//                         bye("Jesus", () => {
//                                 setTimeout(() => console.log("Termiando proceso"), 1000);
//                         });
//                     });
//                 });
//         });
//     });  