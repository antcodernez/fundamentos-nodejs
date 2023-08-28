const gulp = require("gulp");
const server = require("gulp-server-livereload");


//Creamos una tarea a automatizar
//El primer parametro de la tarea, es la asignacion de su nombre
// Despues creamos un script personalizado en el package.json.
gulp.task("build", function(cb) {
    console.log("construyendo el sitio");
    setTimeout(cb, 1200);
}); //Creamos una tarea


//Estamos creando un server


// métodos de gulp como el src que permite dar el inicio de la ruta del lugar dónde se obtiene la información. En este caso es un servidor y empieza por www.
//Luego se concatena con el método pipe() la información que crea el módulo gulp-server-livereload que puede recibir algunas propiedades de configuración como livereload o open 
gulp.task("serve", (cb) => {
    gulp.src("www")
        .pipe(server({
            livereload: false,
            open: true,
        }))
});

//Para ejecutar varias tareas a la vez
gulp.task("default", gulp.series("build", "serve"));
// El nombre default en el primer argumento de la tarea permite que no se deba poner nombre a esta, sino que sea la tarea a ejecutar por defecto.

// Y luego en el package.json deberás poner lo siguiente:
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "gulp",
//   },