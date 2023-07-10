//Declaramos e inicializamos unas variables de entorno, sino estan definidas se usasra su valor por defecto que es el lado derecho del operador or
let saludo = process.env.NOMBRE || "Pepe picas"; 
let web = process.env.WEB || "No hay web :/"; 

console.log(`Hola ${saludo}`);  
console.log(`Mi web es:  ${web}`);  
//Las variables de entorno se ponen en mayusculas y si es una palabra compuesta van con guion bajo ejemplos: NOMBRE, MI_NOMBRE.