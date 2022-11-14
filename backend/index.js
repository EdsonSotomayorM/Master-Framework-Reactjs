'use strict'



const mongoose = require('mongoose');

var app = require('./app');
var port = 3900;

mongoose.Promise = global.Promise;


// colocamos la url de conexión local y el nombre de la base de datos
mongoose.connect('mongodb://127.0.0.1:27017/api_rest_blog', { useNewUrlParser: true})
    .then(() => {
        console.log('La conexion a la base de datos se ha realizado correctamente!!!');  
        
        
        //Crear Servidor y ponerme escuchar peticiones http

        app.listen(port,() => {
            console.log("Servidor correindo en http://127.0.0.1:" + port);
        });
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); // enlaza el track de error a la consola (proceso actual)
db.once('open', () => {
  console.log('connected'); // si esta todo ok, imprime esto
});