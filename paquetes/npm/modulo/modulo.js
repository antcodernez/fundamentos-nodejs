function saludar()
    {
        console.log("Hola perros del mal");   
    }

//Exportamos el modulo

// module.exports = saludar;

//Ahora el modulo se exportara  

// Cuando quiera exportar cosas mas complejas uso un objeto

module.exports = {
    saludar,
    prop1: "Hola que tal"
};
