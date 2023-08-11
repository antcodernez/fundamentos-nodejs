const os = require("os");

console.log(os.arch()); //Ver la arquitectura que tengo corriendo en mi maquina, me retorna una arquitectura en x64

console.log(os.platform()); //ver la plataforma en la que estoy, windows, linux etc

console.log(os.cpus().length); //Informacion de las cpus en mi sistema, con punto length me dice cuantos cores hay en mi caso me retorna 12 eso significa que puedo levantar 12 procesos 

// console.log(os.constants); //Vienen todos los errores y las señales del sistema

const size = 1024;
function kb(bytes) {return bytes / size} //Funcion que convierte bits a bytes 
function mb(bytes) {return kb(bytes / size)} //Funcion que convierte bytes a megabytes 
function gb(bytes) {return mb(bytes / size)} //Funcion que convierte megabytes a gigabytes

console.log(os.freemem()); //Puedo ver la memoria del , me los retorna en bytes
console.log(mb(os.freemem())); //megabytes
console.log(gb(os.freemem())); //gigabytes

console.log(os.totalmem());//Cuanta memoria tengo

console.log(os.homedir()); //Acceder al directorio raíz del usuario

console.log(os.tmpdir()); //Acceder a un directorio con archivos temporales y se borraran despues

console.log(os.hostname()); //Acceder al nombre del host de la máquina

console.log(os.networkInterfaces()); //Acceder a mis inferfaces de red que hay activas en mi maquina