'use strict'

// Cargar Modulos de Noda para crear el servidor

var express = require('express');
var bodyParser = require('body-parser');


//Ejecutar Express (http)

var app = express();

//Cargar ficheros de rutas

var artile_routers = require('./routes/article');

//Middlewares 

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



//Añadir prefijos a rutas / Cargar rutas

app.use('/api',artile_routers);

//Exportar modulo(Fichero actual)

module.exports = app; 