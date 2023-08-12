const http = require("http"); //Importar el modulo http

http.createServer(router).listen(3000); //Tengo mi servidor escuchando y tengo mi router básico

//crear un servidor basico, para que funcione necesita una funcion con dos parametros que es el request y el response

//Necesitamos un puerto para que mi servidor sea escuchado, arriba estoy diciend0 en .listen(3000) que se escuche en el puerto 3000

function router(req, res) 
    {
        console.log("Nueva petición");
        console.log(req.url);

        //Contesta a la peticion
        // res.write("Hola ya se usar HTTP de NODE.JS");
            
        // res.writeHead("SOy un texto del head, se pueden ver en network en devtools")

        switch(req.url)
            {
                case '/hola':
                        res.write("Hola que tal");
                        res.end();
                break;
                default:
                    res.write("No se que quieres cabron");
                    res.end();
                break;
            } //Primer router para un backend

        //Vamos a crear
        // res.writeHead(201, { "content-Type": "text/plane"});

        // res.end(); //Este codigo termina la peticion
    }

console.log("Escuchando http en el puerto 3000");