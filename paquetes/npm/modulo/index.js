// Traer nuestro modulo
const modulo = require('./modulo');

//ejecutar nuestro modulo
console.log(modulo); //regresa un objeto vacio, aunque tenga una funcion
//Pasa porque no estoy exportando nada en mi archivo llamado modulo
//Porque no hay una interfaz a la cual el index.js se pueda conectar

// Con los cambios en el archivo modulos ahora en lugar de retornar un objeto vacio va a regresar una funcion que e saludar
modulo.saludar();


//Ya va a correr si ejecuto la funcion debido a las lineas de codigo que puse en el archivo modulo.js module.exports = saludar;
//modulo(); Cuando exporto esta linea como codigo se vuelve obsoleta porque ahora el modulo es mas complejo y se esta importando como objeto
 