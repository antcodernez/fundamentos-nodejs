const  sharp = require("sharp");

sharp('./js.png')
    .resize(80)
    .toFile("loba.png");
