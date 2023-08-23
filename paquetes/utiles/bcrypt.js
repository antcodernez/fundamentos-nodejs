const bcrypt = require("bcrypt");

const password = "yoSoySEXY";


//brypt.hash(); Sirve para cifrar la password, tiene 3 parametros (password, numeroDeRandasDeCrearElHash, function() {...})   

bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash); // retorna un hash que me genera para mi password
    console.log(password); //Retorna la contraseña
    bcrypt.compare(password,hash, (err, result) => {
        console.log(result)
    }) //comprobamos que el hash sea igual al password
});

//Siempre retorna un hash totalmente diferente
//Puedo usar callbacks o promesas