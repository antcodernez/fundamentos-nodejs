let buffer = Buffer.alloc(1); //Primer buffer, estoy creando que sea de un solo byte de informacion

let buffer2 = Buffer.alloc(5) // Buffer de 5 bytes, 5 espacios en memoria

let buffer3 = Buffer.from([100,5,8]); //Estoy creando un buffer con un arreglo con 3 datos, en la consola me mostrara <Buffer 64 05 08>
//Cuando en el codigo meti un 100 en el output me salio un 64 porque esta en sistema numerico hexadecimal

let buffer4 = Buffer.from("Hola"); //Retorna un <Buffer 48 6f 6c 61>
//Se debe a que esta en hexadecimal

console.log(buffer);
console.log(buffer2);
console.log(buffer3);
console.log(buffer4.toString()); //Se convierte de hexa a string porque se visualizan en hexa pero usando ASCII se vuelve el primer texto


//Trabajando buffers a posicion

let abc = Buffer.alloc(26);
console.log(abc); //Me muestra mi buffer vacio

// crear un bucle que me recorra todos los espacios de los buffers
for(let i = 0; i < 26; i++)
    {
        abc[i] = i + 97; //Se puso 97 porque el caracter 92 es la letra A, se va rellenar el buffer con el abecedario
    }
console.log(abc); //Me muestra mis numeros en hexadecimal
console.log(abc.toString()); //Me mestra mi caracteres de la a a la z
