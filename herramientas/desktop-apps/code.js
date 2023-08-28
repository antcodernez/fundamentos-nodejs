const {app, BrowserWindow} = require("electron"); // Vamos a desestructurar el objeto porque es muy grande

let mainWindow;

app.on("ready", createWindow);

function createWindow()
    {
        mainWindow =  new BrowserWindow({
            width: 400,
            height: 300
        });

        mainWindow.loadFile("index.html"); //Va a cargar el index.html
    }


// La app no se ejecuta con npm, tenemos que crear un script en el package.json asi "start": "electron .",
