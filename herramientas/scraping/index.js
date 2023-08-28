const puppeter = require("puppeteer");

//Creamos una funcion autoejecutada
//Para hacer una funcion autoejecutada ponemos un parentesis en la funcion para hacerla una expresion y luego al lado ponemos un pararenstesis para ejecutarse 


        (async () => {
            //Mi codigo
            console.log("Lanzamos navegador");
            const browser = await puppeter.launch({ headless: false});
            const page = await browser.newPage();
            await page.goto("https://www.youtube.com/watch?v=IUXNiDJJ_9s");
            
            let titulo1 = await page.evaluate(() => {
                const h1 = document.getElementsByTagNameNS("h1");
                return h1.innerHTML
            })
            console.log(titulo1);   
            console.log("cerramos navegador");
            browser.close();
            console.log("Navegador cerrado");
        })();