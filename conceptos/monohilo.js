console.log("Hola mundo");

let second = 0;
setInterval(() => {
    second += 2;
    console.log(`Hola con un setaInverval() desde el segundo ${second}`)  
}, 2000); 
setTimeout(function() {console.log("Hola despues de 2 segundo")}, 2000);

console.log("Hola final");
