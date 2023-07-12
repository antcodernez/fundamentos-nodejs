//Ver documentacion en -------> https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_file_system

//Traemos el modulo file system
const fs = require("fs");
//todo lo hecho con file system se hace de manera asincrona, todos los metodos tienen una alternativa sincrona pero no se recomienda porque voy a bloquear el proceso principal

function read(ruta, callback)
    {
        fs.readFile(ruta, (error, data) => {
            //Archivo leido
            callback(data.toString());
        });
    }

read(__dirname + "/archivo.txt", console.log) //Retorna un buffer, algo muy complejo

function escribir(ruta, contenido, callback)
    {
        fs.writeFile(ruta, contenido , (error, data) =>
            {
                if(error)
                    {
                        console.error(`No he podido escribirlo, el error fue:  ${error}`)
                    }
                else
                    {
                        console.log(`Se ha escrito correctamente :D`);
                    }
            });
    }
escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo perro", console.log);

function borrarArchivo(ruta, callback)
    {
        fs.unlink(ruta, callback);
    }
borrarArchivo(__dirname + "/archivo1.txt", console.log);